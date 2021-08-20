import img from "../static/images/breaking-bad.png";
import "./WelcomeBlock.css";

function WelcomeBlock(props) {
  return (
    <div className="welcome-block">
      <img className="title-card" src={img} alt="Breaking Bad title card"></img>
      <h1>Breaking Bad memory Game</h1>
      <p>Get a point by clicking a card that has not yet been clicked.</p>
      <p>If you click the same card twice in a round, you lose!</p>
      <p>
        Once all cards in a round have been clicked, a new round starts with
        more cards.
      </p>
    </div>
  );
}

export default WelcomeBlock;
