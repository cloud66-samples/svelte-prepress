import adapter from '@sveltejs/adapter-static';
import { time_ranges_to_array } from 'svelte/internal';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
		}
	}
};

export default config;
