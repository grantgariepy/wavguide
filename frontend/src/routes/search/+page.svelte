<script lang="ts">
	export let data;
	const { items } = data;
	// console.log(items);
	const tracks = items.slice(0, 10).map((track: any) => ({
		artist: track.artists.map((_artist: any) => _artist.name).join(', '),
		songUrl: track.external_urls.spotify,
		title: track.name,
		coverImage: track.album.images[2].url
	}));
</script>

<div class="mx-auto max-w-7xl sm:px-6 h-full px-2">
	<div class="flex py-4">
		<p class="text-white font-bold text-xl" id="logo">Search Results</p>
	</div>
	<ul class="list-none">
		{#each tracks as track}
			<li class="flex flex-row justify-between gap-4 p-4 hover:bg-secondary hover:cursor-pointer">
				<img src={track.coverImage} alt="{track.title}-{track.artist}" />
				<div class="flex items-center justify-center">
					<p class="text-2xl text-white ">
						{track.title} - {track.artist}
					</p>
				</div>
				<a href={track.songUrl} class="btn btn-info pull-right">Listen on Spotify</a>
			</li>
		{/each}
	</ul>
</div>
