//var, const & let
// var permite que as informações contidas no seu scopo sejam acessadas de forma publica, diferente de const e let, que não permitam esse comportamenteo normalmente.

//const é uma variável feita somente para leitura;
//use Let somente quando vc quiser realmente reatribuir o valor da variavel;

{
  var car = "uno";
}

//console.log(car);

{
  const car2 = "sonic";
}

//console.log(car2);

let car3 = "hb20";

//console.log(car3);

const person = { name: "Rui Frank" };

person.name = { name: "Silmara" }; //Mutação

console.log(person);

//exepmlo de loop, Nesse caso abaixo o comando var, permite que o incremento do loop 'i' seja acessivel fora do scopo desse método, o que não faz sentido, pois queremos que ele seja acessivel somente dentro do metodo

//for (var i = 0; i < 10; i++) {
//console.log(i);
//}

//console.log(i);

//Mas dessa forma abaixo, a variavel 'i' fica inacessivel fora do scopo do metodo
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i + " concatenação");
