const temasTeoricos = [
    "Tipos de señales", "Introducción a los transistores", "Introducción a los diodos",
    "Introducción a los resistores", "Introducción a los inductores", "Introducción a los capacitores",
    "Sistemas numéricos", "Operaciones con binario, octal y hexadecimal", "Código BCD, Gray y Exceso-3",
    "Técnicas de simplificación lógica (Mapas de Karnaugh)", "Compuertas lógicas", "Maxitérminos",
    "Sumador, restador, comparador y multiplicador", "Sistemas combinacionales. Latch RS",
    "Sistemas combinacionales. Latch D, JK y T", "Sistemas combinacionales. Entrada de habilitación y reloj",
    "Sistemas combinacionales. Entradas asíncronas", "Sistemas combinacionales. Circuitos integrados",
    "Sistemas combinacionales. Aplicaciones", "Contadores asíncronos y síncronos",
    "Memorias ROM, PROM, EPROM y EEPROM", "Conversión Analógica-Digital y Digital-Analógica",
    "Máquinas de Estados Finitos y Diseño Secuencial Avanzado", "Presentación", "Introducción",
    "Z80 - Arquitectura Interna", "Modos de direccionamiento", "Repertorio de Instrucciones",
    "Bloque Control up sencillo", "Stacks y ciclo desarrollo", "Lenguaje Ensamblador", "Memorias",
    "Pines y Ciclos", "Tiempos de hardware", "Puertos de Entrada/Salida", "Stack y Subrutinas",
    "Sistema con Z80 y T80", "Buses Z80", "Interrupciones", "Periféricos", "Diseño Completo", "Ejercicios"
];

const temasPracticos = [
    "Introducción a Microcontroladores AVR", "ATMEL MICROCHIP Studio", "Prender LED",
    "Encabezados", "Stack pointer", "Subrutinas", "Pull up / pull down", "While", "Botón prender LED",
    "Puerto bidireccional", "Máscara", "Subrutina 1 seg", "Ciclo for", "Debouncer", "Motor paso a paso",
    "Velocidad motor DC", "Direccionamientos", "Instrucciones orientadas a bit", "Interrupciones",
    "Reset entre los AVR", "Instrucciones control MCU", "Error branch out of range",
    "Teclado y display LCD", "Álgebra booleana AVR", "Flip-Flop con AVR", "Read Write EEPROM",
    "Instrucciones PUSH POP", "Instrucciones ST/STD/STS-LD/LDS", "PWM", "Contador 24 y 32 bits",
    "Expresiones", "Acceso y Configuración de Memorias en Sistemas Z80", "Control de Pines y Ciclos",
    "Medición y Ajuste de Tiempos de Hardware en Circuitos Z80",
    "Programación de Puertos de Entrada/Salida en la Arquitectura Z80",
    "Manejo de Stacks y Desarrollo de Subrutinas en Ensamblador",
    "Integración de Sistemas con Z80 y T80", "Análisis y Simulación de Buses en Arquitectura Z80",
    "Implementación y Manejo de Interrupciones en Z80", "Control de Periféricos en Aplicaciones con Z80",
    "Proyecto Integrador: Diseño Completo con Z80", "Resolución de Ejercicios Avanzados en Programación y Arquitectura Z80"
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
        datos[estudianteActual] = { teoricos: Array(42).fill(false), practicos: Array(42).fill(false) };
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
            <input type="checkbox" id="teorico${i}" ${estudiante.teoricos[i] ? "checked" : ""}>
            <label for="teorico${i}">${tema}</label>
        </div>`;
    });

    temasPracticos.forEach((tema, i) => {
        contPracticos.innerHTML += `<div>
            <input type="checkbox" id="practico${i}" ${estudiante.practicos[i] ? "checked" : ""}>
            <label for="practico${i}">${tema}</label>
        </div>`;
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
