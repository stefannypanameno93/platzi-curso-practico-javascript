function calcularMediaAritmetica(lista){
    
    const sumaLista = lista.reduce(
        function (valorAcumulado=0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};
        
        var lista = new Array();
        var listaOrdenada = new Array();

        var cantidadNumeros = parseInt(prompt("Ingrese la cantidad de cifras que quiere calcular:"));
 
for (let i = 0; i < cantidadNumeros; i++) {
    let cifra = parseInt(prompt("Ingrese la cifra: " + [i]));
    lista[i] = cifra;
}

for (let i = 0; i < cantidadNumeros; i++) {
        console.log(`El valor ${i} es: ${lista[i]}`);
    }



    listaOrdenada = lista.sort();
    console.log(listaOrdenada);

    const mitadLista = parseInt(listaOrdenada.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
} else {
    return false
}
}

let mediana;

function calcularMediana() {
if(esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;

} else {
    mediana = listaOrdenada[mitadLista];
}
return mediana;
}