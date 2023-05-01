<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let searchTerm: string = '';
	import { onMount } from 'svelte';
	// from  https://codepen.io/tmrDevelops/pen/vOPZBv
	onMount(() => {
		window.addEventListener(
			'scroll',
			() => {
				document.body.style.setProperty(
					'--scroll',
					`${window.pageYOffset / (document.body.offsetHeight - window.innerHeight)}`
				);
			},
			false
		);
	});
	let items = data.reviews;

	console.log(items);

	const reviews = items.map((review: any) => ({
		albumArtist: review.albumArtist,
		albumCover: review.albumCover,
		albumId: review.albumId,
		albumName: review.albumName,
		artistId: review.artistId,
		dateCreated: new Date(review.created),
		reviewId: review.id,
		reviewRating: review.rating,
		reviewText: review.reviewText,
		username: review.expand.user.username
	}));
</script>

<!-- hero -->
<div class="bg-black min-h-screen">
	<div class="max-w-screen px-4 md:px-8 mx-auto">
		<section class="flex flex-col gap-12 items-center pt-12 h-screen w-full">
			<!-- image - start -->
			<!-- <img src="/images/waveform.jpg" alt="" class="z-0 md:w-max md:h-max object-cover absolute" /> -->
			<!-- image - end -->

			<div
				class="z-10 bg-black sticky top-0  lg:text-[14rem] text-6xl w-screen h-max  flex flex-col justify-center items-center"
			>
				<h1 id="logo4" class="bg-black px-4 logo absolute top-0  text-blue-500 font-bold ">
					WAVGUIDE
				</h1>
				<h1
					id="logo3"
					class="bg-black md:bg-transparent px-4 logo absolute top-0   text-red-500 font-bold "
				>
					WAVGUIDE
				</h1>
				<h1
					id="logo2"
					class="bg-black md:bg-transparent px-4 logo absolute top-0  text-yellow-300 font-bold  "
				>
					WAVGUIDE
				</h1>
				<h1
					id="logo"
					class="bg-black md:bg-transparent px-4  logo absolute top-0  text-white font-bold "
				>
					WAVGUIDE
				</h1>
			</div>
		</section>
		<section class="flex flex-col items-center  h-screen w-full bg-black">
			<div class="bg-base py-6 sm:py-8 lg:py-12">
				<div class="max-w-screen-xl px-4 md:px-8 mx-auto">
					<!-- text - start -->
					<div class="mb-10 md:mb-16">
						<h2 class="text-zinc-100 text-2xl lg:text-3xl font-bold text-center mb-2 md:mb-4">
							Recent Reviews
						</h2>
					</div>
					<!-- text - end -->

					<div class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
						<!-- article - start -->
						{#each reviews as review}
							<div class="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
								<a
									href="/"
									class="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden  shadow-lg relative"
								>
									<img
										src={review.albumCover}
										loading="lazy"
										alt="by Minh Pham"
										class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
									/>
								</a>

								<div class="flex flex-col gap-2">
									<span class="text-gray-400 text-sm"
										>{review.dateCreated.toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'short',
											day: '2-digit'
										})}</span
									>

									<h2 class="text-zinc-300 text-xl font-bold">
										<a
											href="/"
											class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
											>{review.albumName} - {review.albumArtist}</a
										>
									</h2>

									<p class="text-gray-500">
										{review.reviewText}
									</p>

									<div>
										<a
											href="/"
											class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
											>Read full review</a
										>
									</div>
								</div>
							</div>
							<!-- article - end -->
						{/each}
					</div>
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	#logo {
		animation: slide 1s linear;
		animation-play-state: paused;
		animation-delay: calc(var(--scroll) * -1s);

		animation-iteration-count: 1;
		animation-fill-mode: both;
	}
	#logo2 {
		animation: slide2 1s linear;
		animation-play-state: paused;
		animation-delay: calc(var(--scroll) * -1s);

		animation-iteration-count: 1;
		animation-fill-mode: both;
	}
	#logo3 {
		animation: slide3 1s linear;
		animation-play-state: paused;
		animation-delay: calc(var(--scroll) * -1s);

		animation-iteration-count: 1;
		animation-fill-mode: both;
	}
	#logo4 {
		animation: slide4 1s linear;
		animation-play-state: paused;
		animation-delay: calc(var(--scroll) * -1s);

		animation-iteration-count: 1;
		animation-fill-mode: both;
	}

	@keyframes slide2 {
		to {
			transform: translateY(-100%);
			transform: scale(1.25);
		}
	}
	@keyframes slide3 {
		to {
			transform: translateY(-200%);
			transform: scale(1.5);
		}
	}
	@keyframes slide4 {
		to {
			transform: translateY(-350%);
			transform: scale(1.75);
		}
	}
	@media only screen and (max-width: 600px) {
		@keyframes slide2 {
			to {
				transform: translateY(20px);
			}
		}
		@keyframes slide3 {
			to {
				transform: translateY(40px);
			}
		}
		@keyframes slide4 {
			to {
				transform: translateY(60px);
			}
		}
	}
</style>
