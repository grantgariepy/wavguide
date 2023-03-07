import { getSearchResults } from '$lib/spotify';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
	const searchTerm: string | undefined = params.searchTerm;
	const fetchSearchResults = async (searchTerm: any) => {
		const response = await getSearchResults(searchTerm);
		const { albums } = await response.json();
		// console.log(albums.items);
		return albums.items;
	};
	return {
		items: fetchSearchResults(searchTerm)
	};
	// console.log(response.albums.items);
};
