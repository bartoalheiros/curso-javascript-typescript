let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
// const aux = varA;

// varA = varB;
// varB = varC;
// varC = aux;

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);