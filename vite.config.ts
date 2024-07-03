import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [sveltekit(), SvelteKitPWA({
		manifest: {
			name: "demo",
			start_url: ".",
			theme_color: "#ffda0a",
			display: "standalone",
			icons: [
				{
					src: "pwa-144x144.png",
					sizes: "144x144"
				},
				{
					src: "pwa-192x192.png",
					sizes: "192x192",
					type: "square"
				}
			],
			screenshots: [
				{
					src: "screenshot.webp",
					form_factor: "wide",
					sizes: "1280x720"
				},
				{
					src: "screenshot.webp",
					sizes: "924x509"
				}
			]
		}
	})]
});