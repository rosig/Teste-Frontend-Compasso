import "./styles.scss";

export default function ExceptionResult({ message, image }) {
  return (
    <section className="exceptionResult">
      <p className="exceptionResult__message">{message}</p>
      <img className="exceptionResult__image" src={image} alt={message} />
    </section>
  );
}
