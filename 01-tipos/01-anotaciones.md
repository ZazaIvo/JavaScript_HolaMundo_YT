# Tipos de variables

Para definir variables debemos utilizar la palabra reservada let o var. Para empezar usaremos let.

```javascript
let nombre = "Hola mundo";
```

No hace falta que al crear una variable contenga un valor. Podemos cearla vacia:

```javascript
let nombre;
```

Y solo nos mostrará un console.log como undefine.

## Nombres

Los nombre de las variables deben empezar con letras o con un guión bajo. Tampoco se pueden usar palabras reservadas que se utilizan en el funcionamiento de javaScript

### Convenciones:

1- UpperCameCase: La primera letra empieza con mayuscula y si hay otra palabra debe estar seguida y empezar con mayusculas. En algunos lenguajes para nombrar constantes o clases.

```javascript
let NombreCompleto;
```

2- camelCase: La primera palabra empieza con minúscula y la siguientes palabras si las hay con mayúsculas. La más usada en JavaScript.

```javascript
let nombreCompleto;
```

3- snake_case: todas las palabras en minúsculas separadas por un guión bajo.

```javascript
let nombre_completo;
```

En JavaScript es case sensible, es decir que no es lo mismo nombreCompleto y NombreCompleto.

## Asiganar valor

Una variable se puede definir vacia y luego en el mismo nivel llamarla y asignarle el nuevo valor que queremos.

```javascript
let apellido;
apellido = "Azzarello";
```

Vemos que una vez que ya esta definida con la palabra reservada _**let**_ no debemos volver a usar la palabra reservada, solo el nombre.

### Convención de sintaxis.

Se puede definir o inicializar variables en linea de la siguiente manera:

```javascript
let nombre, apellido;
```

Pero por convención se declara o inicializa cada variable en una linea distinta:

```
let nombre;
let apellido;
```

Se debe conservar un sentido con los nombres de las variables, es decir que si la variable de llama 'nombre' hace referencia a un nombre propio o 'apellido' será para el apellido.

# Tipos de datos

Los datos se pueden clasificar en:

<table><tbody><tr><td><p><strong>Primitivos</strong></p><ul><li>number</li><li>string</li><li>boolean</li><li>undefined</li><li>null</li></ul></td><td><p><strong>De Referencia</strong></p><ul><li>Array</li><li>Object</li><li>Functions</li><li>Clases</li></ul></td></tr></tbody></table>

La diferencia es que al ser guardados en la memória RAM para los valores se asigna un espacio fijo que no se va a poder expandir y que es muy rapida. Esta porción de memória se llama _Stack_  y es donde se guardan los valores _Primitivos_ Se llaman datos primitivos porque cuando lo busquemos en la porción de memoria _Stack_ encontraremos el valor directamente.

En cambio se puede asignar una memoria dinámica de la RAM que puede crecer si es necesario se llama _Heap_, en ella se guardan los valores _De Referencia_ Porque un array por ejemplo puede crecer o un objeto puede nececitar más o menos espacio. Se llama de referencia porque cuando busquemos el valor vamos a encontrar una dirección de referencia a otra parte de la memória. Por ejemplo un objeto que tiene una propiedad de nombre y otra de apellido, cada valor de cada propiedad puede estar guardado en una memoria _Stack_ y es llamado desde la memoria _Heap_

En resumen, el dato primitivo lo vamos a encontrar en el bloque de RAM que le fue asignado, el datos de referencia vamos a recibir una referencia de donde esta guardado en otra parte.

## Datos Primitivos

Los datos primitivos será:

```javascript
let numero = 1;
let texto = "Hola mundo";
let verdadero = true;
let falso = false;
let noDefinido;
let undef = undefined;
let nulo = null;
```

Donde cada uno al poner el puntero sobre la variable nos muestra el tipo de dato, si es un numero será 'number'  o si es un texto será 'string'. En la sintaxis vemos que los textos deben ir entre comillas.

El valor undefined se establece en dos situaciones. cuando no damos ningún valor a la variable como noDefinido o cuando asignamos como valor la palabra undefined como en el caso de undef. El valor nulo es distinto a undefined ya que en uno es porque en la lógica no hemos definido un valor todavia y el nulo es porque el usuario no completo deliveradamente el valor de la variable dejando un campo vacio.

## Constantes

