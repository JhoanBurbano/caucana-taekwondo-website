# Assets

Estructura de assets del proyecto. Nombrado por **sección** para mantener orden y referencia clara.

## Estructura

```
assets/
├── images/    # Imágenes por sección: hero-*, about-*, coaches-*, gallery-*, etc.
├── videos/    # Vídeos (ej. hero-video.mp4, about-academy.mp4)
└── icons/     # Iconos SVG/PNG (logo, favicon, UI)
```

## Convención de nombres (por sección)

| Prefijo   | Sección     | Ejemplos                          |
|-----------|-------------|-----------------------------------|
| `hero-`   | Hero        | hero-pattern.png, hero-fighter.jpg |
| `about-`  | Academia    | about-training.jpg                |
| `coaches-`| Instructores| coaches-01.jpg, coaches-02.jpg    |
| `gallery-`| Galería     | gallery-competition-1.jpg         |
| `pricing-`| Inscripciones| (si hubiera ilustraciones)       |
| `sponsors-`| Aliados    | sponsors-logo-1.svg                |
| `icons-`  | UI / global | icons-logo.svg, icons-favicon.png  |

Los IDs en `src/lib/assets/` deben coincidir con el nombre del archivo (sin extensión) para locales.
