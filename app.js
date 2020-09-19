const express = require('express');
const mysql = require('mysql');

const server = express();

//Dire à express de mettre les données venants du formulaire dans BODY
server.use(express.urlencoded({ extended: false }));

const users = [
  {id:1, nom: "Lisangola", prenom: "christian" },
  {id:2, nom: "Kingombe", prenom: "Josephine" },
  {id:3, nom: "Kalala", prenom: "Jonathan" },
  {id:4, nom: "Nyembo", prenom: "Thezy" }
]

server.get('/apprenants', (req, res) => {
  return res.send(users)
});

server.get('/apprenants/:id', (req, res) => {
   return res.send("Salut")
});

//Définition du port
const PORT = (process.env.PORT || 3012);
server.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}`);
});
