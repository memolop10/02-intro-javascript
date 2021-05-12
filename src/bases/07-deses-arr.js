

const personajes = ['Goku','vegeta','trunks'];

const [ ,p2 ] = personajes;
//console.log( p2 )

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros ] = retornaArreglo();
//console.log(letras, numeros)

const usoState = (valor) => {
    return [valor, () => { console.log('Hola Mundo')}]
}

const [nombre, setNombre ] = usoState('EL MEMO')

console.log(nombre);
setNombre()