# PROYECTO: SAN FRANSOKYO INSTITUTE OF TECHNOLOGY (SFIT)
# Página web corporativa del instituto, inspirada en la película "Grandes Héroes" (Big Hero 6)

## CONTEXTO DEL PROYECTO

Esta página presenta la información estratégica de una empresa ficticia: el Instituto de Tecnología de San Fransokyo (SFIT), de la película "Grandes Héroes". Baymax queda por ahora en un segundo plano (solo cameos discretos). El protagonista es el instituto y su estrategia.

La página debe organizarse como un recorrido narrativo de una sola página (scroll cinematográfico): de dónde venimos → dónde estamos → hacia dónde vamos → cómo llegamos.

### CONTENIDO OBLIGATORIO (en este orden)

1. NUESTRA ESTRATEGIA
   1.1 Nuestra filosofía: misión, visión y valores del instituto.
   1.2 Nuestro panorama: análisis FODA (Fortalezas, Oportunidades, Debilidades, Amenazas).
   1.3 Hacia dónde vamos: objetivos y metas que orientan el crecimiento y desarrollo del instituto.
   1.4 Nuestra estrategia: principales estrategias para alcanzar los objetivos y responder a las condiciones identificadas en el FODA.
   1.5 De las estrategias a la acción: presentación sintetizada del plan de acción.

Si no tengo el contenido real, redacta contenido ficticio coherente, breve y fácil de editar (frases cortas, nada de bloques largos de texto). Deja todo el texto en un solo archivo o constante para poder modificarlo fácilmente.

### IDENTIDAD VISUAL

- Paleta: negro profundo y azul marino de fondo, azul eléctrico/cian como color principal (sustituye al amarillo), acentos rojo-naranja (guiño a Baymax y al puente torii) y blanco limpio.
- Tipografía futurista y legible (estilo interfaz tecnológica) para títulos y datos; una sans-serif limpia para el texto.
- Elemento visual central: skyline de San Fransokyo en capas, el puente Golden Gate con estética torii, los microbots y los laboratorios del instituto.
- Los 6 héroes como áreas/equipo directivo del instituto (no como simple decoración):
  - Hiro: Innovación
  - Honey Lemon: Investigación
  - GoGo: Ingeniería
  - Wasabi: Operaciones
  - Fred: Comunicación
  - Baymax: Bienestar estudiantil (aparición sutil)
- Si no hay ilustraciones oficiales utilizables, usa siluetas, íconos o ilustraciones propias estilizadas. No uses imágenes con derechos de autor sin respaldo.

## ANIMACIONES Y EXPERIENCIA CINEMATOGRÁFICA

Quiero que las animaciones sean una parte importante de la identidad de la página.

NO te limites únicamente a animaciones CSS básicas.

Puedes utilizar las tecnologías o librerías que consideres más adecuadas para conseguir una experiencia premium, fluida y cinematográfica.

Por ejemplo, puedes utilizar:

- Anime.js
- GSAP
- GSAP ScrollTrigger
- Motion
- Lenis
- Three.js
- WebGL
- Canvas
- CSS avanzado
- Intersection Observer
- O cualquier otra herramienta moderna que consideres adecuada.

NO es obligatorio utilizar todas estas tecnologías.

Selecciona únicamente las que realmente mejoren la experiencia y evita agregar dependencias innecesarias.

La prioridad es conseguir una web espectacular sin sacrificar rendimiento.

### INTRO CINEMATOGRÁFICA

Al entrar por primera vez a la página quiero una pequeña secuencia de introducción.

Debe durar pocos segundos y sentirse elegante, no molesta.

Ejemplo:

- Pantalla completamente negra.
- Aparece lentamente una línea azul eléctrico.
- Se dibuja o revela el símbolo del instituto (un emblema formado por microbots / siglas SFIT).
- Aparece un pequeño texto: SYSTEM INITIALIZING
- Después: PROJECT // SFIT
- Posteriormente la interfaz se desvanece y revela el Hero principal con el campus y el skyline de San Fransokyo.

La transición debe sentirse como si estuviéramos entrando al sistema central del instituto o al laboratorio de robótica de Hiro.

No quiero una pantalla de carga genérica con un spinner.

### HERO ANIMADO

El Hero debe reaccionar al usuario.

Quiero implementar efectos como:

