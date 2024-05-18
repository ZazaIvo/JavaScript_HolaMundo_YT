# Arreglos

Los objetos tenían propiedad y valor {key: value} pero el arreglo puede tener obejtos con propiedades y valor. Pero también valores solos ya que se referencian por el index y no por una llave. Esto es porque siempre tendrá el mismo orden cada elemento que contenga. También debemos recordar que los podemos declarar como constantes, ya que será constantemente un arreglo pero podremos modificar el valor de los elementos dentro del arreglo.

Los arreglos están contenidos en JavaScript dentroi de un objeto. Por lo que tendrá métodos propios que se pueden utlizar. Por ejemplo si definimos un arreglo y luego lo llamamos seguido de un punto, veremos como VSC despliega una lista de opciones de métodos que se pueden aplizar.

[https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Agregar elementos

Hay tres métodos para agregar elementos dentro de un arreglo, crearemos un arreglo para empezar:

```javascript
const letras = ["a", "b"];
```

### Método .push()

Este método agrega un elemento al final del arreglo. Para utilizarlo debemos llamar al arreglo y luego acceder a su metodo "arreglo.push();" entre los paréntesis debemos pasar el valor o elemento. Pudiendo recibir un objeto con propiedades y métodos.

<table><tbody><tr><td><pre><code class="language-javascript">const letras = ['a','b'];
letras.push('c');
console.log(letras);</code></pre></td><td><pre><code class="language-">(3)&nbsp;['a', 'b', 'c']</code></pre></td></tr></tbody></table>

Agregaremos una función.

<table><tbody><tr><td><pre><code class="language-javascript">// Función
function saludar(){
    console.log('Hola');
};
letras.push(saludar);
console.log(letras);</code></pre></td><td><pre><code class="language-">(4)&nbsp;['a', 'b', 'c', ƒ]</code></pre></td></tr></tbody></table>

Vemos como agrego la función como un elemento, tambien podemos agregar un objeto con el método de saludar.

<table><tbody><tr><td><pre><code class="language-javascript">letras.push({id:2,saludar});
console.log(letras);</code></pre></td><td><pre><code class="language-">(4)&nbsp;['a', 'b', 'c', {…}]
0: "a"
1: "b"
2: "c"
3: {id: 2, saludar: ƒ}</code></pre></td></tr></tbody></table>

### Método .unshift()

Con este método agregamos elementos al inicio del arreglo, desplazando los indices de todos los otros elementos.

<table><tbody><tr><td><pre><code class="language-javascript">letras.unshift(1,2,3);
console.log(letras);
console.log(' ');</code></pre></td><td><pre><code class="language-javascript">(7)&nbsp;[1, 2, 3, 'a', 'b', 'c', {…}]</code></pre></td></tr></tbody></table>

### Método .splice()

Este método permite agregar un elemento desde el indice que le indiquemos por lo que permite insertar elementos. Si queremos agregar un elemento entre "a" y "b" al último arreglo debemos contar los indices desde cero \[1(0), 2(1), 3(2), 'a'(3),\] correspondiendo el indice 4. Primero pasamos como argumento el indice en este caso 3 y luego la cantidad de elementos apartir del indice queremos eliminar, luego el valor o valores que queremos agregar.

```javascript
array.splice(index, cantBorrado, nuevos);
```

Para el ejemplo:

<table><tbody><tr><td><pre><code class="language-javascript">letras.splice(4,0,'agregadoSplice()');
console.log(letras);
console.log(' ');</code></pre></td><td><pre><code class="language-">(8)&nbsp;[1, 2, 3, 'a', 'agregadoSplice()', 'b', 'c', {…}]</code></pre></td></tr></tbody></table>

## Eliminar Elementos

Vamos a eliminar elementos del arreglo siguiente:

```javascript
const letras = ["a", "b", "c", "d", "e"];
```

Para ello tendremos métodos propios del objeto de arreglo de JavaScript. Veremos los indices para saber cual estamos modificando:

<table><tbody><tr><td><p>for (i in letras){</p><p>&nbsp; &nbsp; console.log(i,letras[i]);</p><p>};</p></td><td>0 a<br>1 b<br>2 c<br>3 d<br>4 e</td></tr></tbody></table>

### Método .pop() - útimo

Este método no solo nos permite eliminar el último elemento, sino que tambien nos permite guardar ese elemento eliminado en una variable para no perderlo.

<table><tbody><tr><td><pre><code class="language-javascript">let clead = letras.pop();
console.log('Elemento eliminado:', clead);
console.log('Nuevo arreglo:');
console.log(letras);</code></pre></td><td><pre><code class="language-">Elemento eliminado: e
Nuevo arreglo:
(4)&nbsp;['a', 'b', 'c', 'd']</code></pre></td></tr></tbody></table>

### Método .shift() - primero

Este método nos elimina el primer elemento del arreglo y tamnbién nos permite guardarlo en una variable.

<table><tbody><tr><td><pre><code class="language-javascript">let pimClead = letras.shift();
console.log('Elemento eliminado:', pimClead);
console.log('Nuevo arreglo:');
console.log(letras);</code></pre></td><td><pre><code class="language-">Elemento eliminado: a
Nuevo arreglo:
(3)&nbsp;['b', 'c', 'd']</code></pre></td></tr></tbody></table>

### Método .splice() - entremedio

Vimos que este método podía agregar o borrar elementos entre medio del array, indicando como primer argumento el indice a eliminar y luego la cantidad de elementos a eliminar.

<table><tbody><tr><td><pre><code class="language-javascript">let intClead = letras.splice(1,1);
console.log('Elemento eliminado:', intClead);
console.log('Nuevo arreglo:');
console.log(letras);
console.log(' ');</code></pre></td><td><pre><code class="language-">Elemento eliminado: ['c']
Nuevo arreglo:
(2)&nbsp;['b', 'd']</code></pre></td></tr></tbody></table>

## Buscar Primitivos

Para la busqueda de datos primitivos dentro de un arreglo es muy importante el tipo de dato ya que hará diferencia entre un tipo number y un tipo string como los casos de 1 y '1' que son distintos.

### indexOf() - Primer resultado

En un array podemos buscar elementos por referencia o por valor primitivo. Con el método propio para los objetos de tipo array de JavaScript  .indexOf() que si le pasamos como argumento el valor que queremos que nos busque nos devolverá el indice si lo encuentra. Si no lo encuentra pasará un valor negativos. Y si hay más de un elemento igual nos parará el primero que encuentre de izquierda a derecha.

<table><tbody><tr><td><pre><code class="language-javascript">let valor = 'a';
let index = letras.indexOf('a');
console.log('El indice de "',valor,'" es:',index);</code></pre></td><td><pre><code class="language-">El indice de " a " es: 0</code></pre></td></tr></tbody></table>

Para avisar que no se encuentra podemos agregar un condicional si devuelve negativo.

<table><tbody><tr><td><pre><code class="language-javascript">let valor = '1';
let index = letras.indexOf('a');
if(index &gt; 0){
    console.log('El indice de "',valor,'" es:',index);
} else {
    console.log('No existe');
};</code></pre></td><td><pre><code class="language-">No existe</code></pre></td></tr></tbody></table>

Para varios elementos con el mismo valor nos devuelve el indice del primero que encuentra.

<table><tbody><tr><td><pre><code class="language-javascript">const letras = [1,'a','b','c','d','e','f','g','j',1];
let valor = '1';
let index = letras.indexOf('a');
if(index &gt; 0){
    console.log('El indice de "',valor,'" es:',index);
} else {
    console.log('No existe');
};</code></pre></td><td><pre><code class="language-">El indice de " 1 " es: 1</code></pre></td></tr></tbody></table>

### .lastIndexOf() - Ultimo resultado

Si queremos que nos muestre el último indice del valor repetido (muy útil ya que los elementos nuevos se van agregando al final) debemos usar el método de lastIndexOf() y pasar el argumento del valor a buscar.

<table><tbody><tr><td><pre><code class="language-javascript">let valor = 1;
let index = letras.indexOf(valor);
if(index &gt;= 0){
    console.log('El primer indice de "',valor,'" es:',index);
} else {
    console.log('No existe');
};
console.log(' ');
let indexFin = letras.lastIndexOf(valor);
if(indexFin &gt; 0){
    console.log('El último indice de "',valor,'" es:',indexFin);
} else {
    console.log('No existe');
};</code></pre></td><td><pre><code class="language-">El primer indice de " 1 " es: 0
El último indice de " 1 " es: 9</code></pre></td></tr></tbody></table>

### Método .includes() - Boolean

Si sólo queremos saber si existe el valor primitivo pero no el indice donde se encuentre, podemos usar el método de .includes().

<table><tbody><tr><td><pre><code class="language-javascript">let includ = letras.includes(valor);
console.log('Existe el valor',valor,'?');
console.log(includ);</code></pre></td><td><pre><code class="language-">Existe el valor 1 ?
true</code></pre></td></tr></tbody></table>

## Funciones Flechas

Para crear funciones habiamos visto que tenemos que crearla con la palabra reservada de "function" lego definir el nombre por convención un vervo sin conjugar y luego los parametros que necesita entre paréntesis.

```javascript
function saludar() {
  return "Hola mundo";
}
const hola = saludar();
```

Existe una alternativa para crear una función anónima que se ejecuta dentro de una variable siempre, por lo que no necesitamos declararla fuera de esta variable con un nombre. Y cuando llamamos a la variable estamos ejecutando automáticamente esta función de flechas.

<table><tbody><tr><td><pre><code class="language-javascript">const saludo = () =&gt; {
    return 'Hola Mundo!'
};
console.log(saludo());</code></pre></td><td><pre><code class="language-">Hola Mundo!</code></pre></td></tr></tbody></table>

Si al llamar a la variable podemos indicar que ejecute la función con los los dos () pero si queremos verla en la consola al llamarla sin los parentesis, nos montrará el codigo:

<table><tbody><tr><td><pre><code class="language-javascript">const saludo = () =&gt; {
    return 'Hola Mundo!'
};
console.log(saludo);</code></pre></td><td><pre><code class="language-">() =&gt; {
   return 'Hola Mundo!'
}</code></pre></td></tr></tbody></table>

### Return Implicito

Pero las funciones flechas tienen una funcionalidad que se ejecutan al llamar a la variable y también tienen el "return" implicito para una sola línea. Por lo que siempre van a devolver algo de una sola línea y podemos eliminar las llaves quedando:

<table><tbody><tr><td><pre><code class="language-javascript">const saludoF = () =&gt; 'Hola Mundo - Resumido';
console.log(saludoF());</code></pre></td><td><pre><code class="language-javascript">Hola Mundo - Resumido</code></pre></td></tr></tbody></table>

### Único parámetro

Podemos reducir más el código si la función flecha recibe un solo parámetro podemos sacar los parentesis quedando:

<table><tbody><tr><td><pre><code class="language-javascript">const saludoP = mensaje =&gt; mensaje + 'Ok';
console.log(saludoP('Hola mundo - '));</code></pre></td><td><pre><code class="language-">Hola mundo - Ok</code></pre></td></tr></tbody></table>

Resumiendo mucho el código cuando queremos ejecutar funcionalidades pequeñas dentro de variable, objetos, arreglos, constructores, etc.

## Buscar Referencia - .find()

Creamos un arreglo que contiene objetos que mostraremos según su indice que tiene todos objetos:

<table><tbody><tr><td><pre><code class="language-javascript">const usuarios = [
    { id: 1, name: 'Zaza', },
    { id: 2, name: 'Yami', },
    { id: 3, name: 'Micha', }
];
for (i in usuarios) {
    console.log(i, typeof (usuarios[i]));
};</code></pre></td><td><pre><code class="language-">0 object
1 object
2 object</code></pre></td></tr></tbody></table>

Si realizamos busquedas de estos objetos como por ejemplo el .indexOf() y le pasamos las mismas propiedades, nos devolverá -1 ya que las propiedades son iguales pero las referencias son distntas:

<table><tbody><tr><td><pre><code class="language-javascript">const resultado = usuarios.indexOf({ id: 1, name: 'Zaza', });
console.log(resultado);</code></pre></td><td><pre><code class="language-">-1</code></pre></td></tr></tbody></table>

Por lo que podemos usar el método de .find() que puede recibir una función que realice una acción con el arreglo. Esta función se ejecutará una vez por cada elemento dentro del arreglo tomando como parámetro automáticamente el valor del elemento. Luego va a retornar el elemento que cumpla con una condición = true:

```
const functionFind = objeto.find( function(elemento){
return objeto.prop <condición>;
});
```

Como por ejemplo para este caso buscar por el id:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Busqueda con .find(function)');
const resultadoFind = usuarios.find(function (usuario) {
    return usuario.id === 1;
});
console.log(resultadoFind);</code></pre></td><td><pre><code class="language-">Busqueda con .find(function)
{id: 1, name: 'Zaza'}</code></pre></td></tr></tbody></table>

Cuando se cumple la condición que dentro del elemento parametro "usuario" tenga una propiedad de id igual a 1 nos devuelva ese elemento.

### Casos Frontera - Mismo Valor

Los casos frontera son los comportamientos especiales. Si tenemos más de un elemento (objeto) con la misma key/value nos devolverá el primero que encuentre.  Para verlo agregamos otro elemento con el mismo id y los buscamos:

<table><tbody><tr><td><pre><code class="language-javascript">const usuarios = [
    { id: 1, name: 'Zaza', },
    { id: 2, name: 'Yami', },
    { id: 3, name: 'Micha', },
    { id: 1, name: 'Nico', },
];
console.log('Busqueda con .find(function)');
const resultadoFind = usuarios.find(function (usuario) {
    return usuario.id === 1;
});
console.log(resultadoFind);</code></pre></td><td>Busqueda con .find(function)<br>{id: 1, name: 'Zaza'}</td></tr></tbody></table>

Por ello la propiedad que vamos a evaluar debe ser siempre única ya que nos devolverá solo la primera que encuentre si se repite. Por ello existe el id aleatorio.

### Predicate - Función de función

El método find() es una fúncion del Objet de JavaScript que dentro tiene otra función que se ejecuta. La función que ejecuta internamente debe devolver true/false y a esto se le llama "predicate".

### Función flecha en .find()

Podemos cambiar la sintaxis de la funcion dentro de .find() para que sea más lejible y simple el códico transformando la declaración a una función flecha ya que cumple que simpre se va a ejecutar, no necesita nombre y puede ser en una sola línea.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Busqueda con .find(flecha)');
const resultadoFlecha = usuarios.find(usuario =&gt;
    usuario.id === 1);
console.log(resultadoFlecha);
console.log(' ');</code></pre></td><td><pre><code class="language-">Busqueda con .find(flecha)
{id: 1, name: 'Zaza'}</code></pre></td></tr></tbody></table>

_**Es muy importante que para saltar de línea despues del "=>" debemos borrar todos los espacios entre la flecha y la expresión y luego de la flecha apretar Enter para que haga el salto de línea. Si queda algún espacio entre la flecha y la expreción y saltamos de línea nos dará error.**_

### Método .findIndex()

Este método es igual al .find() pero devuelve, en caso que la función interna sea true para el elemento, en vez del elemento su indice:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Busqueda con .findIndex(flecha)');
const resultadoIndex = usuarios.findIndex(usuario =&gt;
    usuario.id === 1);
console.log('El indice coincidente:',resultadoIndex);
console.log(' ');</code></pre></td><td><pre><code class="language-">Busqueda con .findIndex(flecha)
El indice coincidente: 0</code></pre></td></tr></tbody></table>

## Vaciando Array

Cuando usamos un arreglo para ir cargarndo objeto o elementos y necesitamos realizar un vaciado se puede realizar de varias formas. Crearemos un arreglo para luego realizar las opciones de vaciado.

```javascript
const arr = [1, 2, 3, 4, 5];
```

### Asignar \[vacio\]

Este método es muy simple. Asignado o igualando el arreglo a uno vacio.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Vaciar []');
arr = [];
console.log(arr);</code></pre></td><td><pre><code class="language-">Vaciar []
[]</code></pre></td></tr></tbody></table>

Pero seguiran existiendo en la memoria del ordenador los valores ya que si asignamos otro arreglo la referencia del que queremos vaciar seguirá conteniendo los valores:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Vaciar []');
let arr2 = arr;
arr = [];
console.log(arr);
console.log(arr2);</code></pre></td><td><pre><code class="language-">Vaciar []
[]
(5)&nbsp;[1, 2, 3, 4, 5]</code></pre></td></tr></tbody></table>

Por lo que los elementos no se eliminarion, solo una referencia en "arr"

### Método .legnth = 0; - Más usada

Otra forma es cambiar la longitud del arreglo con la propiedad .length llevandola a valor 0.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Vaciar .length');
let arr3 = [1,2,3];
arr3.length = 0;
console.log(arr3);</code></pre></td><td><pre><code class="language-">Vaciar .length
[]</code></pre></td></tr></tbody></table>

Vemos que con este método se eliminan los elementos de la memoria. Si asignamos una referencia a otra variable de estos valores y luego vaciamos, cuando quiera mostrar los valores para la referencia duplicada, no los encontrará:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Vaciar .length');
let arr3 = [1,2,3];
let arr4 = arr3;
arr3.length = 0;
console.log(arr3);
console.log(arr4);</code></pre></td><td><pre><code class="language-">Vaciar .length
[]
[]</code></pre></td></tr></tbody></table>

### Método .splice() -Más explicita

Con este método podemos indicar que borre desde el indice cero (inicio) hasta el indice igual a la longitud del arreglo. Borrando los elementos guardados en la memoria.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Vaciar .splice.()');
let arr5 = [1,2,3,4];
let arr6 = arr5;
arr6.splice(0,arr6.length);
console.log(arr5);
console.log(arr6);</code></pre></td><td><pre><code class="language-">Vaciar .splice.()
[]
[]</code></pre></td></tr></tbody></table>

### Loop while - No usar

Este método es el que NO debemos utilizar ya que utliza recursos inecesarios del ordenador al realizar tantos ciclos como elementos tenga el arreglo. Si es un arreglo con miles de datos (elementos) realziará esto miles de veces. Agregaremos una impresion en cada ciclo para ver como lo hace.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Vaciar while(){}');
let arr7 = [1, 2, 3,];
let arr8 = arr7;
while (arr7.length &gt; 0){
    console.log(arr7);
    arr7.pop();
};
console.log('Arreglos vacios:');
console.log(arr7);
console.log(arr8);</code></pre></td><td><pre><code class="language-">Vaciar while(){}
(3)&nbsp;[1, 2, 3]
(2)&nbsp;[1, 2]
[1]
Arreglos vacios:
[]
[]</code></pre></td></tr></tbody></table>

## Combinar y Dividir

Podremos combinar arreglo también dividir los arreglos. Para ello creamos dos arreglos:

<table><tbody><tr><td><pre><code class="language-javascript">let arr1 = [1, 2,];
let arr2 = [3, 4,];
console.log('Arreglo 1:', arr1);
console.log('Arreglo 2:', arr2);</code></pre></td><td><pre><code class="language-">Arreglo 1: (2)&nbsp;[1, 2]
Arreglo 2: (2)&nbsp;[3, 4]</code></pre></td></tr></tbody></table>

### Método .concat() - combinar

Este es un métod propio de los Objetos JavaScript que agrega a un arreglo los elementos del otro arreglo. Pero lo devuelve como un nuevo arreglo, por lo que debemos crear un nuevo arr3 que contenga el resultado.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Método .concat()');
let arr3 = arr1.concat(arr2);
console.log('Arreglo nuevo:',arr3);</code></pre></td><td><pre><code class="language-">Método .concat()
Arreglo nuevo: (4)&nbsp;[1, 2, 3, 4]</code></pre></td></tr></tbody></table>

### Método .splice() - dividir

Este método divide un arreglo y devuelve un nuevo arreglo con la cantidad de elementos que queremos que selecciones. Tener en cuenta que los indices son con base en 0, por lo que el primero es el de indice 0. La sintaxis será tomando desde el elemento con indice 1 "ind1" al elemento incluido del indice 2 "ind2".

```javascript
let dividido = array.splice(ind1, ind2);
```

Para nuestro ejemplo:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Método .splice()');
let arr4 = arr3.splice(1,2);
console.log('Arreglo seleccionado:', arr4);</code></pre></td><td><pre><code class="language-">Método .splice()
Arreglo seleccionado:&nbsp;[2, 3]</code></pre></td></tr></tbody></table>

Si omitimos el segundo argumento nos tomará desde el primer indice hasta el final. Si no pasamos ningún argumento entonces copiara todos los elementos y los asignará a un nuevo array siendo una copia nueva, no una referencia duplicada. Pero si uno de los valores dentro del array es un objeto {key: value,} no lo copiará por key/value, copiará la referencia.

### Método Spread "tres punto"

Nos permite combinar arreglos pero con una sintaxis más facil de leer que el .splice(). Para ello definimos dos arreglos:

<table><tbody><tr><td><pre><code class="language-javascript">let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log('Arreglos:');
console.log(arr1);
console.log(arr2);</code></pre></td><td><pre><code class="language-">Arreglos:
(3)&nbsp;[1, 2, 3]
(3)&nbsp;[7, 8, 9]</code></pre></td></tr></tbody></table>

El método .spread() es facil de usar ya que podemos agregar dentro de los parentesis todos los elementos de un arreglo anteponiendo los tres puntos "...arr1" luego podemos agregar elementos sueltos separados por la coma y otro arreglo más con otra vez los tres puntos adelante "...arr2":

<table><tbody><tr><td><pre><code class="language-">console.log('Método .spread()');
let arr3 = [...arr1, 4, 5, 6, ...arr2]
console.log('Nuevo arreglo:');
console.log(arr3);</code></pre></td><td><pre><code class="language-">Método .spread()
Nuevo arreglo:
1, 2, 3, 4, 5, 6, 7, 8, 9]</code></pre></td></tr></tbody></table>

