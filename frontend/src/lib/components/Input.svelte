<script lang="ts">
	export let value = '';
	export let placeholder = '';
	export let id: string;
	export let label: string;
	export let type = 'text';
	export let disabled = false;
	export let required = false;
	export let errors: any;
	export let hidden: boolean;
</script>

{#if hidden}
	<input
		class={type === 'file'
			? 'file-input file-input-bordered w-full max-w-lg'
			: 'input input-bordered w-full max-w-lg'}
		{type}
		{placeholder}
		{required}
		{disabled}
		{id}
		name={id}
		{value}
		{hidden}
	/>
{:else}
	<div class="form-control w-full max-w-lg mb-2">
		<label for={id} class="label font-medium pb-1">
			<span class="label-text ">{label}</span>
		</label>
		<input
			class={type === 'file'
				? 'file-input file-input-bordered w-full max-w-lg'
				: 'input input-bordered w-full max-w-lg'}
			{type}
			{placeholder}
			{required}
			{disabled}
			{id}
			name={id}
			{value}
			{hidden}
		/>
		{#if errors}
			{#each errors as error}
				<label for={id} class="label py-0 pt-1">
					<span class="label-text-alt text-error">
						{error}
					</span>
				</label>
			{/each}
		{/if}
	</div>
{/if}
