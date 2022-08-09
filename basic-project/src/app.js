const express = require('express');
const getUserById = require('./helpers/getUserById');
const getUserIndex = require('./helpers/getUserIndex');
const app = express();
const User = require('./models/User');

const users = [];

app.get("/", (request, response) => {
  return response.json({
    message: "Hello World"
  })
});

app.post("/user", (request, response) => {
  const { nome, idade, sexo, dataDeNascimento } = request.body;
  const { token } = request.headers;

  const newUser = new User({
    nome,
    idade,
    sexo,
    dataDeNascimento,
    token
  });

  users.push(newUser);

  return response.json({
    message: "User created",
    id: newUser.id
  });
});

app.get("/user/:id", (request, response) => {
  const id = request.params.id;

  const selectedUser = getUserById(users, id);

  return response
    .status(200)
    .json({
      user: selectedUser
    })
});

app.put("/user/:id", (request, response) => {
  const {
    dataDeNascimento,
    nome,
    idade,
    sexo
  } = request.body;
  const { id } = request.params;

  if (!id) {
    return response.json({
      error: "Missing user id"
    })
  }

  const userIndex = getUserIndex(users, id);

  if (dataDeNascimento) {
    users[userIndex].dataDeNascimento = dataDeNascimento;
  }

  if (nome) {
    users[userIndex].nome = nome;
  }

  if (idade) {
    users[userIndex].idade = idade;
  }

  if (sexo) {
    users[userIndex].sexo = sexo;
  }

  return response.status(201).end();
});


app.get("/users", (request, response) => {
  return response.json({
    users
  });
})


module.exports = app;