import UserItemSmall from './UserItemSmall';

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <UserItemSmall key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;


