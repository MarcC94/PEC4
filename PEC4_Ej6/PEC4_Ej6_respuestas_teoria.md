> ### PEC4_Ej6
>
> P1. ¿Cuáles son los style encapsulation de los componentes? Pon un ejemplo de uso de cada uno de ellos.
>
>**Hay tres modos de style encapsulation, ShadowDom, Emulated y None**
>
> **• Emulated: Los estilos de los componentes se agregan al <head> del documento, lo que los hace disponibles en toda la aplicación, pero sus selectores solo afectan a los elementos dentro de las plantillas de sus respectivos componentes.**
>
> **• None: Los estilos de los componentes se agregan al <head> del documento, lo que los hace disponibles en toda la aplicación, por lo que son completamente globales y afectan a cualquier elemento coincidente dentro del documento.**
>
> **• ShadowDom: Los estilos de los componentes solo se agregan al host shadow DOM, lo que garantiza que solo afecten a los elementos dentro de las vistas de sus respectivos componentes.**
>
> P2. ¿Qué es el shadow DOM?
>
> **El Shadow DOM es un DOM encapsulado que esta dentro del DOM principal. Cada uno tiene un estilo adjudicado y que no se ve afectado por el estilo del documento principal. Esto es debido al encapsulamiento.**
>
>**El Shadow DOM nos permite definir elementos complejos para poder reutilizarlos. Su característica, de ser un DOM encapsulado que coexiste dentro del DOM padre, nos da una forma de tener código aislado del resto tanto en estilos como en funcionalidad.**
>
> P3. ¿Qué es el changeDetection?
>
>**changeDetection es la detección de cambios en cada componente por completo cada vez que algo cambia. A medida que una aplicación se vuelve compleja y la cantidad de componentes crece, la detección de cambios tendrá que realizar más trabajo.**
>
>**Hay dos estrategias posibles en el componente changeDetection. Esta la opción onPush:0 y la opción Default:1; la primera desactiva la detección de cambios automática y la segunda comprueba siempre los cambios de forma automática.** 
>
> P4. ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.
>
>**La opción predeterminada es cómoda de utilizar, sin embargo, a medida que la aplicación crece, la complejidad de la detección de cambios aumentará. Por esa razón podríamos considerar OnPush como nuestra estrategia de detección de cambios a partir de un cierto tamaño de la aplicación.**
>
>**La estrategia predeterminada tiene menos rendimiento ya que hay ciclos de procesamiento adicionales involucrados, incluso si no hay impacto.**
>
> P5. Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los hooks OnChanges, OnInit, AfterViewInit y OnDestroy, puesto que son los más utilizados.
>
>**OnChanges: Este evento se ejecuta cada vez que se cambia un valor de un input control dentro de un componente. Se activa primero cuando se cambia el valor de una propiedad vinculada. Siempre recibe un change data map o mapa de datos de cambio, que contiene el valor actual y anterior de la propiedad vinculada envuelta en un SimpleChange**
>
>**OnInit: Se ejecuta una vez que Angular ha desplegado los data-bound properties(variables vinculadas a datos) o cuando el componente ha sido inicializado, una vez que ngOnChanges se haya ejecutado. Este evento es utilizado principalmente para inicializar la data en el componente.**
>
>**DoCheck: Se activa cada vez que se verifican las propiedades de entrada de un componente. Este método nos permite implementar nuestra propia lógica o algoritmo de detección de cambios personalizado para cualquier componente.**
>
>**AfterContentInit: Se ejecuta cuando Angular realiza cualquier muestra de contenido dentro de las vistas de componentes y justo después de ngDoCheck. Actuando una vez que todas las vinculaciones del componente deban verificarse por primera vez. Está vinculado con las inicializaciones del componente hijo.**
>
>**AfterContentChecked: Se ejecuta cada vez que el contenido del componente ha sido verificado por el mecanismo de detección de cambios de Angular; se llama después del método ngAfterContentInit. Este también se invoca en cada ejecución posterior de ngDoCheck y está relacionado principalmente con las inicializaciones del componente hijo.**
>
>**AfterViewInit: Se ejecuta cuando la vista del componente se ha inicializado por completo. Este método se inicializa después de que Angular ha inicializado la vista del componente y las vistas secundarias. Se llama después de ngAfterContentChecked. Solo se aplica a los componentes.**
>
>**AfterViewChecked: Se ejecuta después del método ngAfterViewInit y cada vez que la vista del componente verifique cambios. También se ejecuta cuando se ha modificado cualquier enlace de las directivas secundarias. Por lo tanto, es muy útil cuando el componente espera algún valor que proviene de sus componentes secundarios.**
>
>**OnDestroy: Este método se ejecutará justo antes de que Angular destruya los componentes. Es muy útil para darse de baja de los observables y desconectar los event handlers para evitar memory leaks o fugas de memoria.**