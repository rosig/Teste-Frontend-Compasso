import LoadingSpinners from "../../LoadingSpinners";
import "./styles.scss";

export default function RepositoriesList({
  repositories,
  isFetchingRepositories,
}) {
  function ListItems() {
    return repositories.map((repositorie) => (
      <li className="repositoriesList__item" key={repositorie.id}>
        {repositorie.name}
      </li>
    ));
  }

  if (isFetchingRepositories) {
    return (
      <ul className="repositoriesList">
        <LoadingSpinners />
      </ul>
    );
  }

  return (
    <ul className="repositoriesList">
      {repositories.length !== 0 ? <ListItems /> : <p>Lista vazia</p>}
    </ul>
  );
}
