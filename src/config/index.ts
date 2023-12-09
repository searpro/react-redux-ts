import dev from './environments/dev'; 
import prod from './environments/prod'; 

const config = buildConfig(); 

export default config;

function buildConfig () {
	switch (global.ENV) {
	case 'development':
		return dev; 
	case 'production':
		return prod; 
	default:
		return dev; 
	}
}