import { redirect } from '@sveltejs/kit';
import type { ServerLoad } from '@sveltejs/kit';

export const POST: ServerLoad = ({ locals }) => {
	locals.pb?.authStore.clear();
	locals.user = undefined;
	throw redirect(303, '/');
};
