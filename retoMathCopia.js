function alturaTriangulo(lado1, lado2, base) {
    if(lado1 != lado2) {
        alert("El triángulo no es isóceles")
    }
        else {
            return altura = Math.sqrt((lado1*lado1)-((base*base)/4)); 
        }
    
}

//Conectando con el HTML

function calcularAltura() {
    const input1 = document.getElementById("inputLado1");
    const lado1 = input1.value;
    
    const input2 = document.getElementById("inputLado2");
    const lado2 = input2.value;

    const input3 = document.getElementById("inputBase");
    const base = input3.value;

    const altura = alturaTriangulo(lado1, lado2, base);
    alert("La altura del triángulo isóceles es de: " + altura);
}



// alturaTriangulo(6, 6, 4)