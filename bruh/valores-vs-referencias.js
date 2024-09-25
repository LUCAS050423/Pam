console.log('copia por valor vs. preferencia');

var primitivo1 = 1;
var primitivo2 = primitivo1; //copia o valor
primitivo = 2;
console.log(primitivo1); //imprime1
console.log(primitivo2); //imprime2

var objeto1 = {x: 1};
var objeto2 = objeto1; //copia a referencia
objeto2.x = 2;

console.log(objeto1.x); //imprime 1
console.log(objeto2.x); //imprime 2
