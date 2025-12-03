// Ejercicio 7 – Registro de estudiantes con menú interactivo
// Autora: Aleyda Quispe
let estudiantes = [];
function agregarEstudiante() {
    let nombre = prompt("Ingrese nombre del estudiante:");
    let edad = Number(prompt("Ingrese edad del estudiante:"));
    let promedio = Number(prompt("Ingrese promedio del estudiante:"));
    let estudiante = {
        nombre: nombre,
        edad: edad,
        promedio: promedio
    };
    estudiantes.push(estudiante);
    console.log("Estudiante agregado.");
}
function mostrarEstudiantes() {
    if (estudiantes.length === 0) {
        console.log("No hay estudiantes registrados.");
        return;
    }
    console.log("Listado de estudiantes:");
    for (let est of estudiantes) {
        console.log(est);
    }
}
function mejorPromedio() {
    if (estudiantes.length === 0) {
        console.log("No hay estudiantes.");
        return;
    }
    let mejor = estudiantes[0];
    for (let est of estudiantes) {
        if (est.promedio > mejor.promedio) {
            mejor = est;
        }
    }
    console.log("Estudiante con mejor promedio:", mejor);
}
function buscarPorNombre() {
    let nombreBuscado = prompt("Ingrese el nombre a buscar:");
    let encontrados = estudiantes.filter(e => e.nombre === nombreBuscado);
    if (encontrados.length === 0) {
        console.log("No se encontró el estudiante.");
    } else {
        console.log("Resultado de búsqueda:", encontrados);
    }
}
function eliminarPorNombre() {
    let nombreEliminar = prompt("Ingrese el nombre del estudiante a eliminar:");
    let cantidadAntes = estudiantes.length;
    estudiantes = estudiantes.filter(e => e.nombre !== nombreEliminar);
    if (estudiantes.length === cantidadAntes)
        console.log("No se eliminó a nadie (nombre no encontrado).");
    else
        console.log("Estudiante eliminado.");
}
function menu() {
    let opcion;
    do {
        opcion = prompt(
`MENÚ DE OPCIONES
1. Agregar estudiante
2. Mostrar estudiantes
3. Mejor promedio
4. Buscar por nombre
5. Eliminar por nombre
6. Salir
Ingrese una opción (1-6):`
        );
        switch (opcion) {
            case "1":
                agregarEstudiante();
                break;
            case "2":
                mostrarEstudiantes();
                break;
            case "3":
                mejorPromedio();
                break;
            case "4":
                buscarPorNombre();
                break;
            case "5":
                eliminarPorNombre();
                break;
            case "6":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida.");
        }
    } while (opcion !== "6");
}
menu();