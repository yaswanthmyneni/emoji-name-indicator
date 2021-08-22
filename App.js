import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍲": "Pot of Food",
  "🥫": "Canned Food",
  "🥘": "Shallow Pan of Food",
  "🍛": "Curry Rice",
  "🧆": "Falafel",
  "🥙": "Stuffed Flatbread",
  "🍞": "Bread",
  "🧈": "Butter",
  "🍨": "Ice Cream",
  "🍟": "French Fries",
  "🍪": "Cookie",
};

var emojiList = Object.keys(emojiDictionary);

var headingText = "WELCOME ";
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have in database!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div
      className="App"
      style={{
        backgroundColor: "aqua",
        padding: "1.5rem 0rem",
        width: "70%",
        margin: "auto",
      }}
    >
      <h1 style={{ color: "green", fontSize: "2.7rem" }}> {headingText} </h1>
      <input
        onChange={emojiInputHandler}
        style={{
          width: "30%",
        }}
      ></input>
      <h2 style={{ color: "red" }}> {meaning} </h2>

      <h3 style={{ color: "green" }}> Emojis We Know are </h3>
      {emojiList.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2.3rem",
              margin: "1rem",
              cursor: "pointer",
              border: "1px solid green",
              borderRadius: "0.2rem",
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
