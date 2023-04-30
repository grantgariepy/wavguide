<script lang="ts">
	import { Modal, Input } from '$lib/components';
	import type { PageData } from './$types';
	import { enhance, applyAction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	export let data: PageData;
	export let form: any;

	// console.log(data.results);

	let results = data.results;

	let items = data.results.tracks.items;

	let addReviewModalOpen: boolean;
	let loading: boolean;
	$: addReviewModalOpen = false;
	$: loading = false;

	const submitAddReview = () => {
		loading = true;
		addReviewModalOpen = true;
		return async ({ result }: { result: any }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					addReviewModalOpen = false;
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};

	console.log(results);
	// console.log(items.artists);
</script>

<Modal label="add-review" checked={addReviewModalOpen}>
	<span slot="trigger" class="btn btn-info">Write Review</span>
	<h3 slot="heading">Write a Review</h3>
	<form action="?/create" method="POST" class="space-y-2" use:enhance={submitAddReview}>
		<Input
			hidden={true}
			id="albumId"
			type="text"
			label=""
			required={true}
			disabled={loading}
			errors={form?.errors.albumId}
			value={results.id}
		/>
		<Input
			hidden={true}
			id="artistId"
			type="text"
			label=""
			required={true}
			disabled={loading}
			errors={form?.errors.artistId}
			value={results.artists[0].id}
		/>
		<Input
			hidden={true}
			id="albumName"
			type="text"
			label=""
			required={true}
			disabled={loading}
			errors={form?.errors.albumName}
			value={results.name}
		/>
		<Input
			hidden={true}
			id="albumArtist"
			type="text"
			label=""
			required={true}
			disabled={loading}
			errors={form?.errors.albumArtist}
			value={results.artists[0].name}
		/>
		<Input
			hidden={true}
			id="albumCover"
			type="text"
			label=""
			required={true}
			disabled={loading}
			errors={form?.errors.albumCover}
			value={results.images[0].url}
		/>
		<Input
			hidden={true}
			id="releaseDate"
			type="text"
			label=""
			required={true}
			disabled={loading}
			errors={form?.errors.releaseDate}
			value={results.release_date}
		/>
		<div class="form-control ">
			<label for="albumInfo" class="-pt-24 flex flex-row items-center gap-2">
				<img src={results.images[2].url} alt="" />
				<span class="label-text font-bold">{results.name}</span>
				<span class="label-text ">by</span>
				<span class="label-text font-bold">{results.artists[0].name}</span>
			</label>
			<label for="albumInfo" class="flex flex-row items-center gap-2">
				<span class="label-text font-bold">{results.release_date}</span>
			</label>
		</div>
		<Input
			hidden={false}
			id="reviewTitle"
			type="text"
			label="Review Title"
			required={true}
			disabled={loading}
			errors={form?.errors.reviewTitle}
			value={form?.data?.reviewTitle}
		/>
		<div class="form-control w-full max-w-lg">
			<label for="reviewTest" class="label fot-medium pb-1">
				<span class="label-text font-semibold">Review</span>
			</label>
			<textarea
				class="textarea textarea-bordered h-24 resize-none"
				name="reviewText"
				id="reviewText"
				cols="30"
				rows="10"
			/>
		</div>
		<div class="form-control w-full max-w-lg">
			<label for="reviewRating" class="label fot-medium pb-1">
				<span class="label-text font-semibold">Rating</span>
			</label>
			<select name="reviewRating" id="reviewRating" class="select select-bordered w-full">
				<option value="" />
				<option value="0">0</option>
				<option value="0.5">0.5</option>
				<option value="1">1</option>
				<option value="1.5">1.5</option>
				<option value="2.5">2</option>
				<option value="3">3</option>
				<option value="3.5">3.5</option>
				<option value="4">4</option>
				<option value="4.5">4.5</option>
				<option value="5">5</option>
			</select>
		</div>

		<button type="submit" class="btn btn-info w-full" disabled={loading}>Submit Review</button>
	</form>
</Modal>
<div class="mx-auto max-w-7xl sm:px-6 h-full px-2 pt-20">
	<div class="flex flex-row gap-7">
		<img src={results.images[1].url} alt="" class="sticky top-3 w-80 h-80" />
		<div class="flex py-4 ">
			<div class="flex flex-col">
				<p class="text-white font-bold text-xl" id="logo">
					<a
						href="/artist/{results.artists[0].name.toLowerCase().split(' ').join('-')}"
						class="hover:text-info"
					>
						{results.artists[0].name}
					</a>
					- {results.name} - {results.release_date}
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
