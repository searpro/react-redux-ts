import { endpoints } from "./config/endpoints";
export { };

declare global {

	//type for API endpoint Loader
	type EndpointLoadingType = {
		[K in keyof typeof endpoints]?: boolean
	}


	type Endpoint = keyof typeof endpoints; 

	interface EndpointType {
		[index: string]: string[]
	}

	interface ConfigType {
		api: string;
		endpoints: EndpointType
	}

	/**
	 * Query params object.
	 */
	interface QueryParams {
		/**
		 * API Endpoint/action
		 */
		action: Endpoint;
		/**
		 * Request payload to be sent to the server in case of requests with body.
		 * A plain javascript object. 
		 */
		payload?: object;
		/** Used to handle endpoints like /users/1/profile 
		 * the endpoint needs to be defined as ```/users/:id/profile```
		 * http helper will replace the id with the provided path param. 
		 * ```{ action: 'profile', pathParam: 10 }```
		 * final request URL: ```/users/10/profile```
		 */
		pathParam?: string;
		headers?: object;
		/**Use mock JSON file instead of API. Place a dummy-api.json file in public directory and pass /dummy-api.json as mockUrl. ```{ mockUrl: '/dummy-api.json }``` */
		mockUrl?: string;
		/**A handler function for upload progress */
		uploadProgress?: (e: AxiosProgressEvent) => void
	}

}