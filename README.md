# Centro de Estudio · AWS Certified Cloud Practitioner (CLF-C02)

Suite de estudio en español, offline y sin dependencias externas, construida a partir de apuntes del curso, la guía oficial **CLF-C02** y documentación pública de AWS.

El contenido está ordenado por **peso en el examen** y combina lectura, recuperación activa y simulacros con revisión.

---

## Qué incluye

| Archivo | Contenido |
|---|---|
| `Inicio_Estudio_AWS.html` | **Archivo único de entrada en la carpeta principal.** Haz doble clic aquí para abrir la plataforma automáticamente |
| `contenido/index.html` | Panel principal: método en 3 pasos, siguiente bloque, ruta de 14 bloques con progreso y enlaces directos |
| `contenido/estudio.html` | 69 diapositivas (5 de guía introductoria del examen + 64 distribuidas en 14 bloques de estudio) con contexto explicativo y checkpoint al final de cada bloque |
| `contenido/flashcards.html` | 156 tarjetas sincronizadas 1 a 1 con los 14 bloques (sin spoilers de temas futuros), barajado y seguimiento “Lo sé / Repasar” |
| `contenido/examen.html` | Simulacro de 65 preguntas sobre un banco de 195, con pausa persistente, rotación, banderas, paleta, revisión y filtros; mini simulacros de 10 preguntas por bloque |
| `contenido/repaso.html` | 20 secciones con tablas, cifras, 20 trampas y glosario de siglas para el repaso final |
| `contenido/assets/estilo.css` | Hoja de estilos compartida |
| `contenido/assets/comun.js` | Ruta de bloques, utilidades de progreso y navegación |
| `contenido/assets/banco-preguntas.js` | Banco de 195 preguntas originales |

### Datos del examen objetivo

- **Certificación:** AWS Certified Cloud Practitioner.
- **Código:** CLF-C02 (vigente a octubre de 2026).
- **Preguntas:** 65 (50 puntúan + 15 no; las 15 son experimentales, no se identifican y AWS las usa para evaluar preguntas futuras).
- **Duración:** 90 minutos.
- **Aprobación:** 700 sobre 1000 (puntaje escalado).
- **Costo:** USD 100.
- **Vigencia:** 3 años.
- **Dominios:** Conceptos 24%, Seguridad 30%, Tecnología 34%, Costos y soporte 12%.

> El examen y sus precios pueden cambiar. Confirma la [guía oficial CLF-C02](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html) antes de agendar.

---

## Cómo abrirlo

1. Abre **`Inicio_Estudio_AWS.html`** con doble clic en tu navegador (Chrome, Edge o Firefox). Es el único archivo HTML en la carpeta principal para que sea 100 % intuitivo.
2. La sección **¿Cómo funciona?** resume el método en tres pasos. La tarjeta **Tu siguiente paso** te lleva directamente a las diapositivas del bloque que toca; el botón secundario abre la ruta completa.
3. La ruta de 14 bloques permite abrir diapositivas, flashcards y repaso de cada bloque. El enlace **Siguiente** salta al bloque posterior.
4. No necesitas servidor local ni conexión a internet: todo el contenido y los estilos están en la carpeta.
5. El progreso de la ruta, de las flashcards y del simulacro se guarda en `localStorage` de ese navegador.
6. Para reiniciar el progreso:
   - Ruta: botón **Reiniciar progreso** en `index.html`.
   - Flashcards: botón **Reiniciar**.
   - Simulacro: descarta el intento guardado o usa **Empezar de nuevo**.
7. Para imprimir el repaso: abre `repaso.html` y pulsa **Imprimir / Guardar PDF**.

### Flujo de estudio

1. **Estudiar:** abre las diapositivas del bloque indicado. La barra inferior muestra el bloque y tu posición dentro de él.
2. **Fijar:** al final de cada bloque aparece un checkpoint con las flashcards del tema, el repaso y el enlace al bloque siguiente.
3. **Marcar:** el botón **Marcar bloque** lleva a la casilla resaltada del panel. No la marca por ti: marca tú solo cuando puedas explicarlo sin mirar.
4. **Avanzar:** el panel propone el siguiente bloque. Después del bloque 7 puedes hacer un simulacro opcional; al final, el simulacro completo es la práctica recomendada.

No hay fechas ni calendario: cada bloque se completa cuando está dominado.

