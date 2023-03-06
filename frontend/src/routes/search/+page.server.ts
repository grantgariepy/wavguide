import { getTopTracks } from '$lib/spotify';

export const load = async () => {
	const response = await getTopTracks();
	const { items } = await response.json();

	//
	return { items };
	// console.log(tracks);
};
