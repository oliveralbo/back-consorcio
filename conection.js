let mysql = require("mysql");

const Conexion = () => {
  let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login",
    port: 3306
  });

  connection.connect(error => {
    if (error) {
      throw error;
    } else {
      console.log("Conexion correcta.");
    }
  });
  return connection;
};

export default Conexion;