### Navegación de las diapositivas

| Tecla | Acción |
|---|---|
| `→`, `Espacio`, `PageDown` | Siguiente diapositiva |
| `←`, `PageUp` | Diapositiva anterior |
| `Inicio` / `Fin` | Primera / última |
| `O` | Vista general |
| `N` | Puntos clave |
| `Esc` | Cerrar vista general o puntos clave |

También puedes usar gestos de deslizamiento en pantallas táctiles.

### Atajos de flashcards

| Tecla | Acción |
|---|---|
| `Espacio` | Voltear |
| `→` / `←` | Navegar |
| `2` | Marcar “Lo sé” |
| `1` | Marcar “Repasar” |

Para abrir un mazo concreto, usa los enlaces de cada bloque en `index.html` o la URL `flashcards.html?bloque=N`. Los bloques con dos temas cargan ambos, por ejemplo `flashcards.html?bloque=12&temas=Monitoreo,IA%20y%20datos`. El botón **Quitar filtro** vuelve al mazo completo.

### Simulacro

- El simulacro completo es **opcional** después del bloque 7 (diagnóstico) y **recomendado** al final. Siempre usa el banco entero, así que un resultado temprano puede ser bajo.
- Cada intento toma 65 preguntas del banco de 195: 16 de Conceptos, 20 de Seguridad, 22 de Tecnología y 7 de Costos y soporte.
- Las preguntas y las opciones se barajan en cada intento.
- La rotación evita repetir preguntas durante tres intentos. Después, el ciclo se reinicia.
- Las preguntas de opción múltiple tienen 4 opciones; las de respuesta múltiple, 5 opciones y 2 o 3 correctas.
- Las preguntas de respuesta múltiple se evalúan como conjunto exacto; no hay crédito parcial.
- El cronómetro empieza al pulsar **Empezar simulacro nuevo**. Puedes pausarlo con **Pausar** o con la tecla `P`; mientras está en pausa, el tiempo no corre.
- Pausar no depende de cambiar de pestaña: si te vas a otra pestaña, el reloj sigue. Si cierras o recargas la página, el intento se guarda en pausa y al volver verás **Reanudar simulacro**.
- Al finalizar verás aciertos, falladas, preguntas en blanco, tiempo usado y desglose por dominio.
- La revisión tiene cinco filtros con contador: **Todas**, **Correctas**, **Falladas**, **En blanco** y **Marcadas**.
- El 70% es una **referencia de estudio**, no una conversión oficial del puntaje escalado.

### Mini simulacros por bloque

- Cada bloque tiene un **Mini simulacro · 10** en la ruta del panel y en el checkpoint de las diapositivas. También puedes abrirlo con `examen.html?bloque=N`.
- El mini usa 10 preguntas de un solo dominio del banco: 8 de opción múltiple y 2 de respuesta múltiple, con 10 minutos y el mismo sistema de pausa y reanudación.
- Sirve para una segunda pasada del bloque, no sustituye al simulacro completo. No consume la rotación de tres intentos.
- El mini guarda su intento aparte, así que no descarta un simulacro completo que esté en pausa.
- Al terminar verás el mismo resumen, los filtros de revisión y una única fila de dominio.

---

## Orden de estudio

La ruta de 14 bloques está ordenada por rentabilidad, no por el orden del examen:

0. Guía introductoria del examen (`s1–s5`: formato, puntaje 700/1000, los 4 dominios y cómo usar la ruta)
1. Fundamentos de la nube y AWS (`s55–s62`)
2. Responsabilidad compartida (SRM) (`s6–s8`)
3. Identidad y acceso (IAM) (`s9–s12, s63`)
4. Detección, red y cifrado (`s13–s17`)
5. Servicios núcleo y Amazon EC2 (`s18–s20`)
6. Almacenamiento (`s21–s24`)
7. Bases de datos (`s25, s64, s26`)
8. Redes y VPC (`s27, s65, s28`)
9. DNS, entrega global y red híbrida (`s29, s30, s66`)
10. Cómputo serverless, contenedores y CI/CD (`s31, s67, s32`)
11. Regiones y alta disponibilidad (`s33–s34`)
12. Monitoreo, gobernanza, analítica, IA y servicios adicionales (`s35–s38, s50–s51, s68–s69`)
13. Well-Architected, CAF y migración (`s39–s42`)
14. Costos, soporte y cierre (`s43–s49, s52–s54`)

