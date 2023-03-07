import querystring from 'querystring';
import { SPOTIFY_CLIENT_ID } from '$env/static/private';
import { SPOTIFY_CLIENT_SECRET } from '$env/static/private';
import { SPOTIFY_REFRESH_TOKEN } from '$env/static/private';
import { SPOTIFY_ACCESS_TOKEN } from '$env/static/private';
const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const getAccessToken = async () => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: `${SPOTIFY_REFRESH_TOKEN}`
		})
	});
	return response.json();
};

export const getSearchResults = async () => {
	const SEARCH_ENDPOINT = `https://api.spotify.com/v1/search?q=flume&type=album`;
	const { access_token } = await getAccessToken();

	const options = {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${access_token}`
		}
	};
	const response = await fetch(SEARCH_ENDPOINT, options);

	return response;
};
