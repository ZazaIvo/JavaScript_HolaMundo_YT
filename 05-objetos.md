# Objetos en JavaScript

## Concepto de Objeto

Los objetos se utilizan para agrupar datos relacionados o variable, como por ejemplo los datos de un usuario como el nombre, mail, dirección, etc.

```javascript
let email = "zaza@hotmail.com";
let name = "Ivan";
let direccion = {
  calle: "Las Palmeras",
  numero: 2,
  codP: 33320,
};
```

Son todos datos realcionados. Vamos a agrupar todas las propiedades dentro de un grupo llamado user:

```javascript
let user = {
  email: "zaza@hotmail.com",
  name: "Ivan",
  direccion: {
    calle: "Las Palmeras",
    numero: 2,
    codP: 33320,
  },
};
```

Vemos que ahora lo que eran variables son propiedades del user y se separan con una coma. Además ya no se iguala sino que se asigna un valor a la propiedad por ello es que se usan los dos puntos. Vemos tambien que podemos colocar objetos dentro de objetos.

Tambien podemos agregar propiedades de tipo booleanas y funciones (acciones o metodos) al objeto. La función como pertenece a una propiedad no se la nombra y por ello son funciones anónimas.

```javascript
let user = {
  email: "zaza@hotmail.com",
  name: "Ivan",
  direccion: {
    calle: "Las Palmeras",
    numero: 2,
    codP: 33320,
  },
  activo: true,
  // Función anónima
  recuperarClave: function () {
    console.log("Recuperendo Clave");
  },
};
```

Encapsulando datos que están realcionados entre si y que pueden realizar acciones es POO.

## Dinamismo

Los objetos en JavaScript son dinámicos, porque podemos agregar o quitar propiedades o cambiar sus valores cuando queramos. Si declaramos un objeto como una constante y luego le agregamos propiedades y un método pasa los siguiente:

<table><tbody><tr><td><pre><code class="language-javascript">const user = {
    id : 1,
    name : 'Ivan'
};
user.mail = 'zaza@hotmail.com';
user.name = 'Ivan Azzarello';
user.alias = 'Zaza';
user.guardar = function (){
    console.log('Guardando cambios con (', user.mail, ') y alias (', user.alias,')');
};
user.guardar();</code></pre></td><td><pre><code class="language-">Guardando cambios con ( zaza@hotmail.com ) y alias ( Zaza )</code></pre></td></tr></tbody></table>

Vemos que si nos deja modificar las propiedades o incluso borrarlas. Tomando como constante que será un objeto y cambiaran sus propiedader dentro de las llaves. De igual manera pasará con los arreglos.

## Objeto freezado

Si queremos definir un objeto que no se podrá modificar nunca por medio de la lógica debemos recurrir a la propiedad de "Object.freeze(objeto);"

```javascript
let user1 = Object.freeze({
  id: 1,
  name: "Zaza",
});
```

Y queremos agregar o cambiar el valor de una de sus propiedades JavaScript no se quejará o mostrará un error, pero no realizará ningún cambio.

<table><tbody><tr><td><pre><code class="language-javascript">let user1 = Object.freeze({
    id : 1,
    name : 'Zaza'
});
user1.id = 2;
user1.name = 'Zaza2';
user1.email = 'zaza@hotmail.com';
console.log(user1);</code></pre></td><td><p>No cambia:</p><pre><code class="language-">{ id: 1, name: 'Zaza' }</code></pre></td></tr></tbody></table>

No hay ningún reporte de error no advertencia, simplemente no ejecuta ningún cambio del objeto.

## Objeto propiedades fijas variables

Si queremos que el objeto pueda cambiar el valor de sus propiedades pero no agregar o borrar propiedades, podemos usar la propiedad de "Object.seal(objeto);" Vamos a crear otro objeto con esta carácterística y trataremos de cambiar valores de las propiedades y agregar una.

<table><tbody><tr><td><pre><code class="language-javascript">const user2 = Object.seal ({
    id : 3,
    name : 'Yami',
    email : 'yami@gmail.com'
});
user2.id = 4;
user2.name = 'Yamila';
user2.apellido = 'Ludueña';
console.log(user2);</code></pre></td><td><pre><code class="language-">{ id: 4, name: 'Yamila', email: 'yami@gmail.com' }</code></pre><p>No agrega el user.apellido</p></td></tr></tbody></table>

