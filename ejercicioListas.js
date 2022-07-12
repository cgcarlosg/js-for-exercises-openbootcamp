// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compras = ['arroz', 'carne', 'atun', 'pasta', 'chocolate']

// Modifica la lista de la compra y añádele "Aceite de Girasol"
compras.push('Aceite de Girasol')

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.pop('Aceite de Girasol')

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {'titulo':'el señor de los anillos', 'director': 'jackson', 'fecha': '2002-09-12'}, 
    {'titulo': 'batman el caballero de la noche', 'director': 'nolan', 'fecha': '2010-06-15' }, 
    {'titulo': 'la vida es bella', 'director': 'zemecky', 'fecha': '1996-04-24'}
]
// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const mayores = peliculas.filter(p => p.fecha > '2010-01-01')

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = peliculas.map(v=>v.director)
// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulos = peliculas.map(v=>v.titulo)
// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

//const titYLis = peliculas.map(v=>`'titulo': ${v.titulo}, 'director':${v.director}`)
const titYLis = peliculas.map(v=>(v.titulo).concat(' - ').concat(v.director))

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaDirectores = peliculas.map(v=>v.director);
const listaTitulos = peliculas.map(v=>v.titulo);

const ambasListas = [...listaDirectores, ...listaTitulos]
console.log(ambasListas)