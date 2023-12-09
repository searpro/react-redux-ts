import { useState } from "react";
import { query } from "../../utils/http"
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setUser } from "../../store/app.slice";

export const Users = () => {

	const [userList, setUserList] = useState([]);
	const loading = useAppSelector(state => state.app.loading['getUsers']);   //get the loading status for the specific API call from the state.

	const dispatch = useAppDispatch(); 

	const fetchUsers = async () => {
		const res = await query({ action: 'getUsers' }); 
		setUserList(res.data); 
	}

	const setCurrentUser = (user) => {
		dispatch(setUser(user))
	}

	const reset = () => {
		dispatch(setUser({})); //reset the selected user in state. 
		setUserList([]);  
	}

	return (
		<div className="container">
			<h3>Sample page with API integration & redux state</h3>
			<p>Click on the Fetch Users button to load a list of users from a remote API.</p>
			<button onClick={fetchUsers} style={{marginRight: '30px'}}>Fetch Users...</button>
			{userList.length > 0 && <button onClick={()=>reset()}>Reset</button>}
			<p>{loading && <>Loading users...</>} </p>		
			{userList.length > 0 && 
				<table bgcolor='aqua'>
					<thead>
						<tr>
							<th>Name</th>
							<th>E-mail</th>
						</tr>
					</thead>
					<tbody>
						{userList.map((user, i) => (
							<tr key={i}>
								<td style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>{user.name} <button onClick={()=>setCurrentUser(user)}>Set as current</button></td>
								<td>{user.email}</td>
							</tr>
						))}
					</tbody>		
				</table>
			}

		</div>	
	)
}
