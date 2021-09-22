import { useSelector } from "react-redux";
import ExceptionResult from "./ExceptionResult";
import Image from "../../assets/img";

export default function UserSearchResults({ children }) {
  const { httpStatusFetchUser } = useSelector((state) => state.user);

  switch (httpStatusFetchUser) {
    case 200:
      return <>{children}</>;
    case 404:
      return (
        <ExceptionResult
          message="Usuário não encontrado"
          image={Image("UserNotFoundImage")}
        />
      );
    case null:
      return (
        <ExceptionResult
          message="Nenhum usuário pesquisado ainda"
          image={Image("NothingResearchedImage")}
        />
      );
    default:
      return (
        <ExceptionResult
          message="Ocorreu algum erro"
          image={Image("GenericErrorImage")}
        />
      );
  }
}