Algo muy útil es que podemos hacer copias de los arreglos y no duplicado de referencias con solo igualar el nuevo arreglo "let arr4 = \[...arr3\]".

### Método .join()

Este método devuelve un string con los valores de los elementos con la posibilidad de colocar un separador como caracter, ya sea un espacio y una coma o una barra / para crear rutas Url.

<table><tbody><tr><td><pre><code class="language-javascript">let arr1 = ['Ivan'];
let arr2 = ['Yami'];
let arr3 = ['Juan'];
// Combinar
let arr4 = [...arr1, ...arr2, ...arr3];
// Método .join() con separador
let mensaje = arr4.join(' - ');
console.log(mensaje);</code></pre></td><td><pre><code class="language-">Ivan - Yami - Juan</code></pre></td></tr></tbody></table>

### Métod .split()

Es un método que nos permite dividir un string según el separador que le pidamos que encuentre, no incluirá el separador. Para funcionar debemos pasarle la variable con el texto, aplicarle el metodo .split() y entre paréntesis debemos indicar el separador.

<table><tbody><tr><td><pre><code class="language-javascript">// Separar por .split()
let nombres = 'Marcos Ivan Azzarello';
let user = nombres.split(" ");
console.log('Texto:', nombres);
console.log('Arreglo:', user);</code></pre></td><td><pre><code class="language-">Texto: Marcos Ivan Azzarello
Arreglo: (3)&nbsp;['Marcos', 'Ivan', 'Azzarello']</code></pre></td></tr></tbody></table>