Primero veremos que en las variables podemos cambiar los valores en el código siguiente asignamos primero un valor y luego lo cambiamos:

```javascript
let nombre = "Hola Mundo";

console.log("Primer valor: " + nombre);

/* Cambiamos el valor de la variable */
nombre = "Chanchito feliz";

console.log("Segundo valor: " + nombre);
```

Y por consola:

```
Primer valor: Hola Mundo
Segundo valor: Chanchito feliz
```

Pero las constantes no podremos cambiar el valor asignado al declararla. Por ello se asigna el valor al inicio y luego no se podrá modificar desde la lógica, es decir que no podremos hacer nada que le asigne algún valor distinto. Solo desde el código donde fue declarada la constante podemos cambiar el valor.

Como regla general se debe intentar _**nunca**_ cambiar el valor de una variable. Si va a cambiar de valor se debe crear otra variable.

Por ello existen las constantes, donde le decimos a JavaScript que no podrá cambiar de valor de ninguna manera.

```javascript
const nombreConstante = "Hola Mundo";
nombreConstante = "Chanchito Feliz";
console.log(nombreConstante);
```

Si tratamos de asignar un valor nuevo a una constante en este caso \<const nombreConstante> nos dará un error por consola:

```
TypeError: Assignment to constant variable.
c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\01-tipos\03-constantes.js:13
nombreConstante = 'Chanchito Feliz';
```

Donde indica que estamos asignando un valor a una constante y el archivo donde pasa esto junto con la línea que tiene el error.

Corregimos el codigo:

```javascript
const nombreConstante1 = "Hola Mundo";
const nombreConstante2 = "Chanchito Feliz";
console.log(nombreConstante1);
console.log(nombreConstante2);
```

## Let o Const

Como regla general para definir una variable let o una constante es que tenemos que tratar de nunca cambiar el valor de una variable y definir casi todo con constantes agregando nuevas constantes para asignar los cambios, haciendo más estricto el código y los let dejarlos para casos practicos donde se realizan bucles o iteraciones.

# Tipado Dinámico - Estático

En programación a los lenguajes se los puede clasificar de tipado estático y de tipado dinámico.

## Tipado Estático

El tipado estatico requiere que al definir una varaible se le asigne además del valor, el tipo de valor que contendrá y luego solo podremos cambiar el valor por otro del mismo tipo como por ejemplo:

```typescript
let nombre: string = "Hola Mundo";
```

Esto en TypeScript transforma a JavaScript en estático ya que le indicamos que serán valores de texto siempre. Otro lenguaje que es estático es Java

## Tipado Dinámico

Hay lenguajes que podemos cambiar los valores por cualquier tipo de valor, pasando de un texto string a un numero number o boolean a string. Estos lenguajes no definen el tipo de valor que deberá contener:

```javascript
let nombre = "Hola Mundo";
nombre = 120;
nombre = true;
```

Como es el caso de JavaScript o Phyton.

Si en el siguiente caso donde definimos variables nombre por ejemplo como un string y luego le cambiamos el texto por un número veremos que pasa en la consola:

```javascript
let numero = 42;
let nombre = "Ivan";
let verdadero = true;
let falso = false;
let nolu = null;
let undf = undefined;
nombre = 53;
console.log("El nombre es: " + nombre);
```

Por consola:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\01-tipos\04-tipado-dinamico.js"
El nombre es: 53
```

Por lo que no restringe al tipo de valor inicial. Realizando un cambio de tipo.

### Verificar el tipo

Si en JavaScript colocamos antes de la variable la palabra reservada typeof nos dirá el tipo de valor que tiene guardado la variable:

```javascript
let numero = 42;
let nombre = "Ivan";
let verdadero = true;
let falso = false;
let nolu = null;
let undf = undefined;

console.log("El tipo de valor de nombre: " + typeof nombre);
console.log("El tipo de valor de número: " + typeof numero);
```

Por consola:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\01-tipos\04-tipado-dinamico.js"
El tipo de valor de nombre: string
El tipo de valor de número: number
```

Donde nos indica el tipo de valor que contiene en ese momento. Porque si lo cambiamos vemor como nos indica otro tio:

```javascript
let numero = "Hola";
let nombre = 70;
console.log("El tipo de valor de nombre: " + typeof nombre);
console.log("El tipo de valor de número: " + typeof numero);
```

