// PROMEDIO

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcum = 0, nuevoElemento) {
    return valorAcum + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

// MEDIANA

const list1 = [100, 3000, 500, 30, 902];

const mitadLista = parseInt(list1.length / 2);

const calcularMediana = (list1) =>
  list1.length % 2 === 0
    ? (list1[mitadLista - 1] + list1[mitadLista]) / 2
    : list1[mitadLista];

mediana = calcularMediana(list1.sort((a, b) => a - b));

// MODA

const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

const lista1Count = {};

NUMBERS.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

const lista1Array = Object.entries(lista1Count).sort(function (
  valorAcum,
  nuevoValor
) {
  return valorAcum[1] - nuevoValor[1];
});

const Moda = lista1Array[lista1Array.length - 1];

//moda aparte

const NUMBERSARRAY = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}

console.log(mode(NUMBERSARRAY)); //5
