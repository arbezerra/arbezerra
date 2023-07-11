<script>
	import '../app.css';
	import Footer from '../layout/Footer.svelte';
	import Header from '../layout/Header.svelte';
</script>

<Header />
<slot />
<Footer />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
