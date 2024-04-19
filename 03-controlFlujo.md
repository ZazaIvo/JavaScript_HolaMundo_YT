# Control de Flujo

Se utilizan operadores para ir tomando caminos distintos según las condiciones que se cumplan. Para ello usamos operadores como el "if" "else" "swich"

## Operador if

La sintaxis comienza con declarar el if y seguido unos paréntesis que contiene las condiciones que se deben cumplir. Si se cumplen y el resultado de todo lo que está entre paréntesis dá como "true" sigue a lo que codifiquemos dentro de unas llaves.

<table><tbody><tr><td><p>Condición:</p><pre><code class="language-javascript">console.log("Declaración if");
if (true){
    console.log("Es verdadera la expresión");
};</code></pre></td><td><p>Por consola:</p><pre><code class="language-">Declaración if
Es verdadera la expresión</code></pre></td></tr></tbody></table>

Aplicamos a una variable el valor de edad como habiamos hecho con el ternario:

<table><tbody><tr><td><p>Condición if:</p><pre><code class="language-javascript">let edad = 25;
if (edad &gt; 17) {
    console.log("Usuario mayor de edad");
}</code></pre></td><td><p>Por consola:</p><pre><code class="language-">Declaración if
Usuario mayor de edad</code></pre></td></tr></tbody></table>

Si cambiamos el valor es menor a 17 no immprime nada ya que al no cumplir no ejecuta nada más.

## Operador else

Si una condición no se sumple, podemos querer que ejecute otra lógica. Para ello usamos el "else" que se escribe seguido de la ultima llave del if colocando entre llaves lo que va a ejecutar si la condición del if es false. Para ello evaluamos la variable en 16 y agregamos lo que debe ejecutar:

<table><tbody><tr><td><p>Ejecuta "else"</p><pre><code class="language-javascript">console.log("Declaración else");
let edad = 16;
if (edad &gt; 17) {
    console.log("Usuario mayor de edad");
} else {
    console.log("Usuario menor de edad");
};</code></pre></td><td><p>Por consola:</p><pre><code class="language-">Declaración else
Usuario menor de edad</code></pre></td></tr></tbody></table>

Si queremos que si no cumple una lógica, compurueba otra lógica posible y si no cumple las dos primeras en ese orden se ejecute el "else". Esto es agregar un condicional más. Se hace con la combinación de "else if" y agregamos entre llaves la siguiente condición.

<table><tbody><tr><td><p>Agregamos un "else if"</p><pre><code class="language-javascript">console.log("Declaración else");
let edad = 16;
if (edad &gt; 17) {
    console.log("Usuario mayor de edad");
} else if (edad &gt; 13){
    console.log('Puede ingresar acompañado');
} else {
    console.log("Usuario menor de edad");
};</code></pre></td><td><p>Por consola:</p><pre><code class="language-">Declaración else
Puede ingresar acompañado</code></pre></td></tr></tbody></table>

Las evaluaciones se van a realizar de arriba abajo. Irá comprobando cada condición, si cumple con una la ejecuta y termina el proceso. Saltando las otras condiciones. Esto es muy importante ya que no realizará más que una condición true o el "else" final.

## Loop While

Cuando queremos que se ejecute el codigo varias veces si se cumple una condición usamos "while" que es "mientras". La sintaxis es como la del "if" usando la palabra reservada "while" y luego una condición que si es verdadera ejecuta el cdigo dentro de las llaves siguientes. Pero volverá a verificar nuevamente si la condición se cumple para repetir el proceso. Repetirá hasta que la expresión sea false. Por ello lo primero que debemos hacer es colocar el corte, por convención se va a llamar la variable "i" con valor inicial cero

```javascript
console.log("Ciclos While");
// Cuáles son los números pares
let i = 0;
while (condicion) {
  // Ejecuta hasta que condicion = flase
}
```

