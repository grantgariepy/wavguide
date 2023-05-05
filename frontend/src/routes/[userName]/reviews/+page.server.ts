import { serializeNonPOJOs } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, locals }) => {
	const userName = params.userName;
	const getUserId: object | null | undefined = await locals.pb
		?.collection('users')
		.getFirstListItem(`username="${userName}"`, {});
	// console.log(getUserId?.id);
	const userId = getUserId?.id;
	// console.log(userId);
	const getRecentReviews = async () => {
		const reviews = serializeNonPOJOs(
			await locals.pb?.collection('reviews').getList(1, 50, {
				expand: 'user',
				$autoCancel: false,
				filter: `user.id~"${userId}"`
			})
		);
		// console.log(reviews);
		return reviews;
	};
	return { results: getRecentReviews() };
}) satisfies PageServerLoad;
