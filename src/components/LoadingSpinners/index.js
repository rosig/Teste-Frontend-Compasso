import { Spinner } from "react-bootstrap";

import "./styles.scss";

export default function LoadingSpinners({ message }) {
  return (
    <div className="loadingSpinners">
      <p className="loadingSpinners__message">{message}</p>
      <div className="loadingSpinners__icons">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="dark" />
      </div>
    </div>
  );
}
