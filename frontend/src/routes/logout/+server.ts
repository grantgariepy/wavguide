import { redirect } from '@sveltejs/kit';

export const GET = ({ locals }: { locals: any }) => {
	locals.pb.authStore.clear();
	locals.user = undefined;
	throw redirect(303, '/login');
};
