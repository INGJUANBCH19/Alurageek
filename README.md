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
git clone 
cd Alurageek

### Instala json-server:
Asegúrate de tener Node.js instalado. Luego, ejecuta:

bash

---
📂 Copiar código
npm install -g json-server
3. Inicia el servidor JSON:
En la carpeta raíz del proyecto, ejecuta:

bash
Copiar código
json-server --watch db.json --port 3000
El servidor estará disponible en: http://localhost:3000.

4. Abre la aplicación:
Abre el archivo index.html en tu navegador.




