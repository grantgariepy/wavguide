<script>
	import { Input } from '$lib/components';
	/**
	 * @type {{ errors: { oldPassword: string; password: string; passwordConfirm: string; }; }}
	 */
	export let form;
</script>

<div class="flex flex-col w-full h-full">
	<div class="w-full">
		<form action="?/updatePassword" method="POST" class="flex flex-col space-y-2 w-full">
			<h3 class="text-2xl font-medium text-white">Change Password</h3>
			<div class="divider" />
			<Input
				hidden={false}
				id="oldPassword"
				label="Old Password"
				type="password"
				required
				errors={form?.errors?.oldPassword}
			/>
			<Input
				hidden={false}
				id="password"
				label="New Password"
				type="password"
				required
				errors={form?.errors?.password}
			/>
			<Input
				hidden={false}
				id="passwordConfirm"
				label="Confirm New Password"
				type="password"
				required
				errors={form?.errors?.passwordConfirm}
			/>
			<a href="/reset-password" class="text-warning hover:cursor-point hover:underline">
				I forgot my password</a
			>
			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-info w-full max-w-lg"> Update Password </button>
			</div>
		</form>
	</div>
</div>
