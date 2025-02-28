document.addEventListener("DOMContentLoaded", () => {
    mostrarTemas();
});

function mostrarTemas() {
    let datos = JSON.parse(localStorage.getItem("progreso")) || { teoricos: Array(42).fill(false), practicos: Array(42).fill(false) };

    const contTeoricos = document.getElementById("temasTeoricos");
    const contPracticos = document.getElementById("temasPracticos");

    contTeoricos.innerHTML = "";
    contPracticos.innerHTML = "";

    temasTeoricos.forEach((tema, i) => {
        contTeoricos.innerHTML += `<li>
            <input type="checkbox" id="teorico${i}" ${datos.teoricos[i] ? "checked" : ""}>
            <label for="teorico${i}">${tema}</label>
        </li>`;
    });

    temasPracticos.forEach((tema, i) => {
        contPracticos.innerHTML += `<li>
            <input type="checkbox" id="practico${i}" ${datos.practicos[i] ? "checked" : ""}>
            <label for="practico${i}">${tema}</label>
        </li>`;
    });
}

function guardarProgreso() {
    let datos = {
        teoricos: temasTeoricos.map((_, i) => document.getElementById(`teorico${i}`).checked),
        practicos: temasPracticos.map((_, i) => document.getElementById(`practico${i}`).checked)
    };

    localStorage.setItem("progreso", JSON.stringify(datos));
    alert("Progreso guardado.");
}
