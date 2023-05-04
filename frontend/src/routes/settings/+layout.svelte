<script>
	import { page } from '$app/stores';
	const navigation = [
		{
			title: 'Profile',
			href: '/settings/profile'
		},
		{
			title: 'Account',
			href: '/settings/account'
		},
		{
			title: 'Security',
			href: '/settings/security'
		}
	];
</script>

<div class="mx-auto max-w-xl sm:px-6 h-full px-2">
	<h3 class="text-2xl text-white font-medium py-2 logo">Settings</h3>
	<div class="divider" />
</div>
<div class="flex mx-auto max-w-xl sm:px-6 lg: px-8 h-full space-x-4">
	<ul class="menu bg-base-100 w-56 p-2 rounded-box">
		{#each navigation as navItem}
			<li>
				<a
					href={navItem.href}
					class="font-medium {$page.url.pathname === navItem.href ? 'active' : ''}"
					>{navItem.title}</a
				>
			</li>
		{/each}
	</ul>
	<div class="w-full">
		<slot />
	</div>
</div>
