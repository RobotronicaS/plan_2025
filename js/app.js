let estudianteActual = "";

// Función para seleccionar un estudiante y registrar si no existe
function seleccionarEstudiante() {
    estudianteActual = document.getElementById("nombreEstudiante").value.trim();

    if (!estudianteActual) {
        alert("Ingrese un nombre válido.");
        return;
    }

    let datos = JSON.parse(localStorage.getItem("estudiantes")) || {};

    // Si el estudiante no existe, lo creamos
    if (!(estudianteActual in datos)) {
        datos[estudianteActual] = {
            teoricos: Array(42).fill(false),
            practicos: Array(42).fill(false)
        };
        localStorage.setItem("estudiantes", JSON.stringify(datos));
    }

    console.log("Estudiante seleccionado:", estudianteActual);
    console.log("Datos almacenados:", datos);

    // Mostrar los temas correctamente
    mostrarTemas();
}

// Función para mostrar los temas alineados correctamente
function mostrarTemas() {
    let datos = JSON.parse(localStorage.getItem("estudiantes")) || {};
    
    if (!estudianteActual || !(estudianteActual in datos)) {
        alert("Error: No se ha registrado correctamente el estudiante.");
        return;
    }

    let estudiante = datos[estudianteActual];

    const contTeoricos = document.getElementById("temasTeoricos");
    const contPracticos = document.getElementById("temasPracticos");

    contTeoricos.innerHTML = "";
    contPracticos.innerHTML = "";

    temasTeoricos.forEach((tema, i) => {
        contTeoricos.innerHTML += `<li>
            <input type="checkbox" id="teorico${i}" ${estudiante.teoricos[i] ? "checked" : ""}>
            <label for="teorico${i}">${tema}</label>
        </li>`;
    });

    temasPracticos.forEach((tema, i) => {
        contPracticos.innerHTML += `<li>
            <input type="checkbox" id="practico${i}" ${estudiante.practicos[i] ? "checked" : ""}>
            <label for="practico${i}">${tema}</label>
        </li>`;
    });

    // Hacer visible la sección de los temas
    document.getElementById("temasContainer").classList.remove("hidden");
}

// Función para guardar el progreso en `localStorage`
function guardarProgreso() {
    let datos = JSON.parse(localStorage.getItem("estudiantes")) || {};

    if (!estudianteActual || !(estudianteActual in datos)) {
        alert("Error: No hay un estudiante seleccionado.");
        return;
    }

    let estudiante = datos[estudianteActual];

    estudiante.teoricos = temasTeoricos.map((_, i) => document.getElementById(`teorico${i}`).checked);
    estudiante.practicos = temasPracticos.map((_, i) => document.getElementById(`practico${i}`).checked);

    datos[estudianteActual] = estudiante;
    localStorage.setItem("estudiantes", JSON.stringify(datos));

    alert("Progreso guardado.");
}

