import { createSelector } from "reselect";

// returns normalized album data listed by artist
export const getAlbumData = (state) => state.albums.albumDataNormalized;

// returns a list of albums with artists
export const getAlbumListFormatted = createSelector(
  getAlbumData,
  (albumData) => {

    const formattedList = [];

    if(albumData){

      Object.keys(albumData).forEach((artistId) => {

        albumData[artistId].albums.forEach((album) => {

          // add each album to list
          formattedList.push(
            { artistId: artistId, artistName: albumData[artistId].name, ...album }
          );

        });

      });

    }

    return formattedList;

  }
);


export const getAllAlbumDetails = (state) => state.albums.albumDetailsFromLastFm;
export const getAlbumDetailsByTitle = (title) => createSelector(
  getAllAlbumDetails,
  (albumDetails) => {
    return albumDetails[title];
  }
);
