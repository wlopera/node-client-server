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
