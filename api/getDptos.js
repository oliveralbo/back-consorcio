let mysql = require("mysql");
import Conexion from "../conection";

const getDepartments = async () => {
  let conec = await Conexion();

  return new Promise((resolve, reject) => {
    conec.query("SELECT id,pisoYDpto FROM `departamentos`", (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }

      conec.end();
    });
  });
};

// Async / Await
const getAllDptos = async () => {
  let departamentos;

  try {
    departamentos = await getDepartments();
  } catch (err) {
    console.info(err);
  }

  return departamentos;
};

export default getAllDptos;
