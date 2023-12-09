import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { Button } from '../../components/Button/Button';

export const Home = () => {
	useTitle('⚡ React + Redux-toolkit + Vite + TypeScript Starter kit ⚡'); 
	return (
		<div className='container'>
			<h1>⚡ React + Redux-toolkit + Vite + TypeScript Starter kit ⚡</h1>
			<h2>🚀 Ready to use features</h2>
			<ul>
				<li>Vite - for faster development</li>
				<li>Redux toolkit - for state managment</li>
				<li>TypeScript</li>
				<li>Eslint and prettier</li>
				<li>Cypress</li>
				<li>Pre commit hooks for linting</li>
				<li>HTTP helper (with some cool features)</li>
				<li>Routing with react-router-dom with sample routes and pages</li>
				<li>Use mock json files as API response in case your API isn't ready</li>
			</ul>
			<Link to="/users">Sample Page with basic features</Link>
			<br /><br />
			<Button variant='primary'>A button component</Button>
		</div>
	)
}
