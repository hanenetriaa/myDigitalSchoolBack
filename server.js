/** @format */

const express = require("express");
require("dotenv").config();
const cors = require("cors");

//appel de notre base de notre fichier db
const db = require("./config/db");

//appel module consola pour une meilleur visibilté des alerte sur le console log
const { success, error } = require("consola");

// appel de notre port & domain sur notre fichier .env
const PORT = process.env.APP_PORT || 4000;
const DOMAIN = process.env.APP_DOMAIN;
//crée une application express
const app = express();

//Il s'agit d'une mesure de sécurité importante.
app.use(cors());
//express.json() est un middleware express intégré qui convertit le corps de la requête en JSON.
app.use(express.json());
/*express.urlencoded() tout comme express.json() convertit le corps de la requête en JSON,
il exécute également d'autres fonctionnalités telles que : convertir les données de formulaire en JSON, etc. 
*/
app.use(express.urlencoded({ extended: false }));

//on excute notre application avec Listen for connections.
app.listen(PORT, async () => {
  try {
    success({
      message: `server started on PORT ${PORT}` + ` URL \n ${DOMAIN}`,
      badge: true,
    });
  } catch (err) {
    error({
      message: `ennable with server` + err.message,
      badge: true,
    });
  }
});
