function meuEscopo () {
  const form = document.querySelector('.form'); // seleciona qualquer elemento da página

  function recebeEventoForm (evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    console.log(nome.value, sobrenome, peso, altura);
  }

  form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();

// // se a variavel for declarada dentro de uma funcao, ela faz parte do escopo local daquela
// // funcao

// function meuEscopo () {
//   let nome = 'Luiz'; // faz parte do escopo local
// }

// meuEscopo();

// qualquer variavel declarada num arquivo javascript faz parte do escopo global. ex:

// let nome = 'Luiz'; // faz parte do escopo global