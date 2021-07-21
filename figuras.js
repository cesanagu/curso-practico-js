//codigo cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}

// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//codigo triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   "Los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// console.log("El perimetro del cuadrado es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// codigo del circulo

console.group("circulos");

// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

//html cuadrado

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//html triangulo

function altura(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base) {
    alert("isoceles");
    const altura = Math.sqrt(lado1 ** 2 - base ** 2 / 4);
    console.log(altura);
  } else {
    alert("no lo se");
  }
}



//html circulo

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
