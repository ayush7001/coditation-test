import axios from 'axios';
import { getUrl } from '../constants/api';

const axiosInstance = axios.create();

/**
 * get method
 * @param request object containing axios params
 */
const get = (url, params, otherData) => {
	return commonAxios({ method: 'GET', url: getUrl(url, params), ...otherData });
};

/**
 * post method
 * @param request object containing axios params
 */
const post = (url, params, otherData) => {
	return commonAxios({ method: 'POST', url: getUrl(url), data: params, ...otherData });
};

/**
 * put method
 * @param request object containing axios params
 */
const put = (url, params, otherData) => {
	return commonAxios({ method: 'PUT', url: getUrl(url), data: params, ...otherData });
};

/**
 * deleteRequest method
 * @param request object containing axios params
 */
const deleteRequest = (url, params, otherData) => {
	return commonAxios({ method: 'DELETE', url: getUrl(url), data: params, ...otherData });
};

/**
 * patch method
 * @param request object containing axios params
 */
const patch = (url, params, otherData) => {
	return commonAxios({ method: 'PATCH', url: getUrl(url), data: params, ...otherData });
};

/**
 * commonAxios
 * @param object containing method, url, data, access token, content-type, isLogin
 */
const commonAxios = ({
	method,
	url,
	data,
	isAccessTokenRequire = true,
	contentType = 'application/json',
	isLogin = false
}) => {
	let headers = {
		'Content-Type': contentType,
		'Accept': 'application/vnd.github.v3+json'
	};
	let body = null;
	if (isLogin) {
		headers['userdetails'] = data;
	} else {
		if (contentType === 'application/json') {
			body = JSON.stringify(data);
		} else {
			body = data;
		};
	}
	return new Promise((resolve, reject) => {
		axiosInstance({
			method: method,
			url: url,
			headers: headers,
			data: body
		}).then((response) => {
			if (response.data.isError) {
				reject(new Error(response.data.message));
			} else {
				resolve(response.data);
			}
		}).catch((error) => {
			reject(error);
		});
	});
}

export {
	axiosInstance
};

const httpService = {
	get: get,
	post: post,
	put: put,
	deleteRequest: deleteRequest,
	patch: patch
};

export default httpService;
