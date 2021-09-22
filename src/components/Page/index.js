import "./styles.scss";

export default function Page({ children }) {
  return (
    <div className="page">
      <main className="page__content">{children}</main>
    </div>
  );
}