De la siguiente forma haremos que repita hasta que i \< 10 y lo primero que haremos es aumentar el valor de i en 1 cada vez que se ejecute el código con i++:

<table><tbody><tr><td><pre><code class="language-javascript">let i = 0;
while (i &lt; 3) {
    // Ejecuta hasta i = 10
    i++;
    console.log(i);
 };</code></pre></td><td><p>Ciclos While</p><p>1</p><p>2</p><p>3</p></td></tr></tbody></table>

Vemos que imprimio las veces que paso e incrementó la variable i. La última llegó a 3 y la condición (i \< 3) da false y no se ejecuta. Luego de asegurarnos que va a salir del while en algún momento vamos a crear la lógica que necesitamos.

<table><tbody><tr><td><p>Loop while hasta i = 10</p><pre><code class="language-javascript">console.log("Ciclos While");
// Cuáles son los números pares
let i = 0;
while (i &lt; 10) {
    // Ejecuta hasta i = 10
    if ( i % 2 == 0) {
        console.log(i);
    };
    //Incremento de i
    i++;
 };
 console.log('Fuera de while');</code></pre></td><td><p>Por consola:</p><pre><code class="language-">Ciclos While
0
2
4
6
8
Fuera de while</code></pre></td></tr></tbody></table>

Esto es con la lógica de si el módulo "%" o resto de un número dividido por 2 es cero quiere decir que ese número es par.

## Loop Do-While

Este loop a diferencia del anterior es que realizará una secuencia de lo que tiene que ejecutar sin ningúna condición. Luego comprueba el condicional para ver si repite. La sintaxis es con la palabra reservada "do" y luego entre llaves lo que debemos ejecutar. Al final se coloca el "while" con la condición entre paréntesis.

```javascript
do {
  // Ejecuta primero
} while (condicion);
```

El igual que el while, debemos primero que nada crear el incremento o el cambio y la condición. Para asegurar que no sea un loop inf.

```javascript
do {
  // Ejecuta primero
  //Incremento de i
  i++;
} while (i < 10);
```

Ahora podemos agregar la lógica.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Do-While');
let i = 0;
do {
    // Ejecuta primero
    if ( i % 2 == 0) {
        console.log(i);
    };
    //Incremento de i
    i++;
} while( i &lt; 10);</code></pre></td><td><pre><code class="language-">Do-While
0
2
4
6
8</code></pre></td></tr></tbody></table>

Realiza la primera expresión sin importar el valor inicial y lugo verifica se debe repatir. La diferencia se puede ver si "i" es mayor de 10 inicialmente, ejecutando una vez:

<table><tbody><tr><td><pre><code class="language-javascript">let i = 12;
do {
    if ( i % 2 == 0) {
        console.log(i);
    };
    i++;
} while( i &lt; 10);</code></pre></td><td><pre><code class="language-">Do-While
12</code></pre></td></tr></tbody></table>

Vemos que por consola muestra el 12 que es número par.

## Loop For

El loop for se compone de tres expresiones dentro de los parentesis.

```javascript
for (inicialización; comparación; expresion al terminar) {};
```

Lo que serán tres expresiones una inicial, la que sigue compara y la última incrementa.

```javascript
for (expresión; expresión; expresion) {Código a ejecutar};
```

Siendo la definición de la variable que irá cambiando de valor, luego la condición para que ejecute y finalmente el incremento:

```javascript
for (let i = 0; i < 10; i++) {
  // Ejecuta
}
```

Quedando finalmente para el ejemplo de los número pares como:

<table><tbody><tr><td><pre><code class="language-javascript"> for (let i = 0;i &lt; 10; i++) {
    if (i % 2 == 0) {
        console.log('Número par: ',i);
    };
 };</code></pre></td><td><pre><code class="language-">Número par  0
Número par  2
Número par  4
Número par  6
Número par  8</code></pre></td></tr></tbody></table>

## Loop For - of (Array)

