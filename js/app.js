const temasTeoricos = [
    "Tipos de señales", "Introducción a los transistores", "Introducción a los diodos",
    "Introducción a los resistores", "Introducción a los inductores", "Introducción a los capacitores",
    "Sistemas numéricos", "Operaciones con binario, octal y hexadecimal", "Código BCD, Gray y Exceso-3"
];

const temasPracticos = [
    "Introducción a Microcontroladores AVR", "ATMEL MICROCHIP Studio", "Prender LED",
    "Encabezados", "Stack pointer", "Subrutinas"
];

let estudianteActual = "";

// Seleccionar estudiante
function seleccionarEstudiante() {
    estudianteActual = document.getElementById("nombreEstudiante").value.trim();
    if (!estudianteActual) {
        alert("Ingrese un nombre válido.");
        return;
    }

    // Cargar datos del estudiante si existen
    let datos = JSON.parse(localStorage.getItem("estudiantes")) || {};
    if (!(estudianteActual in datos)) {
        datos[estudianteActual] = { teoricos: [], practicos: [] };
        localStorage.setItem("estudiantes", JSON.stringify(datos));
    }

    mostrarTemas();
}

// Mostrar los temas en la interfaz
function mostrarTemas() {
    document.getElementById("temasContainer").classList.remove("hidden");
    let datos = JSON.parse(localStorage.getItem("estudiantes")) || {};
    let estudiante = datos[estudianteActual];

    const contTeoricos = document.getElementById("temasTeoricos");
    const contPracticos = document.getElementById("temasPracticos");

    contTeoricos.innerHTML = "";
    contPracticos.innerHTML = "";

    temasTeoricos.forEach((tema, i) => {
        contTeoricos.innerHTML += `<div>
            <input type="checkbox" id="teorico${i}" ${estudiante.teoricos.includes(i) ? "checked" : ""}>
            <label for="teorico${i}">${tema}</label>
        </div>`;
    });

    temasPracticos.forEach((tema, i) => {
        contPracticos.innerHTML += `<div>
            <input type="checkbox" id="practico${i}" ${estudiante.practicos.includes(i) ? "checked" : ""}>
            <label for="practico${i}">${tema}</label>
        </div>`;
    });
}

// Guardar progreso en localStorage
function guardarProgreso() {
    let datos = JSON.parse(localStorage.getItem("estudiantes")) || {};
    let estudiante = datos[estudianteActual];

    estudiante.teoricos = temasTeoricos.map((_, i) => document.getElementById(`teorico${i}`).checked ? i : null).filter(i => i !== null);
    estudiante.practicos = temasPracticos.map((_, i) => document.getElementById(`practico${i}`).checked ? i : null).filter(i => i !== null);

    datos[estudianteActual] = estudiante;
    localStorage.setItem("estudiantes", JSON.stringify(datos));

    alert("Progreso guardado.");
}
