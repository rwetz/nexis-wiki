// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import starlightKbd from 'starlight-kbd';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.nexisdev.org',

	integrations: [
		starlight({
			title: 'Nexis Wiki',
			description:
				'Documentation for Nexis — the open-source, AI-native terminal and developer environment.',
			logo: {
				src: './src/assets/nexis-logo.png',
				alt: 'Nexis',
			},
			favicon: '/favicon.png',
			social: [
				{ icon: 'github', label: 'Nexis on GitHub', href: 'https://github.com/rwetz/Nexis' },
			],
			// "Edit this page" points at the wiki repo.
			editLink: {
				baseUrl: 'https://github.com/rwetz/nexis-wiki/edit/main/',
			},
			// English source, i18n-ready. Add locales here to translate later;
			// Lunaria (lunaria.config.json) tracks how fresh each translation is.
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
			},
			customCss: ['./src/styles/global.css'],
			plugins: [
				// Renders <Kbd> shortcuts per-OS with an automatic detector + picker.
				starlightKbd({
					types: [
						{ id: 'linux', label: 'Linux', default: true, detector: 'linux' },
						{ id: 'mac', label: 'macOS', detector: 'apple' },
						{ id: 'windows', label: 'Windows', detector: 'windows' },
					],
				}),
			],
			sidebar: [
				// Cross-link back to the marketing site (nexisdev.org).
				{ label: '← Back to nexisdev.org', link: 'https://nexisdev.org' },
				{
					label: 'Basics',
					items: [
						{ label: 'What is Nexis?', slug: 'basics/what-is-nexis' },
						{ label: 'Quick start', slug: 'basics/quick-start' },
						{ label: 'Philosophy', slug: 'basics/philosophy' },
					],
				},
				{
					label: 'Installation',
					items: [
						{ label: 'Overview', slug: 'installation' },
						{ label: 'Linux', slug: 'installation/linux' },
						{ label: 'macOS', slug: 'installation/macos' },
						{ label: 'Windows & WSL', slug: 'installation/windows' },
					],
				},
				{
					label: 'Features',
					items: [{ autogenerate: { directory: 'features' } }],
				},
				{
					label: 'Configuration',
					items: [{ autogenerate: { directory: 'configuration' } }],
				},
				{
					label: 'ML Suite',
					items: [
						{ label: 'Overview', slug: 'ml-suite' },
						{ label: 'nexis-ml (Python)', slug: 'ml-suite/nexis-ml' },
						{ label: 'nexis-ml-rs (Rust)', slug: 'ml-suite/nexis-ml-rs' },
					],
				},
				{
					label: 'Troubleshooting',
					items: [{ autogenerate: { directory: 'troubleshooting' } }],
				},
				{
					label: 'Reference',
					items: [{ label: 'FAQ', slug: 'faq' }],
				},
			],
		}),
		react(),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
