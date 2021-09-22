import { all } from "redux-saga/effects";
import sagaUser from "./sagaUser";

export default function* rootSaga() {
  return yield all([sagaUser]);
}
