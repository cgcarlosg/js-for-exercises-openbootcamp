// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const misDatos = {
    nombre: "Carlos",
    apellido: "Gutierrez",
    edad: 44,
    altura: 1.78,
    isDeveloper: true
}

// Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = misDatos.edad;

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const mejorAmigo1 = {
    nombre: "Fredy",
    apellido: "Rodriguez",
    edad: 46,
    altura: 1.70,
    isDeveloper: false
}

const mejorAmigo2 = {
    nombre: "Edwin",
    apellido: "Salamanca",
    edad: 43,
    altura: 1.75,
    isDeveloper: true
}

const listaAmigos = [misDatos, mejorAmigo1, mejorAmigo2]
// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

listaAmigos.sort((a,b)=> a.edad - b.edad);
console.log(listaAmigos);