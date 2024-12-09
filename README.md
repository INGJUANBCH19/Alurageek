 AluraGeek

Este proyecto es una aplicación básica de comercio electrónico que permite a los usuarios agregar, visualizar y eliminar productos. Se conecta con una API simulada creada con `json-server` para manejar los datos de los productos.

🚀 Funcionalidades

- **Agregar productos:** Los usuarios pueden ingresar productos con nombre, precio (en pesos colombianos) e imagen (URL).
- **Listar productos:** Todos los productos añadidos se muestran dinámicamente en la interfaz.
- **Eliminar productos:** Los usuarios pueden eliminar productos con el botón de ícono de basura.
- **Interacción con la API:** Los datos se almacenan y recuperan usando `json-server`.

---

 🛠️ Tecnologías utilizadas

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (ES6)
- **Backend simulado:**
  - [json-server](https://www.npmjs.com/package/json-server)

---

📂 Estructura del proyecto
/project-folder
│
├── index.html        (archivo principal)
├── styles.css        (estilos de la página)
├── app.js            (lógica del frontend)
├── db.json           (base de datos simulada para json-server)
├── /assets           (carpeta de imágenes)
│     ├── producto1jpg.jpg
│     ├── carrito.png
│     ├── basura.png
│     └── ibj.png


---

🚀 Instalación y configuración

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

 📂 Clona el repositorio:
```bash

git clone https://github.com/INGJUANBCH19/Alurageek.git
cd Alurageek

 Instala json-server:
Asegúrate de tener Node.js instalado. Luego, ejecuta:

bash

---

📂 Copiar código
npm install -g json-server

 Inicia el servidor JSON:
En la carpeta raíz del proyecto, ejecuta:

bash
Copiar código
json-server --watch db.json --port 3000
El servidor estará disponible en: http://localhost:3000.

4. Abre la aplicación:
Abre el archivo index.html en tu navegador.
```


🧰 Uso
Agregar productos:
Llena los campos del formulario:
1.Nombre: Nombre del producto.
2.Precio (COP): Precio en pesos colombianos.
3.Imagen (URL): URL de la imagen del producto.
Haz clic en "Enviar". El producto se añadirá a la lista.
Eliminar productos:
Haz clic en el ícono de basura en la tarjeta del producto que deseas eliminar.
El producto será eliminado de la lista y de la base de datos.

🎨 Capturas de pantalla
<img width="1440" alt="Captura de pantalla 2024-12-09 a la(s) 2 00 01 a m" src="https://github.com/user-attachments/assets/54b8b072-8a6b-41ca-935b-d81e1cbee273">


🗂️ Próximos pasos
Algunas ideas para extender el proyecto:

Añadir carrito de compras: Permitir que los usuarios agreguen productos al carrito y calculen el total.
Filtros de búsqueda: Agregar funcionalidades para buscar o filtrar productos por nombre o precio.
Conexión a un backend real: Implementar un servidor real para manejar los datos.
Autenticación de usuarios: Permitir que los usuarios inicien sesión y guarden productos en su cuenta.

🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si tienes sugerencias o mejoras, no dudes en enviar un pull request o abrir un issue.


📧 Contacto
Desarrollado por Ing. Juan Camilo Betin (IJB).

Correo: ingenierojbetin19@gmail.com
LinkedIn: https://www.linkedin.com/in/juan-betin-5092172b6/



