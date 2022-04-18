> ### PEC4_Ej2
>
> P1. (0.75 puntos) ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado vinoteca? (A las preguntas que te haga Angular CLI puedes contestar utilizando las opciones por defecto). Explica brevemente la estructura y ficheros que ha generado Angular CLI:
>
> Ficheros de configuración en la raíz del proyecto:
> - tsconfing.app.json
> - angular.json
> - package.json
> - .editorconfig,
> - .gitignore
> - …
>
> Directorio node_modules
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

> P2. (0.25 puntos) Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:
> - app.module.ts - @NgModule (declarations, imports, providers, bootstrap).
> - app.component.ts - @Component (selector, templateUrl, styleUrls).

> P3. (0.25 puntos) ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?