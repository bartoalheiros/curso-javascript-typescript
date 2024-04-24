// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
// const data = new Date('2019-04-20T20:20:59.2000'); // 01/01/1970 Timestamp unix ou época unix
const data = new Date(1713982605396);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now());
// console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
// console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
