import {useState, useEffect} from "react";
import {Outlet, Link, useLoaderData, useParams} from "react-router-dom";
import "./Photos.css";

export const Photos = () => {
  const photosList = useLoaderData();

  const {albumId} = useParams();
  const albId = Number(albumId);

  const filteredPhotos = photosList.filter((photo) => photo.albumId === albId);
  const photosShortList = filteredPhotos.slice(0, 5);

  return (
    <>
      <div className="filtered-photos">
        <h3>
          Filtered-photos (AlbumId: {albId}, total count:{" "}
          {filteredPhotos.length})
        </h3>
        <div className="f-photos flex-cl">
          {filteredPhotos.map((photo) => (
            <span className="f-photo" key={photo.id}>
              Photo id: {photo.id}
            </span>
          ))}
        </div>
      </div>

      <div className="album-photos">
        <h3>Album photos (AlbumId: {albId} | max count: 5 elements)</h3>
        <div className="photos flex-cl">
          {photosShortList.map((photo) => (
            <div className="photo" key={photo.id}>
              <div>Photo id: {photo.id}</div>
              <div>
                <img
                  src={photo.url}
                  alt={"Photo " + photo.id}
                  className="img-mini"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
