// Lista de temas teóricos
const temasTeoricos = [
    "Tema Teórico 0: Tipos de señales", "Tema Teórico 1: Introducción a los transistores",
    "Tema Teórico 2: Introducción a los diodos", "Tema Teórico 3: Introducción a los resistores",
    "Tema Teórico 4: Introducción a los inductores", "Tema Teórico 5: Introducción a los capacitores",
    "Tema Teórico 6: Sistemas numéricos", "Tema Teórico 7: Operaciones con binario, octal y hexadecimal",
    "Tema Teórico 8: Código BCD, Gray y Exceso-3", "Tema Teórico 9: Técnicas de simplificación lógica",
    "Tema Teórico 10: Compuertas lógicas", "Tema Teórico 11: Maxitérminos",
    "Tema Teórico 12: Sumador, restador, comparador y multiplicador", "Tema Teórico 13: Latch RS",
    "Tema Teórico 14: Latch D, JK y T", "Tema Teórico 15: Contadores asíncronos y síncronos",
    "Tema Teórico 16: Memorias ROM, PROM, EPROM y EEPROM", "Tema Teórico 17: Máquinas de Estados Finitos",
    "Tema Teórico 18: Conversión Analógica-Digital y Digital-Analógica", "Tema Teórico 19: Presentación",
    "Tema Teórico 20: Introducción al Z80", "Tema Teórico 21: Modos de direccionamiento",
    "Tema Teórico 22: Repertorio de Instrucciones", "Tema Teórico 23: Bloque Control",
    "Tema Teórico 24: Stacks y ciclo desarrollo", "Tema Teórico 25: Lenguaje Ensamblador",
    "Tema Teórico 26: Memorias en Z80", "Tema Teórico 27: Puertos de Entrada/Salida",
    "Tema Teórico 28: Tiempos de hardware", "Tema Teórico 29: Interrupciones",
    "Tema Teórico 30: Periféricos en Z80", "Tema Teórico 31: Diseño Completo",
    "Tema Teórico 32: Ejercicios avanzados"
];

// Lista de temas prácticos
const temasPracticos = [
    "Tema Práctico 0: Introducción a Microcontroladores AVR", "Tema Práctico 1: ATMEL MICROCHIP Studio",
    "Tema Práctico 2: Prender LED", "Tema Práctico 3: Encabezados", "Tema Práctico 4: Stack pointer",
    "Tema Práctico 5: Subrutinas", "Tema Práctico 6: Pull up / pull down", "Tema Práctico 7: While",
    "Tema Práctico 8: Botón prender LED", "Tema Práctico 9: Puerto bidireccional",
    "Tema Práctico 10: Máscara", "Tema Práctico 11: Subrutina 1 seg", "Tema Práctico 12: Ciclo for",
    "Tema Práctico 13: Debouncer", "Tema Práctico 14: Motor paso a paso",
    "Tema Práctico 15: Velocidad motor DC", "Tema Práctico 16: Direccionamientos",
    "Tema Práctico 17: Instrucciones orientadas a bit", "Tema Práctico 18: Interrupciones",
    "Tema Práctico 19: Reset entre los AVR", "Tema Práctico 20: Instrucciones control MCU",
    "Tema Práctico 21: Error branch out of range", "Tema Práctico 22: Teclado y display LCD",
    "Tema Práctico 23: Álgebra booleana AVR", "Tema Práctico 24: Flip-Flop con AVR",
    "Tema Práctico 25: Read Write EEPROM", "Tema Práctico 26: Instrucciones PUSH POP",
    "Tema Práctico 27: Instrucciones ST/STD/STS-LD/LDS", "Tema Práctico 28: PWM",
    "Tema Práctico 29: Contador 24 y 32 bits", "Tema Práctico 30: Expresiones",
    "Tema Práctico 31: Acceso y Configuración de Memorias en Z80",
    "Tema Práctico 32: Control de Pines y Generación de Ciclos en Microcontroladores"
];

// Cargar los temas cuando la página se abre
document.addEventListener("DOMContentLoaded", () => {
    mostrarTemas();
});

// Función para mostrar los temas correctamente
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

    // Asegurar que los temas sean visibles
    document.getElementById("temasContainer").classList.remove("hidden");
}

// Guardar progreso en `localStorage`
function guardarProgreso() {
    let datos = {
        teoricos: temasTeoricos.map((_, i) => document.getElementById(`teorico${i}`).checked),
        practicos: temasPracticos.map((_, i) => document.getElementById(`practico${i}`).checked)
    };

    localStorage.setItem("progreso", JSON.stringify(datos));
    alert("Progreso guardado.");
}
