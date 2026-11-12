# 🦸 App Heroes · Marvel y DC

![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)

Aplicación web hecha con **Angular** para explorar héroes de **Marvel** y **DC**: un listado en tarjetas, una ficha de detalle por héroe y un buscador por nombre.

Es un proyecto pensado para **aprender Angular moderno** (componentes standalone, señales y nuevo control de flujo en plantillas) con un ejemplo pequeño y fácil de seguir.

---

## 📑 Índice

1. [Qué hace la aplicación](#-qué-hace-la-aplicación)
2. [Tecnologías](#-tecnologías)
3. [Puesta en marcha](#-puesta-en-marcha)
4. [Estructura del proyecto](#-estructura-del-proyecto)
5. [Páginas y componentes](#-páginas-y-componentes)
6. [Conceptos de Angular que se practican](#-conceptos-de-angular-que-se-practican)
7. [Cómo funciona el flujo de datos](#-cómo-funciona-el-flujo-de-datos)
8. [Problemas frecuentes](#-problemas-frecuentes)
9. [Ideas para ampliar el proyecto](#-ideas-para-ampliar-el-proyecto)
10. [Comandos útiles](#-comandos-útiles)

---

## ✨ Qué hace la aplicación

- **Listado de héroes** en tarjetas adaptables (1, 2 o 3 columnas según el ancho de pantalla).
- **Ficha de detalle** de cada héroe: imagen, nombre, fecha de primera aparición, biografía y logo de su casa editorial (Marvel o DC).
- **Buscador** en la barra de navegación para filtrar héroes por nombre.
- **Navegación** entre páginas sin recargar el navegador (SPA con el router de Angular).
- **Mensajes claros** cuando no hay resultados o el héroe solicitado no existe.

---

## 🧰 Tecnologías

| Tecnología | Uso en el proyecto |
|---|---|
| [Angular](https://angular.dev) | Framework principal (componentes standalone) |
| TypeScript | Lenguaje de la aplicación |
| [Bootstrap](https://getbootstrap.com) | Estilos y rejilla responsive |
| Angular CLI | Servidor de desarrollo, compilación y generación de código |
| Vitest | Ejecución de tests unitarios (configurado por el CLI) |

---

## 🚀 Puesta en marcha

### Requisitos previos

- **Node.js** (una versión LTS reciente; consulta los requisitos de tu versión de Angular)
- **npm** (se instala junto con Node.js)
- **Git**

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/jsersan/appheroes22.git

# 2. Entrar en la carpeta
cd appheroes22

# 3. Instalar las dependencias
npm install

# 4. Arrancar el servidor de desarrollo
npm start
```

Abre el navegador en **http://localhost:4200/**. La aplicación se recarga sola cada vez que guardas un cambio.

> 💡 **Importante:** si modificas `angular.json`, detén el servidor (`Ctrl + C`) y vuelve a lanzar `npm start`. Ese archivo no se recarga en caliento.

---

## 📁 Estructura del proyecto

```text
appheroes22/
├── public/
│   └── assets/img/          # Imágenes de héroes y logos (Marvel, DC)
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── heroe-tarjeta/   # Tarjeta reutilizable de un héroe
│   │   ├── models/
│   │   │   └── heroe.ts         # Interfaz que describe un héroe
│   │   ├── pages/
│   │   │   ├── home/            # Página de inicio
│   │   │   ├── heroes/          # Listado de héroes
│   │   │   ├── heroe-detalle/   # Ficha de un héroe
│   │   │   ├── buscador/        # Resultados de la búsqueda
│   │   │   └── about/           # Página "Acerca de"
│   │   ├── services/
│   │   │   └── heroe.service.ts # Acceso a los datos de los héroes
│   │   └── shared/
│   │       └── navbar/          # Barra de navegación con buscador
│   └── styles.css               # Estilos globales
├── angular.json                 # Configuración del proyecto (incluye Bootstrap)
└── package.json
```

> 📌 La carpeta `public` se copia a la raíz del sitio al compilar. Por eso una imagen guardada en `public/assets/img/batman.png` se referencia como `assets/img/batman.png` (sin `public`).

---

## 🧩 Páginas y componentes

| Elemento | Tipo | Responsabilidad |
|---|---|---|
| `Home` | Página | Pantalla de bienvenida |
| `Heroes` | Página | Recorre la lista de héroes y pinta una tarjeta por cada uno (ruta `/heroes`) |
| `HeroeDetalle` | Página | Muestra la ficha completa de un héroe (ruta `/heroe/:id`) |
| `Buscador` | Página | Muestra los héroes que coinciden con el término buscado |
| `About` | Página | Información de la aplicación |
| `HeroeTarjeta` | Componente | Tarjeta reutilizable; recibe el héroe y su índice como entradas |
| `Navbar` | Componente | Menú de navegación y caja de búsqueda |
| `HeroeService` | Servicio | Centraliza la obtención y la búsqueda de héroes |

> Las rutas exactas de cada página están definidas en `src/app/app.routes.ts`.

---

## 🎓 Conceptos de Angular que se practican

Cada fila indica **qué se aprende** y **dónde verlo**.

| Concepto | Qué es | Dónde verlo |
|---|---|---|
| **Componentes standalone** | Componentes que declaran sus propias dependencias en `imports`, sin `NgModule` | Todos los componentes de `pages/` y `components/` |
| **Inyección con `inject()`** | Forma moderna de obtener un servicio dentro de una clase | `Heroes`, `HeroeDetalle`, `Buscador` |
| **Servicios** | Clases que encapsulan la lógica de datos y se comparten entre componentes | `services/heroe.service.ts` |
| **Inputs con señales** (`input()`, `input.required()`) | Datos que un componente recibe desde fuera, con seguridad de tipos | `HeroeTarjeta`, `HeroeDetalle`, `Buscador` |
| **`computed()`** | Valor derivado que se recalcula solo cuando cambian sus dependencias | `Buscador` (resultados) y `HeroeDetalle` (héroe elegido) |
| **Control de flujo en plantillas** | `@for`, `@if`, `@else`, `@switch` y `@empty` en lugar de `*ngFor` y `*ngIf` | `heroes.html`, `buscador.html`, `heroe-detalle.html` |
| **Enlace de propiedades** | `[heroe]="heroe"` pasa datos del padre al hijo | `heroes.html` → `heroe-tarjeta` |
| **Pipes** | Transformar datos al mostrarlos: `uppercase`, `date` | `heroe-detalle.html` |
| **Enrutado** | Navegar entre páginas con `routerLink` y parámetros de ruta | `app.routes.ts`, `navbar`, tarjetas |
| **Parámetros de ruta como inputs** | El `:id` de la URL llega al componente como un `input` | `HeroeDetalle` |
| **Bootstrap en Angular** | Añadir CSS y JS de terceros desde `angular.json` | `angular.json` → `styles` y `scripts` |

---

## 🔄 Cómo funciona el flujo de datos

```text
Navbar (caja de búsqueda)
   │  navega a la página de resultados con el término
   ▼
Buscador ── input(termino) ──► computed(heroes) ──► HeroeService.buscarHeroe()
   │
   │  @for recorre los resultados
   ▼
HeroeTarjeta  ◄── [heroe] y [index]
   │
   │  "Ver más…" navega a /heroe/:id
   ▼
HeroeDetalle ── input(id) ──► computed(heroe) ──► HeroeService.getHeroe()
```

La idea clave: **los componentes no guardan los datos, los piden al servicio**. Así, la lógica está en un solo lugar y las páginas se limitan a mostrar lo que reciben.

---

## 🛠️ Problemas frecuentes

Errores reales que aparecen al desarrollar este proyecto y cómo resolverlos.

| Síntoma | Causa probable | Solución |
|---|---|---|
| `NG8001: 'app-heroe-tarjeta' is not a known element` | El componente no está importado en el componente que lo usa | Añadir `HeroeTarjeta` al array `imports` del `@Component` |
| `NG8002: Can't bind to 'heroe'...` | Mismo motivo, o el input no está declarado | Importar el componente y comprobar que declara `heroe` e `index` como inputs |
| `NG8109` / `NG8117` (aviso con `termino`) | Un input de tipo señal se usa sin paréntesis | Escribir `{{ termino() }}` en lugar de `{{ termino }}` |
| `NG5002: Opening tag ... not terminated` | Comillas duplicadas o mal cerradas en un atributo | Revisar la línea indicada: `[index]="heroe.idx!"` |
| `JIT compilation failed...` en la consola del navegador | El build falló y el navegador muestra una versión incompleta | Mirar la terminal de `ng serve`, corregir los errores y recargar con `Ctrl + F5` |
| La imagen no se ve | Ruta incorrecta | Usar `assets/img/nombre.png`; comprobar mayúsculas y extensión |
| `No se permite la propiedad configurations` en `angular.json` | Llave `}` mal cerrada en `options` | Cerrar `options` antes de `configurations` |
| Los cambios en `angular.json` no se aplican | El servidor no relee ese archivo | Detener y volver a ejecutar `npm start` |
| Estilos de Bootstrap que no se aplican | Clase mal escrita (`secundary`) | Usar `text-body-secondary`, `btn-outline-secondary` |

---

## 💡 Ideas para ampliar el proyecto

Buenos ejercicios para practicar, de menor a mayor dificultad:

1. **Filtrar por casa:** botones "Marvel" y "DC" en el listado.
2. **Ordenar:** por nombre o por fecha de primera aparición.
3. **Favoritos:** marcar héroes y guardarlos con `localStorage`.
4. **Navegación entre héroes:** botones "Anterior" y "Siguiente" en la ficha.
5. **Buscador en vivo:** filtrar mientras se escribe, con un pequeño retraso (*debounce*).
6. **Datos externos:** cargar los héroes desde un archivo JSON o una API usando `HttpClient`.
7. **Carga diferida:** cargar las páginas con *lazy loading* en las rutas.
8. **Tests:** escribir pruebas unitarias para `HeroeService` y `Buscador`.

---

## 📜 Comandos útiles

| Comando | Qué hace |
|---|---|
| `npm start` | Arranca el servidor de desarrollo (`ng serve`) |
| `npm run build` | Compila la aplicación para producción en `dist/` |
| `npm test` | Ejecuta los tests unitarios |
| `ng generate component nombre` | Crea un componente nuevo |
| `ng generate service nombre` | Crea un servicio nuevo |
| `ng generate --help` | Lista todo lo que puede generar el CLI |

---

## 📚 Recursos para seguir aprendiendo

- [Documentación oficial de Angular](https://angular.dev)
- [Angular CLI: referencia de comandos](https://angular.dev/tools/cli)
- [Documentación de Bootstrap](https://getbootstrap.com/docs/)

---

## 👤 Autoría

Proyecto creado por [jsersan](https://github.com/jsersan).
#   a p p H e r o e s 2 2  
 