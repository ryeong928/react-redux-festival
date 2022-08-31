import { all } from "redux-saga/effects";
import catSaga from "./catSaga";

export default function* rootSaga() {
  yield all([
    catSaga(),
  ]);
}