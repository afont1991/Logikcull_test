
import { fork, all } from "redux-saga/effects";

// App Sagas
import actionModalSagas from "app/ActionModal/sagas";

// Common Sagas
import albumSagas from "store/album/sagas";

// Combine all application sagas
export default function* rootSaga() {
  yield all([

    // app sagas
    fork(actionModalSagas),

    // common sagas
    fork(albumSagas),

  ]);
}