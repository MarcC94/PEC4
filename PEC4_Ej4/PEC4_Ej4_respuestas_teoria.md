> ### PEC4_Ej4
>
> P1. Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural NgFor:
• index
• even
• odd
• first
• last
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
> **Archivos de configuración del espacio de trabajo.**
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
> **El subdirectorio assets contiene imágenes y otros archivos de activos que se copian tal cual cuando se crea la  aplicación.**
>
> **El subdirectorio environments contiene opciones de configuración de compilación para entornos de destino particulares. De forma predeterminada, existe un entorno de desarrollo estándar sin nombre y un entorno de producción ("prod"). Se pueden definir configuraciones de entorno de destino adicionales.**

> P2. (0.25 puntos) Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:
> - app.module.ts - @NgModule (declarations, imports, providers, bootstrap).
>
> **Define el módulo raíz, llamado AppModule, que le dice a Angular cómo ensamblar la aplicación. Inicialmente declara solo AppComponent. A medida que se agregan más componentes a la aplicación, deben declararse aquí.**
>
> - app.component.ts - @Component (selector, templateUrl, styleUrls).
>
> **Define la lógica del componente raíz de la aplicación, denominado AppComponent. La vista asociada con este componente raíz se convierte en la raíz de la jerarquía de vistas a medida que se agregan componentes y servicios a la aplicación.**

> P3. (0.25 puntos) ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?
>
> **Es posible inyectar el template y estilos en línea sin especificarlos en templateUrl y styleUrls. Por ejemplo, se pueden añadir estilos a un componente, ademas de con styleUrls, haciéndolo en línea en la plantilla HTML o con CSS imports. En cuanto al HTML, se puede definir directamente en el componente con el atributo template en lugar de indicar la url del archivo (p.ej: app.component.html) en el atributo templateUrl.**