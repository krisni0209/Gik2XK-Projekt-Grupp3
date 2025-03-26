import { useEffect, useState } from "react";
import { getAllUsers } from "../services/userService";
import UserItemSmall from "./UserItemSmall";
 
function UserList() {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
	getAllUsers().then(res => setUsers(res.data));
  }, []);
 
  return (
	<div>
  	<h2>Användare</h2>
  	{users.map(user => (
    	<UserItemSmall key={user.id} user={user} />
  	))}
	</div>
  );
}
 
export default UserList;