De esta forma reconoce los espacios y corta en elementos el texto para crear un arreglo que contiene estos elementos.

### Crear Url con .join() y .split()

Si queremos crear la dirección de una url apartir de un texto, podemos partir el texto y luego juntarlo sin los espacios.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Crear Url');
let bag = 'Luaz Desarrollo';
console.log('Nombre Marca:',bag);
let bagArray = bag.split(" ");
let arrUrl = ['www.',...bagArray, '.com'];
let bagUrl = arrUrl.join('');
console.log(bagUrl);</code></pre></td><td><pre><code class="language-">Crear Url
Nombre Marca: Luaz Desarrollo
www.LuazDesarrollo.com</code></pre></td></tr></tbody></table>

## Ordenar Arreglos

Existirá un momento que debemos ordenar arreglos que recibimos de desde una ApiRest o de una base de datos o que se ha generado por un loop. Podremos ordenar con distintos criterios para los números o textos. Crearemos primero el arreglo de números desordenados.

```javascript
// Arreglo
let numeros = [15, 20, 13, 7, 2, 8, 21];
```

### Método .sort()

Este método va a ordenar de menor a mayor los números pero por el primer dígito. También puede ordenar por orden alfabetico de A a la Z.

<table><tbody><tr><td><pre><code class="language-javascript">let numMinMax = numeros.sort();
console.log('Números por primer dígito',numMinMax);
let strOrder = letras.sort();
console.log('Letras en orden:', strOrder);</code></pre></td><td><pre><code class="language-">Números por primer dígito (7)&nbsp;[13, 15, 2, 20, 21, 7, 8]
Letras en orden: (5)&nbsp;['a', 'b', 'j', 't', 'y']</code></pre></td></tr></tbody></table>

