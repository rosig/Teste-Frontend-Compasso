import {
  SET_USER,
  SET_IS_FETCHING_USER,
  SET_HTTP_STATUS_FETCH_USER,
  SET_USER_PERSONAL_REPOSITORIES,
  SET_IS_FETCHING_USER_PERSONAL_REPOSITORIES,
  SET_USER_STARRED_REPOSITORIES,
  SET_IS_FETCHING_USER_STARRED_REPOSITORIES,
  RESET_USER_DATA,
  SAGA_FETCH_USER,
  SAGA_FETCH_USER_PERSONAL_REPOSITORIES,
  SAGA_FETCH_USER_STARRED_REPOSITORIES,
} from "./types";

export const setUser = (user) => ({
  type: SET_USER,
  payload: {
    user: user,
  },
});

export const setIsFetchingUser = (isFetchingUser) => ({
  type: SET_IS_FETCHING_USER,
  payload: {
    isFetchingUser: isFetchingUser,
  },
});

export const setHttpStatusFetchUser = (httpStatus) => ({
  type: SET_HTTP_STATUS_FETCH_USER,
  payload: {
    httpStatus: httpStatus,
  },
});

export const setUserPersonalRepositories = (repositoriesList) => ({
  type: SET_USER_PERSONAL_REPOSITORIES,
  payload: {
    repositoriesList: repositoriesList,
  },
});

export const setIsFetchingUserPersonalRepositories = (isFetching) => ({
  type: SET_IS_FETCHING_USER_PERSONAL_REPOSITORIES,
  payload: {
    isFetching: isFetching,
  },
});

export const setUserStarredRepositories = (repositoriesList) => ({
  type: SET_USER_STARRED_REPOSITORIES,
  payload: {
    repositoriesList: repositoriesList,
  },
});

export const setIsFetchingUserStarredRepositories = (isFetching) => ({
  type: SET_IS_FETCHING_USER_STARRED_REPOSITORIES,
  payload: {
    isFetching: isFetching,
  },
});

export const resetUserData = () => ({
  type: RESET_USER_DATA,
  payload: {},
});

// ------- SAGA ACTIONS -------

export const sagaFetchUser = (username) => ({
  type: SAGA_FETCH_USER,
  payload: {
    username: username,
  },
});

export const sagaFetchUserPersonalRepositories = (username) => ({
  type: SAGA_FETCH_USER_PERSONAL_REPOSITORIES,
  payload: {
    username: username,
  },
});

export const sagaFetchUserStarredRepositories = (username) => ({
  type: SAGA_FETCH_USER_STARRED_REPOSITORIES,
  payload: {
    username: username,
  },
});
