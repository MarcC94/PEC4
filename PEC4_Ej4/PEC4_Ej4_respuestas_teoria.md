> ### PEC4_Ej4
>
> P1. Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural NgFor:
>
>**La directiva ngFor es la que se encarga de presentar una lista de elementos en pantalla de una forma sencilla combinando el concepto de bucle y plantilla.**
>
> • index: **tipo número: el índice del elemento actual en el iterable.**
>
> • even: **tipo booleano: verdadero cuando el elemento tiene un índice par en el iterable.**
>
> • odd: **tipo booleano: verdadero cuando el elemento tiene un índice impar en el iterable.**
>
> • first: **tipo booleano: Verdadero cuando el elemento es el primer elemento en el iterable.**
>
> • last: **tipo booleano: Verdadero cuando el elemento es el último elemento en el iterable.**
>
>
> P2. ¿Para qué sirve la opción trackBy de la directiva estructural NgFor? Pon ejemplos de uso.
>
> **Internamente, cada vez que se añade, modifica o elimina un item de un array, Angular a través de la directiva ngFor volverá a redibujar completemente el DOM desde cero. Y esto es una operación costosa.**
**En aplicaciones medianas o grandes esto puede llegar a ser un problema.**
**Para ello existe la función trackBy, capaz de encargarse de realizar un seguimiento de los cambios en el array y que solo haaga los cambios o el cambio en los items necesarios.**
**Con esta función, cuando se agreguenn, muevan o eliminen elementos en el iterable, la directiva sólo volverá a redibujar los items que han cambiado.**
**La función recibe dos entradas, el índice de iteración y el ID del objeto del nodo (item).**
>
> P3. ¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón tanto si es si posible como si no lo es.
>
> **.**