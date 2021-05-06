export default function fetchData({ url, method = 'GET', host = process.env.REACT_APP_API }) {
	return fetch(`${host}${url}`, {
		method,
		mode: 'cors',
		header: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true
		}
	}).then(async (response) => {
		const jsonResponse = await response.json();
		if (response.ok) return jsonResponse;

		throw new Error(JSON.stringify(jsonResponse));
	});
}
