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


// Función para obtener datos de localStorage o inicializar valores predeterminados
function obtenerDatos() {
    return JSON.parse(localStorage.getItem("progreso")) || {
        teoricos: Array(temasTeoricos.length).fill(false),
        practicos: Array(temasPracticos.length).fill(false),
        semanasTeoricos: Array(temasTeoricos.length).fill(0),
        semanasPracticos: Array(temasPracticos.length).fill(0),
        descripcionesTeoricos: Array(temasTeoricos.length).fill(""),
        descripcionesPracticos: Array(temasPracticos.length).fill("")
    };
}

// Función para renderizar la lista de temas
function renderizarTemas() {
    const datos = obtenerDatos();
    const contTeoricos = document.getElementById("temasTeoricos");
    const contPracticos = document.getElementById("temasPracticos");

    if (!contTeoricos || !contPracticos) {
        console.error("Elementos del DOM no encontrados.");
        return;
    }

    // Construir HTML para temas teóricos
    let htmlTeoricos = "";
    temasTeoricos.forEach((tema, i) => {
        htmlTeoricos += `
            <li>
                <input type="checkbox" id="teorico${i}" ${datos.teoricos[i] ? "checked" : ""}>
                <label for="teorico${i}">${tema}</label>
                <button class="btn-descripcion" onclick="editarDescripcion(${i}, 'teorico')">Editar descripción</button>
                <span>Semana </span>
                <input type="number" id="semanaTeorico${i}" value="${datos.semanasTeoricos[i]}" min="0">
                <p id="descripcionTeorico${i}">${datos.descripcionesTeoricos[i]}</p>
            </li>
        `;
    });
    contTeoricos.innerHTML = htmlTeoricos;

    // Construir HTML para temas prácticos
    let htmlPracticos = "";
    temasPracticos.forEach((tema, i) => {
        htmlPracticos += `
            <li>
                <input type="checkbox" id="practico${i}" ${datos.practicos[i] ? "checked" : ""}>
                <label for="practico${i}">${tema}</label>
                <button class="btn-descripcion" onclick="editarDescripcion(${i}, 'practico')">Editar descripción</button>
                <span>Semana </span>
                <input type="number" id="semanaPractico${i}" value="${datos.semanasPracticos[i]}" min="0">
                <p id="descripcionPractico${i}">${datos.descripcionesPracticos[i]}</p>
            </li>
        `;
    });
    contPracticos.innerHTML = htmlPracticos;
}

// Función para editar la descripción de un tema
function editarDescripcion(index, tipo) {
    const nuevaDescripcion = prompt("Ingrese la nueva descripción:");
    if (nuevaDescripcion === null) return;

    const datos = obtenerDatos();
    if (tipo === "teorico") {
        datos.descripcionesTeoricos[index] = nuevaDescripcion;
        document.getElementById(`descripcionTeorico${index}`).textContent = nuevaDescripcion;
    } else {
        datos.descripcionesPracticos[index] = nuevaDescripcion;
        document.getElementById(`descripcionPractico${index}`).textContent = nuevaDescripcion;
    }
    localStorage.setItem("progreso", JSON.stringify(datos));
}

// Función para guardar el progreso (actualizando todos los datos)
function guardarProgreso() {
    const datos = {
        teoricos: temasTeoricos.map((_, i) => document.getElementById(`teorico${i}`)?.checked || false),
        practicos: temasPracticos.map((_, i) => document.getElementById(`practico${i}`)?.checked || false),
        semanasTeoricos: temasTeoricos.map((_, i) => parseInt(document.getElementById(`semanaTeorico${i}`)?.value) || 0),
        semanasPracticos: temasPracticos.map((_, i) => parseInt(document.getElementById(`semanaPractico${i}`)?.value) || 0),
        descripcionesTeoricos: temasTeoricos.map((_, i) => document.getElementById(`descripcionTeorico${i}`)?.textContent || ""),
        descripcionesPracticos: temasPracticos.map((_, i) => document.getElementById(`descripcionPractico${i}`)?.textContent || "")
    };

    localStorage.setItem("progreso", JSON.stringify(datos));
    alert("Progreso guardado.");
}

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", renderizarTemas);
