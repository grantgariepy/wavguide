<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

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
		<section class="flex flex-col items-center pt-24 h-screen w-full">
			<!-- image - start -->
			<!-- <img src="/images/waveform.jpg" alt="" class="z-0 md:w-max md:h-max object-cover absolute" /> -->
			<!-- image - end -->

			<div
				class="z-10 bg-black sticky top-0 max-w-2xl lg:text-[14rem] text-6xl w-full  flex flex-col justify-center items-center"
			>
				<h1 id="logo4" class=" logo absolute top-0  text-blue-500 font-bold ">WAVGUIDE</h1>
				<h1 id="logo3" class="logo absolute top-0   text-red-500 font-bold ">WAVGUIDE</h1>
				<h1 id="logo2" class="logo absolute top-0  text-yellow-300 font-bold  ">WAVGUIDE</h1>
				<h1 id="logo" class="logo absolute top-0  text-white font-bold ">WAVGUIDE</h1>
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
		</section>
		<section class="z-30 flex flex-col items-center pt-24 md:pt-96 h-screen w-full bg-black">
			<div class="text-white z-30 bg-black">test</div>
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
