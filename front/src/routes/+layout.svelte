<script>
	import '../app.css';
	import Footer from '../layout/Footer.svelte';
	import Header from '../layout/Header.svelte';
</script>

<Header />
<main class="container mx-auto py-12 px-6 lg:py-16 lg:px-12">
	<slot />
</main>
<Footer />