### Método .reverse()

Aplica de igual forma que el anterior pero de mayor a menor en los números por el primero dígito y de la Z a la A en orden alfabético.

<table><tbody><tr><td><pre><code class="language-javascript">let numMaxMin = numeros.reverse();
console.log('Números de mayor a menor', numMaxMin);
let strOrderInv = letras.reverse();
console.log('Letras en orden invertido:',strOrderInv);</code></pre></td><td><pre><code class="language-">Números de mayor a menor (7)&nbsp;[8, 7, 21, 20, 2, 15, 13]
Letras en orden invertido: (5)&nbsp;['y', 't', 'j', 'b', 'a']</code></pre></td></tr></tbody></table>

### Método .sort((a,b)=>{})

Cuando tenemos letras mayúsculas o minúsculas o lo que sucede con los números por su primer dígito y no su valor completo podemos pasar una función de flecha para resolver esto con dos argumentos que por norma se los llama "a" y "b".  Según la documentación de VSC nos dice:

_Función utilizada para determinar el orden de los elementos. Se espera que devuelva un valor negativo si el primer argumento es menor que el segundo argumento, cero si son iguales y un valor positivo en caso contrario. Si se omite, los elementos se ordenan en orden ascendente de caracteres ASCII._

Dentro de la función crearemos los condicionantes para que según la condición que cumplan devuelvan -1 primero a que b, 1 para b primero que a y 0  para a igual que b. Es decir que si un número es mayor que otro el if( a > b ) deve devolver 1 para que ordene \[ b, a \].

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Orden con .sort(()=&gt;{})');
let strMayMin = ['Z', 'b', 'D', 'K', 'a'];
let strOrdSimple = strMayMin.sort();
console.log('Ordenado sin función flecha:');
console.log(strOrdSimple);
console.log('Ordenado con función flecha:');
let strOrdFlecha = strMayMin.sort((a, b) =&gt; {
    /* Condiciones:
    a &lt; b =&gt; -1
    a &gt; b =&gt; 1
    a = b =&gt; 0
    */
    let aLower = a.toLowerCase();
    let bLower = b.toLowerCase();
    // Condicionales
    if (aLower &lt; bLower) {return -1};
    if (aLower &gt; bLower) {return 1};
    return 0;
});
console.log(strOrdFlecha);</code></pre></td><td><pre><code class="language-">Orden con .sort(()=&gt;{})
Ordenado sin función flecha:
['D', 'K', 'Z', 'a', 'b']
Ordenado con función flecha:
['a', 'b', 'D', 'K', 'Z']</code></pre></td></tr></tbody></table>

