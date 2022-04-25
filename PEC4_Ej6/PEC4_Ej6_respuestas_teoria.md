> ### PEC4_Ej6
>
> P1. ¿Cuáles son los style encapsulation de los componentes? Pon un ejemplo de uso de cada uno de ellos.
>
>**Hay tres modos de style encapsulation, ShadowDom, Emulated y None**
>
> **• Emulated: Los estilos de los componentes se agregan al <head> del documento, lo que los hace disponibles en toda la aplicación, pero sus selectores solo afectan a los elementos dentro de las plantillas de sus respectivos componentes.**
>
> @Component({
  selector: 'app-no-encapsulation',
  template: `
    <h2>None</h2>
    <div class="none-message">No encapsulation</div>
  `,
  styles: ['h2, .none-message { color: red; }'],
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent { }
>
> **• None: Los estilos de los componentes se agregan al <head> del documento, lo que los hace disponibles en toda la aplicación, por lo que son completamente globales y afectan a cualquier elemento coincidente dentro del documento.**
>
> **• ShadowDom: Los estilos de los componentes solo se agregan al host shadow DOM, lo que garantiza que solo afecten a los elementos dentro de las vistas de sus respectivos componentes.**
>
> • first: **tipo booleano: Verdadero cuando el elemento es el primer elemento en el iterable.**
>
> • last: **tipo booleano: Verdadero cuando el elemento es el último elemento en el iterable.**
>
>
> P2. ¿Qué es el shadow DOM?
>
> **Internamente, cada vez que se añade, modifica o elimina un item de un array, Angular a través de la directiva ngFor volverá a redibujar completemente el DOM desde cero. Y esto es una operación costosa.**
>
>**En aplicaciones medianas o grandes esto puede llegar a ser un problema.**
>
>**Para ello existe la función trackBy, capaz de encargarse de realizar un seguimiento de los cambios en el array y que solo haga los cambios o el cambio en los items necesarios.**
**Con esta función, cuando se agreguen, muevan o eliminen elementos en el iterable, la directiva sólo volverá a redibujar los items que han cambiado.**
**La función recibe dos entradas, el índice de iteración y el ID del objeto del nodo (item).**
>
> P3. ¿Qué es el changeDetection?
>
>**No es posible ejecutar dos directivas estructurales simultaneamente, ya que no es inmediatamente obvio cuál de los dos debe ejecutarse primero. Angular, en lugar de crear un orden innato en el que una directiva se ejecute antes que la otra, lo simplifica no permitiendolo en el mismo elemento.**
>
> P4. ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.
>
>**DD**
>
> P5. Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los hooks OnChanges, OnInit, AfterViewInit y OnDestroy, puesto que son los más utilizados
>
>**DD**