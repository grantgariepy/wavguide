<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log(data.results.)
	let { items } = data.results.albums;

	$: ({ items } = data.results.albums);
	console.log(items);

	$: albums = items.map((album: any) => ({
		artist: album.artists[0].name,
		songUrl: album.external_urls.spotify,
		title: album.name,
		coverImage: album.images[1].url,
		id: album.id,
		totalTracks: album.total_tracks,
		artistId: album.artists[0].id,
		releaseYear: album.release_date.split('-')[0]
	}));
	// console.log(items.artists);
</script>

<div class="bg-black py-6 sm:py-8 lg:py-12">
	<div class="mx-auto max-w-screen-md px-4 md:px-8">
		<div class="flex border-b">
			<p class="logo text-white font-bold text-xl " id="logo">Search Results</p>
		</div>
		<div
			class="grid gap-8 sm:grid-cols-1 sm:gap-12 lg:grid-cols-1 xl:grid-cols-1 xl:gap-8 divide-y"
		>
			<!-- article - start -->
			{#each albums as album}
				<div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6 pt-5">
					<a
						href="/album/{album.id}"
						class="group relative block h-48 w-full shrink-0 self-start overflow-hidden  bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-36 lg:w-36"
					>
						<img
							src={album.coverImage}
							alt="{album.title}-{album.artist}"
							loading="lazy"
							class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 "
						/>
					</a>

					<div class="flex flex-col gap-2">
						<h2 class="text-xl font-bold text-zinc-200">
							<a
								href="/album/{album.id}"
								class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
								>{album.title}
							</a><span class="font-thin"> ({album.releaseYear})</span>
						</h2>

						<p class="text-zinc-200 ">
							<span class="font-thin">by</span>
							<a
								class="hover:text-indigo-500 active:text-indigo-600"
								href="/artist/{album.artist.toLowerCase().split(' ').join('-')}"
							>
								{album.artist}
							</a>
						</p>
						<div class="rating rating-half">
							<input type="radio" name="rating-1" class="bg-zinc-200 mask mask-star  mask-half-1" />
							<input type="radio" name="rating-1" class="bg-zinc-200 mask mask-star  mask-half-2" />
							<input
								type="radio"
								name="rating-1"
								class="bg-zinc-200 mask mask-star  mask-half-1"
								checked
							/>
							<input type="radio" name="rating-1" class="bg-zinc-200 mask mask-star  mask-half-2" />
							<input type="radio" name="rating-1" class="bg-zinc-200 mask mask-star  mask-half-1" />
							<input
								type="radio"
								name="rating-1"
								class="bg-zinc-200 mask mask-star mask-half-2"
								checked
							/>
							<input type="radio" name="rating-1" class="bg-zinc-200 mask mask-star  mask-half-1" />
							<input type="radio" name="rating-1" class="bg-zinc-200 mask mask-star  mask-half-2" />
							<input type="radio" name="rating-1" class="bg-zinc-200 mask mask-star  mask-half-1" />
							<input type="radio" name="rating-1" class="bg-zinc-200 mask mask-star  mask-half-2" />
						</div>
					</div>
				</div>
				<!-- article - end -->
			{/each}
		</div>
	</div>
</div>