## Fábrica de Objetos

Si necesitamos crear varios objetos que cumplen con una estructura similar como los usuarios como los siguientes:

<table><tbody><tr><td><pre><code class="language-javascript">const user1 = {
    id : 1,
    name : 'Ivan',
    activo : true,
    email : 'zaza@hotmail.com',
    recuperarClave : function (){
        console.log('Recuperando clave..');
    },
};</code></pre></td><td><pre><code class="language-javascript">const user2 = {
    id : 2,
    name : 'Yami',
    activo : true,
    email : 'yami@gmail.com',
    recuperarClave : function (){
        console.log('Recuperando clave..');
    },
};</code></pre></td></tr></tbody></table>

Donde las propiedades son las mismas y cambian sus valores. Para crear así 20 o 100 ususarios deberíamos volver a escribir una y otra vez la misma estructura. Por ello se usan las factories functions en JavaScript.

La sintaxis de nombre por convención usan camell case, tambien es convención que empiecen con "create" o "crear". Esta nueva funcion recibirá los parametros que serán los valores del nuevo objeto y retornará las propiedades del objeto modificadas.

```javascript
function crearUsuario(name, email) {
  return {
    name: name,
    email: email,
    activo: true,
    recuperarClave: function () {
      console.log("Recuperando clave..");
    },
  };
}
```

Cuando el nombre de la propiedad es igual al nombre del parametro podemos simplificar "email : email," por "email,"

```javascript
function crearUsuario(name, email, activo) {
  return {
    name,
    email,
    activo,
    recuperarClave: function () {
      console.log("Recuperando clave..");
    },
  };
}
```

Para crear un usuario debemos llamar a esta función y pasarle los parametros en el orden exacto que está definido, en este caso el primero será en nombre seguido del email y luego si está activo.

<table><tbody><tr><td><pre><code class="language-javascript">let user1 = crearUsuario('Ivan','zaza@hotmail.com',true);
console.log(user1);</code></pre></td><td><pre><code class="language-">{
  name: 'Ivan',
  email: 'zaza@hotmail.com',
  activo: true,
  recuperarClave: [Function: recuperarClave]
}</code></pre></td></tr><tr><td><pre><code class="language-javascript">let user2 = crearUsuario('Yamila','yami@gmail.com',true);
console.log(user2);</code></pre></td><td><pre><code class="language-">{
  name: 'Yamila',
  email: 'yami@gmail.com',
  activo: true,
  recuperarClave: [Function: recuperarClave]
}</code></pre></td></tr></tbody></table>

Vemos que en una línea quedó creado el objeto user1 y el user2 sin tener que repetir código.

## Constructor

Es una función que sirve para crear objetos también, por convención el nombre es lo que va a crear empezando en mayúscula. Por ejemplo, si crea usuarios el nombre sera "Usuario" en singular en Upper Camel Case o Pascal Case.

Dentro de la función aparece la palabra resrvada "this" al igual que en Pyton y es el mismo concepto que al mismos objeto en el que se esta trabajando le agregará lo que le indiquemos.

```javascript
function Usuario() {
  // Propiedades
  this.id = 1;
  this.name = "Ivan";
  // Métodos
  this.recuperarClave = function () {
    console.log("Recuperando Clave");
  };
}
```

Para poder crear un objeto de la función constructora debemos usar la palabra reservada de "new" antes del llamado.

```javascript
// Crear objeto
let user1 = new Usuario();
console.log(user1);
```

Para entender lo que pasa cuando se crea el objeto o usa la función constructora con la palabra "new" debemos entender los pasos que suceden:

1.  Se crea un objeto vacio sin nombre
2.  Se vincula el prototipo de la función que se llama, en este caso "Usuario()"
3.  Al objeto vacio sin nombre que tiene la forma o prototipo se le llama "this"
4.  Agregamos las propiedades y sus valores al objeto llamado "this"
5.  Devuelve automáticamente la funcion el objeto llamado "this" con sus propiedades y métodos.

Quedando asignado el objeto "this" a la variable que llamó a la función constructora. Por sonsola tendremos:

```
Usuario { id: 1, name: 'Ivan', recuperarClave: [Function (anonymous)] }
```

