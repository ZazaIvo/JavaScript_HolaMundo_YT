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

</code></pre><p>&nbsp;</p><p>&nbsp;</p><p><code>El último indice de " 1 " es: 9</code></p></td></tr></tbody></table>

### Método .includes() - Boolean

Si sólo queremos saber si existe el valor primitivo pero no el indice donde se encuentre, podemos usar el método de .includes().

<table><tbody><tr><td><pre><code class="language-javascript">let includ = letras.includes(valor);
console.log('Existe el valor',valor,'?');
console.log(includ);</code></pre></td><td><pre><code class="language-">Existe el valor 1 ?
true</code></pre></td></tr></tbody></table>

.
