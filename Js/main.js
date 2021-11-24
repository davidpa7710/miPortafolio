console.log('hola mundo')

//Multiplicar dos numeros sin usar el simbolo de multiplicar 

function mult(a,b) {
    let resultado = 0;
    for (let index = 1; index <= b; index++) {
        resultado = resultado + a;
    }
    return resultado
}
console.log(mult(6,2));

