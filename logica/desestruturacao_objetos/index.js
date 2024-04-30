const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    // rua: 'Av Brasil',
    numero: 320
  }
};

// atribuicao comum
// const nome = pessoa.nome;
// console.log(nome);

// atribuicao via desestruturacao
// const { nome, sobrenome } = pessoa;
// console.log(nome, sobrenome);

// atribuicao via desestruturacao
// const { nome, sobrenome, endereco } = pessoa;
// console.log(endereco);

// Atribuicao via desestruturacao
// const { 
//   endereco: { rua: r = 12345, numero },
//   endereco 
// } = pessoa;
// console.log(r, numero, endereco);

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);