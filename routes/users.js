import express from "express";
import insertUser from "../api/insertUser";
import getAllUsers from "../api/getUsers";
import respuestaLogin from "../api/login";

const router = new express.Router();

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

router.get("/getUsers", async (req, res) => {
  console.log(req.originalUrl);
  const retorno = await getAllUsers();
  res.send(retorno);
});

module.exports = router;
