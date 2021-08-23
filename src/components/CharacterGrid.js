import CharacterCard from "../components/CharacterCard";
import "./CharacterGrid.css";

function CharacterGrid(props) {
  return (
    <div className="character-grid" onClick={props.clickCharacterCard}>
      {props.characters.slice(0, props.limit).map((char) => {
        return <CharacterCard key={char.char_id} characterData={char} />;
      })}
    </div>
  );
}

export default CharacterGrid;
