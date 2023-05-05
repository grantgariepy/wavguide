<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data.results.items);
	const reviews = data.results.items;
</script>

{#each reviews as review}
	<div class="p-4">
		{review.albumArtist}
	</div>
{/each}
