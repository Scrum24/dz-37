import {useState, useEffect} from "react";
import {Outlet, Link, useLoaderData, useParams} from "react-router-dom";
import "./Albums.css";

export const Albums = () => {
  const albumsList = useLoaderData();

  const {userId} = useParams();
  const usId = Number(userId);

  const albums = albumsList.filter((album) => album.userId === usId);

  return (
    <>
      <div className="user-albums">
        <h1>Albums (userId: {userId})</h1>
        <div className="albums flex-cl">
          {albums.map((album) => (
            <div className="album" key={album.id}>
              <div>Album id: {album.id}</div>
              <div>Title: {album.title}</div>

              <div className="btn">
                <Link to={`photos/${album.id}`}>Photos</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Outlet />
    </>
  );
};
