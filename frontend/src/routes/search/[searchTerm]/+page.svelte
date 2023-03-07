<script lang="ts">
	export let data: any;

	// console.log(data);

	const { items } = data;
	// $: results = {items}
	const albums = items.slice(0, 10).map((album: any) => ({
		artist: album.artists.map((_artist: any) => _artist.name).join(', '),
		songUrl: album.external_urls.spotify,
		title: album.name,
		coverImage: album.images[2].url
	}));
	// console.log(items);
</script>

<div class="mx-auto max-w-7xl sm:px-6 h-full px-2">
	<div class="flex py-4">
		<p class="text-white font-bold text-xl" id="logo">Search Results</p>
	</div>
	<ul class="list-none">
		{#key albums.title}
			{#each albums as album}
				<li class="flex flex-row justify-between gap-4 p-4 hover:bg-secondary hover:cursor-pointer">
					<img src={album.coverImage} alt="{album.title}-{album.artist}" />
					<div class="flex items-center justify-center">
						<p class="text-2xl text-white ">
							{album.title} - {album.artist}
						</p>
					</div>
					<a href={album.songUrl} class="btn btn-info pull-right">Listen on Spotify</a>
				</li>
			{/each}
		{/key}
	</ul>
</div>
