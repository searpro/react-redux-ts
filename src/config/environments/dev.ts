import { endpoints } from "../endpoints";

/**
 * Configuration file for development. 
 * you can add more configuration options here. Or you can separate the 
 * common configurations to another file and spread it in the config object. 
 */

const config = {
	api: 'https://jsonplaceholder.typicode.com',
	endpoints: {
		...endpoints
	}
}

export default config;