Por consola veremos que nos dirá cual es el tipo que contienen ahora:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\01-tipos\tempCodeRunnerFile.js"
El tipo de valor de nombre: number
El tipo de valor de número: string
```

Para ver el tipo de todas las variables en este momento:

```
let numero = 45;
let nombre = 'Ivan';
let verdadero = true;
let falso = false;
let nulo = null;
let undf = undefined;
console.log("El tipo de valor de nombre: "+typeof numero);
console.log("El tipo de valor de número: "+typeof nombre);
console.log("El tipo de valor de número: "+typeof verdadero);
console.log("El tipo de valor de número: "+typeof falso);
console.log("El tipo de valor de número: "+typeof nulo);
console.log("El tipo de valor de número: "+typeof undf);
```

Y por consola:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\01-tipos\04-tipado-dinamico.js"
El tipo de valor de nombre: number
El tipo de valor de nombre: string
El tipo de valor de verdadero: boolean
El tipo de valor de falso: boolean
El tipo de valor de nulo: object
El tipo de valor de undf: undefined
```

### Tipo Null  como Object

Como vimos anteriormente el tipo de valor de null según typeof es object no null. Si vamos a la documentación de mozilla que es lo que ellos implementaron en su navegador WEB veremos en el apartado 'Null type' pero el la tabla de valores primitivos que para el tipo de null la palabra reservada typeof devolverá "object"

| Type                                                                                                    | Result        |
| ------------------------------------------------------------------------------------------------------- | ------------- |
| [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) | `"undefined"` |
| [Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)                | `"object"`    |
| [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)     | `"boolean"`   |
| [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)       | `"number"`    |
| [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)       | `"bigint"`    |
| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)       | `"string"`    |

Esto es porque se utiliza para listado de objetos, por lo que se decide que es para la aucencia de un objeto. Siendo un paradigma. Para la parte práctica si queremos identificar una condición de si algo es de valor null sebemos saber que la consulta de typeof será un objeto y no la palabra null.

# Comentarios

Los comentarios son para poder dejar anotaciones en el código para documentar. Dependiendo del lenguaje será la sintaxis que debemos utilizar para decirle en este caso a JavaScript que no lo considere como código.

## Comentario por linea

Para comentar en una sola linea usamos el // doble slash y todo lo que este en esa linea a la derecha será comentario.

```javascript
// Variables
let nombre = "Ivan"; // Nombre del usuario
console.log(nombre); // Mostrar el contenido
```

## Comentario varias lineas

Para agregar comentarios de varias líneas usamos el /\* Comentario... \*/ Esto es muy útil ya que podemos comentar todo un segmento de un código que nos está trayendo conflictos y no borrarlo.

```javascript
/* let numero = 100;
let verdadero = true; */
```

De la forma anterior hemos dejado anulado como código las dos variables.

El atajo de teclado en VSC es shift+Alt+A Si tenemos algo seleccionado y apretamos usamos el atajo de teclado lo comentará.

## Función de los comentarios

Los comentarios se utilizan para explicar la razón de lo que está codificado y no para decribir obviedades como el tipo. Por ejemplo en el caso de nombre no debemos poner que es un string o que es un nombre, sino para que esta o de donde vienen.

```javascript
// Variables obtenidas
let nombre = "Ivan"; // Por inicio de seción
console.log(nombre); // Depurar
```

# Objetos

Los objetos son de tipo de referencia ya que vamos a encontrar en su lugar una referencia a donde se estan guardando los datos en cada una de sus propiedades.

## Concepto

Son una agrupación de datos que tiene sentido tenerlos juntos.

Las variables siguientes de un solo personaje de Tv tiene sentido que estén juntas:

```javascript
// Personaje de Tv
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;
```

## Sintaxis

Vamos a agruparlas en un personaje que será un objeto que contiene todas estas propiedades. Creamos un objeto con la siguiente sintaxis:

```javascript
// Objeto
let personaje = {};
```

Donde al no haber nada entre las llaves esta vacío. Y como lo estamos definiendo ahora agregando propiedades se dice que es un objeto literal. Completamos con una propiedad y seguido de dos puntos su valor, luego agregamos la siguiente separada por una coma.

```javascript
// Objeto
let personaje = {
  nombre: "Tanjiro",
  anime: "Demon slayer",
  edad: 16,
};
console.log(personaje);
```