- Movimiento muy ligero del campus/skyline según la posición del mouse.
- Parallax entre edificio principal, skyline, niebla/neblina de la bahía y elementos de interfaz.
- Luces de la ciudad que reaccionen ligeramente.
- Texto principal con reveal cinematográfico. Lema sugerido: "Donde las ideas se convierten en héroes".
- Elementos técnicos que aparezcan secuencialmente.
- Pequeños indicadores HUD animados.
- Un botón principal: "Comenzar el recorrido".

El campus y los personajes deben sentirse separados del fondo para producir sensación de profundidad.

En dispositivos móviles, simplifica estos efectos para mantener buen rendimiento.

### SCROLL CINEMATOGRÁFICO

Quiero que navegar por la página se sienta como una presentación interactiva.

Utiliza animaciones activadas por scroll.

Por ejemplo:

- Los títulos aparecen mediante reveal.
- Las imágenes y tarjetas entran lentamente desde diferentes direcciones.
- Las líneas tecnológicas se dibujan conforme aparecen.
- Los números aumentan progresivamente.
- Los elementos HUD aparecen uno después de otro.
- Las secciones de la estrategia se revelan progresivamente.

Algunas secciones pueden utilizar efectos de pinning temporal mientras se presenta información.

No abuses de este efecto.

La experiencia debe seguir siendo cómoda para el usuario.

Incluye una navegación lateral de progreso (5 puntos, uno por estación de la estrategia) que indique en qué parte del recorrido está el usuario.

### TRANSICIÓN HACIA EL INSTITUTO

Quiero una transición especialmente impresionante antes de presentar la estrategia.

Por ejemplo:

- El fondo comienza completamente oscuro.
- Una luz atraviesa horizontalmente la pantalla.
- La silueta del campus del instituto comienza a aparecer.
- Después se iluminan progresivamente edificios, laboratorios y el puente torii.
- Finalmente aparece:

SAN FRANSOKYO INSTITUTE OF TECHNOLOGY

PROJECT // 001

STATUS // ACTIVE

Esta sección debe sentirse como la presentación oficial de la visión de una institución de innovación.

### SCROLL INTERACTIVO DEL INSTITUTO (LAS 5 ESTACIONES)

Si técnicamente es viable y no perjudica demasiado el rendimiento, crea una experiencia donde al hacer scroll se vayan destacando diferentes zonas del campus y, con ellas, cada punto de la estrategia.

Primero aparece el campus completo, formado por microbots que se ensamblan.

Después la cámara o composición se acerca a cada zona.

Aparece:

01 // FILOSOFÍA (misión, visión y valores)

Continuando el scroll:

02 // PANORAMA (FODA)

Después:

03 // HORIZONTE (objetivos y metas)

04 // ESTRATEGIA

05 // ACCIÓN

La animación debe estar sincronizada con el scroll.

Puede realizarse utilizando GSAP ScrollTrigger, Anime.js, Motion o una alternativa apropiada.

#### Cómo presentar cada estación (ideas de contenido)

- 01 // FILOSOFÍA: misión, visión y valores como tres "núcleos" o cápsulas brillantes que se expanden al hover. Los valores van en tarjetas que se voltean (frente: palabra clave e ícono; reverso: explicación). Personaje guía: Tadashi/Hiro ("ayudar a las personas").
- 02 // PANORAMA (FODA): evita la tabla 2x2 clásica. Usa un "escáner" estilo diagnóstico (Baymax como cameo) sobre una silueta del campus, donde cada zona despliega una fortaleza, debilidad, oportunidad o amenaza. Diferencia visualmente lo interno (F/D) de lo externo (O/A). Los cuadrantes se activan uno por uno con el scroll. Personaje guía: Honey Lemon.
- 03 // HORIZONTE: ruta o línea del tiempo con hitos de corto, mediano y largo plazo, y contadores animados para metas medibles. Alternativa: mapa de San Fransokyo con cada meta como punto de la ciudad y el puente torii como destino final. Personaje guía: Hiro mirando al horizonte.
- 04 // ESTRATEGIA: tarjetas de estrategia con etiqueta FO, FA, DO o DA y una línea conectora hacia el cuadrante del FODA del que nacen. Metáfora: microbots que se conectan para formar una estructura mayor (muchas piezas pequeñas = algo grande). Personajes guía: GoGo (ejecución) y Fred (ideas audaces).
- 05 // ACCIÓN: resumen del plan de acción en formato roadmap (estrategia → acción → responsable → plazo), enlazado con el timeline de fases. Personaje guía: Wasabi (precisión y planeación).

