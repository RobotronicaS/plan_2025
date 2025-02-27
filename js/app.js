async function cargarProductos() {
    const respuesta = await fetch("data/products.json");
    const productos = await respuesta.json();
    const contenedor = document.getElementById("productos");

    contenedor.innerHTML = productos.map(p => `
        <div>
            <h2>${p.nombre}</h2>
            <p>Precio: ${p.precio}</p>
            <img src="images/${p.imagen}" width="150">
        </div>
    `).join("");
}

window.onload = cargarProductos;

