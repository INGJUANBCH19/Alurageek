const apiUrl = 'http://localhost:3000/productos';

// Función para formatear valores en pesos colombianos
function formatearEnPesos(valor) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(valor);
}

// Función para cargar productos desde el servidor
async function cargarProductos() {
    const respuesta = await fetch(apiUrl);
    const productos = await respuesta.json();

    const lista = document.getElementById('lista-productos');
    lista.innerHTML = ''; // Limpiar la lista antes de cargar

    productos.forEach(producto => {
        const card = document.createElement('li');
        card.className = 'card';
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" />
            <div class="card-container--info">
                <p>${producto.nombre}</p>
                <div class="card-container--value">
                    <p>${formatearEnPesos(producto.precio)}</p>
                    <div class="card-buttons">
                        <img src="./assets/carrito.png" alt="Agregar al carrito" class="add-to-cart" />
                        <img src="./assets/basura.png" alt="Eliminar producto" class="delete-button" data-id="${producto.id}" />
                    </div>
                </div>
            </div>
        `;
        lista.appendChild(card);
    });

    // Asignar eventos a los botones de eliminar
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', eliminarProducto);
    });
}

// Función para eliminar un producto
async function eliminarProducto(event) {
    const id = event.target.getAttribute('data-id');
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    cargarProductos(); // Recargar productos después de eliminar
}

// Manejar el envío del formulario para agregar un producto
document.getElementById('formulario').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const imagen = document.getElementById('imagen').value;

    const nuevoProducto = { nombre, precio, imagen };

    await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoProducto)
    });

    document.getElementById('formulario').reset(); // Limpiar el formulario
    cargarProductos(); // Recargar productos después de agregar
});

// Cargar los productos al iniciar la página
cargarProductos();
