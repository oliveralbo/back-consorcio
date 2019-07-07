import express from "express";
import "babel-polyfill";
import getAllDptos from "./api/getDptos";
import insertUser from "./api/insertUser";
import respuestaLogin from "./api/login";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const router = new express.Router();

// const usuarios = {
//   nombre: "pepe3",
//   apellido: "perez3",
//   user_name: "peperez2",
//   email: "pe@perez2.cpom",
//   pasword: "pepe2"
// };

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post("/insertarUsuario", async (req, res) => {
  if (req.method === "POST") {
    let body = "";
    let objeto = {};
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      try {
        objeto = JSON.parse(body);
        let retorno = await insertUser(objeto);
        res.send("usuario y departamento ok");
      } catch (error) {
        console.error(error);
      }
    });
  }
});

router.post("/login", async (req, res) => {
  if (req.method === "POST") {
    let body = "";
    let objeto = {};
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      try {
        objeto = JSON.parse(body);
        let retorno = await respuestaLogin(objeto);
        res.send(retorno);
      } catch (error) {
        console.error(error);
      }
    });
  }
});

router.get("/getDptos", async (req, res) => {
  console.log(req.originalUrl);
  const retorno = await getAllDptos();
  res.send(retorno);
});

// router.get("/traerUsuarios", async (req, res) => {
//   console.log(req.originalUrl);
//   const retorno = await getAll();
//   res.send(retorno);
// });

app.use(router);

app.listen(5000, () => console.info("Server started in port 5000!"));
