import { endpoints } from "../endpoints"    //load the api endpoints.

/**
 * Use this for production configuration.
 */

export default { 
	production: true,
	api: 'https://prod-api-server.localtest.me',
	endpoints: {
		...endpoints
	}
}