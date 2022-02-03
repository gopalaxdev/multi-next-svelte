import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

console.log('URL NAME SVELTE CONFIG:', process.env.VITE_URL_NAME);
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		paths: {
			assets: 'https://svelte-next-dashboard.vercel.app'
		}
	}
};

export default config;
