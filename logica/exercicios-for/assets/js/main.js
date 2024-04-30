const elementos = [
  {tag: 'p', texto: 'Frase 1'}, // 0
  {tag: 'div', texto: 'Frase 2'}, // 1
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');

function renderiza (i) {
  const {tag, texto} = elementos[i];
  return `<${tag}> ${texto} </${tag}>`;
}

for (i = 0; i < elementos.length; i++) {
  container.innerHTML += renderiza(i);
}
