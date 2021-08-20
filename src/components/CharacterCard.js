import "./CharacterCard.css";

function CharacterCard(props) {
  return (
    <div className="character-card" id={props.characterData.char_id}>
      <img src={props.characterData.img} alt={props.characterData.name}></img>
      <p>{props.characterData.name}</p>
    </div>
  );
}

export default CharacterCard;
