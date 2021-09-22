import { useEffect } from "react";

//store
import { useSelector, useDispatch } from "react-redux";
import { sagaFetchUser, resetUserData } from "../../store/actions";

//components
import Page from "../../components/Page";
import SearchField from "../../components/SearchField";
import UserSearchResults from "../../components/UserSearchResults";
import UserCard from "../../components/UserCard";

import "./styles.scss";

export default function Home() {
  const { isFetchingUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  function fetchUser(username) {
    dispatch(sagaFetchUser(username));
  }

  function getTextFromSearchField(searchFieldText) {
    if (searchFieldText.trim().length !== 0) fetchUser(searchFieldText);
  }

  useEffect(() => {
    dispatch(resetUserData());
  }, [dispatch]);

  return (
    <Page>
      <div className="homePage">
        <h1 className="homePage__title">
          Pesquise por um{" "}
          <span className="homePage__title__highlighted">usuário</span> do
          Github
        </h1>
        <SearchField
          variant="homePage"
          searchIsHappening={isFetchingUser}
          getTextFromSearchFieldWhenButtonIsClicked={getTextFromSearchField}
        />
        <UserSearchResults>
          <UserCard />
        </UserSearchResults>
      </div>
    </Page>
  );
}
