let mysql = require("mysql");
import Conexion from "../conection";

const getPersonas = async () => {
  let conec = await Conexion();

  return new Promise((resolve, reject) => {
    conec.query(
      // "SELECT nombre, apellido, biografia FROM personaje WHERE personaje_id = ?",
      // [1],
      "SELECT * FROM usuarios ",
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }

        conec.end();
      }
    );
  });
};

// Async / Await
const getAll = async () => {
  let personas;

  try {
    personas = await getPersonas();
  } catch (err) {
    console.info(err);
  }

  return personas;
};

export default getAll;

/*
// Promise
getPersonas()
  .then(personas => console.info(personas))
  .catch(error => console.info(error));
*/
