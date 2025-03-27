function UserItemSmall({ user }) {
	return (
	  <div className="user-card">
		<p>
		  {user.first_name} {user.last_name}
		</p>
		<p>{user.email}</p>
	  </div>
	);
  }
   
  export default UserItemSmall;
  