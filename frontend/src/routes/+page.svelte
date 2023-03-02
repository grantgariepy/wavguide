<script lang="ts">
	import type { PageData } from './$types';
	export let data;

	import { onMount } from 'svelte';
	// from  https://codepen.io/tmrDevelops/pen/vOPZBv

	onMount(() => {
		let canvas: HTMLCanvasElement;
		let context: CanvasRenderingContext2D;

		function col(x: number, y: number, r: number, g: number, b: number): void {
			context.fillStyle = `rgb(${r},${g},${b})`;
			context.fillRect(x, y, 1, 1);
		}

		function R(x: number, y: number, t: number): number {
			return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
		}

		function G(x: number, y: number, t: number): number {
			return Math.floor(
				192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
			);
		}

		function B(x: number, y: number, t: number): number {
			return Math.floor(
				192 +
					64 *
						Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)
			);
		}

		let t = 0;

		function run(): void {
			for (let x = 0; x <= 35; x++) {
				for (let y = 0; y <= 35; y++) {
					col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
				}
			}
			t += 0.02;
			window.requestAnimationFrame(run);
		}

		function setupCanvas(): void {
			canvas = document.getElementById('canv') as HTMLCanvasElement;
			context = canvas.getContext('2d') as CanvasRenderingContext2D;
			run();
		}
		setupCanvas();
	});
</script>

<!-- hero -->
<div class="bg-black pb-6 sm:pb-8 lg:pb-12 pt-4">
	<div class="max-w-screen-2xl px-4 md:px-8 mx-auto max-h-fit">
		<section
			class=" flex justify-center items-center flex-1 shrink-0 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48"
		>
			<!-- image - start -->
			<img src="/images/waveform.jpg" alt="" class="z-0 md:w-max md:h-max object-cover absolute" />
			<!-- image - end -->

			<!-- overlay - start -->
			<!-- <div
				class="mix-blend-multiply absolute inset-0 opacity-60"
			/> -->

			<!-- overlay - end -->
			<div class="absolute inset-0 h-max">
				<canvas id="canv" class="mix-blend-multiply" />
			</div>
			<!-- text start -->
			<div class="sm:max-w-xl flex flex-col items-center relative p-4">
				<h1
					id="logo"
					class="pb-72 text-white text-4xl sm:text-5xl md:text-8xl font-bold text-center mb-8 md:mb-12"
				>
					WAVGUIDE
				</h1>

				<div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
					{#if !data.user}
						<a href="/register" class="btn btn-success text-white">Sign Up</a>
						<a href="/" class="btn btn-info text-white">Sign In</a>
					{:else}
						<a href="/" class="btn btn-warning text-white">Sign Out</a>
					{/if}
				</div>
			</div>
			<!-- text end -->
		</section>
	</div>
</div>
