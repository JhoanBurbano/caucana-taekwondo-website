# Lista de imágenes: qué elegir, descargar y dónde ponerlas

Todas las imágenes van en **`src/assets/images/`**. El **nombre del archivo** debe ser exactamente el indicado (sin espacios; el ID en código es el nombre sin extensión).

---

## 1. Hero

| # | Archivo | Qué debe mostrar | Dónde ponerlo |
|---|---------|------------------|----------------|
| 1 | `hero-pattern.png` | Patrón/textura de fondo del hero (ej. líneas diagonales, geometría). Actualmente hay un placeholder; reemplázalo por el diseño real (p. ej. desde Figma). | `src/assets/images/hero-pattern.png` |
| 2 | `hero-fighter.jpg` | Silueta de luchador de Taekwondo en posición de combate (se ve a la derecha del hero, con baja opacidad). Preferible silueta oscura sobre transparente o fondo que permita overlay. | `src/assets/images/hero-fighter.jpg` |

---

## 2. Academia (About)

| # | Archivo | Qué debe mostrar | Dónde ponerlo |
|---|---------|------------------|----------------|
| 3 | `about-training.jpg` | Instructor de Taekwondo enseñando técnicas a estudiantes en el dojang (entrenamiento en grupo). Formato vertical o cuadrado (ratio 4:5 en la UI). | `src/assets/images/about-training.jpg` |

---

## 3. Instructores (Coaches)

Una foto por instructor; formato vertical (ratio 3:4 en la UI).

| # | Archivo | Qué debe mostrar | Dónde ponerlo |
|---|---------|------------------|----------------|
| 4 | `coach-1.jpg` | Maestro Carlos Rodríguez (6to Dan ITF) — foto de perfil/instructor. | `src/assets/images/coach-1.jpg` |
| 5 | `coach-2.jpg` | Maestra Ana López (5to Dan ITF) — foto de perfil/instructora. | `src/assets/images/coach-2.jpg` |
| 6 | `coach-3.jpg` | Instructor Miguel Torres (4to Dan ITF) — foto de perfil. | `src/assets/images/coach-3.jpg` |
| 7 | `coach-4.jpg` | Instructora Laura Mendoza (3er Dan ITF) — foto de perfil. | `src/assets/images/coach-4.jpg` |

---

## 4. Galería

Cada imagen se usa en una tarjeta de “Logros y Eventos”. Ratio 4:3 en la UI.

| # | Archivo | Qué debe mostrar | Dónde ponerlo |
|---|---------|------------------|----------------|
| 8 | `gallery-competition-1.jpg` | Campeonato Nacional 2024 — competencias. | `src/assets/images/gallery-competition-1.jpg` |
| 9 | `gallery-competition-2.jpg` | Torneo Regional — competencias. | `src/assets/images/gallery-competition-2.jpg` |
| 10 | `gallery-graduation.jpg` | Examen de cinturón negro / graduaciones. | `src/assets/images/gallery-graduation.jpg` |
| 11 | `gallery-training.jpg` | Entrenamiento intensivo en el dojang. | `src/assets/images/gallery-training.jpg` |
| 12 | `gallery-event-1.jpg` | Seminario internacional u otro evento. | `src/assets/images/gallery-event-1.jpg` |
| 13 | `gallery-event-2.jpg` | Demostración pública u otro evento. | `src/assets/images/gallery-event-2.jpg` |

---

## Resumen rápido (copiar/pegar)

```
src/assets/images/
├── hero-pattern.png          ← reemplazar placeholder
├── hero-fighter.jpg
├── about-training.jpg
├── coach-1.jpg
├── coach-2.jpg
├── coach-3.jpg
├── coach-4.jpg
├── gallery-competition-1.jpg
├── gallery-competition-2.jpg
├── gallery-graduation.jpg
├── gallery-training.jpg
├── gallery-event-1.jpg
└── gallery-event-2.jpg
```

**Total: 13 imágenes** (1 ya existe como placeholder; 12 por descargar/seleccionar).

---

## Después de colocar los archivos

Hoy el proyecto usa **URLs externas** (Unsplash) para todo excepto `hero-pattern`. Si quieres que esas 12 imágenes sean **locales** (archivos en `src/assets/images/`):

1. Añade cada ID a **`LocalAssetId`** en `src/lib/assets/types.ts`.
2. Añade el **import** y la entrada en **`LOCAL_IMAGE_URLS`** en `src/lib/assets/local.ts`.
3. **Quita** las entradas correspondientes de **`EXTERNAL_IMAGES`** en `src/lib/assets/constants.ts` (opcional: puedes dejar solo las que sigan siendo externas).

Si prefieres seguir con URLs (Unsplash u otro CDN), no hace falta cambiar código; solo usa esta lista para elegir/descargar fotos y luego actualiza las URLs en `constants.ts` si cambias de fuente.
