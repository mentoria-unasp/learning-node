const { randomUUID } = require("crypto");

class User {
  id;
  nome;
  idade;
  sexo;
  dataDeNascimento;
  token;

  constructor({
    nome,
    idade,
    sexo,
    dataDeNascimento,
    token
  }) {
    this.id = randomUUID();
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.dataDeNascimento = dataDeNascimento;
    this.token = token;
  }
}

module.exports = User;