## Atajos constructores

Cuando anteriormente definiamos un objeto con las llaves simplemente, estabamos usando un atajo de JavaScript para llamar a un constructor. por ejemplo "let obj = {};" si queremos saber de esa variable "obj" que es un objeto, con qué constructor se creo, debemos usar la propiedad oculta de ".constructor"

<table><tbody><tr><td><pre><code class="language-javascript">let user = {id : 2, name : 'Ivan'};
console.log(user);
console.log(typeof (user));
console.log(user.constructor);</code></pre></td><td><pre><code class="language-">{id: 2, name: 'Ivan'}
object
ƒ Object() { [native code] }</code></pre></td></tr></tbody></table>

Vemos que se creo con una función Object() que nativa de javaScript, que no la definimos nosotros. Para crear un objeto sin atajos debiamos crearlo con el constructor Object() de la siguiente manera:

<table><tbody><tr><td><pre><code class="language-javascript">let user2 = new Object({
    id: 3,
    name : 'Zaza',
});</code></pre></td><td><pre><code class="language-">{id: 3, name: 'Zaza'}
object
ƒ Object() { [native code] }</code></pre></td></tr></tbody></table>

Entonces nosotros estuvimos usando un atajo con las llaves para crear un objeto.

Si creamos una variable de tipo número y accedemos a su constructor veremos que nos devuelve la función Number() como constructora.

<table><tbody><tr><td><pre><code class="language-javascript">let numero = 1;
console.log(numero);
console.log(typeof (numero));
console.log(numero.constructor);</code></pre></td><td><pre><code class="language-">1
number
ƒ Number() { [native code] }</code></pre></td></tr></tbody></table>

Assi tendremos constructores para cada tipo de variable pero su tipo será objeto veremos dos casos:

<table><tbody><tr><td><pre><code class="language-javascript">let numero = 1;
console.log(numero);
console.log(typeof (numero));
console.log(numero.constructor);</code></pre></td><td><p>Devuelve un número:</p><pre><code class="language-">1
number
ƒ Number() { [native code] }</code></pre></td></tr><tr><td><pre><code class="language-javascript">let numero2 = new Number(2);
console.log(numero2);
console.log(typeof (numero2));
console.log(numero2.constructor);</code></pre></td><td><p>Devuelve un objeto:</p><pre><code class="language-">Number&nbsp;{2}
object
ƒ Number() { [native code] }</code></pre></td></tr></tbody></table>

Si creamos dos variables de String con literal y luego con constructor String() obetendremos dos resultados distintos:

<table><tbody><tr><td><pre><code class="language-javascript">const s1 = '1+1';
const s2 = new String ('1+1');
console.log(s1, '-', s2);
console.log(typeof(s1));
console.log(typeof(s2));</code></pre></td><td><pre><code class="language-">1+1 - String&nbsp;{'1+1'}
string
object</code></pre></td></tr></tbody></table>

Vemos que devuelve primero un string de "1+1" y luego un objeto que contiene un string. Si eveluamos a las variables con eval():

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Con eval(): ',eval(s1), ' / 'eval(s2));</code></pre></td><td><pre><code class="language-">Con eval():  2  /  String&nbsp;{'1+1'}</code></pre></td></tr></tbody></table>

Vemos que evaluo la suma de "1+1" y en el objeto lo dejo igual. Tenemos que tener cuidado con los tipos de variables si se crearon como objeto o no, ya que se comportarán de forma distinta. Esto es algo que debemos revisar siempre cuando no encontramos el error de tipo.

### Valor del objeto .valueOf()

Siempre definir los String con su literal que sería con las comillas dobles o simples (let varString = ""; ) para evitar comportamientos raros. Pero si tenemos un string creado con "let varString = new String("");" o se definio como "varString = {""};" podemos sacar el string del objeto para asignarlo a una nueva variable de tipo string con "varString.valueOf();"

<table><tbody><tr><td><pre><code class="language-javascript">const s2String = s2.valueOf();
console.log(s2String);
console.log(typeof(s2String));</code></pre></td><td><pre><code class="language-">1+1
string</code></pre></td></tr></tbody></table>

## Funciones - Objetos