Lo mismo podemos hacer para ordenar los números pero no por su primer dígito sino por su valor.

<table><tbody><tr><td><pre><code class="language-javascript">let numOrdFlecha = numeros.sort((a, b) =&gt; {
/*  
a &lt; b =&gt; -1
a &gt; b =&gt; 1
a = b =&gt; 0
*/
    if (a &lt; b) { return -1};
    if (a &gt; b) { return 1};
    return 0;
});
console.log('Números ordenados por valor:');
console.log(numOrdFlecha);</code></pre></td><td><pre><code class="language-">Números ordenados por valor:
[2, 7, 8, 13, 15, 20, 21]</code></pre></td></tr></tbody></table>

### Ordenar Objetos por propiedad

Con .sort() utilizando la función flecha ahora podemos ordenar objetos dentro de un arreglo tomando como referencia los valores de una de sus propiedades. Por ejemplo para objetos que representan usuarios que tengas como propiedad la edad, podemos ordenarlos de menor a mayor. Para ello usamos el método de sort() y en la función de flecha comparamos una propiedad de un objeto con la de otro.

Creamos un arreglo de ususarios:

```javascript
let users = [
  { edad: 15, name: "Pepe", alias: "Pep", clave: 1234 },
  { edad: 12, name: "Juan", alias: "Juancho", clave: 1234 },
  { edad: 18, name: "Jose", alias: "Orde", clave: 1234 },
  { edad: 17, name: "Marcos", alias: "Jp", clave: 1234 },
];
```

