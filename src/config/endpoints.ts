/**
 * Add your API endpoints here. 
 * index 0 being the path and 1 being the HTTP method in lowercase. 
 * If the API uses path params, add :id to get it replaced. eg. { getUserProfile: ['/users/:id/profile', 'get'] }
 * Currently supports only one path param. 
 */

export const endpoints = {
	getUsers: ['/users', 'get'],
	getPosts: ['/posts', 'get']
}

