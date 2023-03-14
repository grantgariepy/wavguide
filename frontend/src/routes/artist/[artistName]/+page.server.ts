import { getArtist, getArtistAlbums, getSearchArtists, getSearchResults } from '$lib/spotify';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
	const artistName: string | undefined = params.artistName;
	// console.log(albumId);

	// const fetchArtists = async (artistName: string | undefined) => {
	// 	const response = await getSearchArtists(artistName);
	// 	const results = await response.json();
	// 	console.log(results.albums.items);
	// 	return results;
	// };
	const artistResults = await getSearchArtists(artistName);
	const artistData = await artistResults.json();
	const artistId = artistData.artists.items[0].id;
	// if(artist)
	// console.log(artistData.artists.items[0]);
	const lowerCaseArtist = artistName?.toLowerCase();
	const lowerCaseArtistSearchName = artistData.artists.items[0].name
		.toLowerCase()
		.split(' ')
		.join('-');
	if (lowerCaseArtist === lowerCaseArtistSearchName) {
		// getSearchArtists(artistName);
		// console.log(results)
		// const artistId =

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
	}
};
