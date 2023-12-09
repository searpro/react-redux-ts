import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		//checker({ typescript: true })
	],
	define: {
		// By default, Vite doesn't include shims for NodeJS/
		// necessary for segment analytics lib to work
		_global: ({})
	},
	resolve: {
		alias: {
			// './{}': path.resolve(__dirname, './node_modules/package-name ')  //add path aliases here if there is any compile errors. 
		}

	},
	build: {
		outDir: 'build',
		rollupOptions: {

		}
	}
})
