import "./styles.css";
import React, { useState } from "react";

var genres = {
  Action: [
    { name: "Infernal Affairs", lang: "Cantonese", rating: "3.9" },
    { name: "Vikram", lang: "Tamil", rating: "3.9" },
    { name: "Snowpiercer", lang: "English, Korean", rating: "3.7" }
  ],
  Comedy: [
    { name: "Piku", lang: "Hindi", rating: "3.7" },
    { name: "Paddington", lang: "English", rating: "4.2" },
    { name: "Jan-e-Man", lang: "Malayalam", rating: "3.5" }
  ],
  Romance: [
    { name: "Rosaline", lang: "English", rating: "3.3" },
    { name: "Anand", lang: "Telugu", rating: "4.0" },
    { name: "The Handmaiden", lang: "Korean", rating: "4.4" }
  ],
  Horror: [
    { name: "Bhoothakalam", lang: "Malayalam", rating: "3.5" },
    { name: "Barbarian", lang: "English", rating: "3.7" },
    { name: "I Saw The Devil", lang: "Korean", rating: "4.0" }
  ]
};

var genresList = Object.keys(genres);

export default function App() {
  var [crntGenre, setCrntGenre] = useState("Action");

  function genreHandler(genre) {
    setCrntGenre(genre);
  }

  return (
    <div className="App">
      <h1>MovieWise</h1>
      <h2>Alright. What are we watching next?</h2>
      <h3>Pick a Genre: </h3>
      <div class="buttons">
        {genresList.map((item) => {
          return (
            <button key={item} onClick={() => genreHandler(item)}>
              {item}
            </button>
          );
        })}
      </div>
      <div>
        <ul>
          {genres[crntGenre].map((item) => {
            return (
              <li key={item.name}>
                <h4>{item.name}</h4>
                <small>{item.lang}</small>
                <p>
                  Letterboxd Rating: <span>{item.rating}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
