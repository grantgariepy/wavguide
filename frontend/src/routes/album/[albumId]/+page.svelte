<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data.results);

	let results = data.results;

	let items = data.results.tracks.items;

	// console.log(results);
	// console.log(items.artists);
</script>

<div class="mx-auto max-w-7xl sm:px-6 h-full px-2 pt-20">
	<div class="flex flex-row gap-7">
		<img src={results.images[1].url} alt="" class="w-80 h-80" />
		<div class="flex py-4 ">
			<div class="flex flex-col">
				<p class="text-white font-bold text-xl" id="logo">
					<a
						href="/artist/{results.artists[0].name.toLowerCase().split(' ').join('-')}"
						class="hover:text-info"
					>
						{results.artists[0].name}
					</a>
					- {results.name}
				</p>
				<ol class="list-decimal">
					{#each items as item}
						<li class="text-white">
							{item.name} - {Math.floor((item.duration_ms / 60 / 1000) % 60)}:{Math.floor(
								item.duration_ms / 1000
							) % 60}
						</li>
					{/each}
				</ol>
			</div>
		</div>
	</div>
</div>
