# node-client-server
Cliente servidor en NodeJS

## Crear cliente para consultar The Rick and Morty API
 * https://rickandmortyapi.com/

#### Crear archivo: client.js
```
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

  await fs.writeFile(path.join(__dirname, "data.csv"), characters);
  //   console.log(path.join(__dirname, "data.csv"));
  console.log(characters);
};

main();
```
#### Procesar el archivo creado con nodeJS $>node client.js
![Captura1](https://user-images.githubusercontent.com/7141537/170783194-9117398d-95da-48f5-a4b3-fd7d570ea27a.PNG)

## Agregar Servidor basico de NodeJS > server.js
```
const express = require("express");
const data = require("./MOCK_DATA.json");
const port = 3000;
const app = express();

// GET: ruta, controlador
app.get("/", (req, res) => {
  res.json({
    message: "Lista de usuarios",
    body: data,
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
```

* Usar https://www.mockaroo.com/ para crear data Dummy Json
![Captura](https://user-images.githubusercontent.com/7141537/170792938-52b18704-b14b-4e4b-babf-afa57e954a98.PNG)

## Salida desde postman
![Captura1](https://user-images.githubusercontent.com/7141537/170792941-265205f5-ac3b-4f7e-8080-2c0986cc9e1f.PNG)


