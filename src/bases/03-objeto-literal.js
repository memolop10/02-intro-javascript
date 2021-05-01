const persona = {
    nombre:'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad:'New York',
        zip: 3525644,
        lat: 14.545665,
        lng: 34.4645648
    }
};

const persona2 = {...persona};
persona2.nombre = 'Peter';


console.log( persona );
console.log( persona2 );


