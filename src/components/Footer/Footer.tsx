import { useAppSelector } from '../../store/hooks';
import s from './Footer.module.css';

export const Footer: React.FC = () => {

	const user = useAppSelector(state => state.app.user); 
	
	return (
		<footer className={`${s.footer} container-fullwidth`}>
			<div className="container">
				{user.name && 
					<>
						<h3>{user.company.name}</h3>
						<p>{user.company.catchPhrase}</p>
					</>
				}
				{!user.name && 
					<h3>FOOTER</h3>
				}
			</div>
		</footer>
	)
}