/*
&& -> false && true -> false
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

// function falaOi () {
//   return 'Oi';
// }

// let vaiExecutar = 'Joãozinho';

// console.log(vaiExecutar && falaOi());

// o OR retorna o primeiro valor verdadeiro da expressão
// console.log(0 || false || null || 'Luiz Otávio' || true);

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || 'Joãozinho' || d || e);