Las funciones en JavaScript son objetos y se los considera objetos de primera clase. Por lo que pueden ser asignadas a variables, pasadas como argumentos a otras funciones o retornadas de otras funciones. Y como son objetos las funciones, tienen propiedades nativas de JavaScript para poder utilizarlas.

<table><tbody><tr><td><pre><code class="language-javascript">// Función Ususario Objeto
function Usuario(nombre) {
    this.nombre = nombre;
    return this.nombre;
};
// Propiedades como Objeto
console.log(Usuario.name); // nombre de la función
console.log(Usuario.length); //Cantidad de argumentos</code></pre></td><td><p>Por consola:</p><pre><code class="language-">Usuario
1</code></pre></td></tr></tbody></table>

### Asignar a variable

Tambien podemos asignarla a una variable sin que la ejecute "let U = Usuario;" sin las comillas. Luego podemos construir un usuario tipo objeto pasando el parametro.

<table><tbody><tr><td><pre><code class="language-javascript">// Asignar a una variable
let U = Usuario;
// Construir desde la variable "U"
let user1 = new U('Yamila');
console.log(user1);</code></pre></td><td><p>Por consola:</p><pre><code class="language-">Usuario&nbsp;{nombre: 'Yamila'}</code></pre></td></tr></tbody></table>

### Como Argumento

Podemos pasarla como argumento a una función nueva llamada Of() que recibe como argumento "Usuario" y lo nombra como "Fn" y el argumento que recibe como parametro lo llama "arg". Utilizamos el constructor "new" para que nos retorne un objeto.

<table><tbody><tr><td><pre><code class="language-javascript">// Como argumento
function Of(Fn, arg) {
    return new Fn(arg);
};
let user2 = Of(Usuario, nombre);
console.log(user2);</code></pre></td><td><p>Por consola:</p><pre><code class="language-">Usuario {nombre: 'Ivan'}</code></pre></td></tr></tbody></table>

## Function

Existe un constructor de Function para transformar la siguiente función que es un objeto con un metodo:

```javascript
function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log("Dibujando..");
  };
}
```

Podemos definir un objeto con "new Function();" y le pasaremos como parametros los valores de "x" de "y" y tambien el método entre las comillas invertidas.

```javascript
const Point = new Function(
  x,
  y,
  `
this.x = x;
this.y = y;
this.dibujar = function () {
    console.log('Dibujando..');
`
);
```

Nos creará un objeto que podremos llamar con una variable o construir el objeto:

<table><tbody><tr><td><pre><code class="language-javascript">const Point = new Function (x,y,`
this.x = x;
this.y = y;
this.dibujar = function () {
    console.log('Dibujando..');
`);
const p = new Point(1,2);
console.log(p);
console.log(typeof(p));</code></pre></td><td><p>Por consola:</p><pre><code class="language-">anonymous { x: 1, y: 2, dibujar: [Function (anonymous)] }
object</code></pre></td></tr></tbody></table>

Vemos que se puede utilizar este constructor de objetos. Podemos encontrarnos código escrito de esta manera, pero no debemos utilizarlo.

## Propiedad .call() - Extender

Vimos que las funciones son objetos de primera clase que tienen propiedades en código nativo de JavaScript que disponemos para utilizar. Una propiedad útil es la de poder extender una función con un método o propiedad al llamarla. Para ello se usa la propiedad ".call({this},arg)" que necesita como parametro con el primer objeto o método que queremos agregar y luego los parámetros de la función que llamamos. Si volvemos a la funcion de "Punto(x,y)":

```javascript
function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log("Dibujando..");
  };
}
```

Podemos llamarla con la propiedad "Punto.call()"

<table><tbody><tr><td><pre><code class="language-javascript">let punto = {};
Punto.call(punto, 1, 2);
console.log(punto);</code></pre></td><td><pre><code class="language-">{x: 1, y: 2, dibujar: ƒ}</code></pre></td></tr></tbody></table>

Cuando llamamos tenemos que pasarle un objeto que definimos vacio con el nombre "punto" y luego los argumentos. Lo que hace es agregar al objeto vacio "punto" que se convierte en el objeto "this" las propiedades y métoso del constructor Punto(). Es decir que lo primero que hace es definir lo que le pasamos como primer argumento como el inicio del "this" y luego agregamos lo que ya tenemos. Por ello es que aumentamos o extendemos el objeto en esa llamada y no modificamos el constructor. En el ejemplo siguiente agregamos una propiedad al construir el objeto:

<table><tbody><tr><td><pre><code class="language-javascript">function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () {
        console.log('Dibujando..');
    };
};
let punto = { z: 7 };
Punto.call(punto, 1, 2);
console.log(punto);</code></pre></td><td><p>Por consola vemos que se agrega z:7</p><pre><code class="language-">{z: 7, x: 1, y: 2, dibujar: ƒ}</code></pre></td></tr></tbody></table>

