import { useEffect, useState } from 'react';

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
 * A lightweight lightbox: click the thumbnail to open a full-screen preview,
 * click anywhere (or press Escape) to close. Ships as a React island so the
 * zoom logic only hydrates on pages that actually use a screenshot.
 */
export default function ImagePreviewer({ src, alt, caption, width, height }: Props) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
		};
		document.addEventListener('keydown', onKey);
		// Prevent background scroll while the overlay is open.
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = prev;
		};
	}, [open]);

	return (
		<>
			<figure className="nexis-shot">
				<button
					type="button"
					className="nexis-shot__btn"
					onClick={() => setOpen(true)}
					aria-label={`Zoom image: ${alt}`}
				>
					<img src={src} alt={alt} width={width} height={height} loading="lazy" />
				</button>
				{caption ? <figcaption>{caption}</figcaption> : null}
			</figure>

			{open ? (
				<div
					className="nexis-shot__overlay"
					role="dialog"
					aria-modal="true"
					aria-label={alt}
					onClick={() => setOpen(false)}
				>
					<img src={src} alt={alt} />
					<span className="nexis-shot__hint">Click anywhere or press Esc to close</span>
				</div>
			) : null}

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
					gap: 1rem; padding: 2rem; cursor: zoom-out;
					background: color-mix(in srgb, var(--sl-color-black) 88%, transparent);
					backdrop-filter: blur(4px);
				}
				.nexis-shot__overlay img {
					max-width: 95vw; max-height: 85vh; border-radius: 12px;
					box-shadow: 0 24px 60px rgba(0,0,0,0.5);
				}
				.nexis-shot__hint { color: var(--sl-color-gray-2); font-size: var(--sl-text-sm); }
			`}</style>
		</>
	);
}
