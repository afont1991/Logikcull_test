import { takeEvery, call, put, select } from "redux-saga/effects";
import axios from "axios";

// Action types
import { INIT_ALBUM_DATA, LOAD_ALBUM_DETAILS } from "store/album/actions";

// Action dispatchers
import { setRawAlbumData, setNormalizedAlbumData, setAlbumDetails } from "store/album/actions";

// Selectors
import { getAllAlbumDetails, getAlbumDetailsByTitle } from "store/album/selectors";

// utils
import rawAlbumData from "utils/albumsRaw";

function* initAlbumDataSaga() {
  try {

    // set mock data in store
    yield put(setRawAlbumData(rawAlbumData));

    // normalize and format raw data by organizing albums under artist ids
    const normalizedAlbumData = {};
    rawAlbumData.forEach((rawAlbum) => {

      const { album_title: albumTitle, year, condition, artist } = rawAlbum;

      // if artist not present lets add them so we can append albums
      if(!normalizedAlbumData[artist.id]){
        normalizedAlbumData[artist.id] = {
          name: artist.name,
          albums: [],
        }
      }

      // adding album to artist
      const newAlbum = { albumTitle, year, condition };
      normalizedAlbumData[artist.id].albums.push(newAlbum);

    });

    // set mock data in store
    yield put(setNormalizedAlbumData(normalizedAlbumData));

  } catch (e) {
    yield call(console.log("Error Details:", e));
  }
}

function* loadAlbumDetailsSaga({ payload: { albumTitle, artistName }}) {
  try {

    const detailsPresent = yield select(getAlbumDetailsByTitle(albumTitle));

    if(!detailsPresent){

      const currentDetailsInStore = yield select(getAllAlbumDetails);
      console.log(currentDetailsInStore);
      const detailsFromLastFM = yield call(axios.get, `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=771827c0d2ba2e2c4fcbfeab1a5b50d9&artist=${artistName}&album=${albumTitle}&format=json`);
      console.log(detailsFromLastFM);
      yield put(setAlbumDetails({}));

    }

  } catch (e) {
    yield call(console.log("Error Details:", e));
  }
}

function* watch() {
  yield takeEvery(INIT_ALBUM_DATA, initAlbumDataSaga);
  yield takeEvery(LOAD_ALBUM_DETAILS, loadAlbumDetailsSaga);
}

export default watch;
