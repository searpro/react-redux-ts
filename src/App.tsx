import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { Users } from './pages/Users/Users'

function App() {

	return (
		<BrowserRouter>
			<header>
				<Header />
			</header>
			<main>
				<Routes>
					<Route path='/' Component={Home} />
					<Route path='/users' Component={Users} />
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</BrowserRouter>
	)
}

export default App
