# SFIT · Versión final

Sitio académico inspirado en Grandes Héroes, con seis páginas, campus animado, organigrama interactivo, catálogo de diez productos y atención al cliente de demostración.

## Ejecutar

Abre esta carpeta en Visual Studio Code. En su terminal:

```powershell
node server.js
```

Visita http://127.0.0.1:5173. No requiere instalar paquetes. Para detener el servidor, pulsa Ctrl + C. Si el puerto está ocupado, puedes usar `$env:PORT='5188'` antes de ejecutar el comando y abrir http://127.0.0.1:5188.

También puedes abrir index.html directamente; para formularios y folios locales se recomienda el servidor.

## Contenido

- index.html: estrategia y campus animado.
- organizacion.html: organigrama interactivo, áreas y equipo.
- forma-de-trabajar.html: cultura, colaboración y liderazgo.
- compromiso.html: estándares, indicadores y seguimiento.
- productos.html: diez productos conceptuales con las imágenes de imagenes/, precios académicos, condiciones de compra, cambios, devoluciones y entrega.
- atencion.html: ayuda, consultas, quejas, sugerencias, comprobante descargable y consulta de folios locales.

## Guía

[Guía de ejecución PDF](Guia-ejecucion-SFIT.pdf) · [Guía imprimible HTML](GUIA-EJECUCION.html)

La ruta D: que figura en la guía corresponde al equipo donde se desarrolló el proyecto; tras clonar este repositorio, utiliza la carpeta Version_Final de tu copia.

## Alcance de la demostración

Los productos son representaciones conceptuales basadas en la película. Precios y condiciones son propuestas académicas. No se procesan pagos, compras, envíos ni mensajes a una empresa. El correo atencion@sfit.example es ficticio. Los formularios guardan solo folio, tipo y fecha en el navegador; el comprobante puede descargarse localmente.

## Validación

Sintaxis JavaScript, navegación local, existencia de imágenes y datos de los diez productos verificados. La revisión visual y las pruebas completas en navegador están pendientes por restricciones del entorno de ejecución.

Con Node.js y npm disponibles: `npm run check`. Las páginas e imágenes funcionan sin servicios externos.

## Créditos

Proyecto académico de fans inspirado en [Grandes Héroes, Disney](https://movies.disney.com/big-hero-6/). Personajes y universo pertenecen a sus titulares. Imágenes proporcionadas para el proyecto.
