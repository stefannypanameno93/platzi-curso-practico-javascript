//HELPERS
function esPar(numero){
    return (numero % 2 === 0)
};

function calcularMediaAritmetica(lista){
    
    const sumaLista = lista.reduce(
        function (valorAcumulado=0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

//CALCULADORA DE MEDIANA


function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


//MEDIANA GENERAL

const salariosSv = elSalvador.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosSvSorted = salariosSv.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralSv = medianaSalarios(salariosSvSorted)

//MEDIANA DEL TOP 10%

const spliceStart = (salariosSvSorted.length * 90) / 100;
const spliceCount = salariosSvSorted.length - spliceStart;

const salariosSvTop10 = salariosSvSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Sv = medianaSalarios(salariosSvTop10)

console.log({
    medianaGeneralSv,
    medianaTop10Sv,
}
);