Ahora vamos a ordenarlos por edad tomando al argumento  a como el objeto y accediendo a la edad como "a.edad" y siendo b el otro objeto accediendo también como "b.edad".

<table><tbody><tr><td><pre><code class="language-javascript">let users = [
    { edad: 15, name: 'Pepe', alias: 'Pep', clave: 1234 },
    { edad: 12, name: 'Juan', alias: 'Juancho', clave: 1234 },
    { edad: 18, name: 'Jose', alias: 'Orde', clave: 1234 },
    { edad: 17, name: 'Marcos', alias: 'Jp', clave: 1234 },
];
let userOrder = users.sort((a, b) =&gt; {
    if (a.edad &lt; b.edad) return -1;
    if (a.edad &gt; b.edad) return 1;
    return 0;
 });
 console.log('Usuarios sin ordenar:');
 console.log(users);
 console.log('Usuarios por edad:');
 console.log(userOrder);</code></pre></td><td><pre><code class="language-">Usuarios sin ordenar:
(4)&nbsp;[{…}, {…}, {…}, {…}]
0: {edad: 12, name: 'Juan', alias: 'Juancho', clave: 1234}
1: {edad: 15, name: 'Pepe', alias: 'Pep', clave: 1234}
2: {edad: 17, name: 'Marcos', alias: 'Jp', clave: 1234}
3: {edad: 18, name: 'Jose', alias: 'Orde', clave: 1234}
length: 4
Usuarios por edad:
(4)&nbsp;[{…}, {…}, {…}, {…}]
0: {edad: 12, name: 'Juan', alias: 'Juancho', clave: 1234}
1: {edad: 15, name: 'Pepe', alias: 'Pep', clave: 1234}
2: {edad: 17, name: 'Marcos', alias: 'Jp', clave: 1234}
3: {edad: 18, name: 'Jose', alias: 'Orde', clave: 1234}
length: 4</code></pre></td></tr></tbody></table>

También podemos ordenar por orden alfabético de los nombres:

<table><tbody><tr><td><pre><code class="language-javascript">let userOrderAlfa = users.sort((a, b) =&gt; {
    if (a.name.toLowerCase() &lt; b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() &gt; b.name.toLowerCase()) return 1;
    return 0;
});
console.log('Usuarios por nombre:');
console.log(userOrderAlfa);</code></pre></td><td><p>Usuarios por nombre:</p><ol><li><i>(4)&nbsp;[{…}, {…}, {…}, {…}]</i><ol><li><strong>0</strong>: {edad: 18, name: 'Jose', alias: 'Orde', clave: 1234}</li><li><strong>1</strong>: {edad: 12, name: 'Juan', alias: 'Juancho', clave: 1234}</li><li><strong>2</strong>: {edad: 17, name: 'Marcos', alias: 'Jp', clave: 1234}</li><li><strong>3</strong>: {edad: 15, name: 'Pepe', alias: 'Pep', clave: 1234}</li><li><strong>length</strong>: 4</li></ol></li></ol></td></tr></tbody></table>

Los condicionales como son de una sola línea podemos eliminar las {}.

### Método Every(predicate)

Este método recibe una funcion predicado que devuelve true o false. Como por ejemplo si algún usuario se encuentra activo. Para ello creamos los ususarios en un arreglo:

```javascript
let usuarios = [
  { id: 1, activo: true },
  { id: 2, activo: false },
  { id: 3, activo: false },
];
```

Ahora en el la función predicado recibe un argumento que será cada elemento del arreglo, en este caso cada objeto de usuario. Se ejecutará la función flecha por cada elemento hasta encontrar un retorno falso. Debemos tener cuidado ya que si ejecutamos lo siguiente:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Método .every(predicate)');
usuarios.every((u) =&gt; {
    console.log('Activo id:', u.id);
    return u.activo;
});</code></pre></td><td><pre><code class="language-">Método .every(predicate)
Activo id: 1
Activo id: 2</code></pre></td></tr></tbody></table>

Vemos que nos devuelve el id: 2 cuando no es activo, esto es porque el console.log() se ejecutó antes que retornara el false del mismo elemento. Para poder corregir esto debemos envolver en un condicional la ejecución de la función para solo cuando sea en este caso \<u.activo = true> y luego que ejecuta como es activo devuelve o retorna un true o u.activo.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Correccion con if()');
usuarios.every((u) =&gt; {
    if (u.activo) {
        console.log('Activos id:',u.id);
        return true;
    } else return u.activo;
});</code></pre></td><td><pre><code class="language-">Correccion con if()
Activos id: 1</code></pre></td></tr></tbody></table>

Si por el contrario queremos ver los que no son activos, es decir los false debemos convertir el valor de la propiedad en el condicional para que ejecute en !false = true y que luego devuelva un true para que continue con el siguiente.

<table><tbody><tr><td><pre><code class="language-javascript">usuarios.every((u) =&gt; {
    if (!u.activo){
        console.log('Inactivos id:', u.id);
        return true;
    } else return u.activo;
});</code></pre></td><td><pre><code class="language-">Inactivos id: 2
Inactivos id: 3</code></pre></td></tr></tbody></table>