### HOTSPOTS INTERACTIVOS

Agregar pequeños puntos azul eléctrico alrededor del campus / mapa del instituto.

Los puntos deben tener una animación tipo pulso muy discreta.

Cuando el usuario haga hover o click:

- El punto aumenta ligeramente.
- Aparece una línea conectándolo con un panel.
- El panel muestra información sobre esa zona o área del instituto.

Ejemplo:

ROBOTICS LAB

Información temporal sobre el laboratorio de robótica y sus proyectos de innovación.

Otros hotspots posibles: laboratorio de química (Honey Lemon), taller de ingeniería (GoGo), centro de operaciones (Wasabi), centro de comunicación (Fred), centro de bienestar estudiantil (Baymax).

Los hotspots también deben funcionar correctamente en dispositivos táctiles mediante click.

### ANIMACIÓN DE INDICADORES (FICHA DEL INSTITUTO)

Cuando aparezca la ficha técnica del instituto, los datos pueden animarse. (Datos ficticios editables.)

Ejemplo:

STUDENTS
000 → 5,000

LABS
000 → 24

PROGRAMS
000 → 18

VERSION
STRATEGIC PLAN // 2026-2030

STATUS
INITIALIZING...
ACTIVE

Los números deben animarse solamente cuando entren al viewport.

### EFECTOS DE INTERFAZ

Agregar pequeños detalles animados estilo computadora avanzada:

- Barras de progreso
- Coordenadas cambiantes
- Scan lines extremadamente sutiles
- Indicadores de sistema
- Pequeñas gráficas
- Radar
- Retículas
- Líneas que recorren determinadas zonas
- Indicadores ACTIVE
- Animaciones de diagnóstico

Ejemplos de textos:

SYSTEM // ONLINE

SFIT_01 // CONNECTED

STRATEGIC PLAN // ACTIVE

SCANNING...

CAMPUS SYSTEMS // NOMINAL

Estos elementos deben ser principalmente decorativos y no deben dificultar la lectura.

### CURSOR INTERACTIVO

En escritorio crea un cursor personalizado opcional.

- Un pequeño punto central.
- Un círculo exterior.
- El círculo puede seguir al cursor con un pequeño retraso (opcionalmente dejando un ligero rastro de microbots).

Al pasar sobre:

- Botones
- Links
- Imágenes
- Hotspots

El cursor puede cambiar de tamaño o forma.

No usar el cursor personalizado en dispositivos táctiles.

### BOTONES

Los botones no deben tener simplemente un cambio de color.

Crear microinteracciones.

Al hacer hover:

- El borde puede recorrer el botón.
- Puede aparecer un brillo desde izquierda a derecha.
- El texto puede desplazarse unos píxeles.
- Puede aparecer una pequeña flecha animada.

Los efectos deben durar aproximadamente entre 200 y 500 ms.

### IMÁGENES / GALERÍA

La galería (campus, laboratorios, proyectos y los héroes del instituto) debe reaccionar al cursor.

Por ejemplo:

- Zoom muy ligero.
- Movimiento interno.
- Parallax.
- Oscurecimiento.
- Aparición del nombre del proyecto o del área.
- Número de fotografía.

Al hacer click utilizar un lightbox animado.

### TEXTO

Los títulos principales pueden tener animaciones tipo:

- Text reveal.
- Mask reveal.
- Split text.
- Letter animation.
- Scramble text.
- Typing tecnológico.

Utiliza diferentes efectos dependiendo de la sección.

No utilices el mismo efecto en todos los títulos.

Para textos tecnológicos pequeños puedes utilizar ocasionalmente un efecto de escritura o decodificación.

Ejemplo:

INITIALIZING...

S4NF_R4NS0KY0

SAN FRANSOKYO

### EFECTO SCRAMBLE

En determinados títulos puedes hacer que inicialmente aparezcan caracteres aleatorios.

Ejemplo:

X8F_02#L91

SF1T_8N#T1

SFIT INSTITUTE

Debe durar menos de un segundo.

Utilizar únicamente en lugares concretos para no resultar molesto.

### LOGOTIPO

