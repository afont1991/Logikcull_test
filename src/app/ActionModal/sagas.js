import { takeEvery, call, put, select } from "redux-saga/effects";

// Action dispatchers
import { closeModal } from "app/ActionModal/actions";
import { setNormalizedAlbumData } from "store/album/actions";

// Action types
import { CONFIRM_DELETE, SUBMIT_ALBUM_FORM } from "app/ActionModal/actions";

// Selectors
import { getFormInitialValues } from "redux-form";
import { getAlbumData } from "store/album/selectors";

function* submitAlbumFormSaga({ payload: { formName, formType, values }}) {
  try {

    // Get previous form values from state
    const previousFormValues = yield select(getFormInitialValues(formName));

    // Get current album data from state
    const currentAlbumData = yield select(getAlbumData);

    let updatedAlbumData = {};

    if(formType === "edit"){

      updatedAlbumData = {
        ...currentAlbumData,
        [values.artistId]: {
          name: values.artistName,
          albums: currentAlbumData[values.artistId].albums.map((album) => {
            return album.albumTitle === previousFormValues.albumTitle ? {
              albumTitle: values.albumTitle,
              condition: values.condition,
              year: values.year,
            } : album;
          }),
        }
      };

    } else {

      let currentArtistId;
      Object.keys(currentAlbumData).some((artistId) => {
        if(values.artistName.toLowerCase() === currentAlbumData[artistId].name.toLowerCase()){
          currentArtistId = artistId;
          return true;
        }
      });

      if(currentArtistId) {
        updatedAlbumData = {
          ...currentAlbumData,
          [currentArtistId]: {
            ...currentAlbumData[currentArtistId],
            albums: [
              ...currentAlbumData[currentArtistId].albums,
              { albumTitle: values.albumTitle, condition: values.condition, year: values.year }
            ],
          },
        };
      } else {

        // find largest artist ID and increment
        const newArtistId = Math.max(...Object.keys(currentAlbumData)) + 1;

        updatedAlbumData = {
          ...currentAlbumData,
          [newArtistId]: {
            name: values.artistName,
            albums: [{ albumTitle: values.albumTitle, condition: values.condition, year: values.year }],
          },
        };


      }

    }

    // apply changes to store
    yield put(setNormalizedAlbumData(updatedAlbumData))

    // close modal and display table
    yield put(closeModal());

  } catch (e) {
    yield call(console.log("Error Details:", e));
  }
}

function* confirmDeleteSaga({ payload: { formName }}) {
  try {

    const albumToDelete = yield select(getFormInitialValues(formName));
    const currentAlbumData = yield select(getAlbumData);

    const updatedAlbumData = {
      ...currentAlbumData,
      [albumToDelete.artistId]: {
        name: albumToDelete.artistName,
        albums: currentAlbumData[albumToDelete.artistId].albums.filter((album) => {
          return album.albumTitle !== albumToDelete.albumTitle;
        }),
      }
    };

    // apply changes to store
    yield put(setNormalizedAlbumData(updatedAlbumData))

    // close modal and display table
    yield put(closeModal());

  } catch (e) {
    yield call(console.log("Error Details:", e));
  }
}

function* watch() {
  yield takeEvery(CONFIRM_DELETE, confirmDeleteSaga);
  yield takeEvery(SUBMIT_ALBUM_FORM, submitAlbumFormSaga);
}

export default watch;
