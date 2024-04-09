const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `Raíz quadrada: <strong>${numero ** 0.5}</strong> <br />`;
texto.innerHTML += `<strong>${numero}</strong> é inteiro: <strong>${Number.isInteger(numero)}</strong> <br />`;
texto.innerHTML += `É NaN: <strong>${Number.isNaN(numero)}</strong> <br />`;
texto.innerHTML += `Arredondando para baixo: <strong>${Math.floor(numero)}</strong> <br />`;
texto.innerHTML += `Arredondando para cima: <strong>${Math.ceil(numero)}</strong> <br />`;
texto.innerHTML += `Com duas casas decimais: <strong>${numero.toFixed(2)}</strong> <br />`;