Si queremos que evalúe hasta el final devemos indicar en el "else return true" para que siempre siga con todos los elementos. Para ello crearemos otro usuario id: 4 con activo: true al final:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Correccion con if()');
usuarios.every((u) =&gt; {
    if (u.activo) {
        console.log('Activos id:', u.id);
        return true;
    } else return true;
});
console.log(' ');</code></pre></td><td><pre><code class="language-">Correccion con if()
Activos id: 1
Activos id: 4</code></pre></td></tr></tbody></table>

### Método .some(predicate)

Este método evaluará desde el indice 0 hasta encontrar un elemento que cumpla o devuelva un true en la función predicate tipo flecha que le pasemos.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Método .some(predicate)');
usuarios.some((u) =&gt; {
    console.log('Primer activo id:',u.id);
    return u.activo;
});</code></pre></td><td><pre><code class="language-">Método .some(predicate)
Primer activo id: 1</code></pre></td></tr></tbody></table>

### Método .filter() - Más Utilizado

Este método nos permitirá filtrar para eliminar elementos u objetos que no necesitamos o para crear nuevos arreglos con esos elementos. Creamos un arreglo de usuarios:

```javascript
let usuarios = [
  { edad: 17, nombre: "Nico" },
  { edad: 13, nombre: "Chanchito" },
  { edad: 25, nombre: "Felipe" },
  { edad: 32, nombre: "Fernanda" },
];
```

El método recibe tres parametros que son primero el elemento que va a iterar, luego el indice de ese onjeto y finalmente el arreglo completo al que pertenece. En ese orden podemos utilizarlos dentro de la funcion flecha que realicemos para filtrar. _**Cuando para el elemento que se está iterando recibe true entonces lo incluye y si no recibe true continua con el siguiente hasta finalizar con todo el arreglo**_.

```javascript
variable = array.filter(elemento, index, array);
```

De la lista de usuarios vamos a querer filtrar a los mayores de edad para enviarles notificaciones por ejemplo. Por lo que usaremos un nuevo arreglo que tendrá los usuarios con la propiedad "usuarios.edad >= 18"

<table><tbody><tr><td><pre><code class="language-javascript">let userMay = usuarios.filter(usuario =&gt; {
    if( usuario.edad &gt;= 18){
        return true;
    };
});
console.log('Mayores de edad:');
console.log(userMay);</code></pre></td><td><p>Mayores de edad:</p><ol><li><i>(2)&nbsp;[{…}, {…}]</i><ol><li><strong>0</strong>: {edad: 25, nombre: 'Felipe'}</li><li><strong>1</strong>: {edad: 32, nombre: 'Fernanda'}</li><li><strong>length</strong>: 2</li></ol></li></ol></td></tr></tbody></table>

Esto se puede utilizar para encontrar tiendas que se enceuntran en un rango en particular. También para filtrar valores de précios o talles.

## Metodo .map() - \<li>element\</li>

Este método se utiliza para crear arreglos apartir de uno existente pero quedan los valores de las propiedades de los elementos envueltos en una etiqueta de HTML \<li> para poder manipular el DOM y agregar listados. El método recibe una función flecha donde disponemos de tres parametros opcionales en el orden del elemento, indice y arreglo completo.

```javascript
const arrayList = array.map((elemento, index, arrya) => {
  accion;
});
```

De esta forma el valor que retorne esta función flecha es el que va a ser asigando a esta lista creada con .map()

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Método .map()');
const lista = usuarios.map((usuario) =&gt; {
    return usuario.nombre;
});
console.log(lista);</code></pre></td><td><pre><code class="language-">Método .map()
['Nico', 'Chanchito', 'Felipe', 'Fernanda']</code></pre></td></tr></tbody></table>

Pero podemos usar los template string y crear la etiqueta de HTML usando para llamar a la propiedad del elemento dentro de los templetes el simbolo dolar y las llaves.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Método .map()');
const lista = usuarios.map((usuario) =&gt; {
    return `&lt;li&gt;${usuario.nombre}&lt;/li&gt;`;
});
console.log(lista);</code></pre></td><td><pre><code class="language-">Método .map()
['&lt;li&gt;Nico&lt;/li&gt;', '&lt;li&gt;Chanchito&lt;/li&gt;', '&lt;li&gt;Felipe&lt;/li&gt;', '&lt;li&gt;Fernanda&lt;/li&gt;']</code></pre></td></tr></tbody></table>

### map() + join() - Listas HTML

Con selector de etiquetas desde JavaScript podemos insertar esta lista en el HTML dentro de un \<ol>\</ol> o \<ul>\</ul> por ello es tan utilizado. Si lo combinamos con el métdo de .join() sin ningún caracter intermedio podemos obtener el el texto listo para insertar dentro de un \<div>\</div>

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Método map() + join("")');
const list2 = `&lt;ul&gt;${lista1.join('')}&lt;/ul&gt;`;
console.log(list2);</code></pre></td><td><pre><code class="language-">Método map() + join("")
&lt;ul&gt;&lt;li&gt;Nico&lt;/li&gt;&lt;li&gt;Chanchito&lt;/li&gt;&lt;li&gt;Felipe&lt;/li&gt;&lt;li&gt;Fernanda&lt;/li&gt;&lt;/ul&gt;</code></pre></td></tr></tbody></table>

Muy importante para manipular el DOM.

### Crear nueva lista

