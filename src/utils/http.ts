import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { store } from "../store/store";
import { setLoading } from "../store/app.slice";
import config from "../config";

/**
 * @author Lijin Kurian
 * Main helper for handling HTTP requests. 
 */
const query = async (params: QueryParams): Promise<AxiosResponse> => {
	const { action, payload, pathParam, headers, mockUrl, uploadProgress } = params
	const endpoint = 0,
		method = 1,
		param = 2;
	let url: string;

	const api = config.endpoints[action];
	if (api[param]) {
		url = api[endpoint].replace(':id', pathParam!)
	} else {
		url = api[endpoint];
	}

	let httpMethod;

	if (mockUrl) {
		url = mockUrl;
		httpMethod = 'get';
	} else {
		url = config.api + url,
		httpMethod = api[method];
	}

	const requestConfig: AxiosRequestConfig = {
		url: url,
		method: httpMethod,
		onUploadProgress: uploadProgress,
	};

	if (payload) requestConfig.data = payload;
	if (headers) requestConfig.headers = headers;

	axios.interceptors.request.use((config) => {
		store.dispatch(setLoading({ [action]: true }));
		return config;
	}, (error) => {
		store.dispatch(setLoading({ [action]: false }));
		return Promise.reject(error);
	});

	axios.interceptors.response.use((response) => {
		store.dispatch(setLoading({ [action]: false }));
		return response;
	}, (error) => {
		store.dispatch(setLoading({ [action]: false }));
		return Promise.reject(error);
	});

	return await axios(requestConfig)
		.then(res => {
			return res; 
		})
		.catch(err => { 
			console.log('API Error: ', err);
			throw err;
		 });
}

export { query }