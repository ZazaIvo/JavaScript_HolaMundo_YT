# Ejercicios Objetos

## Ejercicio 01

Construir usuarios con función constructor y que agregue a los usuarios un id random. Primero la solución propia y luego la del curso:

<table><tbody><tr><td colspan="2"><i><strong>Solución propia</strong></i></td></tr><tr><td><pre><code class="language-javascript">// Funcion constructora - Propia
function UsuarioP(name, alias, correo){
    this.name = name;
    this.alias = alias;
    this.correo = correo;
    this.id = Math.round(Math.random() * 100000);
    this.aviso = function(){
        console.log(`El usuario ${this.name} fue creado!`);
        console.log('Nombre:',this.name);
        console.log('Alias:',this.alias);
        console.log('Correo:',this.correo);
        console.log('Id:',this.id);
    };
};
let user1 = new UsuarioP('Ivan','Zaza','zaza@hotmail.com');
user1.aviso();
let user2 = new UsuarioP('Yami','Chami','yami@gmail.com');
user2.aviso();
console.log(' ');</code></pre></td><td><pre><code class="language-">El usuario Ivan fue creado!
Nombre: Ivan
Alias: Zaza
Correo: zaza@hotmail.com
Id: 19430
El usuario Yami fue creado!
Nombre: Yami
Alias: Chami
Correo: yami@gmail.com
Id: 166</code></pre></td></tr><tr><td colspan="2"><i><strong>Solución del curso</strong></i></td></tr><tr><td><pre><code class="language-javascript">// Funcion constructora - Curso
function UsuarioC(name){
    this.id = Math.random();
    this.name = name;
};
let user3 = new UsuarioC('Carlos');
console.log(user3);
let user4 = new UsuarioC('Pedro');
console.log(user4);</code></pre></td><td><pre><code class="language-">UsuarioC&nbsp;{id: 0.3390784575595942, name: 'Carlos'}
UsuarioC&nbsp;{id: 0.1635162603120628, name: 'Pedro'}</code></pre></td></tr></tbody></table>

## Ejercicio 02

La consigan es como el anterior de obtener usuarios pero de una Factory-function y no de un constructor. Para ello usaremos una función que al ejecutar devuelve los usuarios y debemos pasarle como parámetros los nombres y todo lo que queremos que nos retorne.

<table><tbody><tr><td><pre><code class="language-javascript">function userCreate(firtsName, lastName){
    let id = Math.round(Math.random() * 10000);
    let name = firtsName;
    let apellido = lastName;
    return {id, name, apellido};
};
let user1 = userCreate('Ivan','Azzarello');
console.log(user1);</code></pre></td><td><pre><code class="language-">{id: 4640, name: 'Ivan', apellido: 'Azzarello'}
apellido: "Azzarello"
id: 4640
name: "Ivan"</code></pre></td></tr></tbody></table>

Devolviendo un usuario con id hasta 10000. El retorno "return {id, name, apellido};" es el formato reducido de poner cada propiedad como "return {id: id, name: name, apellido: apellido};" ya que se llaman iguales a los parametros se puede resumir.

## Ejercicio 03

Objetos similares. Crearemos una función que nos indique si dos obejetos son similares, que tengan mismas propiedades y valores. Debemos crear una función que recibe dos objetos y los compara. La lógica es encontrar el distinto asumiendo que son iguales sus propiedades y valores. Al comparar cada propiedad de los dos objetos en el momento que encuentre una nos indique que son distintos.

Definimos los objetos:

```javascript
const objeto1 = { id: 1, nombre: "Ivan" };
const objeto2 = { id: 1, nombre: "Ivan" };
const objeto3 = { id: 2, nombre: "Ivan" };
```

Luego declaramos las función donde asumimos que no son distintos con la variable distintos = false;"

```javascript
function similares(obj1, obj2) {
  let distintos = false;
}
```

Ahora recorreremos cada propiedad en un for-in del objeto 1 que se compara con la misma propiedad del objeto 2. Y si "if()" en alguna encontramos un valor distinto asignamos el valor de true a la variable distintos.

