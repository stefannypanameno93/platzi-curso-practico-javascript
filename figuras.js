//Código del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden:" + ladoCuadrado + " centímetros");

function perimetroCuadrado(lado) {
    return lado * 4;
};
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " centímetros");

function areaCuadrado(lado) {
    return lado*lado;
};
// console.log("El área del cuadrado es: " + areaCuadrado + " centímetros");

console.groupEnd();

//Código del triángulo

console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log("Los lados del triángulo miden: "
// + ladoTriangulo1 
// + " centímetros, " 
// + ladoTriangulo2 
// + " centímetros, y su base mide: " 
// + baseTriangulo 
// + " centímetros.");

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + " centímetros");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};
// console.log("El perímetro del triángulo es de: " + perimetroTriangulo + " centímetros cuadrados");

function areaTriangulo(base, altura)  {
    return (base * altura)/2
};
// console.log("El área del triángulo es de: " + areaTriangulo + " centímetros cuadrados");

console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es de: " + radioCirculo + " centímetross");

//Diámetro
function diametroCirculo(radio) {
    return radio * 2
};
// console.log("El diámetro del círculo es de: " + diametroCirculo + " centímetros cuadrados");

//Pi
const PI = Math.PI;
console.log("El valor de pi es de: " + PI);

//Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return PI * diametro;
};
// console.log("El períemtro del círculo es de: " + perimetroCirculo + " centímetros cuadrados");

//Área
function areaCirculo(radio) {
    return PI * (radio * radio)
};
// console.log("El área del círculo es de: " + areaCirculo + " centímetros cuadrados");

console.groupEnd();

//Interactuando con el HTML

//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//////////

//Triángulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputLadoTriangulo1");
    const lado1 = parseInt(input1.value);

    const input2 = document.getElementById("inputLadoTriangulo2");
    const lado2 = parseInt(input2.value);

    const input3 = document.getElementById("inputBaseTriangulo");
    const base = parseInt(input3.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(parseInt(perimetro));
}

function calcularAreaTriangulo() {
    
    const input4 = document.getElementById("inputBaseTriangulo1");
    const base = parseInt(input4.value);

    const input5 = document.getElementById("inputAlturaTriangulo");
    const altura = parseInt(input5.value);

    const area = areaTriangulo(base, altura);
    alert(parseInt(area));
}

//////////

//Círculo
function calcularDiametroCirculo() {
    const input6 = document.getElementById("inputRadio");
    const radio = input6.value;

    const diametro = diametroCirculo(radio);
    alert(diametro);
}

function calcularPerimetroCirculo() {   
    const input7 = document.getElementById("inputRadio");
    const radio = input7.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {   
    const input8 = document.getElementById("inputRadio");
    const radio = input8.value;

    const area = areaCirculo(radio);
    alert(area);
}
//////////