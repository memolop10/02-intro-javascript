// Arreglos en JS

//const arreglo = new Array(100);

const arreglo = [1,2,3,4];
//modifica el arreglo original
//arreglo.push(1);


let arreglo2 = [...arreglo , 5];
//arreglo2.push(5);

const arreglo3 = arreglo2.map( number => {
    return number * 2;
})

console.log(arreglo3);
console.log(arreglo);
console.log(arreglo2);