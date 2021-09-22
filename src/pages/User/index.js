import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

//store
import { sagaFetchUser } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

//components
import Page from "../../components/Page";
import UserSearchResults from "../../components/UserSearchResults";
import UserRepositories from "../../components/UserRepositories";
import LoadingSpinners from "../../components/LoadingSpinners";
import UserInformation from "./UserInfomation";
import { FaArrowLeft } from "react-icons/fa";

import "./styles.scss";

export default function User() {
  const pageBrowsingHistory = useHistory();
  const dispatch = useDispatch();
  const { username } = useParams();

  const {
    user: { login },
    isFetchingUser,
  } = useSelector((state) => state.user);

  useEffect(() => {
    function fetchUser() {
      dispatch(sagaFetchUser(username));
    }

    if (!login) fetchUser();
  }, [login, username, dispatch]);

  return (
    <Page>
      <div className="userPage">
        {isFetchingUser ? (
          <LoadingSpinners message="Carregando" />
        ) : (
          <>
            <div className="userPage__previusPage">
              <FaArrowLeft
                className="userPage__previusPage__icon"
                onClick={() => pageBrowsingHistory.push("/")}
              />
            </div>
            <UserSearchResults>
              <UserInformation />
            </UserSearchResults>
            <UserRepositories />
          </>
        )}
      </div>
    </Page>
  );
}
