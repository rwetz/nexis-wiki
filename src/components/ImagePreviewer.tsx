import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
	/** Optimized image URL (from an Astro `getImage`/import in the wrapper). */
	src: string;
	alt: string;
	/** Optional caption rendered under the thumbnail. */
	caption?: string;
	width?: number;
	height?: number;
}

/**
 * A lightweight lightbox: open a full-screen preview of a screenshot.
 *
 * On a phone, fitting the image to the viewport would be pointless — the
 * thumbnail already spans the full content column, so a "zoomed" copy comes out
 * roughly the same size. Instead, narrow screens get the image at its natural
 * width inside a pannable, pinch-zoomable surface, so the fine detail in a
 * screenshot (file names, terminal output) is actually legible. Wide screens
 * keep the classic fit-to-viewport behaviour.
 *
 * Ships as a React island so the zoom logic only hydrates on pages that
 * actually use a screenshot.
 */
export default function ImagePreviewer({ src, alt, caption, width, height }: Props) {
	const [open, setOpen] = useState(false);
	const [coarse, setCoarse] = useState(false);
	const closeRef = useRef<HTMLButtonElement>(null);
	// Tracks where a pointer went down so panning the image doesn't close the
	// overlay — only a genuine tap (negligible movement) counts as "dismiss".
	const downAt = useRef<{ x: number; y: number } | null>(null);

	// Touch-primary devices get touch wording and the pan/zoom surface.
	useEffect(() => {
		const mq = window.matchMedia('(pointer: coarse)');
		const sync = () => setCoarse(mq.matches);
		sync();
		mq.addEventListener('change', sync);
		return () => mq.removeEventListener('change', sync);
	}, []);

	useEffect(() => {
		if (!open) return;

		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
		};
		document.addEventListener('keydown', onKey);

		// Lock background scroll. `overflow: hidden` on <body> alone is ignored by
		// iOS Safari, which happily scrolls the page behind a fixed overlay, so
		// pin the body in place and restore the exact scroll position on close.
		const { scrollY } = window;
		const body = document.body;
		const prev = {
			overflow: body.style.overflow,
			position: body.style.position,
			top: body.style.top,
			width: body.style.width,
		};
		body.style.overflow = 'hidden';
		body.style.position = 'fixed';
		body.style.top = `-${scrollY}px`;
		body.style.width = '100%';

		closeRef.current?.focus();

		return () => {
			document.removeEventListener('keydown', onKey);
			body.style.overflow = prev.overflow;
			body.style.position = prev.position;
			body.style.top = prev.top;
			body.style.width = prev.width;
			window.scrollTo(0, scrollY);
		};
	}, [open]);

	return (
		<>
			<figure className="nexis-shot">
				<button
					type="button"
					className="nexis-shot__btn"
					onClick={() => setOpen(true)}
					aria-label={`${coarse ? 'Open' : 'Zoom'} image: ${alt}`}
				>
					<img src={src} alt={alt} width={width} height={height} loading="lazy" />
				</button>
				{caption ? <figcaption>{caption}</figcaption> : null}
			</figure>

			{/* Portalled to <body>: the overlay lives inside `.sl-markdown-content`,
			    whose ancestors form a stacking context, so a plain fixed child gets
			    trapped *under* Starlight's fixed header no matter how high its
			    z-index goes — the header would cover the image and swallow taps on
			    the close button. */}
			{open
				? createPortal(
				<div
					className={`nexis-shot__overlay${coarse ? ' is-pannable' : ''}`}
					role="dialog"
					aria-modal="true"
					aria-label={alt}
					onPointerDown={(e) => {
						downAt.current = { x: e.clientX, y: e.clientY };
					}}
					onPointerUp={(e) => {
						const d = downAt.current;
						downAt.current = null;
						if (!d) return;
						const moved = Math.hypot(e.clientX - d.x, e.clientY - d.y);
						if (moved < 10) setOpen(false);
					}}
				>
					<button
						type="button"
						ref={closeRef}
						className="nexis-shot__close"
						onClick={() => setOpen(false)}
						aria-label="Close image preview"
					>
						<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
							<path
								d="M6 6l12 12M18 6L6 18"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</button>

					<div className="nexis-shot__stage">
						<img src={src} alt={alt} />
					</div>

					<span className="nexis-shot__hint">
						{coarse
							? 'Drag to pan · pinch to zoom · tap to close'
							: 'Click anywhere or press Esc to close'}
					</span>
				</div>,
				document.body,
				  )
				: null}

			<style>{`
				.nexis-shot { margin: 1.5rem 0; }
				.nexis-shot__btn {
					display: block; width: 100%; padding: 0; cursor: zoom-in;
					background: none; border: 1px solid var(--sl-color-gray-5);
					border-radius: 12px; overflow: hidden; line-height: 0;
				}
				.nexis-shot__btn img { width: 100%; height: auto; display: block; }
				.nexis-shot figcaption {
					margin-top: 0.5rem; font-size: var(--sl-text-sm);
					color: var(--sl-color-gray-3); text-align: center;
				}

				.nexis-shot__overlay {
					position: fixed; inset: 0; z-index: 999;
					display: flex; flex-direction: column; align-items: center; justify-content: center;
					gap: 1rem; cursor: zoom-out;
					/* Respect the notch / home indicator when the page opts into
					   viewport-fit=cover; env() is 0 otherwise, so this is safe today. */
					padding:
						max(1rem, env(safe-area-inset-top))
						max(1rem, env(safe-area-inset-right))
						max(1rem, env(safe-area-inset-bottom))
						max(1rem, env(safe-area-inset-left));
					background: color-mix(in srgb, var(--sl-color-black) 88%, transparent);
					backdrop-filter: blur(4px);
					/* Stop scroll chaining to the page behind on iOS/Android. */
					overscroll-behavior: contain;
				}
				.nexis-shot__stage {
					display: flex; align-items: center; justify-content: center;
					min-width: 0; min-height: 0;
				}
				.nexis-shot__overlay img {
					max-width: 100%; max-height: 100%;
					border-radius: 12px; box-shadow: 0 24px 60px rgba(0,0,0,0.5);
				}

				/* Touch: let the image exceed the viewport so it can be panned and
				   pinch-zoomed at full resolution instead of being re-fit to a size
				   the thumbnail already matched. */
				.nexis-shot__overlay.is-pannable { justify-content: flex-start; }
				.nexis-shot__overlay.is-pannable .nexis-shot__stage {
					flex: 1; width: 100%; overflow: auto;
					overscroll-behavior: contain;
					-webkit-overflow-scrolling: touch;
					touch-action: pan-x pan-y pinch-zoom;
					/* Open anchored to the image's top-left rather than its middle:
					   centring a 1280px-wide screenshot on a ~390px screen lands the
					   user in a featureless area with no clue which way to drag.
					   The safe keyword keeps the start edge reachable on overflow. */
					justify-content: safe flex-start;
					align-items: safe center;
				}
				.nexis-shot__overlay.is-pannable img {
					max-width: none; max-height: none;
					width: auto; height: auto; margin: 0;
				}

				.nexis-shot__close {
					position: absolute; top: max(0.5rem, env(safe-area-inset-top));
					right: max(0.5rem, env(safe-area-inset-right));
					z-index: 1;
					display: flex; align-items: center; justify-content: center;
					/* Comfortably past the 44px touch-target guideline. */
					width: 44px; height: 44px; padding: 0;
					border: 1px solid var(--sl-color-gray-5); border-radius: 999px;
					background: color-mix(in srgb, var(--sl-color-black) 70%, transparent);
					color: var(--sl-color-white); cursor: pointer;
				}
				.nexis-shot__close svg { width: 22px; height: 22px; fill: none; }

				.nexis-shot__hint {
					color: var(--sl-color-gray-2); font-size: var(--sl-text-sm);
					text-align: center; flex: none;
				}
			`}</style>
		</>
	);
}