Esto es muy útil si tuvieramos que crear un objeto con un constructor pero debemos agregar una propiedad o metodo que pasamos al principio. Al ejemplo le agregaremos un metodo de "saludar"

<table><tbody><tr><td><pre><code class="language-javascript">function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () {
        console.log('Dibujando..');
    };
};
function saludar() {
    return 'Hola';
};
let punto = { z: 7, saludar };
Punto.call(punto, 1, 2);
console.log(punto);</code></pre></td><td><pre><code class="language-">{z: 7, x: 1, y: 2, saludar: ƒ, dibujar: ƒ}</code></pre></td></tr></tbody></table>

_**"Estamos aumentando el contexto de this con el primer argumento"**_

## Propiedad .apply() - Extender

Es igual a la propiedad de ".call" solo que es más lejible al llamar separando o teniendo que ingresar los argumentos entre llaves rectas, quedando bien diferenciado en la sintaxis que da el contexto o extiende el objeto y que son los argumentos para construirlo.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Método .apply({this},[arg])');
let punto2 = { z: 7 };
Punto.apply(punto2, [1, 2]);
console.log(punto2);</code></pre></td><td><pre><code class="language-">Método .apply({this},[arg])
{z: 7, x: 1, y: 2, dibujar: ƒ}</code></pre></td></tr></tbody></table>

---

# Valor y Referencia

Ya vimos que teniamos valores primitivos y valores de referencia:

<table><tbody><tr><td><pre><code class="language-">Primitivos:
String
Number
Boolean
null
undefine</code></pre></td><td><pre><code class="language-">Referencia:
Objetos
Arreglos
Funciones</code></pre></td></tr></tbody></table>

Para que dos variables de referencia sean iguales debemos igualarlas ya que cada una están haciedo referencia a una dirección donde se guardan los datos. Por ejemplo:

<table><tbody><tr><td><pre><code class="language-javascript">// Variable Referencia
let obj1 = [1, 2];
let obj2 = [1, 2];
let comp = obj1 === obj2;
console.log('Los objetos son iguales?: ',comp);</code></pre></td><td><pre><code class="language-">Los objetos son iguales?:  false</code></pre></td></tr></tbody></table>

El obj1 y el obj2 parecen ser exactamente iguales si los comparamos porque sus valores coninciden. Pero nos devuelve false ya que obj1 está haciendo referencia a una dirección de donde están guardados sus valores y no es la misma dirección que el del obj2. La forma de igualar es decirle a obj2 que sea igual a obj1:

<table><tbody><tr><td><pre><code class="language-javascript">obj2 = obj1;
comp = obj1 === obj2;
console.log('Los objetos son iguales?: ',comp);</code></pre></td><td><pre><code class="language-">Los objetos son iguales?:  true</code></pre></td></tr></tbody></table>

Si vemos esto desde otro enfoque, al igualar las direcciones de dos objetos, cuando modificamos uno de los objetos estamos entrando a los datos que comparte con el otro objeto, quedando modificados y cuando ingrese el primer objeto estarán modificados.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Modificando datos misma referencia');
obj1[2] = 3;
console.log('Objeto obj1 modificado:',obj1);
console.log('Objeto obj2 cambia:',obj2);</code></pre></td><td><pre><code class="language-">Modificando datos misma referencia:
Objeto obj1 modificado: (3)&nbsp;[1, 2, 3]
Objeto obj2 cambia: (3)&nbsp;[1, 2, 3]</code></pre></td></tr></tbody></table>

Lo que estamos haciendo es ingresar a una referencia del objeto obj1 y obj2 desde el obj1 y cambiar los datos. Cuando consultamos desde el obj2 los datos accedemos a la dirección y sus valores modificados desde obj1.

### Resumen

