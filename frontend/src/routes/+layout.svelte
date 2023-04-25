<script>
	import '../app.css';
	import Footer from '../lib/components/Footer.svelte';
	import Navbar from '../lib/components/Navbar.svelte';
	export let data;
</script>

<Navbar {data} />
<div class="bg-primary">
	<slot />
</div>
<Footer />
