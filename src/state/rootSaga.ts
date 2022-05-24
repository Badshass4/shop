import { all } from "redux-saga/effects";

import watchItems from "./sagas/homeSaga";

export default function* rootSaga() {
  yield all([watchItems()]);
}
