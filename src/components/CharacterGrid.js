import CharacterCard from "../components/CharacterCard";
import "./CharacterGrid.css";

function CharacterGrid(props) {
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const shuffledChars = shuffle(props.characters.slice(0, props.limit));
  return (
    <div className="character-grid" onClick={props.clickCharacterCard}>
      {shuffledChars.map((char) => {
        return <CharacterCard key={char.char_id} characterData={char} />;
      })}
    </div>
  );
}

export default CharacterGrid;
