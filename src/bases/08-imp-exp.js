
//import heroes,{owners} from '../data/heroes'
//console.log(owners)

export const getHeroeById = (id) => {
   return heroes.find(heroe => heroe.id === id);
}

//const result = getHeroeById(1)
//console.log(result)

export const getHeroeByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner);
 }

 //const result2 = getHeroeByOwner('DC')
 //console.log(result2)