- Primitivos --> _**Se copian**_
- Referencia --> _**Se dirijen**_

## Listar Propiedades - Object.keys(objeto)

Para listar las propiedades de un objeto para saber si existe una propiedad que se haya podido eliminar empezaremos por un objeto:

```javascript
const punto = {
  x: 10,
  y: 15,
  dibiujar: function () {
    console.log("Dibujando");
  },
};
```

Podemos resumir los metodos eliminando la palabra reservada para la función anomima:

```javascript
const punto = {
  x: 10,
  y: 15,
  dibiujar() {
    console.log("Dibujando");
  },
};
```

Si quisieramos utilizar el método de punto.dibujar(); pero ha sido eliminado, nos daría un error. Por lo que podemos usar una propiedad del constructor Object que nos lista los nombres de las propiedades y debemos pasarle como parámetro el objeto:

<table><tbody><tr><td><pre><code class="language-javascript">let keys = Object.keys(punto);
console.log(keys);</code></pre></td><td><pre><code class="language-">(3)&nbsp;['x', 'y', 'dibiujar']</code></pre></td></tr></tbody></table>

Si borramos una propiedad y listamos nuevamente:

<table><tbody><tr><td><pre><code class="language-javascript">delete punto.dibiujar;
keys = Object.keys(punto);
console.log(keys);</code></pre></td><td><pre><code class="language-">(2)&nbsp;['x', 'y']</code></pre></td></tr></tbody></table>

### Listar propiedad y valor

Como vemos que nos devuelve un arreglo el Object.keys(); podemos listar las propiedades y también obtener sus valores. Para ellos usamos el loop de "for-of"

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Propiedades y valor:');
for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
};</code></pre></td><td><pre><code class="language-">Propiedades y valor:
x 10
y 15
dibiujar ƒ dibiujar() {
       console.log('Dibujando');
   }</code></pre></td></tr></tbody></table>

### Listar pares \[keys, value\]

Existe una propiedad nativa como .keys para el constructor de Object que es "Object.entries(object);" que nos devuelve de a parares las propiedades y sus valores:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('[key, value] con .entries');
const keyValue = Object.entries(punto);
console.log(keyValue);
console.log(' ');</code></pre></td><td><pre><code class="language-">[key, value] con .entries
(3)&nbsp;[Array(2), Array(2), Array(2)]
0: (2)&nbsp;['x', 10]
1: (2)&nbsp;['y', 15]
2: (2)&nbsp;['dibiujar', ƒ]</code></pre></td></tr></tbody></table>

Devolviendo un arreglo con arreglos pares de key/value y en los metodos indicando que contiene una función.

### Listar Código viejo y Código nuevo

Las últimas dos formas de listar con el "for-of" usando el Object.keys(objeto); y con Object.entries(object); son los métodos antiguos y debe haber mucho codigo para mantener que tiene este formato. Y lo que debemos usar es el actual con el "for-in":

<table><tbody><tr><td><i><strong>Código Viejo</strong></i></td><td><i><strong>Código nuevo</strong></i></td></tr><tr><td><p>Con for-of:</p><pre><code class="language-javascript">for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
};</code></pre><p>Con .entries():</p><pre><code class="language-javascript">const keyValue = Object.entries(punto);
console.log(keyValue);</code></pre></td><td><pre><code class="language-javascript">for (let llave in punto) {
    console.log([llave, punto[llave]]);
};</code></pre></td></tr></tbody></table>

## Clonar Objetos - Object.assaign()

Para poder clonar objetos y no clonar la dirección al mismo valor. Es decir de crear un objeto igual a otro pero con su dirección y valores propios. Para ello utilizaremos un método del Object natico que es Object.assign(obj1, {obj2, prop}) donde asigan los valores de un objeto "obj2" a otro objeto "obj1" agregando las nuevas propiedades.

Vamos a agregar las propiedades de "punto" a "punto3D", creamos primero los dos objetos:

```javascript
let punto3D = { z: 5 };
let punto = {
  x: 10,
  y: 12,
};
```

Ahora vamos a asiganar al objeto de "punto3D" las propiedades de "x" e "y":

<table><tbody><tr><td><pre><code class="language-javascript">let punto3D = {z : 5};
let punto = {
    x : 10,
    y : 12,
};
Object.assign(punto3D, punto,);
console.log(punto3D);</code></pre></td><td><pre><code class="language-">{z: 5, x: 10, y: 12}</code></pre></td></tr></tbody></table>

