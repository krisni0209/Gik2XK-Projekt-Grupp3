import { useEffect, useState } from "react";
import UserService from "../services/UserService";
 
function UserList() {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
	UserService.getAll().then(setUsers);
  }, []);
 
  return (
	<div>
  	<h2>Användare</h2>
  	<ul>
    	{users.map((user) => (
      	<li key={user.id}>
        	{user.first_name} {user.last_name} – {user.email}
      	</li>
    	))}
  	</ul>
	</div>
  );
}
 
export default UserList;
