<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log(data.results.)
	let { items } = data.results.albums;

	$: ({ items } = data.results.albums);
	// console.log(items);

	$: albums = items.map((album: any) => ({
		artist: album.artists.map((_artist: any) => _artist.name).join(', '),
		songUrl: album.external_urls.spotify,
		title: album.name,
		coverImage: album.images[2].url,
		id: album.id,
		totalTracks: album.total_tracks,
		artistId: album.artists[0].id
	}));
	// console.log(items.artists);
</script>

<div class="mx-auto max-w-7xl sm:px-6 h-full px-2">
	<div class="flex py-4">
		<p class="text-white font-bold text-xl" id="logo">Search Results</p>
	</div>
	<ul class="list-none">
		<!-- {#each albums as album}
			<p>{album.title}</p>
		{/each} -->
		{#each albums as album}
			<li class="flex flex-row justify-center gap-4 p-4 ">
				<img src={album.coverImage} alt="{album.title}-{album.artist}" />
				<div class="flex items-center justify-center">
					<p class="text-2xl text-white ">
						{album.title} -
						<a
							href="/artist/{album.artist.toLowerCase().split(' ').join('-')}"
							class="hover:text-info"
						>
							{album.artist}
						</a>
					</p>
				</div>
				<a href="/album/{album.id}" class="btn btn-success pull-right">Go to album</a>
				<a href={album.songUrl} class="btn btn-info pull-right">Listen on Spotify</a>
			</li>
		{/each}
	</ul>
</div>
