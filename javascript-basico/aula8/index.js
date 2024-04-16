/*
José Bartolomeu tem 34 anos, pesa 100kg,
tem 1.76 de altura e seu IMC é de 32,28
José Bartolomeu nasceu em 1980
*/
const nome = 'José Bartolomeu';
const sobrenome = 'Alheiros Dias Neto';
const idade = 34;
const peso = 100;
const alturaEmM = 1.76;
// Cria um objeto Date para o momento atual
var dataAtual = new Date();
// Obtém o ano atual
var anoAtual = dataAtual.getFullYear();
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;


indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
indiceMassaCorporal = indiceMassaCorporal.toFixed(2);
anoNascimento = (anoAtual - idade) - 1;

console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso} kg,`);
console.log(`tem ${alturaEmM.toFixed(2)} m de altura e seu IMC é de ${indiceMassaCorporal}` );
console.log(`${nome} nasceu em ${anoNascimento}.`);