Este loop es muy similar al loop For, por ello se llama en parte así, pero agrega una herramienta. Los loops anteriores podemos definir como se va a iterar o cuanto será el incremento que tendremos. Pero la herramienta de For Of, nos permite iterar en objetos o arreglos cada uno de las propiedades u objetos. Pasando una vez por cada length que tengamos.

La sintaxis es como el for pero tendrá entre los parentecis primero la definicion de la variable que se igualará a cada elemento dentro del arreglo y luego el nombre del arreglo que estamos iterando.

<table><tbody><tr><td><pre><code class="language-javascript">// Arreglo a iterar:
let animales = ['Chancho','Cabra','Perro','Caballo'];
// Iteración de contenido:
for (let animal of animales) {
    //Ejecuta por cada elemento:
    console.log(animal);
};</code></pre></td><td><p>Por consola:</p><pre><code class="language-">Chancho
Cabra
Perro
Caballo</code></pre></td></tr></tbody></table>

El nombre de la variable puede ser el que queramos, pero por buenas costumbres debe ser para darle sentido al código.

Si queremos hacer lo mismo con el while es posible pero no es eficiente quedando:

<table><tbody><tr><td><pre><code class="language-javascript">// Metodo While
console.log('Metodo While');
let i = 0;
while (i &lt; animales.length) {
    console.log(animales[i]);
    i++;
};</code></pre></td><td><pre><code class="language-">Metodo While
Chancho
Cabra
Perro
Caballo</code></pre></td></tr></tbody></table>

Comparando:

<table><tbody><tr><td><p>Metodo for-of:</p><pre><code class="language-javascript">for (let animal of animales) {
    console.log(animal);
};</code></pre></td><td><p>Metodo While:</p><pre><code class="language-javascript">let i = 0;
while (i &lt; animales.length) {
    console.log(animales[i]);
    i++;
};</code></pre></td></tr></tbody></table>

## Loop For - in (Objetos)

Este loop nos ayuda para los objetos, ya que podemos no saber cuales son las propiedades ni cuantas son. Pera ello se usa el for - in que ira recorriendo cada propiedad asignando el nombre de esa propiedad a la variable que defimos por cada iteración. La sintaxis es colocar entre parentesis del for primero la definicion de la variable "prop" luego la palabra reservada "in" y seguido el nombre del objeto a iterar.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Loop For - in');
let user = {
    id: 1,
    name: 'Ivan',
    edad: 40,
    correo: 'zaza@zaza.com'
};
for (let prop in user) {
    console.log(prop);
};</code></pre></td><td><pre><code class="language-">Loop For - in
id
name
edad
correo</code></pre></td></tr></tbody></table>

Para poder acceder a la propiedad y su valor debemos usar la notación para objetos del nombre y seguido de \[\] el nombre de la propiedad, en este caso asignada a "prop"

<table><tbody><tr><td><pre><code class="language-javascript">for (let prop in user) {
    console.log(prop, ': ',user[prop]);
};</code></pre></td><td><pre><code class="language-">id :  1
name :  Ivan
age :  40
correo :  zaza@zaza.com</code></pre></td></tr></tbody></table>

De esta forma pudimos construir primero el nombre de la propiedad (prop) y luego del objeto el valor de la propiedad (user\[prop\])

Loop For - in (Array - no usar)

Hay casos de código que se pueden encontrar con el for - in implementado para arreglos. Esto es porque el for - of es relativamente nuevo y ha quedado codigo con el for - in.

No es buena practica usarlo para los arreglos. Pero podemos encontrarnos:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('For-in en Arreglos:');
let animales = ['Perro','Cabra','Pato'];
for (let indice in animales){
    console.log(indice, animales[indice]);
};</code></pre></td><td><pre><code class="language-">For-in en Arreglos:
0 Perro
1 Cabra
2 Pato</code></pre></td></tr></tbody></table>

## Continue y break

En algún momento podemos querer interrumpir un loop de los que ya vimos antes. O tambien querer salterar una iteración.

