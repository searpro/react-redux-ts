import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import style from './Header.module.css'; 


/**
 * Admin Header component. This will be used by the Header component to conditionally render the header based on user role. 
 * @param props 
 * @returns 
 */

const AdminHeader = (props) => {
	const { user } = props; 
	return (
		<div className={`${style.header} container-fullwidth`}>
			<div className="container">
				ADMIN HEADER -- { user?.name }
			</div>
		</div>
	)
};

/**
 * User Header component. Same as admin header. 
 * @param props 
 * @returns 
 */
const UserHeader = (props) => {
	const { user } = props; 
	return (
		<div className={`${style.header} container-fullwidth`}>
			<div className="container">
				<Link to="/">
					<span className={style.title}>Home</span>
				</Link>
				{user.name && 
					<span className="user-info"><span className={style.title}>{user.name}</span> ☎ {user.phone} 🌏 {user.website}</span>
				}
				
			</div>
		</div>
	)
};

/**
 * Main Header component. You can add your logic here and has access to the redux state. 
 */

export const Header: React.FC = () => {

	const user = useAppSelector(state => state.app.user) //read the user from state
	
	if (user.isAdmin === true) {
		return (<AdminHeader user={user} />)
	}
	else {
		return (<UserHeader user={user} />);
	}

}