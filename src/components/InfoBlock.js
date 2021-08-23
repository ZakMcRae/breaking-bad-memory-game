import img from "../static/images/breaking-bad.png";
import "./InfoBlock.css";

function InfoBlock(props) {
  return (
    <div className="info-block">
      <img className="title-card" src={img} alt="Breaking Bad title card"></img>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
}

export default InfoBlock;
