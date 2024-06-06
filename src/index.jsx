import React from "react";
import ReactDOM from "react-dom/client";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootUsers} from "./components/rootUsers/RootUsers";
import {Albums} from "./components/albums/Albums";
import {Photos} from "./components/photos/Photos";
import {Error} from "./components/Error";
import {usersInitialList, albumsList, photosList} from "./components/loader";

const router = createBrowserRouter([
  {
    path: "/dz-37/",
    element: <RootUsers />,
    errorElement: <Error />,
    loader: usersInitialList,
    children: [
      {
        path: "albums/:userId",
        element: <Albums />,
        loader: albumsList,
        children: [
          {
            path: "photos/:albumId",
            element: <Photos />,
            loader: photosList,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
