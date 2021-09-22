import { put, call, takeLatest, all } from "redux-saga/effects";
import {
  setUser,
  setIsFetchingUser,
  setHttpStatusFetchUser,
  setUserPersonalRepositories,
  setIsFetchingUserPersonalRepositories,
  setUserStarredRepositories,
  setIsFetchingUserStarredRepositories,
} from "../actions";
import {
  SAGA_FETCH_USER,
  SAGA_FETCH_USER_PERSONAL_REPOSITORIES,
  SAGA_FETCH_USER_STARRED_REPOSITORIES,
} from "../actions/types";
import axios from "axios";

function* fetchUser(action) {
  try {
    yield put(setIsFetchingUser(true));

    const response = yield call(
      (username) => axios.get(`https://api.github.com/users/${username}`),
      action.payload.username
    );

    const { name, login, location, company, avatar_url, bio } = response.data;
    const { status } = response;
    const user = {
      name,
      login,
      location,
      company,
      avatar_url,
      bio,
    };

    yield put(setHttpStatusFetchUser(status));
    yield put(setUser(user));
    yield put(setIsFetchingUser(false));
  } catch (error) {
    yield put(setHttpStatusFetchUser(error.response.status));
    yield put(setIsFetchingUser(false));
  }
}

function* fetchUserPersonalRepositories(action) {
  try {
    yield put(setIsFetchingUserPersonalRepositories(true));

    const response = yield call(
      (username) => axios.get(`https://api.github.com/users/${username}/repos`),
      action.payload.username
    );

    yield put(setUserPersonalRepositories(response.data));
    yield put(setIsFetchingUserPersonalRepositories(false));
  } catch (error) {
    yield put(setUserPersonalRepositories([]));
    yield put(setIsFetchingUserPersonalRepositories(false));
  }
}

function* fetchUserStarredRepositories(action) {
  try {
    yield put(setIsFetchingUserStarredRepositories(true));

    const response = yield call(
      (username) =>
        axios.get(`https://api.github.com/users/${username}/starred`),
      action.payload.username
    );

    yield put(setUserStarredRepositories(response.data));
    yield put(setIsFetchingUserStarredRepositories(false));
  } catch (error) {
    yield put(setUserStarredRepositories([]));
    yield put(setIsFetchingUserStarredRepositories(false));
  }
}

export default all([
  takeLatest(SAGA_FETCH_USER, fetchUser),
  takeLatest(
    SAGA_FETCH_USER_PERSONAL_REPOSITORIES,
    fetchUserPersonalRepositories
  ),
  takeLatest(
    SAGA_FETCH_USER_STARRED_REPOSITORIES,
    fetchUserStarredRepositories
  ),
]);

/*
  Starts fetchName on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// export default function* sagaNames() {
//   yield takeEvery("SAGA_ADD_NAME", fetchName);
// }

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

// function* sagaNames() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchName);
// }
