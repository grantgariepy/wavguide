<script lang="ts">
	let searchTerm: string = '';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<a class="text-3xl" id="logo" href="/"> WAVGUIDE </a>
	</div>
	<div class="navbar-center">
		<div class="form-control hidden lg:flex min-w-max">
			<div class="input-group">
				<form action={`/search/${searchTerm.split(' ').join('+')}`}>
					<input
						bind:value={searchTerm}
						type="text"
						placeholder="Search…"
						class="input input-bordered focus:outline-0 focus:border focus:border-info"
					/>
					<button class="btn btn-square" type="submit">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
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
			<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
				<li><a href="/">Profile</a></li>
				<li><a href="/settings">Settings</a></li>
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
