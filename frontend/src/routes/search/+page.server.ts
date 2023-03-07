import { getSearchResults } from '$lib/spotify';

export const load = async () => {
	const response = await getSearchResults();
	const { albums } = await response.json();
	// console.log(response.albums.items);
	// console.log(albums);
	return albums;
};
