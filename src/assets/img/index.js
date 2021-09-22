import NothingResearchedImage from "./data/NothingResearched.png";
import UserNotFoundImage from "./data/UserNotFound.png";
import GenericErrorImage from "./data/GenericError.png";

export default function Image(imageName) {
  switch (imageName) {
    case "NothingResearchedImage":
      return NothingResearchedImage;
    case "UserNotFoundImage":
      return UserNotFoundImage;
    case "GenericErrorImage":
      return GenericErrorImage;
    default:
      break;
  }
}
