// Ejercicio 4 – Calculadora de impuestos progresivos por tramos
// Autora: Aleyda Quispe
let ingresoMensual = Number(prompt("Ingrese el ingreso mensual:"));
let ingresoAnual = ingresoMensual * 14; 
let impuestoTramo1 = 0;
let impuestoTramo2 = 0;
let impuestoTramo3 = 0;
let impuestoTramo4 = 0;
let restante = ingresoAnual;

if (restante > 20000)
    restante -= 20000;
else
    restante = 0;

if(ingresoAnual > 20000){
    let base = Math.min(30000, ingresoAnual - 20000);
    impuestoTramo2 = base * 0.10;
}

if (restante > 30000)
    restante -= 30000;
else
    restante = 0;

if (ingresoAnual > 50000) {
    let base = Math.min(50000, ingresoAnual - 50000);
    impuestoTramo3 = base * 0.20;
}

if (restante > 50000)
    restante -= 50000;
else
    restante = 0;
if (ingresoAnual > 100000)

    impuestoTramo4 = (ingresoAnual - 100000) * 0.30;
let impuestoTotal = impuestoTramo2 + impuestoTramo3 + impuestoTramo4;
let tasaEfectiva = (impuestoTotal / ingresoAnual) * 100;

console.log("Ingreso anual:", ingresoAnual);
console.log("Impuesto tramo 1 (0%):", impuestoTramo1);
console.log("Impuesto tramo 2 (10%):", impuestoTramo2);
console.log("Impuesto tramo 3 (20%):", impuestoTramo3);
console.log("Impuesto tramo 4 (30%):", impuestoTramo4);
console.log("Impuesto total:", impuestoTotal);
console.log("Tasa efectiva real (%):", tasaEfectiva);