Si queremos agregar un método de dibujar podemos seguir agregando:

<table><tbody><tr><td><pre><code class="language-javascript">let dibujar = {
    dibujar() {
        console.log('Dibujando');
    },
};
Object.assign(punto3D, dibujar);
console.log(punto3D);</code></pre></td><td><pre><code class="language-">{z: 5, x: 10, y: 12, dibujar: ƒ}</code></pre></td></tr></tbody></table>

Podemos crear un objeto que tome los valores de punto, la nueva coordenada de z:12 y además agregar un método.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Objecto con varios clonados');
let objConstruido = Object.assign(
    {},
    punto,
    { z: 12 },
    {
        dibujar() {
            console.log('Dibujando..');
        }
    },
);
console.log(objConstruido);</code></pre></td><td><pre><code class="language-">Objecto con varios clonados
10-clones.js:35 {x: 10, y: 12, z: 12, dibujar: ƒ}</code></pre></td></tr></tbody></table>

### Resumen

Podemos ir agregando objetos, propiedades o métodos con Object.assign() colocando entre los parentesis primero donde se va a clonar y luego separado por comas los objetos propiedades o métodos separados entre comas. Object.assing(objetoResultado, obj2, {prop : val} , {metodo(){acción}}, obj3); _**Si una propiedad se repite en alguno de los objetos, tomará como último valor el que esté más a la derecha**_.

### Copia método let copia = {... objeto};

Si queremos compiar con el metodo de Object.assing({}, objeto) sería un metodo relativamente viejo ya que es del 2015. Hay un método abreviado para realizar la copia de las propiedades de un objeto a una nueva referencia en otro objeto y es con las llaves {} tres puntos y seguido el objeto a copiar:

<table><tbody><tr><td>Método nuevo</td><td>Método viejo</td></tr><tr><td><pre><code class="language-javascript">// Cópia objeto {...objeto}
let punto3 = {...punto};
console.log('Objetos clonados con {...object}:');
console.log(punto, punto3);
// Cambiar valor propiedad de uno
punto3.x = 17;
punto3.y = 8;
console.log('Objeto modificado:');
console.log(punto, punto3);
console.log(' ');</code></pre></td><td><pre><code class="language-javascript">// Cópia objeto Object.assing()
let punto2 = Object.assign({}, punto);
console.log('Objetos clonados con .assing():');
console.log(punto, punto2);
// Cambiar valor propiedad de uno
punto2.x = 15;
punto2.y = 5;
console.log('Objeto modificado:');
console.log(punto, punto2);
console.log(' ');</code></pre></td></tr><tr><td><p>Por consola:</p><pre><code class="language-">Objetos clonados con {...object}:
{x: 10, y: 12} {x: 10, y: 12}
Objeto modificado:
{x: 10, y: 12} {x: 17, y: 8}</code></pre></td><td><p>Por consola:</p><pre><code class="language-">Objetos clonados con .assing():
{x: 10, y: 12} {x: 10, y: 12}
Objeto modificado:
{x: 10, y: 12} {x: 15, y: 5}</code></pre></td></tr></tbody></table>

### Método Antiguo "for in"

Hay un método antiguo que debemos saber ya que se puede encontrar con código antiguo que se deba dar soporte. Esto es con el "for-in" asignar a un objeto vacío una por una las llaves/valor del objeto que queremos copiar.

<table><tbody><tr><td><pre><code class="language-javascript">// Copia Antigua For-in
console.log('Copia por For-in');
let punto4 = {};
for (let llave in punto){
    punto4[llave] = punto[llave];
};
console.log('Objetos clonados con for-in');
console.log(punto, punto4);
console.log(' ');
// Cambiar valor propiedad de un obj
punto4.x= 20;
punto4.y= 6;
console.log('Objeto modificado:');
console.log(punto, punto4);</code></pre></td><td><p>Por consola:</p><pre><code class="language-">Copia por For-in
Objetos clonados con for-in
{x: 10, y: 12} {x: 10, y: 12}

Objeto modificado:
{x: 10, y: 12} {x: 20, y: 6}</code></pre></td></tr></tbody></table>

.
