import { getAlbum } from '$lib/spotify';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
	const albumId: string | undefined = params.albumId;
	// console.log(albumId);

	const fetchAlbum = async (albumId: string | undefined) => {
		const response = await getAlbum(albumId);
		const results = await response.json();
		// console.log(results.albums.items);
		return results;
	};
	return {
		results: fetchAlbum(albumId)
	};
};
