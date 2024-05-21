export const usersInitialList = async () => {
  const getUsers = await fetch("https://jsonplaceholder.typicode.com/users");

  return await getUsers.json();
};

export const albumsList = async () => {
  const getAlbumsList = await fetch(
    "https://jsonplaceholder.typicode.com/albums"
  );

  return await getAlbumsList.json();
};

export const photosList = async () => {
  const getPhotosList = await fetch(
    "https://jsonplaceholder.typicode.com/photos"
  );

  return await getPhotosList.json();
};
