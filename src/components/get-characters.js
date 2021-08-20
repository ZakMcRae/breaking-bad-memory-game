import CharacterGrid from "./CharacterGrid";

function GetCharacters() {
  const allCharacters = JSON.parse(localStorage.getItem("allCharacters"));
  const limit = 24;

  if (!allCharacters) {
    console.log("Fetching Charater Data");
    const req = fetch("https://breakingbadapi.com/api/characters");
    const resp = req.then((req) => req.json());
    resp.then((data) =>
      localStorage.setItem("allCharacters", JSON.stringify(data))
    );
  }

  return (
    <div>
      <CharacterGrid characters={allCharacters} limit={limit} />
    </div>
  );
}

export default GetCharacters;