```javascript
function similares(obj1, obj2) {
  let distintos = false;
  for (let llave in obj1) {
    if (obj1[llave] !== obj2[llave]) {
      distintos = true;
    }
  }
}
```

Finalmente debemos devolver el valor de distinto, si quedo alguna porpiedad como distinta será true. Pero la función se llama similares, por lo que debemos responder si son similares, lo contrario de distintos, es decir que si son ditintos = true; no son similares (false).

```javascript
function similares(obj1, obj2) {
  let distintos = false;
  for (let llave in obj1) {
    if (obj1[llave] !== obj2[llave]) {
      distintos = true;
    }
  }
  return !distintos;
}
```

Ahora llamamos a la función y probamos los resultados:

<table><tbody><tr><td><pre><code class="language-javascript">const objeto1 = {id: 1, nombre : 'Ivan'};
const objeto2 = {id: 1, nombre : 'Ivan'};
const objeto3 = {id: 2, nombre : 'Ivan'};
function similares(obj1, obj2){
    let distintos = false;
    for (let llave in obj1){
        if (obj1[llave] !== obj2[llave]){
            distintos = true;
        }
    };
    return !distintos;
};
let resultado = similares(objeto1 , objeto2);
console.log('obj1 y obj2 son iguales?:',resultado);
resultado = similares(objeto1 , objeto3);
console.log('obj1 y obj3 son iguales?:',resultado);</code></pre></td><td><pre><code class="language-">obj1 y obj2 son iguales?: true
obj1 y obj3 son iguales?: false</code></pre></td></tr></tbody></table>

## Ejercicio 04

Vamos a ver cuales propiedades de un objeto son métodos, por lo que pasaremos un objeto a una función y esta nos devolverá los métodos del objeto. Vamos a iterar cada propiedad del objeto y preguntar si el typeOf() es function y si lo es que nos devuelva el nombre de esa funcion o método.

Definimos un objeto con tres métodos:

```javascript
let objeto = {
  id: 1,
  name: "zaza",
  password: 1234,
  logIn() {
    console.log("Ingresando..");
  },
  logOut() {
    console.log("Saliendo..");
  },
  changePass() {
    console.log("Cambio de contrasela Ok");
  },
};
```

Luego creamos una función que iterará cada propiedad y verificará si "if()" es de tipo función, si lo es nos mandará un consolelog() con el nombre del método.

<table><tbody><tr><td><pre><code class="language-javascript">// Función
function getMetodos(obj){
    for (let llave in obj){
        if(typeof(obj[llave]) === 'function'){
            console.log(llave);
        }
    }
};
console.log('Métodos de objeto:');
getMetodos(objeto);</code></pre></td><td><pre><code class="language-">Métodos de objeto:
logIn
logOut
changePass</code></pre></td></tr></tbody></table>

## Ejercicio 05

Definimos un objeto para realizar el ejercicio.

```javascript
const objeto = {
  id: 1,
  name: "Ivan",
  correo: "zaza@hotmail.com",
  logIn() {
    console.log("Ingresando..");
  },
  logOut() {
    console.log("Saliendo..");
  },
};
```

### Verificar propiedad

Primero vamos a verificar si existe una propiedad o método con cierto nombre dentro del objeto. Asumimos que no existe ningúna propiedad con el nombre y al iterar cada nombre de propiedad con "for - in" si existe una con el mismo nombre cambiaremos el valor de una varaiable a que existe. La función recibirá un objeto como parametro y el nombre de la propiedad que se busca.

```javascript
function getProp(obj, propName) {
  let existProp = false;
  for (let llave in obj) {
    if (llave === propName) {
      existProp = true;
    }
  }
  return existProp;
}
```

Luego llamamos a la función pasando los parametros y asignando el retorno de la función a una variable:

<table><tbody><tr><td><pre><code class="language-javascript">let existProp = getProp(objeto,propiedad);
console.log('La propiedad', propiedad,'existe?:');
console.log(existProp);</code></pre></td><td><pre><code class="language-">La propiedad name existe?:
true</code></pre></td></tr></tbody></table>

