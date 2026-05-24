# Publicar IncluMapa en GitHub Pages

## Archivos de entrada

- `index.html`: app principal, abre por defecto en modo celular.
- `celular.html`: acceso directo a la version celular.
- `pc.html`: acceso directo a la version PC.

## Como publicarla

1. Crear un repositorio en GitHub.
2. Subir todos los archivos de esta carpeta.
3. Ir a **Settings > Pages**.
4. En **Build and deployment**, elegir **Deploy from a branch**.
5. Elegir la rama `main` y la carpeta `/root`.
6. Guardar.

Cuando GitHub Pages termine de publicar, se podra entrar con:

- `https://TU_USUARIO.github.io/TU_REPO/`
- `https://TU_USUARIO.github.io/TU_REPO/celular.html`
- `https://TU_USUARIO.github.io/TU_REPO/pc.html`

## Nota

Camara y ubicacion funcionan mejor en HTTPS. GitHub Pages usa HTTPS, asi que es una buena opcion para probar la version movil.
