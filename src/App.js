import { useState, useEffect } from "react";

import "./App.css";
import CharacterGrid from "./components/CharacterGrid";
import WelcomeBlock from "./components/WelcomeBlock";

function App() {
  const [gameState, setGameState] = useState("welcome");
  const [allCharacters, setAllCharacters] = useState([]);
  const [limit, setLimit] = useState(24);

  useEffect(() => {
    fetch("https://breakingbadapi.com/api/characters")
      .then((req) => req.json())
      .then((data) => setAllCharacters(data))
      .catch(() =>
        alert(
          "breakingbadapi.com is down\n\nThis app depends on it to function\n\nPlease try again later"
        )
      );
  }, []);

  if (gameState === "welcome") {
    return (
      <div className="App">
        <WelcomeBlock />
        <button
          onClick={() => {
            setGameState("game");
          }}
        >
          New Game
        </button>
      </div>
    );
  }

  if (gameState === "game") {
    return (
      <div className="App">
        <CharacterGrid characters={allCharacters} limit={limit} />
      </div>
    );
  }
}

export default App;
