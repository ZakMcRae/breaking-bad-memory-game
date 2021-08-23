import { useState, useEffect } from "react";

import "./App.css";
import CharacterGrid from "./components/CharacterGrid";
import InfoBlock from "./components/InfoBlock";

function App() {
  const [gameState, setGameState] = useState("highest score");
  const [allCharacters, setAllCharacters] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [round, setRound] = useState(1);
  const [clickedCards, setClickedCards] = useState([]);

  const cardsToShow = 4;
  const highestScore = 40;

  // fetch api data on page load - first time only
  useEffect(() => {
    console.log("Fetching API Data");
    fetch("https://breakingbadapi.com/api/characters")
      .then((req) => req.json())
      .then((data) => setAllCharacters(data))
      .catch(() =>
        alert(
          "breakingbadapi.com is down\n\nThis app depends on it to function\n\nPlease try again later"
        )
      );
  }, []);

  // update scoreboard and handle new round
  useEffect(() => {
    if (currentScore === highestScore) {
      setGameState("highest score");
    }

    if (bestScore < currentScore) {
      setBestScore(currentScore);
    }

    if (clickedCards.length === round * cardsToShow) {
      startNewRound();
    }
  }, [clickedCards, bestScore, currentScore, round]);

  const startNewGame = () => {
    setGameState("game");
    setCurrentScore(0);
    setRound(1);
    setClickedCards([]);
  };

  const startNewRound = () => {
    setClickedCards([]);
    setRound((prevRound) => prevRound + 1);
  };

  const clickCharacterCard = (e) => {
    const id = e.target.id;

    if (clickedCards.includes(id)) {
      setGameState("game over");
    } else {
      setClickedCards((prevClickedCards) => [...prevClickedCards, id]);
      setCurrentScore((prevCurrentScore) => prevCurrentScore + 1);
    }
  };

  // Welcome Page
  if (gameState === "welcome") {
    return (
      <div className="welcome-block">
        <InfoBlock
          title="Breaking Bad memory Game"
          body="Get a point by clicking a card that has not yet been clicked. If you click the same card twice in a round, you lose! Once all cards in a round have been clicked, a new round starts with more cards.
        "
        />
        <button onClick={startNewGame}>New Game</button>
      </div>
    );
  }

  // Highest Score Possible Page
  if (gameState === "highest score") {
    return (
      <div className="highest score">
        <InfoBlock
          title="You win!"
          body="You have achieved the highest possible score!"
        />
        <button onClick={startNewGame}>New Game</button>
      </div>
    );
  }

  // Game Over Page
  if (gameState === "game over") {
    return (
      <div className="game-over">
        <InfoBlock title="Game Over" body={`Score: ${currentScore}`} />
        <button onClick={startNewGame}>New Game</button>
      </div>
    );
  }

  // Game Page
  if (gameState === "game") {
    return (
      <div className="App">
        <div className="score-board">
          <h1>Round {round}</h1>
          <p>Current Score: {currentScore}</p>
          <p>Best Score: {bestScore}</p>
        </div>
        <CharacterGrid
          characters={allCharacters}
          limit={round * cardsToShow}
          clickCharacterCard={clickCharacterCard}
          startNewRound={startNewRound}
          clickedCards={clickedCards}
          round={round}
        />
      </div>
    );
  }
}

export default App;
