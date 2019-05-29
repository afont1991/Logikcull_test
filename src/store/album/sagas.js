import { takeEvery, call } from "redux-saga/effects";

function* submitSigninSaga() {
  try {
    yield call(console.log("submitSigninSaga"));
  } catch (e) {
    yield call(console.log("Error", e));
  }
}

function* watch() {
  yield takeEvery("SUBMIT_SIGNIN", submitSigninSaga);
}

export default watch;
