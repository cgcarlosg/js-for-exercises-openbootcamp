// Una variable que contenga tu altura en centímetros (entero)
let alturaInt = 178;

// Una variable que contenga tu altura en metros (número de coma flotante)
let alturaFloat = 1.78;

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoFloat = 70.6;

// Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRedondeada = Math.round(alturaFloat);

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoRedondeado = Math.floor(pesoFloat);

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maxValorJs = Number.MAX_VALUE;
let maxValue = Number.MAX_VALUE + 1;

let comparacion = (maxValorJs === maxValue);
console.log(comparacion)