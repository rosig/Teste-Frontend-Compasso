import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles.scss";

export default function UserCard() {
  const { avatar_url, name, login } = useSelector((state) => state.user.user);
  return (
    <div className="userCard">
      <Link to={`/${login}`} className="userCard__link">
        <img className="userCard__image" src={avatar_url} alt={login} />
        {name && <span className="userCard__name">{name}</span>}
        <span className="userCard__login">{`@${login}`}</span>
      </Link>
    </div>
  );
}
