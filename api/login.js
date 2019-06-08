import Conexion from "../conection";

const consultLogin = async req => {
  let conec = await Conexion();
  let tabla = "`usuarios`";

  return new Promise((resolve, reject) => {
    conec.query(
      `SELECT * FROM ${tabla} WHERE mail= '${req.mail}' and pasword='${
        req.password
      }'`,
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
const respuestaLogin = async req => {
  let retorno;

  try {
    retorno = await consultLogin(req);
  } catch (err) {
    console.info(err);
  }

  if (retorno.length === 0) {
    return { respuesta: "no existe el usuario" };
  } else {
    return retorno;
  }
};

export default respuestaLogin;

/*
// Promise
getPersonas()
  .then(personas => console.info(personas))
  .catch(error => console.info(error));
*/