La coma del último valor es opcional, pero es mejor dejarla puesta, ya que si no lo hacemos cuando tengamos que agregar otra propiedad y tengamos que agregar la coma, tambien será una modificación. Por lo que en el control de verciones se verán dos líneas editadas en vez de una.

Por consola nos mostrará el objeto pero no tendrá el orden de las propiedades como lo indicamos ya que JavaScript no asegura el orden de las propiedades. Pero si copiamos el objeto al pegarlo aqui se aomodan

```javascript
{
   "nombre": "Tanjiro",
   "anime": "Demon slayer",
   "edad": 16
}
```

## Propiedad del Objeto

Como vimos que JavaScript no asegura el orden de la propiedad, no podemos consultarla por el orden, sino por el nombre de la propiedad. Para ver el valor de una propiedad debemos indicar el objeto seguido de un punto y el nombre de la propiedad:

```javascript
// Objeto
let personaje = {
  nombre: "Tanjiro",
  anime: "Demon slayer",
  edad: 16,
};
console.log(personaje);
console.log("El nombre es: " + personaje.nombre);
console.log("El anime es: " + personaje.anime);
console.log("La edad es: " + personaje.edad);
```

Por consola se muestra:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\01-tipos\06-objetos.js"
{ nombre: 'Tanjiro', anime: 'Demon slayer', edad: 16 }
El nombre es: Tanjiro
El anime es: Demon slayer
La edad es: 16
```

De esta forma accedimos a cada una de las propiedades.

Otra forma de acceder a una propiedad es con los corchetes cuadrados, donde sacamos el punto seguido colocamos los corchetes y dentro de ellos debemos ingresar el nombre de la propiedad como un string:

```javascript
console.log("La edad es: " + personaje["edad"]);
```

De esta forma dá el mismo resultado.

## Modificar Propiedad

Para poder cambiar el valor de una propiedad debemos llamar al objeto luego con cualquier sintaxis indicamos que propiedad y luego igualamos(asignación) al valor nuevo.

```javascript
personaje.nombre = "Suriji";
personaj["edad"] = 16;
```

Quedando modifcados los valores de nombre y edad.

## object.key Vs object\['key'\]

La diferencia entre las dos sintaxis es la utilidad que se puede dar, si conocemos el nombre de la propiedad se utiliza comúnmente con el punto seguido. Pero si vamos a iterar dentro del objeto es más usado el corchete ya que podemos crear una propiedad que irá cambiando dentro del corchete:

```javascript
let llave = "edad";
personaje[llave] = 16;
```

Por lo que iremos cambiando el valor de llave dentro de los corchetes.

## Eliminar propiedad

Para ello usaremos una palabra reservada 'delete' luego debemos indicar el nombre del objeto y la propiedad:

```javascript
delete personaje.anime;
console.log(personaje);
```

Y por consola ya no estará la propiedad:

```
{
   "nombre": "Suriji",
   "edad": 16
}
```

# Arreglos (arrays)

## Concepto

Son arreglos de objetos o variables, en un objeto tenemos propieades que son llave valor, pero un arreglos puede contener objetos junto con propiedades y valores por serparado. También algo muy importante a diferencia de un objeto es que va a respetar el orden con el que agregamos los valores u objetos.

## Sintaxis

La sintaxis de un arreglo es la definición de su nombre como una propiedad y luego se iguala a llaver cuadradas, que incluyen el contenido de objetps separados por una coma. Crearemos un objeto llamado perro también para agregarlo al arreglo llamado animales:

```javascript
let perro = {
  edad: 10,
  color: "marron",
  nombre: "Coly",
};
let animales = ["chanchito", "caballo", perro];
console.log(animales);
```

Por consola tendremos:

```
[
   "chanchito",
   "caballo",
   {
       "edad": 10,
       "color": "marron",
       "nombre": "Coly"
   }
]
```

Vemos que incluye los dos valores y el objeto en orden.

## Ver valores

En el arreglo como respeta el orden y nos asegura que siempre lo va a respetar, le asigna un indice a cada objeto o valor empezando por el 0. Para poder ver el valor de un indice en particular del arreglo usamos la sintaxis de nombre del arreglo seguido de corchete cuadrado y adentro el indice:

```javascript
console.log("Primer animal: " + animales[0]);
console.log("Segundo animal: " + animales[1]);
```

Y por consola tendremos:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\01-tipos\07-arrays.js"
Primer animal: chanchito
Segundo animal: caballo
```

