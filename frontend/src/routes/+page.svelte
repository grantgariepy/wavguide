<script lang="ts">
	// import type { PageData } from './$types';
	// export let data: PageData;
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

			<!-- overlay - start -->
			<!-- <div class="mix-blend-multiply absolute inset-0 opacity-60" /> -->

			<!-- overlay - end -->
			<!-- <div class="absolute inset-0 h-max">
				<canvas id="canv" class="mix-blend-multiply" />
			</div> -->
			<!-- text start -->
			<!-- <div class="sm:max-w-xl flex flex-col items-center ">
				<div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
					{#if !data.user}
						<a href="/register" class="btn bg-yellow-300 hover:bg-yellow-500 text-white">Sign Up</a>
						<a href="/login" class="btn bg-blue-500 hover:bg-blue-700 text-white">Log In</a>
					{:else}
						<form action="/logout" method="POST">
							<button class="btn bg-red-500 hover:bg-red-700 text-white">Sign Out</button>
						</form>
					{/if}
				</div>
			</div> -->
			<!-- text end -->
			<div class="sticky md:top-18 top-12">
				<!-- <form action={`/search/${searchTerm.split(' ').join('+')}`}>
					<div class="form-control md:pt-56 pt-12 md:top-18 top-12 w-96">
						<div class=" flex flex-row gap-0">
							<input
								bind:value={searchTerm}
								type="text"
								class="w-full bg-white pl-2 text-base font-semibold outline-0 rounded-l-full"
								placeholder="Search"
								id=""
							/>
							<button
								class="flex w-10 items-center justify-center  rounded-r-full border-r border-red-500 bg-red-500 p-5"
							>
								<svg
									viewBox="0 0 20 20"
									aria-hidden="true"
									class="pointer-events-none absolute w-5 fill-white transition"
								>
									<path
										d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</form> -->
			</div>
		</section>
		<section class="flex flex-col items-center  h-screen w-full bg-black">
			<div class="text-white bg-black">test</div>
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
