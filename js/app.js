// Lista de temas teóricos
const temasTeoricos = [
    "Tema Teórico 0: Tipos de señales",
    "Tema Teórico 1: Introducción a los transistores",
    "Tema Teórico 2: Introducción a los diodos",
    "Tema Teórico 3: Introducción a los resistores",
    "Tema Teórico 4: Introducción a los inductores",
    "Tema Teórico 5: Introducción a los capacitores",
    "Tema Teórico 6: Sistemas numéricos",
    "Tema Teórico 7: Operaciones con binario, octal y hexadecimal",
    "Tema Teórico 8: Código BCD, Gray y Exceso-3",
    "Tema Teórico 9: Técnicas de simplificación lógica (Mapas de Karnaugh)",
    "Tema Teórico 10: Compuertas lógicas",
    "Tema Teórico 11: Maxitérminos",
    "Tema Teórico 12: Sumador, restador, comparador y multiplicador",
    "Tema Teórico 13: Sistemas combinacionales. Latch RS",
    "Tema Teórico 14: Sistemas combinacionales. Latch D, JK y T",
    "Tema Teórico 15: Sistemas combinacionales. Entrada de habilitación y reloj",
    "Tema Teórico 16: Sistemas combinacionales. Entradas asíncronas",
    "Tema Teórico 17: Sistemas combinacionales. Circuitos integrados",
    "Tema Teórico 18: Sistemas combinacionales. Aplicaciones",
    "Tema Teórico 19: Contadores asíncronos y síncronos",
    "Tema Teórico 20: Memorias ROM, PROM, EPROM y EEPROM",
    "Tema Teórico 21: Conversión Analógica-Digital y Digital-Analógica",
    "Tema Teórico 22: Máquinas de Estados Finitos y Diseño Secuencial Avanzado",
    "Tema Teórico 23: Presentacion",
    "Tema Teórico 24: Introduccion",
    "Tema Teórico 25: Z80 - Arquitectura Interna",
    "Tema Teórico 26: Modos de direccionamiento",
    "Tema Teórico 27: Repertorio de Instrucciones",
    "Tema Teórico 28: Bloque Control up sencillo",
    "Tema Teórico 29: Stacks y ciclo desarrollo",
    "Tema Teórico 30: Lenguaje Ensamblador",
    "Tema Teórico 31: Memorias",
    "Tema Teórico 32: Pines y Ciclos",
    "Tema Teórico 33: Tiempos de hw",
    "Tema Teórico 34: Puertos EyS",
    "Tema Teórico 35: Stack y Subrutinas",
    "Tema Teórico 36: Sistema con Z80 y T80",
    "Tema Teórico 37: Buses Z80",
    "Tema Teórico 38: Interrupciones",
    "Tema Teórico 39: Perifericos",
    "Tema Teórico 40: Diseño Completo",
    "Tema Teórico 41: Ejercicios"
];

// Lista de temas prácticos
const temasPracticos = [
    "Tema Práctico 0: Introducción a Microcontroladores AVR",
    "Tema Práctico 1: ATMEL MICROCHIP Studio",
    "Tema Práctico 2: Prender LED",
    "Tema Práctico 3: Encabezados",
    "Tema Práctico 4: Stack pointer",
    "Tema Práctico 5: Subrutinas",
    "Tema Práctico 6: Pull up / pull down",
    "Tema Práctico 7: While",
    "Tema Práctico 8: Boton prender led",
    "Tema Práctico 9: Puerto bidireccional",
    "Tema Práctico 10: Máscara",
    "Tema Práctico 11: Subrutina 1 seg",
    "Tema Práctico 12: Ciclo for",
    "Tema Práctico 13: Debouncer",
    "Tema Práctico 14: Motor paso a paso",
    "Tema Práctico 15: Velocidad motor DC",
    "Tema Práctico 16: Direccionamientos",
    "Tema Práctico 17: Instrucciones orientadas a bit",
    "Tema Práctico 18: Interrupciones",
    "Tema Práctico 19: Reset entre los AVR",
    "Tema Práctico 20: Instrucciones control MCU",
    "Tema Práctico 21: Error branch out of range",
    "Tema Práctico 22: Teclado y display LCD",
    "Tema Práctico 23: Algebra booleana AVR",
    "Tema Práctico 24: Flip-Flop con AVR",
    "Tema Práctico 25: Read Write EEPROM",
    "Tema Práctico 26: Instrucciones PUSH POP",
    "Tema Práctico 27: Instrucciones ST/STD/STS-LD/LDS",
    "Tema Práctico 28: PWM",
    "Tema Práctico 29: Contador 24 y 32 bits",
    "Tema Práctico 30: Expresiones",
    "Tema Práctico 31: Acceso y Configuración de Memorias en Sistemas Z80",
    "Tema Práctico 32: Control de Pines y Generación de Ciclos en Microcontroladores",
    "Tema Práctico 33: Medición y Ajuste de Tiempos de Hardware en Circuitos Z80",
    "Tema Práctico 34: Programación de Puertos de Entrada/Salida en la Arquitectura Z80",
    "Tema Práctico 35: Manejo de Stacks y Desarrollo de Subrutinas en Ensamblador",
    "Tema Práctico 36: Integración de Sistemas con Z80 y T80",
    "Tema Práctico 37: Análisis y Simulación de Buses en Arquitectura Z80",
    "Tema Práctico 38: Implementación y Manejo de Interrupciones en Z80",
    "Tema Práctico 39: Control de Periféricos en Aplicaciones con Z80",
    "Tema Práctico 40: Proyecto Integrador: Diseño Completo con Z80",
    "Tema Práctico 41: Resolución de Ejercicios Avanzados en Programación y Arquitectura Z80"
];

document.addEventListener("DOMContentLoaded", () => {
    mostrarTemas();
    window.addEventListener("resize", ajustarLayout);
    ajustarLayout();
});

function mostrarTemas() {
    let datos = JSON.parse(localStorage.getItem("progreso")) || {
        teoricos: Array(temasTeoricos.length).fill(false),
        practicos: Array(temasPracticos.length).fill(false)
    };

    const contTeoricos = document.getElementById("temasTeoricos");
    const contPracticos = document.getElementById("temasPracticos");
    const temasContainer = document.getElementById("temasContainer");

    if (!contTeoricos || !contPracticos || !temasContainer) {
        console.error("Algunos elementos no fueron encontrados en el DOM.");
        return;
    }

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

    temasContainer.classList.remove("hidden");
}

function ajustarLayout() {
    const temasContainer = document.getElementById("temasContainer");
    if (!temasContainer) return;
    
    if (window.innerWidth < 600) {
        temasContainer.style.display = "block";
    } else {
        temasContainer.style.display = "flex";
        temasContainer.style.flexWrap = "wrap";
        temasContainer.style.justifyContent = "space-between";
    }
}

function guardarProgreso() {
    let datos = {
        teoricos: temasTeoricos.map((_, i) => {
            let checkbox = document.getElementById(`teorico${i}`);
            return checkbox ? checkbox.checked : false;
        }),
        practicos: temasPracticos.map((_, i) => {
            let checkbox = document.getElementById(`practico${i}`);
            return checkbox ? checkbox.checked : false;
        })
    };

    localStorage.setItem("progreso", JSON.stringify(datos));
    alert("Progreso guardado.");
}
