import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, locals }) => {
	// console.log(params);
	// console.log(locals.user);
	const userName = params.userName;

	const record: object | null | undefined = await locals.pb
		?.collection('users')
		.getFirstListItem(`username="${userName}"`, {});
	const serializeNonPOJOs = (value: object | null | undefined) => {
		return structuredClone(value);
	};
	return { results: serializeNonPOJOs(record), params: userName };
}) satisfies PageServerLoad;
