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
  "🍪": "Cookie"
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
    <div className="App">
      <h1> {headingText} </h1>
      <input
        onChange={emojiInputHandler}
        style={{
          width: "50%"
        }}
      ></input>
      <h2> {meaning} </h2>

      <h3> Emojis We Know </h3>
      {emojiList.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2.3rem",
              padding: "10px",
              cursor: "pointer"
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
