<script lang="ts">
	import { getImageURL } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log(data.results?.avatar);
	const avatar = data.results?.avatar;
</script>

<div>
	{data.results?.username}
	<img src={getImageURL(data.results?.collectionId, data.results?.id, avatar)} alt="" />
</div>
