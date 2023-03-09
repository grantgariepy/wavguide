import { getArtist, getArtistAlbums } from '$lib/spotify';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
	const artistId: string | undefined = params.artistId;
	// console.log(albumId);

	const fetchArtist = async (artistId: string | undefined) => {
		const response = await getArtist(artistId);
		const results = response.json();
		// console.log(results.albums.items);
		return results;
	};
	const fetchArtistAlbums = async (artistId: string | undefined) => {
		const response = await getArtistAlbums(artistId);
		const results = response.json();
		// console.log(results.albums.items);
		return results;
	};
	return {
		albums: fetchArtistAlbums(artistId),
		artist: fetchArtist(artistId)
	};
};
