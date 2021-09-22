import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Spinner } from "react-bootstrap";
import "./styles.scss";

export default function SearchField({
  variant,
  searchIsHappening,
  getTextFromSearchFieldWhenButtonIsClicked,
}) {
  const [inputText, setInputText] = useState("");

  function handleButtonClick() {
    getTextFromSearchFieldWhenButtonIsClicked(inputText);
  }

  function updateInputText(newText) {
    setInputText(newText);
  }

  return (
    <div className={`searchField searchField--${variant}`}>
      <input
        className="searchField__input"
        type="text"
        placeholder="rosig"
        value={inputText}
        onChange={(event) => updateInputText(event.target.value)}
      />
      <button
        className="searchField__button"
        onClick={handleButtonClick}
        disabled={searchIsHappening}
      >
        {searchIsHappening ? (
          <Spinner animation="border" variant="light" size="sm" />
        ) : (
          <BsSearch className="searchField__button__icon" />
        )}
      </button>
    </div>
  );
}
