
//Desestructiracion
//Asignacion Destructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'ironMan'
}

//const { nombre, clave } = persona;

//console.log(nombre);

const usoContext = ({ nombre, clave, edad, rango = 'Sargento'}) => {
    //console.log(nombre , clave, rango )

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave , anios, latlng:{lat,lng}} = usoContext(persona)
console.log(nombreClave,anios)
console.log(lat, lng)