Con poco tiempo, los bloques **1–5 y 14** concentran la mayor cantidad de preguntas directas y de errores evitables.

---

## Fuentes y criterio de actualización

Se usaron:

- Los 188 PDFs del directorio, extraídos a texto para búsqueda y verificación.
- La guía oficial del examen CLF-C02 y la lista de servicios incluidos.
- Documentación pública de AWS sobre servicios, precios, cumplimiento y soporte.
- La página oficial de planes de soporte (octubre de 2026).

### Contenido de los PDFs que está desactualizado

| Tema | PDFs | Información vigente usada en esta suite |
|---|---|---|
| Planes de soporte | Basic / Developer / Business / Enterprise | **Basic, Business Support+, Enterprise Support, Unified Operations**. Developer, Business clásico y Enterprise On-Ramp dejan de venderse el 1 de enero de 2027. |
| Well-Architected | 5 pilares | **6 pilares**, incluyendo Sostenibilidad. |
| Trusted Advisor | 5 categorías | **6 categorías**, incluyendo Excelencia Operativa. |

Se priorizó la información vigente. Si encuentras una discrepancia, gana la documentación oficial actual.

### Sobre las preguntas

Las 195 preguntas del banco son **originales**. Están inspiradas en:

- Los dominios y task statements oficiales.
- El estilo de las preguntas de ejemplo públicas.
- Casos y definiciones de los PDFs y de la documentación de AWS.

**No son dumps** ni preguntas filtradas del examen. No se reproduce material confidencial de Pearson VUE ni de AWS.

---

## Estructura de la carpeta

```
Proyecto AWS/
├── Inicio_Estudio_AWS.html   <-- Doble clic aquí para empezar
├── README.md
└── contenido/
    ├── index.html
    ├── estudio.html
    ├── flashcards.html
    ├── examen.html
    ├── repaso.html
    └── assets/
        ├── estilo.css
        ├── comun.js
        └── banco-preguntas.js
```

No hay archivos externos, CDN, fuentes remotas ni dependencias de JavaScript. Funciona con el protocolo `file://`.

---

## Limitaciones y mantenimiento

- **No es un curso completo de AWS.** Es una guía de examen: cubre lo que más se pregunta y omite detalles de implementación que no son relevantes para CLF-C02.
- **Los servicios de AWS cambian.** Los nombres, límites y precios pueden variar. Verifica la documentación oficial para decisiones reales.
- **El progreso es local.** Si cambias de navegador, borras datos o usas modo incógnito, se pierde.
- **El simulacro no predice tu puntaje oficial.** Sirve para diagnosticar temas y practicar ritmo.
- **No hay telemetría.** Nada se envía a internet; no hay analytics ni llamadas de red.

### Cómo actualizar el contenido

- Preguntas: edita `assets/banco-preguntas.js`. Cada pregunta usa `id`, `d` (dominio), `m` (respuesta múltiple), `q`, `o`, `c` y `e`.
- Ruta de bloques: edita `CLF.BLOCKS` en `assets/comun.js`. Cada bloque define `n`, `title`, `start`, `end`, `count`, `flash`, `repaso` y sus etiquetas.
- Flashcards: edita el arreglo `RAW` en `flashcards.html`. Cada fila es `[tema, pregunta, respuesta]`.
- Diapositivas: agrega o edita secciones `<section class="slide" data-title="..." data-note="...">` en `estudio.html`. Mantén los `id` (`sN`) y alinea el rótulo “Bloque N” y el rango de `CLF.BLOCKS` con la ruta.
- Repaso: edita las secciones `<section class="cheat-section">` en `repaso.html`.
- Estilos: `assets/estilo.css`.
- Versiones: si cambias CSS o JavaScript, sube el parámetro `?v=` en las cinco páginas para evitar caché del navegador.

Si agregas preguntas o tarjetas, actualiza los textos que indican el total en el panel, el simulacro, las flashcards y este README.

---

## Licencia y marcas

Material de estudio personal, sin afiliación con Amazon Web Services. AWS, Amazon S3, Amazon EC2 y las demás marcas son propiedad de Amazon.com, Inc. o sus afiliados. Úsalo bajo tu responsabilidad y confirma siempre la información oficial antes de tomar decisiones de certificación o arquitectura.
