<script lang="ts">
	import type { PageData } from '../[artistName]/$types';

	export let data: PageData;

	// console.log(data.artist);
	// console.log(data.albums);

	let artist = data.artist;

	let items = data.albums.items;
	// console.log(items);

	$: albums = items.map((album: any) => ({
		artist: album.artists.map((_artist: any) => _artist.name).join(', '),
		songUrl: album.external_urls.spotify,
		title: album.name,
		coverImage: album.images[1].url,
		id: album.id,
		totalTracks: album.total_tracks,
		artistId: album.artists[0].id
	}));

	// console.log(results);
	// console.log(items);
</script>

<div class="mx-auto max-w-7xl sm:px-6 h-full px-2">
	<div class="flex flex-row gap-7">
		<div class="flex flex-col ">
			<div class="pt-3 sticky top-0">
				<img src={artist.images[1].url} alt="" class="" />
				<p class="text-white font-bold text-3xl" id="logo">
					{artist.name}
				</p>
				<p class="text-white">Followers: {artist.followers.total}</p>
				<p class="text-white">Genres</p>
				<ul class="list-disc pl-5">
					{#each artist.genres as genre}
						<li class="text-white">
							{genre}
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="flex py-4 ">
			<div class="flex flex-col">
				<div class="grid grid-cols-4 gap-12">
					{#each albums as album}
						<div class="flex flex-col gap-2">
							<a href="/album/{album.id}">
								<img src={album.coverImage} alt="" />
								<p class="text-white">{album.title}</p>
								<p class="text-zinc-500">{album.totalTracks} Tracks</p>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
