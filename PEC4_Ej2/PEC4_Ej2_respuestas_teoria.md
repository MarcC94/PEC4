> ### PEC4_Ej2
>
> P1. (0.75 puntos) ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado vinoteca? (A las preguntas que te haga Angular CLI puedes contestar utilizando las opciones por defecto). Explica brevemente la estructura y ficheros que ha generado Angular CLI:
>
> **El comando que hay que utilizar es ng new. En este caso, para crear un nuevo proyecto llamado vinoteca tendremos que escribir el comando ng new vinoteca.**
>
> Ficheros de configuración en la raíz del proyecto:
> - tsconfing.app.json
> - angular.json
> - package.json
> - .editorconfig,
> - .gitignore
> - …
>
> **Archivos de configuración del espacio de trabajo**
> **Todos los proyectos dentro de un espacio de trabajo comparten un contexto de configuración CLI. El nivel superior del espacio de trabajo contiene archivos de configuración de todo el espacio de trabajo, archivos de configuración para la aplicación de nivel raíz y subcarpetas para los archivos de prueba y origen de la aplicación de nivel raíz.** 
>
> Directorio node_modules
>
> **El directorio node_modules proporciona paquetes npm a todo el espacio de trabajo. Las dependencias de node_modules en todo el espacio de trabajo son visibles para todos los proyectos.**
>
> Directorio src:
> - index.html
> - main.ts
> - styles.css
> - test.ts
> - polyfills.ts
> - Directorio environments
> - Directorio assets
> - Directorio app
> - Ficheros app.component.*
> - Fichero app.module.ts
>
> **El directorio src contiene los archivos de origen para el proyecto de aplicación de nivel raíz. Los archivos en el nivel superior de src/ sirven para el testing (test.ts) y la ejecución de la aplicación (index.html, main.ts, styles.css). Las subcarpetas contienen la fuente de la aplicación y la configuración específica de la misma.**
>
> **El subdirectorio app contiene los archivos de componentes en los que se definen la lógica y los datos de la aplicación.**
>
> **El subdirectorio assets contiene imágenes y otros archivos de activos que se copiarán tal cual cuando se crea la  aplicación.**
>
> **El subdirectorio environments contiene opciones de configuración de compilación para entornos de destino particulares. De forma predeterminada, existe un entorno de desarrollo estándar sin nombre y un entorno de producción ("prod"). Se pueden definir configuraciones de entorno de destino adicionales.**

> P2. (0.25 puntos) Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:
> - app.module.ts - @NgModule (declarations, imports, providers, bootstrap).
> - app.component.ts - @Component (selector, templateUrl, styleUrls).

> P3. (0.25 puntos) ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?