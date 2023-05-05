import { serializeNonPOJOs } from '$lib/utils';

export const load = ({ locals }: { locals: any }) => {
	const getRecentReviews = async () => {
		const reviews = serializeNonPOJOs(
			await locals.pb.collection('reviews').getFullList(undefined, {
				expand: 'user'
			})
		);
		return reviews;
	};
	if (locals.user) {
		return {
			user: locals.user,
			reviews: getRecentReviews()
		};
	}
	return {
		user: undefined,
		reviews: getRecentReviews()
	};
};
