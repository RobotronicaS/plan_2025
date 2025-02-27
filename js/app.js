let estudianteActual = "";

// Seleccionar estudiante
function seleccionarEstudiante() {
    estudianteActual = document.getElementById("nombreEstudiante").value.trim();
    if (!estudianteActual) {
        alert("Ingrese un nombre válido.");
        return;
    }

    let datos = JSON.parse(localStorage.getItem("estudiantes")) || {};
    if (!(estudianteActual in datos)) {
        datos[estudianteActual] = { teoricos: Array(42).fill(false), practicos: Array(42).fill(false) };
        localStorage.setItem("estudiantes", JSON.stringify(datos));
    }

    mostrarTemas();
}

// Mostrar los temas en columnas alineadas correctamente
function mostrarTemas() {
    document.getElementById("temasContainer").classList.remove("hidden");
    let datos = JSON.parse(localStorage.getItem("estudiantes")) || {};
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
}

// Guardar progreso en localStorage
function guardarProgreso() {
    let datos = JSON.parse(localStorage.getItem("estudiantes")) || {};
    let estudiante = datos[estudianteActual];

    estudiante.teoricos = temasTeoricos.map((_, i) => document.getElementById(`teorico${i}`).checked);
    estudiante.practicos = temasPracticos.map((_, i) => document.getElementById(`practico${i}`).checked);

    datos[estudianteActual] = estudiante;
    localStorage.setItem("estudiantes", JSON.stringify(datos));

    alert("Progreso guardado.");
}

    let datos = JSON.parse(localStorage.getItem("estudiantes")) || {};
    if (!(estudianteActual in datos)) {
        datos[estudianteActual] = { teoricos: Array(42).fill(false), practicos: Array(42).fill(false) };
        localStorage.setItem("estudiantes", JSON.stringify(datos));
    }

    mostrarTemas();
}

function mostrarTemas() {
    document.getElementById("temasContainer").classList.remove("hidden");
    let datos = JSON.parse(localStorage.getItem("estudiantes")) || {};
    let estudiante = datos[estudianteActual];

    const contTeoricos = document.getElementById("temasTeoricos");
    const contPracticos = document.getElementById("temasPracticos");

    contTeoricos.innerHTML = "";
    contPracticos.innerHTML = "";

    temasTeoricos.forEach((tema, i) => {
        contTeoricos.innerHTML += `<div style="margin-bottom: 5px;">
            <input type="checkbox" id="teorico${i}" ${estudiante.teoricos[i] ? "checked" : ""}>
            <label for="teorico${i}">${tema}</label>
        </div>`;
    });

    temasPracticos.forEach((tema, i) => {
        contPracticos.innerHTML += `<div style="margin-bottom: 5px;">
            <input type="checkbox" id="practico${i}" ${estudiante.practicos[i] ? "checked" : ""}>
            <label for="practico${i}">${tema}</label>
        </div>`;
    });
}

function guardarProgreso() {
    let datos = JSON.parse(localStorage.getItem("estudiantes")) || {};
    let estudiante = datos[estudianteActual];

    estudiante.teoricos = temasTeoricos.map((_, i) => document.getElementById(`teorico${i}`).checked);
    estudiante.practicos = temasPracticos.map((_, i) => document.getElementById(`practico${i}`).checked);

    datos[estudianteActual] = estudiante;
    localStorage.setItem("estudiantes", JSON.stringify(datos));

    alert("Progreso guardado.");
}

    datos[estudianteActual] = estudiante;
    localStorage.setItem("estudiantes", JSON.stringify(datos));

    alert("Progreso guardado.");
}
