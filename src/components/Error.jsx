import {useRouteError, Link, redirect} from "react-router-dom";

export const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Error page!!!</h1>
      <p>{error.error.message}</p>

      <Link to={"/dz-37/"}>Go to home</Link>
    </div>
  );
};
