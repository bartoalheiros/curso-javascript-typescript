/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/

// const expressaoAnd = true && true && false && true;
// console.log(expressaoAnd);
// Saída: false

// const expressaoOr = false || true;
// console.log(expressaoOr);

// Saída: true

// const expressaoOr = false || false;
// console.log(expressaoOr);

// Saída: false

// const expressaoOr = false || false || true || false;
// console.log(expressaoOr);

// Saída: true

// const usuario = 'Luiz'; // form usuário digitou
// const senha = '123456'; // form usuário digitou

// const vaiLogar = usuario === 'Luiz' && senha === '123456';
// console.log(vaiLogar);

// Saída: true

const usuario = 'Luiz'; // form usuário digitou
const senha = '123456'; // form usuário digitou

//                       True                False
const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log(vaiLogar);
