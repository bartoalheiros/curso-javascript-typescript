// ECMAScript 2015 (ES6)
var nome = 'Luiz';
var nome = 'Otávio';

console.log(nome);

// o let não permite redeclarar variáveis, o var sim.

let nome = 'Luiz';
let nome = 'Otávio';

console.log(nome);

/* Não se deve criar variáveis sem var, const e let. ex:
  
  nome = 'Luiz';

  console.log(nome);

  Pois assim se cria uma variável global no sistema.
*  
*/