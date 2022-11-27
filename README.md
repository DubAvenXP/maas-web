# Quasar App (maas-frontend)

MaaS frontend

Es una aplicación web desarrollada con Quasar Framework, que permite la gestión de los servicios de MaaS.

El objetivo del proyecto es gestionar de manera eficiente las asignaciones de los ingenieros de MaaS, así como la gestión de los servicios que se realizan.

### Detalles

Para el desarrollo de la aplicación se utilizó Quasar Framework, el cual es un framework de código abierto basado en Vue.js, que permite la creación de aplicaciones web, móviles y de escritorio.

Node v18.12.0

## Estrucutra de carpetas

.
├── public
│ └── icons
└── src
├── assets
├── boot
├── components
│ ├── assignments
│ ├── availabilities
│ ├── clients
│ ├── services
│ ├── shifts
│ └── user
├── composables
├── css
├── layouts
├── pages
├── router
├── shared
│ └── components
└── stores

components: Contiene los componentes de la aplicación. Estos componentes se dividen en carpetas según su funcionalidad y pagina a la que pertenecen.

composables: Contiene los composables de la aplicación. Estos son los archivos que contienen la lógica de la aplicación. Se agrupan por recurso para facilitar su mantenimiento y ser reutilizados.

layouts: Contiene los layouts de la aplicación. Estos layouts son los que se encargan de mostrar la barra de navegación y el footer de la aplicación.

pages: Contiene las páginas de la aplicación. Estas páginas son las que se encargan de mostrar los componentes de la aplicación.

router: Contiene el archivo de rutas de la aplicación.

stores: Contiene los archivos de los stores de la aplicación. Estos archivos son los que se encargan de gestionar el estado de la aplicación.

# Pasos para correr el proyecto

## Instalar quasar-cli

```bash
npm install -g @quasar/cli
# or
yarn global add @quasar/cli
```

## Instalar dependencias

```bash
yarn
# or
npm install
```

### Iniciar el proyecto en modo desarrollo (hot-code reloading, error reporting, etc.)

```bash
yarn dev
# or
npm run dev
```

### Ejecutar linter (ESLint)

```bash
yarn lint
# or
npm run lint
```

### Formatear proyecto

```bash
yarn format
# or
npm run format
```

### Construir el proyecto para producción

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