### Listar Propiedades y Métodos

Vamos a realizar dos listados de busqueda que nos separen las propiedades y los métodos. Para ello usaremos el "typeof()" del objeto en una iteración para separar. Guardaremos cada valor en un arreglo para que respete el orden a diferencia de un objeto de salida.

```javascript
function listType(obj) {
  let getM = []; // Respeta el orden
  let getP = []; // Respeta el orden
}
```

Luego vamos a realizar la iteración por cada llave del objeto y definiremos si es de tipo "function" la guarde en getM y todo lo que no sea de tipo funcion que lo guarde en getP.

```javascript
function listType(obj) {
  let getM = []; // Respeta el orden
  let getP = []; // Respeta el orden
  // Separar tipo
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      getM[key] = key;
    } else {
      getP[key] = key;
    }
  }
}
```

Finalmente daremos formato de salida en la consola mostarndo de los dos arreglos solo cada nombre de método o propiedad.

<table><tbody><tr><td><pre><code class="language-javascript">function listType(obj){
    let getM = []; // Respeta el orden
    let getP = []; // Respeta el orden
    // Separar tipo
    for (let key in obj){
        if(typeof(obj[key]) === 'function'){
            getM[key]= key;
        } else {
            getP[key] = key;
        };
    };
    // Formato salida
    console.log('Los métodos son:');
    for (let i in getM){
        console.log(i);
    };
    console.log(' ');
    console.log('Las propiedades son:');
    for (let i in getP){
        console.log(i);
    };
};
listType(objeto);</code></pre></td><td><pre><code class="language-">Los métodos son:
logIn
logOut
 
</code></pre><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><pre><code class="language-">Las propiedades son:
id
name
correo</code></pre></td></tr></tbody></table>

### Object.keys()

También podemos listar las propiedades con el método propio de los objetos de Object.keys(objeto) que nos devuelve un arreglo de todas las propiedades del objeto.

<table><tbody><tr><td><pre><code class="language-javascript">// Object.keys()
function objKeys(obj){
    let prop = Object.keys(obj);
    console.log(prop);
};
objKeys(objeto);</code></pre></td><td><pre><code class="language-">['id', 'name', 'correo', 'logIn', 'logOut']</code></pre></td></tr></tbody></table>

Con ello podremos tambien verificar si existe una propiedad o método del mismo nombre:

<table><tbody><tr><td><pre><code class="language-javascript">function objKeys(obj, nomPro){
    let prop = Object.keys(obj);
    let existe = false;
    for (let key of prop){
        if (key === nomPro){
            existe = true;
        };
    };
    return existe;
};
let existProp2 = objKeys(objeto,propiedad);
console.log('La propiedad', propiedad,'existe:');
console.log(existProp2);</code></pre></td><td><pre><code class="language-">La propiedad name existe:
true</code></pre></td></tr></tbody></table>

## Ejercicio 06 (clonar)

Este ejercicio es importante ya que podemo crear copias de los objetos, clonando las propiedades y no las direcciones de referencia. Lo haremos de tres formas diferentes. La primera manualmente, luego con Object.assign() y finalmente con "..."

Usamos el mismo obejto del ejercicio anteriro.

```javascript
const objeto = {
  id: 1,
  name: "Ivan",
  correo: "zaza@hotmail.com",
  logIn() {
    console.log("Ingresando..");
  },
  logOut() {
    console.log("Saliendo..");
  },
};
```

### Forma manual

No podremos usar los "..." no el método de Objetc.assign() Asi que deberemos copiar propiedad por propiedad de un objeto al otro, al igual que sus métodos.

