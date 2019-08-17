import express from "express";
import getAllDptos from "../api/getDptos";

const router = new express.Router();

export default router.get("/getDptos", async (req, res) => {
  const retorno = await getAllDptos();
  res.send(retorno);
});
