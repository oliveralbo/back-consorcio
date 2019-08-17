import express from "express";
import "babel-polyfill";
import bodyParser from "body-parser";
import cors from "cors";
import departments from "./routes/departments";
import users from "./routes/users";

const app = express();
const router = new express.Router();

// const usuarios = {
//   nombre: "pepe3",
//   apellido: "perez3",
//   user_name: "peperez2",
//   email: "pe@perez2.cpom",
//   pasword: "pepe2"
// };

app.use(cors()); //esto es para dev. permite dos puetos (3000 y 5000) en local
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(departments, users);

app.use(router);

app.listen(5000, () => console.info("Server started in port 5000!"));
