// codigo del cuadrado
console.group("cuadrados")
const ladocuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm");

const perimetrocuadrado = ladocuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetrocuadrado + "cm");

const areacuadrado = ladocuadrado * ladocuadrado;
console.log("El área del cuadrado mide: " + areacuadrado + "cm^2");
console.groupEnd();

// codigo del triangulo 
console.group("triangulos")
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;

console.log(
    "Los lados del triangulo miden: " 
    + ladotriangulo1 
    + "cm, " 
    + ladotriangulo2 
    + "cm, " 
    + basetriangulo
    + "cm"
);
const alturatriangulo = 5.5;
console.log("La altura del triangulo mide: " + alturatriangulo + "cm");

const perimetrotriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
console.log("El perimetro del triangulo mide: " + perimetrotriangulo + "cm");

const areatriangulo = (basetriangulo * alturatriangulo) / 2;
console.log("El área del triangulo mide: " + areatriangulo + "cm^2");
console.groupEnd();

// codigo del circulo 
console.group("circulo")

 // radio
const radiocirculo = 4;
console.log("El radio del circulo es: " + radiocirculo + "cm");

 // diametro
 const diametrocirculo = radiocirculo * 2;
 console.log("El diametro del circulo es: " + diametrocirculo + " cm");

 // pi
 const pi = Math.PI;
 console.log("PI es:" + pi );

 // circunferencia
const perimetrocirculo = diametrocirculo * pi;
console.log("El perimetro del circulo es: " + perimetrocirculo + " cm");


// area
const areacirculo = (radiocirculo * radiocirculo) * pi;
console.log("El area del circulo es: " + areacirculo + " cm^2");

console.groupEnd();