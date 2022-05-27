const express = require("express");
// const dataMock = require("./src/MOCK_DATA.json");
const Service = require("./src/service");

const app = express();
const port = 3000;

// Permitir recibir datos en NodeJS
app.use(express.json());

// GET: ruta, controlador
app.get("/", (req, res) => {
  res.json({
    message: "Lista de usuarios",
    body: Service.getUser(),
  });
});

// POST: ruta, controlador
app.post("/", (req, res) => {
  const { body: newUser } = req;
  const user = Service.createUser(newUser);

  res.status(201).json({
    message: "usuario creado correctamente.",
    body: user,
  });
});

// GET: ruta, controlador
// app.get("/mock", (req, res) => {
//   res.json({
//     message: "Lista de usuarios",
//     body: dataMock,
//   });
// });

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
