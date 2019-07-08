import express from "express";
import "babel-polyfill";
// import getAllDptos from "./api/getDptos";
import insertUser from "../api/insertUser";
// import getAllUsers from './api/getUsers'
// import respuestaLogin from "./api/login";
import bodyParser from "body-parser";

const app = express();
const router = new express.Router();

function postUser() {
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
          res.send(retorno);
        } catch (error) {
          console.error(error);
        }
      });
    }
  });
}

export default postUser;
