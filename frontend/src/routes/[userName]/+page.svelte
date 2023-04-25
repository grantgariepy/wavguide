<script lang="ts">
	import { getImageURL } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data.results?.avatar);
	const avatar = data.results?.avatar;
</script>

<div>
	{data.results?.username}
	<img src={getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)} alt="" />
</div>
