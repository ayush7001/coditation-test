import queryString from 'query-string';

const API_CONFIG = {
	baseUrl: `${process.env.REACT_APP_BASE_URL}`,
	path: {
		getProjects: '/',
		users: 'users',
		repos: 'repos'
	},
	s3Url: `${process.env.REACT_APP_S3_URL}`
};

const getUrl = (url, params = {}) => {
	let urlString = `${API_CONFIG.baseUrl}/${url}`;
	if (params) {
		urlString += `?${queryString.stringify(params)}`;
	}
	return urlString;
};

export {
	API_CONFIG,
	getUrl
};
