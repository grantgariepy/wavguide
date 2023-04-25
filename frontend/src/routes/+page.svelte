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
<div class="bg-black pb-6 sm:pb-8 lg:pb-24 pt-4 min-h-[200vh]">
	<div class="max-w-screen px-4 md:px-8 mx-auto">
		<section class="  flex flex-col items-center justify-center h-screen w-full">
			<!-- image - start -->
			<!-- <img src="/images/waveform.jpg" alt="" class="z-0 md:w-max md:h-max object-cover absolute" /> -->
			<!-- image - end -->
			<div
				class="max-w-screen md:text-[14rem] text-6xl w-full flex flex-col justify-center items-center"
			>
				<h1 id="logo4" class=" logo absolute top-96  text-blue-500 font-bold ">WAVGUIDE</h1>
				<h1 id="logo2" class="logo absolute top-96 text-yellow-300 font-bold  ">WAVGUIDE</h1>
				<h1 id="logo3" class="logo absolute top-96  text-red-500 font-bold ">WAVGUIDE</h1>
				<h1 id="logo" class="logo absolute top-96 text-white font-bold ">WAVGUIDE</h1>
			</div>

			<!-- overlay - start -->
			<!-- <div class="mix-blend-multiply absolute inset-0 opacity-60" /> -->

			<!-- overlay - end -->
			<!-- <div class="absolute inset-0 h-max">
				<canvas id="canv" class="mix-blend-multiply" />
			</div> -->
			<!-- text start -->
			<div class="sm:max-w-xl flex flex-col items-center pt-24">
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
			</div>
			<!-- text end -->
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
			transform: scale(150%);
		}
	}
	@keyframes slide3 {
		to {
			transform: translateY(-200%);
			transform: scale(125%);
		}
	}
	@keyframes slide4 {
		to {
			transform: translateY(-350%);
			transform: scale(175%);
		}
	}
</style>
