function calcularMedia(lista){
  //  let sumalista = 0;
    //for (let i = 0; i < lista.length; i++) {
       // sumalista1 = sumalista + lista[i];       
//}
const sumalista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);
const promediolista = sumalista / lista.length;
return promediolista;
}
// mediana


function calcularMediana(lista2){
  const sumalista2 = lista2.reduce(
      function (valorAcumulado2 = 0, nuevoElemento2){
          return valorAcumulado2 + nuevoElemento2;
      }
  );
  const promediolista2 = sumalista2 / lista2.length;
  return promediolista2;
  }
const lista2 = [
    100,
    200,
    500,
    400000000,
    800,
];
var datos = lista2;
datos.sort(function(a, b){
    return a - b;
})
const mitadlista2 = parseInt(lista2.length / 2);

function espar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}
let mediana;

if (espar(lista2.length)){ 
    const elemento1 = lista2[mitadlista2];
    const elemento2 = lista2[mitadlista2 + 1];

    const promedioelemento1y2 = calcularMediana([
        elemento1,
        elemento2
    ]);
} else {
    mediana = lista2[mitadlista2];
}
// moda 

const lista3 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];
  
  const lista3Count = {};
  
  lista3.map(
    function (elemento) {
      if (lista3Count[elemento]) {
        lista3Count[elemento] += 1;
      } else {
        lista3Count[elemento] = 1;
      }
    }
  );
  
  const lista3Array = Object.entries(lista3Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  const moda = lista3Array[lista3Array.length - 1];