import { redirect } from '@sveltejs/kit';
import type { ServerLoad } from '@sveltejs/kit';

export const load = (({ locals }) => {
	if (!locals.pb?.authStore.isValid) {
		throw redirect(303, '/login');
	} else {
		throw redirect(303, '/settings/profile');
	}
}) satisfies ServerLoad;
