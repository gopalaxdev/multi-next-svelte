<script>
	import { URL_NAME } from '$lib/env';
	function handleClick() {
		console.log('dashboard clicked ');
	}
	console.log('URL  NAME SVELTE: ', URL_NAME);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={handleClick}> Svelte Button</button>
