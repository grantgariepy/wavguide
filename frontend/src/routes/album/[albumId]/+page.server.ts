import { getAlbum } from '$lib/spotify';
import { ServerLoad, fail, redirect, error } from '@sveltejs/kit';

export const load: ServerLoad = async ({ params }) => {
	// if(!locals.pb?.authStore.isValid){
	// 	throw redirect
	// }

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

export const actions = {
	create: async ({ request, locals }) => {
		const formData = await request.formData();
		formData.append('user', locals.user?.id);
		try {
			await locals.pb?.collection('reviews').create(formData);
		} catch (err) {
			console.log('Error:', err);
			throw error(error.status, error.message);
		}
		throw redirect(303, '/');
	}
};
