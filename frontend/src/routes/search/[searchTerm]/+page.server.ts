import { getSearchResults } from '$lib/spotify';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
	const searchTerm: string | undefined = params.searchTerm;

	const fetchSearchResults = async (searchTerm: any) => {
		const response = await getSearchResults(searchTerm);
		const results = await response.json();
		// console.log(albums.items);
		// console.log(results.albums.items);
		return results;
	};
	let promise = fetchSearchResults(searchTerm);
	return {
		results: fetchSearchResults(searchTerm)
	};
	// console.log(response.albums.items);
};
