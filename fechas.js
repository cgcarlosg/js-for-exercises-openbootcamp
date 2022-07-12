// La fecha de hoy
const hoyActual = new Date();

// La fecha de tu nacimiento
const nacimiento = new Date('1978,02,09')

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const tarde= hoyActual > nacimiento;

// Una variable que contenga el día de tu nacimiento
const diaNacimiento = nacimiento.getDate();

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = nacimiento.getMonth()+1;

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyosNacimiento = nacimiento.getFullYear();
console.log(anyosNacimiento);