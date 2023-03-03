export const load = ({ locals }:{locals:any}) => {
	if (locals.user) {
		return {
			user: locals.user
		};
	}

	return {
		user: undefined
	};
};