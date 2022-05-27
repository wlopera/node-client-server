const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

const main = async () => {
  const response = await axios.get("https://rickandmortyapi.com/api/character");

  const {
    data: { results },
  } = response;

  let characters = results
    .map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
      };
    })
    .map((person) => Object.values(person).join(","))
    .join("\n");

  characters = "ID,NOMBRE,ESTADO,ESPECIES\n".concat(characters);

  //await fs.writeFile(path.join(__dirname, "data.csv"), characters);
  //   console.log(path.join(__dirname, "data.csv"));
  console.log(characters);
};

main();