SI quieramos obtener valores del objeto perro dentro del array debemos concatenar sintaxis de llamados, primero el objeto y luego su propiedad:

```javascript
console.log(animales[2].nombre);
```

Con animales\[2\] obtenemos el objeto perro y luego con la sintaxis de punto seguido y el nombre del la propiedad obtenemos el nombre.

```javascript
console.log(
  "El arreglo tiene un " +
    animales[0] +
    ", un " +
    animales[1] +
    " y un perro de nombre " +
    animales[2].nombre +
    ", de color " +
    animales[2].color +
    " y una edad de " +
    animales[2].edad +
    " años."
);
```

Mostrando:

```
El arreglo tiene un chanchito, un caballo y un perro de nombre Coly, de color marron y una edad de 10 años.
```

## Agregar un objeto/valor

Para agregar un objeto o valor demtro del arreglo debemos llamar al arreglo desiganar el indice donde se creará el nuevo valor y pasar el valor. Debemos tener cuidado con los indices ya que pueden pasar dos cosas, que cambie el valor del indice si ya existe y que si no existen indices hasta el valor que queremos los completa con espacios vacios.

```javascript
animales[5] = "dragón"; // Agrega espacio vacios hasta indice 5
animales[0] = "cabra"; // Cambia valor de chanchito
console.log(animales);
```

Por consola tendremos:

```
[
   "cabra",
   "caballo",
   {
       "edad": 10,
       "color": "marron",
       "nombre": "Coly"
   },
   null,
   null,
   "dragón"
]
```

Donde vemos dos espacios nulos hasta el indice 5

## Array como Objeto en JavaScript

El array en JavaScript es como un objeto más estricto pero es un objeto. Por lo que tendrá propiedades. Luego tendremos propiedades ya creadas en el prototipo de array de JavaScript a las que podemos acceder. como por ejemplo length que es la longitud del arreglo.

Vamos a ver primero que nos devuelve la consola si queremos ver que tipo de valor es el array con typeof

```javascript
console.log("El arreglo animales es de tipo: " + typeof animales);
```

Mostrando:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\01-tipos\07-arrays.js"
El arreglo animales es de tipo: object
```

Devolviendo un _**objeto**_

Como es un objeto de tipo array ya dijimos que JavaScript incluye propiedades en el prototipo para usarlas, length es una de ellas y la forma de llamarla es como toda propiedad con el punto seguido:

```javascript
console.log("La longitu del arreglo es: " + animales.length);
```

Mostrando:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\01-tipos\07-arrays.js"
La longitu del arreglo es: 6
```

# Funciones

Se pueden pensar como procedimientos o instrucciones a ejecutar. Que se utilizarán cuando se las llame.

## Sintaxis

Se definen con la palabra reservada de "function" luego el nombre que va a tener, se debe usar por buenas costubres vervos en ifinitivo, como calcular, saludar, cerrar, borrar, etc. Luego se usarán parentesis para indicar que necesita que le pasemos o le entreguemos como argumento. Por ejemplo para cocinar necesitará entre parentecis todos los ingredientes. Luego con llaves vamos a indicar la acción que va a ejecutar.

```javascript
function saludar() {}
```

Se puede pensar que sería una variable que realiza acciones.

## Ejecutar función

Si no se llama a la función, nada de código se ejecuta. Por lo que debemos llamarla luego de definirla en otra parte del código. Para ello escribimos el nombre con los parentesis y finalizamos con el punto y coma.

```
function saludar() {
  console.log("Hola Mundo");
}
saludar(); // LLamado
```

Ahora cuando ejecutamos una funcion ademas de mostrar un console.log() vamos a querer que nos devuelva algo de todo lo que realizo. Por lo que para ello tenemos la palabra reservada "return". Que será el resultado final de la función. Por lo que se escriba dentro de la función luego de un return no se ejecuta.

```
function sumar(x, y) {
  sum = x + y;
  return sum;
}
```

Cuando retorna un valor debemos asignarlo a un contenedor que guarde ese valor. Para ello podemos crear una variable y que esta llame a la funcion:

```javascript
suma = sumar(x, y);
```

Lo que hara es llamar a la función de sumar pasandole los valores de x a y. Cuando la función termine devolvera el resultado que se asignará a la variable suma.

## Argumentos