Break nos permite salir del loop y seguir con el código siguiente. Continue nos permite saltar una iteracion. Por ejemplo si al ejecutar una lógica se obtiene un resultado nulo o undifine porque algo salio mal, podemos salir con break.

<table><tbody><tr><td><pre><code class="language-javascript">let i = 0;
while (i&lt;6){
    i++;
    if (i === 2){
        continue;
    };
    console.log(i);
};</code></pre></td><td><pre><code class="language-">1
3
4
5
6</code></pre></td></tr></tbody></table>

Vemos en el código anterior que cada vez que entre al while porque el valor de i es menor de 6 va a sumar o incrementar i y luego mostrar el valor. Pero al agregar el condicional para i exactamente igual a 2 continuará a la siguiete iteración interrumpiendo todo el código siguiente al if() y seguirá con la nueva iteración. Por eso no muestra el 2 en la cosola.

Podemos hacer la lógica para obtener valores pares con "continue" haciendo que cuando el resto de la divición por 2 sea distinto de cero (número impar) continue sin imprimir ese número al siguiente.

<table><tbody><tr><td><pre><code class="language-javascript">i = 0;
console.log('Valores Pares:');
while (i&lt;10){
    i++;
    if (i % 2 != 0){
        continue;
    };
    console.log(i);
};</code></pre></td><td><pre><code class="language-">Valores Pares:
2
4
6
8
10</code></pre></td></tr></tbody></table>

Vemos que el incremento debe ser antes del "continue" ya que sino saltará el incremento y repetirá el salto indefinidamente creando un loop infinito.

Para el caso del break cuando se implementa termina con el loop donde se encuentre. Por ejemplo el caso siguiente:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Para Break:');
i = 0;
while (i&lt;6){
    i++;
    if (i === 2){
        continue;
    } else if (i === 4){
        break;
    };
    console.log(i);
};</code></pre></td><td><pre><code class="language-">Para Break:
1
3</code></pre></td></tr></tbody></table>

Si el valor de i es igual a 4 entonces detiene el loop while. Por ello por consola muestra solo hasta el tres salteando el 2 del "continue"

## Switch

Sirve para indicar al código donde queremos que se dirija dependiendo del valor de la variable. Es decir que evalua casos distintos de uso para valores especificos de la variable. La sintaxis es:

```javascript
let variable;
switch (variable) {
  case "valor1 de variable":
  //Lógica para valor1
  case "valor2 de variable":
  //Lógica para valor2
}
```

Para el valor 'valor1' que puede tomar la variable seguirá el primer caso ejecutando la lógica. Si cambia el valor y obtenemos 'valor2' seguirá el segundo caso. Podemos poner la cantidad de casos que queramos.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Switch');
let accion = 'listar';
switch (accion){
    case 'listar':
        console.log('Acción para listar');
};</code></pre></td><td><pre><code class="language-">Switch
Acción para listar</code></pre></td></tr></tbody></table>

Agregamos el break luego de cada caso para que no siga ejecutando si no lo deseamos luego de encontrar el caso. Esto es porque usamos recursos innecesarios, pero tenemos la opción de seguir si lo deseamos.

Finalmente como en "else" del "if" que no se cumplian las condiciones, en Switch podemos codificar que acción realizar o ejecutar si no se cumple ningún caso. Para ello usamos "default" con la misma sintaxis que "case" pero al final.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Switch');
let accion = 'cambiar';
switch (accion){
    case 'listar':
        console.log('Acción para listar');
        break;
    default:
        console.log('No hay instrucción correcta');
};</code></pre></td><td><pre><code class="language-">Switch
No hay instrucción correcta</code></pre></td></tr></tbody></table>

Esta lógica se puede realizar con if else pero el código no es prolijo y no se reduce. También tener en cuenta que hay librerías como "Redux" que usan el Switch. Para una o dos condiciones usar if else, para más de dos condiciones usar el Switch.
