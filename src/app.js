const express = require("express");
const responseHandlers = require("./utils/handleResponses");
const db = require("./utils/database");
const usersRoutes = require("./users/users.router");
const initModels = require("./models/initModels");

const app = express();
app.use(express.json());

db.authenticate()
  .then(() => {
    console.log("credenciales correctas");
  })
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log("base de datos sincronizado"))
  .catch((error) => {
    console.error(error);
  });

initModels();

app.get("/", (req, res) => {
  responseHandlers.success({
    res,
    status: 200,
    message: "Servidor inicializado correctamente",
    data: {
      users: "http://localhost:9000/api/v1/users",
      conversations: "http://localhost:9000/api/v1/conversations",
    },
  });
});

app.use("/api/v1", usersRoutes);

//? Esta debe ser la ultima ruta en mi app
app.use("*", (req, res) => {
  responseHandlers.error({
    res,
    status: 404,
    message: "URL not found, please try with http://localhost:9000/",
  });
});

app.listen(9000, () => {
  console.log("Server started at port 9000");
});