Vimos en la función de sumar que le pasamos valores por x y por y. Estos se denominan como argumentos. Como x e y son variables podemos cambiar sus valores y reutilizar nuevamente la función siendo más flexible.

Vamos a crear las funciones de sumar, restar, multiplicar y dividir. Que las llamaremos y pasaremos los parametros de x e y para realizar los cálculos.

```javascript
// Variables
let suma;
let resta;
let multi;
let divicion;
let x;
let y;
let sum;
let rest;
let mult;
let div;
// Funciones
function sumar(x, y) {
  sum = x + y;
  return sum;
}
function restar(x, y) {
  if (x >= y) {
    rest = x - y;
    return rest;
  } else if (y > x) {
    rest = y - x;
  }
  return rest;
}
function multiplicar(x, y) {
  mult = x * y;
  return mult;
}
function dividir(x, y) {
  if (x >= y) {
    div = x / y;
  } else if (y > x) {
    div = y / x;
  }
  return div;
}
// Ejecucion
x = 10;
y = 12;
console.log("Numero1: " + x);
console.log("Numero2: " + y);
console.log("Calculos:");
suma = sumar(x, y);
resta = restar(x, y);
multi = multiplicar(x, y);
divicion = dividir(x, y);
// Mostrar
console.log("La suma de " + x + " y " + y + " es: " + suma);
console.log("La resta de " + x + " y " + y + " es: " + resta);
console.log("La multiplicacion de " + x + " y " + y + " es: " + multi);
console.log("La division de " + x + " y " + y + " es: " + divicion);
```

Lo que nos devuelve para este caso:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\01-tipos\09-argumentos.js"
Numero1: 10
Numero2: 12
Calculos:
La suma de 10 y 12 es: 22
La resta de 10 y 12 es: 2
La multiplicacion de 10 y 12 es: 120
La division de 10 y 12 es: 1.2
```

## Argumentos y Parámetros

Es muy facil confundir estos dos terminos, ya que no son lo mismo pero se los utiliza con el mismo nombre, por eso de crea la confunsión.

### Parametros

Son los valores que recibe la función para ser utilizados que si o si debe tener. Estos se definen en la sintaxis de la función entre los paréntesis y se separan por una coma. Para el ejemplo de los cálcuos la función sumar() recibe el parametro x a y.

```javascript
function sumar(x, y) {
  sum = x + y;
  return sum;
}
```

Por lo que siempre deberá recibir un primer número que lo asigna a x y recibe un segundo numero que lo asigan a y.

### Argumentos

Son los valores que se envian a la función entre los paréntesis cuando se la llama a la función ya que nos los estará solicitando la función. Pero podemos enviarle más valores que los que solicita y la función irá asignando según el orden. Por lo que podemos cambiar los nombres para ver la diferencia:

```javascript
// Valores
x = 10;
y = 12;
console.log("Numero1: " + x);
console.log("Numero2: " + y);
// Funciones
function sumar(par1, par2) {
  sum = par1 + par2;
  return sum;
}
suma = sumar(x, y);
```

Cuando se llama a la función sumar() se le pasa comor argumento x a y y al recibirlo asigana en ese orden a los parametros par1 y par2. Por lo que equivale x-->par1 e y-->par2. Y se ejecuta perfectamente.

## Propiedad arguments

Una función puede recibir más argumentos que los parametros que necesita, por lo que asignará en el orden que se envian los valores a los parámetros necesarios y el resto los guarda como argumentos recibidos. Vamos a enviar más argumentos desde el llamado:

```javascript
// Multiples argumentos
function sumar2(par1, par2) {
  sum = par1 + par2;
  console.log(arguments);
  return sum;
}
suma = sumar2(9, 7, 10, 11, 7, 21);
```

Donde le pasamos más argumentos que los parametros que necesita. Y agregamos un console.log(arguments); que nos dirá cuantos argumentos recibe en forma de arreglo:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\01-tipos\09-argumentos.js"
[Arguments] { '0': 9, '1': 7, '2': 10, '3': 11, '4': 7, '5': 21 }
```

## Resumen

- Las funciones se usan para reutilizar código
- Se declaran con un nombre de vervo sin conjugar
- Se las llama y se le pasan los valores de Argumentos
- Reciben en el llamdo los Argumentos y asignan los valores en orden a los Parámetros
- Pueden recibir más Argumentos que parámetros
- No pueden faltar Parámetros por definir.
