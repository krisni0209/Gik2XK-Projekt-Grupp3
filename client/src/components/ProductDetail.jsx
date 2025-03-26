import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserService from "../services/UserService";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    UserService.getById(id).then(setUser);
  }, [id]);

  if (!user) return <p>Laddar användare...</p>;

  return (
    <div>
      <h3>{user.first_name} {user.last_name}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetail;



