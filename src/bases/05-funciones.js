
//Funciones en JS
const saludar = function(nombre) {
    return `HOLA, ${ nombre }`
}

//console.log(saludar)
//console.log( saludar('MEMO') ); 

//Forma implicita de retornar algo
const getUser = () => ({
    uid:'ABC123',
    username: 'EL_Papi1502'
})

const user = getUser();
//console.log( user )

//Tarea 

const getUsuarioActivo = nombre => ({
    uid: 'ABC567',
    username: nombre
})

const getUsuario = getUsuarioActivo('MEMO');
console.log( getUsuario );