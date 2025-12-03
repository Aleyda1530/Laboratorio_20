// Ejercicio 5 – Matriz en espiral NxN con números de 1 a N²
// Autora: Aleyda Quispe
let n;
do {
    n = Number(prompt("Ingrese un número N (mayor o igual a 3):"));
} while (isNaN(n) || n < 3);
let matriz = [];
for (let i = 0; i < n; i++) {
    matriz[i] = [];
}
let inicioFila = 0;
let finFila = n - 1;
let inicioCol = 0;
let finCol = n - 1;
let numeroActual = 1;
let maximo = n * n;

while (numeroActual <= maximo) {
    for (let c = inicioCol; c <= finCol && numeroActual <= maximo; c++) {
        matriz[inicioFila][c] = numeroActual++;
    }
    inicioFila++;
    for (let f = inicioFila; f <= finFila && numeroActual <= maximo; f++) {
        matriz[f][finCol] = numeroActual++;
    }
    finCol--;
    for (let c = finCol; c >= inicioCol && numeroActual <= maximo; c--) {
        matriz[finFila][c] = numeroActual++;
    }
    finFila--;
    for (let f = finFila; f >= inicioFila && numeroActual <= maximo; f--) {
        matriz[f][inicioCol] = numeroActual++;
    }
    inicioCol++;
}
console.log("Matriz en espiral de tamaño " + n + "x" + n + ":");
for (let fila of matriz) {
    console.log(fila.join("\t"));
}