<table><tbody><tr><td><pre><code class="language-javascript">function createCopy1(obj){
    let copy = {};
    for (let key in obj){
       copy[key] = obj[key]
    };
    return copy;
};
console.log('Método manual');
console.log('El objeto a copiar es:');
console.log(objeto);
objetoCopy1 = createCopy1(objeto);
console.log('El objeto copiado es:');
console.log(objetoCopy1);
console.log(' ');</code></pre></td><td><pre><code class="language-">Método manual
El objeto a copiar es:
{id: 1, name: 'Ivan', correo: 'zaza@hotmail.com', logIn: ƒ, logOut: ƒ}
El objeto copiado es:
{id: 1, name: 'Ivan', correo: 'zaza@hotmail.com', logIn: ƒ, logOut: ƒ}</code></pre></td></tr></tbody></table>

### Forma con Object.assing()

En este método propio de JavaScript para los objetos podemos agregar propiedades a un objeto y si el obejto inicial es un objeto vacio y le pasamos todas las propiedades de otro objeto las copia en la referencia del obejto vacio. _**Para que nos copie las nuevas propiedades debemos agregar las llaves vacias como primer parámetro, sino duplica la referencia en vez de las propiedades**_.

<table><tbody><tr><td><pre><code class="language-javascript">let objetoCopy2;
objetoCopy2 = Object.assign({},objeto);
console.log('Método Object.assing()');
console.log('El objeto a copiar es:');
console.log(objeto);
objetoCopy1 = createCopy1(objeto);
console.log('El objeto copiado es:');
console.log(objetoCopy2);
console.log(' ');</code></pre></td><td><pre><code class="language-">Método Object.assign()
El objeto a copiar es:
{id: 1, name: 'Ivan', correo: 'zaza@hotmail.com', logIn: ƒ, logOut: ƒ}
El objeto copiado es:
{id: 1, name: 'Ivan', correo: 'zaza@hotmail.com', logIn: ƒ, logOut: ƒ}</code></pre></td></tr></tbody></table>

### Forma con "..."

Este es el método más simple ya que solo debemos igualar el objeto vacio a una sintaxis que indica que a lo que tenga "..." se le agrege las propiedades que sigan entre las llaves.

<table><tbody><tr><td><pre><code class="language-javascript">let objetoCopy3 = {};
objetoCopy3 = {...objeto};
console.log('Método "..."');
console.log('El objeto a copiar es:');
console.log(objeto);
objetoCopy1 = createCopy1(objeto);
console.log('El objeto copiado es:');
console.log(objetoCopy2);
console.log(' ');</code></pre></td><td><pre><code class="language-">Método "..."
El objeto a copiar es:
{id: 1, name: 'Ivan', correo: 'zaza@hotmail.com', logIn: ƒ, logOut: ƒ}
El objeto copiado es:
{id: 1, name: 'Ivan', correo: 'zaza@hotmail.com', logIn: ƒ, logOut: ƒ}</code></pre></td></tr></tbody></table>

### Verificar copias

Para poder verificar que sean copias las propiedades con cada objeto referencias distintas y no que se hayan copiado las referencias. Al modificar uno de los objetos no debe verse reflejado en ninguno de los otros.

<table><tbody><tr><td><pre><code class="language-javascript">objetoCopy1.name = 'Marcos';
objetoCopy2.name = 'Yami';
objetoCopy3.nam = 'Nico';
console.log('Los objetos modificados son:');
console.log(objeto);
console.log(objetoCopy1);
console.log(objetoCopy2);
console.log(objetoCopy3);</code></pre></td><td><pre><code class="language-">Los objetos modificados son:
{id: 1, name: 'Ivan', correo: 'zaza@hotmail.com', logIn: ƒ, logOut: ƒ}
{id: 1, name: 'Marcos', correo: 'zaza@hotmail.com', logIn: ƒ, logOut: ƒ}
{id: 1, name: 'Yami', correo: 'zaza@hotmail.com', logIn: ƒ, logOut: ƒ}
{id: 1, name: 'Nico', correo: 'zaza@hotmail.com', logIn: ƒ, logOut: ƒ}</code></pre></td></tr></tbody></table>

Esta verificación es importante realizarla antes de continuar con el código que estemos desarrollando. O verificar si no es un problema que estemos teniendo en el soporte de un programa o aplicación.
