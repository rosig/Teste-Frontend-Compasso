import { useSelector } from "react-redux";
import { HiOfficeBuilding, HiLocationMarker } from "react-icons/hi";

import "./styles.scss";
export default function UserInformation() {
  const { name, login, location, company, avatar_url, bio } = useSelector(
    (state) => state.user.user
  );

  return (
    <section className="userInformation">
      <img className="userInformation__image" src={avatar_url} alt={login} />
      <h1 className="userInformation__username">{`${name} (@${login})`}</h1>
      <p className="userInformation__bio">{bio}</p>
      <div className="userInformation__companyAndLocation">
        {company && (
          <span className="userInformation__company">
            <HiOfficeBuilding className="userInformation__company__icon" />
            {company}
          </span>
        )}
        {location && (
          <span className="userInformation__location">
            <HiLocationMarker className="userInformation__location__icon" />
            {location}
          </span>
        )}
      </div>
    </section>
  );
}
