let mysql = require("mysql");
import usuarios from "../models/usuario";
import Conexion from "../conection";

const postUser = async req => {
  let conec = await Conexion();
  let query = conec.query(
    //Este mismo proceso sirve tanto para UPDATE como DELETE.
    "INSERT INTO usuarios(nombre, apellido, departamento_id, telefono,celular, email, categoria, create) VALUES(?, ?, ?,?,?, ? ,? ,?)",
    [
      req.nombre,
      req.apellido,
      req.departamento,
      req.telefono,
      req.celular,
      req.email,
      req.categoria,
      req.creado
    ],
    function(error, result) {
      if (error) {
        throw console.log(error);
      } else {
        console.log(result + "insert ok");
        conec.end();
      }
    }
  );
};

// Async / Await
const insertUser = async req => {
  let retorno;

  try {
    retorno = await postUser(req);
  } catch (err) {
    console.info(err);
  }

  return retorno;
};

export default insertUser;

/*
// Promise
getPersonas()
  .then(personas => console.info(personas))
  .catch(error => console.info(error));
*/
