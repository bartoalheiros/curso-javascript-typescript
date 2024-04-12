/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valor

Referência (mutável) - array, object, function

*/

const a = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);

// let a = [1, 2, 3];
// let b = a;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// let a = [1, 2, 3];
// let b = [...a]; // passando o valor de a para b
// let c = b;
// console.log(`(original) A, B: `, a, b);

// a.push(4); // insere o numero 4 no final do array
// console.log(`(adicionado o 4) A, B: `, a, b);

// b.pop(); // retira o numero 4 no final do array
// console.log(`A, B: `, a, b);

// a.push('Luiz');
// console.log(a, c);

// // Passagem por valor
// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

