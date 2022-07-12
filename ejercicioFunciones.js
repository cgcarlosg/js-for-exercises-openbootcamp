// Una función sin parámetros que devuelva siempre "true"
const sinParametros = () => true

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const saludos = new Promise((resolve, reject) => {
    setTimeout(()=>resolve("Hola soy una promesa"),5000);
})
saludos.then(res => (res));

// Una función generadora de índices pares automáticos
function* generaIndex() {
    let index = 0;
    while (true) {
        index++
        if(index === 10) {
            return index
        }
        yield index*2
    }
}

const genera = generaIndex();

console.log(genera.next().value)
console.log(genera.next().value)
console.log(genera.next().value)
console.log(genera.next().value)
console.log(genera.next().value)
