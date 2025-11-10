# Documentación AOV-OVL

Este directorio contiene la documentación funcional y técnica del proyecto.

## Índice

- Guía de instalación y despliegue: `docs/GUIA-INSTALACION-DESPLIEGUE.md`
- Manual de Usuario: `docs/MANUAL-DE-USUARIO.md`
- Manual Técnico: `docs/MANUAL-TECNICO.md`
- Explicación línea por línea (referencia de código): `docs/EXPLICACION-LINEA-POR-LINEA.md`

## Formato

- Los documentos están en Markdown (compatibles con GitHub y editores). Puedes abrirlos en Word: Archivo → Abrir → seleccionar `.md` o convertirlos a `.docx` con herramientas como Pandoc.

## Conversión a Word (opcional)

Si deseas `.docx`, una opción es usar Pandoc:
```bash
pandoc -s docs/MANUAL-DE-USUARIO.md -o MANUAL-DE-USUARIO.docx
pandoc -s docs/MANUAL-TECNICO.md -o MANUAL-TECNICO.docx
pandoc -s docs/GUIA-INSTALACION-DESPLIEGUE.md -o GUIA-INSTALACION-DESPLIEGUE.docx
```

Asegúrate de ejecutarlo desde la raíz del proyecto o ajusta las rutas.
