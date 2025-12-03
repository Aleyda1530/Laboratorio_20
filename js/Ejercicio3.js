// Ejercicio 3 – Calcular salario bruto, descuentos y salario neto usando la fórmula dada
// Autora: Aleyda Quispe

let salarioBase = Number(prompt("Ingrese el salario base: "));
let horasExtras = Number(prompt("Ingrese la cantidad de horas extras trabajadas:"));
let pagoHoraExtra = Number(prompt("Ingrese el pago por hora extra:"));
let bono = Number(prompt("Ingrese el bono asignado:"));
let porcentajeAFP = Number(prompt("Ingrese el porcentaje de AFP:"));
let porcentajeSalud = Number(prompt("Ingrese el porcentaje de Salud:"));

let salarioBruto = salarioBase + (horasExtras * pagoHoraExtra) + bono;
let descuentoAFP = salarioBase * (porcentajeAFP / 100);
let descuentoSalud = salarioBase * (porcentajeSalud / 100);
let descuentosTotales = descuentoAFP + descuentoSalud;
let salarioNeto = salarioBruto - descuentosTotales;

console.log("El salario bruto es:", salarioBruto);
console.log("El descuento AFP es:", descuentoAFP);
console.log("El descuento Salud es:", descuentoSalud);
console.log("Descuentos totales:", descuentosTotales);
console.log("El salario neto es:", salarioNeto);