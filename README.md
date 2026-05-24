# IncluMapa

Aplicacion movil web para encontrar lugares inclusivos para personas con discapacidad.

## Como abrirla

Abrir `index.html` en el navegador. Tambien se puede publicar como sitio estatico o instalar como PWA desde el navegador del celular.

## Versiones

- `celular.html`: version movil con panel inferior deslizable para mostrar u ocultar las locaciones sobre el mapa.
- `pc.html`: version de escritorio con mapa y lista de lugares en columnas.
- `index.html`: abre la app principal y por defecto usa la version celular.

Para publicarla en GitHub Pages, ver `GITHUB_PAGES.md`.

## Archivos necesarios para GitHub

La app principal carga directamente:

- `index.html`
- `app.js.js`
- `styles.css.css`
- `assets/places/`

Los archivos `app.js` y `styles.css` quedan como respaldo, pero la app ya no depende de ellos.

## OpenStreetMap

La app usa OpenStreetMap con Leaflet, asi que no necesita API key. Si no hay conexion a internet o no carga Leaflet, muestra el mapa visual de demostracion.

## Funciones incluidas

- Busqueda por nombre, tipo, direccion o accesibilidad.
- Filtros por rampa, carta/menu en braille, baño accesible y lengua de señas.
- Fichas con detalles de accesibilidad.
- Mapa con OpenStreetMap y marcadores de lugares inclusivos.
- Boton para abrir el lugar en OpenStreetMap.
- Registro, inicio de sesion y modo visitante.
- Visitantes con funciones limitadas: sin Sacho Panza, sin historial y sin añadir lugares.
- Historial de lugares para usuarios registrados.
- Boton para añadir lugares inclusivos con permiso de ubicacion.
- Foto obligatoria tomada desde la camara de la app; no hay carga de archivos.
- Guia de luz y contraste para validar la foto antes de enviarla.
- Asistente integrado "Sacho Panza" para recomendar lugares segun el perfil.
- Sacho Panza responde preguntas basicas sobre seguridad, accesibilidad, ubicacion, camara y visitantes.
- Configuracion de perfil, modo de narracion y exploracion tactil por gestos.
- Registro con codigo de verificacion, hash de contraseña y sal.
- Manifest para instalarla como app en el celular.

## Seguridad

Ver `SEGURIDAD_Y_PRIVACIDAD.md` para conocer las protecciones agregadas, riesgos actuales y recomendaciones para una version productiva.

## Nota sobre validacion

La ubicacion enviada por el telefono y la foto tomada desde la camara ayudan a reducir sugerencias falsas, pero una version productiva deberia sumar revision comunitaria, moderacion y almacenamiento seguro en un backend. El acceso a camara y ubicacion requiere permisos del navegador y funciona mejor publicada con HTTPS.
