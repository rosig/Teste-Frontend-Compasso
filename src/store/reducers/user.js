import {
  SET_USER,
  SET_IS_FETCHING_USER,
  SET_HTTP_STATUS_FETCH_USER,
  SET_USER_PERSONAL_REPOSITORIES,
  SET_IS_FETCHING_USER_PERSONAL_REPOSITORIES,
  SET_USER_STARRED_REPOSITORIES,
  SET_IS_FETCHING_USER_STARRED_REPOSITORIES,
  RESET_USER_DATA,
} from "../actions/types";

const initialState = {
  user: {
    name: "",
    login: "",
    location: "",
    company: "",
    avatar_url: "",
    bio: "",
  },
  personalRepositories: [],
  starredRepositories: [],
  httpStatusFetchUser: null,
  isFetchingUser: false,
  isFetchingUserPersonalRepositories: false,
  isFetchingUserStarredRepositories: false,
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.payload.user };
    }

    case SET_HTTP_STATUS_FETCH_USER: {
      return { ...state, httpStatusFetchUser: action.payload.httpStatus };
    }

    case SET_IS_FETCHING_USER: {
      return { ...state, isFetchingUser: action.payload.isFetchingUser };
    }

    case SET_USER_PERSONAL_REPOSITORIES: {
      return {
        ...state,
        personalRepositories: action.payload.repositoriesList,
      };
    }

    case SET_IS_FETCHING_USER_PERSONAL_REPOSITORIES: {
      return {
        ...state,
        isFetchingUserPersonalRepositories: action.payload.isFetching,
      };
    }

    case SET_USER_STARRED_REPOSITORIES: {
      return { ...state, starredRepositories: action.payload.repositoriesList };
    }

    case SET_IS_FETCHING_USER_STARRED_REPOSITORIES: {
      return {
        ...state,
        isFetchingUserStarredRepositories: action.payload.isFetching,
      };
    }

    case RESET_USER_DATA: {
      return { ...initialState };
    }

    default:
      return state;
  }
}
