import { error, fail, redirect } from '@sveltejs/kit';
import { updateProfileSchema } from '$lib/schemas';
import { validateData } from '$lib/utils';
import { serialize } from 'object-to-formdata';
import type { ServerLoad, Actions } from '@sveltejs/kit';

export const load = ({ locals }: { locals: any }) => {
	if (!locals.pb?.authStore.isValid) {
		throw redirect(303, '/login');
	}
};

export const actions = {
	updateProfile: async ({ request, locals }: { request: any; locals: any }) => {
		const body = await request.formData();
		const userAvatar = body.get('avatar');

		if (userAvatar?.size === 0) {
			body.delete('avatar');
		}

		const { formData, errors } = await validateData(body, updateProfileSchema);
		const { avatar, ...rest } = formData;

		if (errors) {
			return fail(400, {
				data: rest,
				errors: errors.fieldErrors
			});
		}

		try {
			const { name, avatar } = await locals.pb
				?.collection('users')
				.update(locals.user?.id, serialize(formData));
			locals.user.name = name;
			locals.user.avatar = avatar;
		} catch (err) {
			console.log('Error: ', err);

			throw error(400, 'Something went wrong updating your profile');
		}

		return {
			success: true
		};
	}
};