El emblema del instituto (siglas SFIT con microbots o engranaje) puede tener animaciones.

Por ejemplo:

- Dibujarse mediante SVG.
- Aparecer mediante líneas.
- Formarse mediante diferentes piezas (microbots que se ensamblan).
- Tener un pequeño glitch.
- Emitir una luz azul eléctrico.

No quiero efectos exagerados.

Debe conservar una apariencia premium.

### TIMELINE (PLAN DE ACCIÓN POR FASES)

La sección "De las estrategias a la acción" debe animarse con el scroll.

La línea central comienza vacía.

Conforme el usuario baja:

- La línea azul eléctrico avanza.
- Cada etapa se activa.
- El número se ilumina.
- Aparece la información.

Etapas:

01 DIAGNÓSTICO

02 DISEÑO ESTRATÉGICO

03 PILOTO

04 IMPLEMENTACIÓN

05 EVALUACIÓN

06 CONSOLIDACIÓN

La etapa actual debe permanecer visualmente destacada.

### PARALLAX

Utiliza parallax sutil en determinadas partes de la página.

Especialmente:

- Hero
- Campus
- Fondos
- Luces
- Niebla de la bahía
- Ciudad / skyline
- Elementos HUD

No aplicar parallax a todos los elementos.

Debe producir profundidad sin dificultar la navegación.

### 3D OPCIONAL

Si puedes conseguirlo manteniendo un buen rendimiento, puedes integrar algún elemento 3D mediante Three.js o WebGL.

Por ejemplo:

- Una nube de microbots que se ensambla formando el emblema o el campus.
- Un objeto técnico giratorio.
- Un wireframe del edificio del instituto.
- Un escaneo tridimensional.
- Una representación holográfica.

NO hagas obligatorio el 3D.

Si no existe un modelo adecuado, utiliza imágenes 2D y efectos de profundidad en lugar de crear un 3D de baja calidad.

Prefiero un excelente resultado 2D antes que un 3D mediocre.

### EFECTOS DE SONIDO

NO reproduzcas sonidos automáticamente.

Si decides agregar sonido ambiental o efectos futuristas, deben estar desactivados inicialmente.

Agregar un pequeño control:

SOUND

OFF / ON

El usuario debe decidir activarlos.

### PERFORMANCE

Las animaciones deben ejecutarse a 60 FPS siempre que sea posible.

Utiliza transform y opacity en lugar de animar propiedades costosas.

Usa requestAnimationFrame cuando corresponda.

Optimiza imágenes.

Carga recursos pesados únicamente cuando sean necesarios.

Evita bloquear el hilo principal.

Reduce o elimina efectos complejos en dispositivos de poca potencia o pantallas pequeñas.

Respeta:

prefers-reduced-motion

Si el usuario tiene las animaciones reducidas activadas, presenta una versión más sencilla de la experiencia.

### CIERRE DE LA PÁGINA

Termina con una sección final que resuma la estrategia en una frase potente y un botón de llamado a la acción (por ejemplo "Volver al inicio del recorrido" o "Conoce al equipo"), junto con el emblema del instituto y los 6 héroes como equipo.

### MUY IMPORTANTE

Tienes libertad para decidir qué librería utilizar.

No utilices Anime.js solamente porque fue mencionada.

Analiza cada animación y escoge la tecnología más adecuada.

Por ejemplo:

- GSAP + ScrollTrigger puede utilizarse para animaciones complejas vinculadas al scroll.
- Anime.js puede utilizarse para interfaces, SVG y secuencias.
- Lenis puede utilizarse para conseguir un scroll más suave.
- Three.js puede utilizarse únicamente si realmente aporta valor visual.
- CSS puede utilizarse para microinteracciones sencillas.

La combinación final queda a tu criterio.

Quiero que las animaciones tengan propósito.

NO agregues movimiento únicamente porque puedes hacerlo.

La experiencia debe sentirse:

- Cinematográfica.
- Tecnológica.
- Futurista.
- Premium.
- Fluida.
- Interactiva.
- Inspiradora (el espíritu de "Grandes Héroes": innovación al servicio de las personas).

La referencia conceptual es:

"¿Cómo sería entrar a la interfaz que Hiro Hamada y su equipo utilizarían para presentar públicamente el plan estratégico del Instituto de Tecnología de San Fransokyo?"

Construye esa experiencia.