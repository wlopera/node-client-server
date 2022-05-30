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
    body: Service.getUsers(),
  });
});

// GET por identificador: ruta, controlador
app.get("/:id", (req, res) => {
  const {
    params: { id },
  } = req;
  const user = Service.getUser(id);
  res.json({
    message: `Usuario ${id}`,
    body: user,
  });
});

// PUT - Modificar usuario: ruta, controlador
app.put("/:id", (req, res) => {
  const {
    params: { id },
  } = req;

  const { body: newUser } = req;
  const user = Service.updateUser(id, newUser);
  res.json({
    message: `Usuario Modificado ${user.id}`,
    body: user,
  });
});

// DELETE - Eliminar usuario: ruta, controlador
app.delete("/:id", (req, res) => {
  const {
    params: { id },
  } = req;

  const identifier = Service.deleteUser(id);
  res.json({
    message: `Usuario Borrado ${identifier}`,
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
