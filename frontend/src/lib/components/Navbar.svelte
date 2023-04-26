<script lang="ts">
	let searchTerm: string = '';
	export let data: any;
	// console.log(data);
	if (data.user == undefined) {
		console.log('not logged in');
	} else {
		console.log('logged in');
	}
</script>

<div class="navbar bg-black  z-20">
	<div class="navbar-start">
		<a class="absolute left-4 text-3xl logo text-white" id="nav-logo" href="/"> WAVGUIDE </a>
	</div>
	<div class="navbar-center">
		<div class="form-control hidden lg:flex min-w-max ">
			<div class="input-group">
				<form action={`/search/${searchTerm.split(' ').join('+')}`}>
					<div class="form-control   w-96">
						<div class=" flex flex-row gap-0 ">
							<input
								bind:value={searchTerm}
								type="text"
								class="w-full placeholder-zinc-600 bg-zinc-900 pl-2 text-white font-bold outline-0 rounded-l-full"
								placeholder="Search"
								id=""
							/>
							<button
								class="flex w-10 items-center justify-center  rounded-r-full border-r border-zinc-800 bg-zinc-900 p-5"
							>
								<svg
									viewBox="0 0 20 20"
									aria-hidden="true"
									class="pointer-events-none absolute w-5 fill-zinc-600 transition"
								>
									<path
										d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="navbar-end">
		<button class="btn btn-ghost lg:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
		</button>
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-zinc-900 w-52 text-zinc-500"
			>
				{#if data.user == undefined}
					<!-- content here -->
					<li><a href="/login">Profile</a></li>
					<li><a href="/login">Sign In</a></li>
				{:else}
					<!-- else content here -->
					<li><a href={`/${data.user.username}`}>Profile</a></li>
					<li><a href="/settings">Settings</a></li>
					<li>
						<form action="/logout" method="POST">
							<button type="submit" class="w-full text-start">Sign Out</button>
						</form>
					</li>
				{/if}
			</ul>
		</div>
		<!-- <button class="btn btn-ghost">
			<div class="indicator">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/></svg
				>
				<span
					class="badge badge-xs badge-primary indicator-item"
				/>
			</div>
		</button> -->
	</div>
</div>

<style>
	#nav-logo:hover {
		animation: shadow-transition 3s infinite;
		text-shadow: 4px 4px #ef4444;
	}

	@keyframes shadow-transition {
		0%,
		100% {
			text-shadow: 4px 4px #ef4444;
		}
		40% {
			text-shadow: 4px 4px #fde047;
		}
		80% {
			text-shadow: 4px 4px #3b82f6;
		}
	}
</style>
