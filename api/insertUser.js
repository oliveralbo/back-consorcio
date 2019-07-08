let mysql = require("mysql");
import usuarios from "../models/usuario";
import Conexion from "../conection";

const postUser = async req => {
  let conec = await Conexion();

  let created = new Date();
  let query = conec.query(
    //Este mismo proceso sirve tanto para UPDATE como DELETE.
    "INSERT INTO usuarios(nombres, apellidos, departamento_id, telefono_fijo ,telefono_celular, email, tipo_usuario, created_at) VALUES(?, ?, ?,?,?, ? ,? ,?)",
    [
      req.nombres,
      req.apellidos,
      req.departamento_id,
      req.telefono_fijo,
      req.telefono_celular,
      req.email,
      req.tipo_usuario,
      created
      // req.created_at
    ],
    function(error, result) {
      if (error) {
        throw console.log(error);
      } else {
        return "insert ok " + result.insertId;
      }
    }
  );
  conec.end();
  return query;
};

// Async / Await
const insertUser = async req => {
  let retorno;
  try {
    retorno = await postUser(req);
  } catch (err) {
    console.info(err);
  }

  return retorno.values;
};

export default insertUser;
