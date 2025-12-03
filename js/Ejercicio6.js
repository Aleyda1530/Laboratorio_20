// Ejercicio 6 – Normalizador de datos: minmax, zscore y unit
// Autora: Aleyda Quispe
function normalizar(listaOriginal, modo) {
    let lista = [...listaOriginal];
    if (!Array.isArray(lista) || lista.length === 0) {
        console.error("La lista no es válida.");
        return [];
    }
    switch (modo) {
        case "minmax":
            let min = Math.min(...lista);
            let max = Math.max(...lista);
            let rango = max - min;
            if (rango === 0)
                return lista.map(() => 0);
            return lista.map(x => (x - min)/rango);
        case "zscore":
            let media = lista.reduce((a, b) => a + b, 0) / lista.length;
            let varianza = lista.reduce((a, b) => a + Math.pow(b - media, 2), 0) / lista.length;
            let desviacion = Math.sqrt(varianza);
            if (desviacion === 0) return lista.map(() => 0);
            return lista.map(x => (x - media) / desviacion);
        case "unit":
            let norma = Math.sqrt(lista.reduce((a, b) => a + b * b, 0));
            if (norma === 0) return lista.map(() => 0);
            return lista.map(x => x / norma);
        default:
            console.error("Modo no válido. Use: minmax, zscore, unit.");
            return [];
    }
}
let valores = [10, 20, 30];
console.log("MinMax:", normalizar(valores, "minmax"));
console.log("Z-Score:", normalizar(valores, "zscore"));
console.log("Unit:", normalizar(valores, "unit"));
console.log("Original:", valores);

