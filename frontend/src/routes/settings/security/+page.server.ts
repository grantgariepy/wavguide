import { error, fail, redirect } from '@sveltejs/kit';
import { updatePasswordSchema } from '$lib/schemas';
import { validateData } from '$lib/utils';
import type { ServerLoad, Actions } from '@sveltejs/kit';

export const load: ServerLoad = ({ locals }) => {
	if (!locals.pb?.authStore.isValid) {
		throw redirect(303, '/login');
	}
};

export const actions = {
	updatePassword: async ({ request, locals }: { request: any; locals: any }) => {
		const { formData, errors } = await validateData(await request.formData(), updatePasswordSchema);

		if (errors) {
			return fail(400, {
				errors: errors.fieldErrors
			});
		}

		try {
			await locals.pb?.collection('users').update(locals.user?.id, formData);
			locals.pb?.authStore.clear();
		} catch (err: any) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/login');
	}
} satisfies Actions;
