import { useState } from "react";
import { Accordion } from "react-bootstrap";
import RepositoriesList from "./RepositoriesList";

//store
import { useSelector, useDispatch } from "react-redux";
import {
  sagaFetchUserPersonalRepositories,
  sagaFetchUserStarredRepositories,
} from "../../store/actions";

import "./styles.scss";

export default function UserRepositories({ text }) {
  const {
    user: { login },
    personalRepositories,
    starredRepositories,
    isFetchingUserPersonalRepositories,
    isFetchingUserStarredRepositories,
  } = useSelector((state) => state.user);
  const [
    isShowingListPersonalRepositories,
    setIsShowingListPersonalRepositories,
  ] = useState(false);
  const [
    isShowingListStarredRepositories,
    setIsShowingListStarredRepositories,
  ] = useState(false);

  const dispatch = useDispatch();

  // it only makes the request to the api when the accordion goes down, when the display flag is false

  function handlePersonalRepositoriesButtonClick() {
    if (!isShowingListPersonalRepositories) {
      dispatch(sagaFetchUserPersonalRepositories(login));
      setIsShowingListPersonalRepositories(true);
      setIsShowingListStarredRepositories(false);
    } else {
      setIsShowingListPersonalRepositories(false);
    }
  }

  function handlePersonalStarredButtonClick() {
    if (!isShowingListStarredRepositories) {
      dispatch(sagaFetchUserStarredRepositories(login));
      setIsShowingListStarredRepositories(true);
      setIsShowingListPersonalRepositories(false);
    } else {
      setIsShowingListStarredRepositories(false);
    }
  }

  if (login) {
    return (
      <section className="userRepositories">
        <Accordion>
          <Accordion.Item
            eventKey="0"
            onClick={handlePersonalRepositoriesButtonClick}
          >
            <Accordion.Header>Repositórios pessoais</Accordion.Header>
            <Accordion.Body>
              <RepositoriesList
                repositories={personalRepositories}
                isFetchingRepositories={isFetchingUserPersonalRepositories}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            onClick={handlePersonalStarredButtonClick}
          >
            <Accordion.Header>
              Repositórios marcados com estrela
            </Accordion.Header>
            <Accordion.Body>
              <RepositoriesList
                repositories={starredRepositories}
                isFetchingRepositories={isFetchingUserStarredRepositories}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    );
  }

  return null;
}
