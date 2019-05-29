
import { fork, all } from "redux-saga/effects";

// App Sagas

// Common Sagas
import albumSagas from "store/album/sagas";

// Combine all application sagas
export default function* rootSaga() {
  yield all([

    // app sagas
    // {empty}

    // common sagas
    fork(albumSagas),

  ]);
}