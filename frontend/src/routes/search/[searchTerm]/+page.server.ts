import { invalidateAll } from '$app/navigation';
import { getSearchResults } from '$lib/spotify';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
	const searchTerm: string | undefined = params.searchTerm;

	const fetchSearchResults = async (searchTerm: string | undefined) => {
		const response = await getSearchResults(searchTerm);
		const results = await response.json();
		// console.log(results.albums.items);
		return results;
	};
	return {
		results: fetchSearchResults(searchTerm)
	};
};