Podemos crear una nueva lista con algunos objetos o agregarle a los existentes una nueva propiedad. Para ello vamos a agreagr la propiedad booleana de si son mayores de edad o no. Por lo que por cada objeto debemos retornar todos sus kay/value y agregar la propiedad de mayor que será igual a la evaluación de si la edad es mayor que 17.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Lista de mayor de edad');
const userMapped = usuarios.map(u =&gt; {
    return {
        ...u,
        mayor: u.edad &gt; 17, // true - false
    };
});
console.log(userMapped);</code></pre></td><td><p>Lista de mayor de edad</p><ol><li><i>(4)&nbsp;[{…}, {…}, {…}, {…}]</i><ol><li><strong>0</strong>: {edad: 17, nombre: 'Nico', mayor: false}</li><li><strong>1</strong>: {edad: 13, nombre: 'Chanchito', mayor: false}</li><li><strong>2</strong>: {edad: 25, nombre: 'Felipe', mayor: true}</li><li><strong>3</strong>: {edad: 32, nombre: 'Fernanda', mayor: true}</li></ol></li></ol></td></tr></tbody></table>

### Encadenado de métodos

Como el método de .map() y el método de .filter() devuelven un arreglo podemos encadenarlos sin tener que estar creando una variable intermedia para aplicar los métodos. Por lo que podemos hacer es "newArray = array.filter().map()" donde estamos filtrando primero y luego agregar un mapeo a los filtrados.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Encadenado de .filter().map()');
console.log('Lista mayores de edad:');
const listMay = usuarios
    .filter( u =&gt; u.edad &gt; 17)
    .map( u =&gt; `&lt;li&gt;${u.nombre}&lt;/li&gt;`);
const listHTML = `&lt;ul&gt;${listMay.join('')}&lt;/ul&gt;`;
console.log(listHTML);</code></pre></td><td><pre><code class="language-">Encadenado de .filter().map()
Lista mayores de edad:
&lt;ul&gt;&lt;li&gt;Felipe&lt;/li&gt;&lt;li&gt;Fernanda&lt;/li&gt;&lt;/ul&gt;</code></pre></td></tr></tbody></table>

Asi vemos que podemos encadenar, la sintaxis es apretendo Enter sin espacios entre el nombre del arreglo y cada encadenado.

## Método .reduce()

Este método recibe un arreglo y una funcion flecha que parametriza en un acumulador "acc" que es el primer parámetro y luego el elemento que está iterando "el". Pasará por todos los elementos y por cada uno ejecuta una función flecha que el retorno de esta función la guarda en el acumulador. También como parárametro además de la función flecha un valor inicial del cumulador. Para cada iteración debe recibir o retornar el acumulador.

```javascript
const recudeArray = array.reduce((acc, el) => {}, inicio);
```

Veremos en un ejemplo de un arreglo de números que los suamamos a todos.

<table><tbody><tr><td><pre><code class="language-javascript">const suma = numeros.reduce((acc, el) =&gt; {
    return acc + el;
}, 0);
console.log('La suma es:',suma);</code></pre></td><td><pre><code class="language-">La suma es: 10</code></pre></td></tr></tbody></table>

### Aplanar arreglos

Algo muy útil de este método más que sumar numeros es poder aplanar un arreglo de arreglos, dejando un solo arreglo con solo elementos. Donde integramos el arreglo de números a otro que contiene un arreglo y un número como elementos:

```javascript
const arrayArray = [numeros, [12, 20, 17, 18], 25];
```

Vamos a iniciar el contador con un arreglo vacio \[\] por lo que ya inicialmente podemos usar el método de concatenar "acc.concat(el)" y vamos a ir concatenando el elemento en el que estamos.

<table><tbody><tr><td><pre><code class="language-javascript">const arrayArray = [numeros, [12,20,17,18], 25];
const arrayPlano = arrayArray.reduce ((acc, el)=&gt;{
    return acc.concat(el);
}, [])
console.log('Arreglo:',arrayArray);
console.log('Arreglo plano:');
console.log(arrayPlano);</code></pre></td><td><pre><code class="language-">Arreglo: [ [ 1, 2, 3, 4 ], [ 12, 20, 17, 18 ], 25 ]
Arreglo plano:
[
   1,  2,  3,  4, 12,
  20, 17, 18, 25
]</code></pre></td></tr></tbody></table>

De esta forma podremos iterar cada valor.

### Indexado arreglos muy grandes

Cuando tenemos arreglos con miles de usuarios y queremos buscar propiedades de uno de los usuarios que tiene un indice o nombre particular, debería consultar todas las propiedades de cada uno de los miles de usuarios consumiendo mucho recurso. Pero podemos crear otro arreglo que indexa (clasifica) por una propiedad, como el nombre. Entonces al buscar primero el nombre no entrará en cada objeto y cada propiedad del objeto, solo encontrará el nombre y luego ingresará.

<table><tbody><tr><td><pre><code class="language-javascript">let usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];
const indexName = usuarios.reduce((acc, el) =&gt; {
    return {
        ...acc,
        [el.nombre]: el,
    };
}, {});
console.log('Usuarios Indexados:');
console.log(indexName);</code></pre></td><td><p>Usuarios Indexados:</p><ol><li><i>{Nico: {…}, Chanchito: {…}, Felipe: {…}, Fernanda: {…}}</i><ol><li><strong>Chanchito</strong>: {edad: 13, nombre: 'Chanchito'}</li><li><strong>Felipe</strong>: {edad: 25, nombre: 'Felipe'}</li><li><strong>Fernanda</strong>: {edad: 32, nombre: 'Fernanda'}</li><li><strong>Nico</strong>: {edad: 17, nombre: 'Nico'}</li></ol></li></ol></td></tr></tbody></table>

En la sintaxis para tomar la propiedad del nombre del elemento y asignarle el objeto completo tenemos que ponerla entre corchetes cuadrados para poder poner los dos puntos seguidos y no interprete otra función o expresión "\[el.nombre\]: el;"

Si queremos la edad de Felipe ahora buscamos por el nombre Felipe y luego ingresamos a sus propiedades.

<table><tbody><tr><td><pre><code class="language-javascript">const edadFel = indexName.Felipe.edad;
console.log('Edad de Felipe:', edadFel);</code></pre></td><td><pre><code class="language-">Edad de Felipe: 25</code></pre></td></tr></tbody></table>
