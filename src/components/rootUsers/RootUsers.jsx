import {Outlet, Link, useLoaderData} from "react-router-dom";
import "./RootUsers.css";

export const RootUsers = () => {
  const usersList = useLoaderData();

  return (
    <>
      <Link to={"/dz-37/"}>Home</Link>
      <br />

      <h1>User list</h1>
      <div className="users">
        {usersList.map((user) => (
          <div className="user" key={user.id}>
            <div>User id: {user.id}</div>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>

            <div className="btn">
              <Link to={`albums/${user.id}`}>Albums</Link>
            </div>
          </div>
        ))}
      </div>

      <Outlet />
    </>
  );
};
