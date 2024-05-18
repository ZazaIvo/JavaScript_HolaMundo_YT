# Ejercicios de Arreglos

## Ejercicio 01

Vamos a crear una función que tome un arreglos de números que pueden tener valores negativos y que los devuelva en su valor absoluto. Además los debe ordenar de menor a mayor.

### Solución propia

Voy a crear una función que contiene dos arreglos, el primero que recibirá cada número en su valor absoluto y lo guardará. Otro arreglo será el que contenga los números absolutos ordenados. Para ordenar primero debemos usar el loop de "for in" para que tome cada elemento y le aplique el método de Math.abs(elemento) y cada elemento será "arr\[idx\]". Luego para ordenar usaremos el método .sort() con la función flecha que si compara dos parámetros el menor devolverá -1 poniendo primero.

<table><tbody><tr><td><pre><code class="language-javascript">const ns = [-2, 3, -5, 4, 10, 12, -20];
function paraAbsoluto(arr) {
    let absoluto = [];
    let absOrden = [];
    for (idx in arr) {
        absoluto[idx] = Math.abs(arr[idx]);
    };
    absOrden = absoluto.sort((a, b) =&gt; {
        if (a&lt;b) { return -1};
    });
    return absOrden;
};
console.log('El arreglo:');
console.log(ns);
console.log('Arreglo absoluto y ordenado:');
console.log(paraAbsoluto(ns));</code></pre></td><td><pre><code class="language-">El arreglo:
(7)&nbsp;[-2, 3, -5, 4, 10, 12, -20]
Arreglo absoluto y ordenado:
(7)&nbsp;[2, 3, 4, 5, 10, 12, 20]</code></pre></td></tr></tbody></table>

### Solución Curso

<table><tbody><tr><td><pre><code class="language-javascript">function paraAbsolutoC(arr){
    return arr.map(n =&gt; Math.abs(n));
};
console.log('Absoluto por Curso:');
console.log(paraAbsolutoC(ns));</code></pre></td><td><pre><code class="language-">Absoluto por Curso:
(7)&nbsp;[2, 3, 5, 4, 10, 12, 20]</code></pre></td></tr></tbody></table>

Si vemos, para iterar cada elemento y aplicar el Math.abs() utiliza el método de mapeo, que recorre todos los elementos aplicando una función flecha y devuelve un arreglos con cada resultado o return. Es mucho más simple y entendible el código que el "for in".

<table><tbody><tr><td><pre><code class="language-javascript">Iteración .map():
return arr.map(n =&gt; Math.abs(n));</code></pre></td><td><pre><code class="language-javascript">Iteración for (in):
for (idx in arr) {
        absoluto[idx] = Math.abs(arr[idx]);
    };</code></pre></td></tr></tbody></table>

## Ejercicio 02

En este ejercicio vamos a tomar un arry con varios tipos de elementos y separarlos por tipo de valor en arreglos separados. El arreglo será:

```javascript
const myArray = ["Hola", 12, "Mundo", {}, { id: 15 }, ["lala"]];
```

### Solución Propia

Crearemos una función que usará el metodo .filter() donde evaluaremos tres veces el arreglo, el primero para que devuelva los elementos que el typeof() sea igual a 'string' el segundo para los que sean igual a 'number' y finalmente para los que sean 'objetc' creando asi tres variables. Luego retornamos en el formato solicitado.

<table><tbody><tr><td><pre><code class="language-javascript">function divideTipo(arr){
    let typeString = [];
    let typeNumber = [];
    let typeObject = [];
    typeString = arr.filter(u =&gt; {
        if (typeof(u) === 'string'){
            return true;
        };
    });
    typeNumber = arr.filter(u =&gt; {
        if (typeof(u) === 'number'){
            return true;
        };
    });
    typeObject = arr.filter(u =&gt; {
        if (typeof(u) === 'object'){
            return true;
        };
    });
    return {
        String: typeString,
        Number: typeNumber,
        Object: typeObject,
    };
};
const myArrayType = divideTipo(myArray);
console.log(myArrayType);</code></pre></td><td><p>Arreglo:</p><ol><li><i>(6)&nbsp;['Hola', 12, 'Mundo', {…}, {…}, Array(1)]</i></li></ol><p>Arreglo ordenado:</p><ol><li><i>{String: Array(2), Number: Array(1), Object: Array(3)}</i><ol><li><strong>Number</strong>: [12]</li><li><strong>Object</strong>: (3)&nbsp;[{…}, {…}, Array(1)]</li><li><strong>String</strong>: (2)&nbsp;['Hola', 'Mundo']</li></ol></li></ol></td></tr></tbody></table>

### Solución Curso

La diferencia que tiene con el curso es el resumen de sintaxis al no declarar variables internas y resolver en una sola linea la función flecha con método .filter() siendo la mísma lógica.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Solción Curso');
function divideTipoC(arr) {
    return {
        Number: arr.filter(n =&gt; typeof n === 'number'),
        String: arr.filter(n =&gt; typeof n === 'string'),
        Object: arr.filter(n =&gt; typeof n === 'object'),
    };
};
console.log(divideTipoC(myArray));</code></pre></td><td><p>Solción Curso</p><ol><li><i>{Number: Array(1), String: Array(2), Object: Array(3)}</i><ol><li><strong>Number</strong>: [12]</li><li><strong>Object</strong>: (3)&nbsp;[{…}, {…}, Array(1)]</li><li><strong>String</strong>: (2)&nbsp;['Hola', 'Mundo']</li></ol></li></ol></td></tr></tbody></table>

## Ejercicio 03

En este ejercicio vamos a listar sacando objetos (usuarios) restringiendo algún valor de una propiedad. Vamos a listar los usuarios que no son de plan: 'free';

```javascript
const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "free" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];
```

### Solución Propia

Creamos una funcion que recibe el arreglo de ususarios y devuelve "return" un arreglo con solo los usuarios que no son 'free'.

<table><tbody><tr><td><pre><code class="language-javascript">function getPaidUser(usrs) {
    let noFree = usrs.filter( u =&gt; {
        if (u.plan !== 'free'){
            return true;
        }
    });
    return noFree;
};
console.log('Los ususarios de pago son:');
console.log(getPaidUser(usuarios));</code></pre></td><td><p>Los ususarios de pago son:</p><ol><li><i>(2)&nbsp;[{…}, {…}]</i><ol><li><strong>0</strong>: {edad: 17, nombre: 'Nico', plan: 'premium'}</li><li><strong>1</strong>: {edad: 25, nombre: 'Felipe', plan: 'gold'}</li></ol></li></ol></td></tr></tbody></table>

### Solución Curso

La diferencia en el método .filter() es la sintaxis reducida que tiene en la función flecha:

<table><tbody><tr><td><pre><code class="language-javascript">function getPaidUserC(usrs) {
    return usrs.filter(u =&gt; u.plan !== 'free');
};
console.log('Los ususarios de pago son:');
console.log(getPaidUserC(usuarios));</code></pre></td><td><p>Los usuarios de pago son:</p><p><i>(2)&nbsp;[{…}, {…}]</i></p><ol><li><strong>0</strong>: {edad: 17, nombre: 'Nico', plan: 'premium'}</li><li><strong>1</strong>: {edad: 25, nombre: 'Felipe', plan: 'gold'}</li></ol></td></tr></tbody></table>

## Ejercicio 04

Este ejercicio usará los mismos usuarios pero lo que haremos es indicar cuantos usuarios son premium y por otro lado cuantos son mayores. Tomamos el mismo arreglo que el anterior:

<table><tbody><tr><td><pre><code class="language-javascript">const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];
console.log('Ususarios:',usuarios);
console.log(' ');</code></pre></td><td><p>Ususarios:</p><ol><li><i>(4)&nbsp;[{…}, {…}, {…}, {…}]</i><ol><li><strong>0</strong>: {edad: 17, nombre: 'Nico', plan: 'premium'}</li><li><strong>1</strong>: {edad: 13, nombre: 'Chanchito', plan: 'premium'}</li><li><strong>2</strong>: {edad: 32, nombre: 'Fernanda', plan: 'free'}</li><li><strong>3</strong>: {edad: 25, nombre: 'Felipe', plan: 'gold'}</li></ol></li></ol></td></tr></tbody></table>

### Solución Propia

Puedo utilizar un filter() para la busqueda y luego aplicar la propiedad de .length() para saber que longitud tiene el arreglo.

<table><tbody><tr><td><pre><code class="language-javascript">function cantPremium(arr){
    let arryPrem = arr.filter( u =&gt; {
        if (u.plan === 'premium'){
            return true;
        };
    });
    return arryPrem.length;
};
const userPrem = cantPremium(usuarios);
console.log('Usuarios premium:', userPrem);
console.log(' ');</code></pre></td><td>Usuarios premium: 2</td></tr></tbody></table>

Y para los usuarios mayores de edad:

<table><tbody><tr><td><pre><code class="language-javascript">function cantMayores(arr){
    let arryPrem = arr.filter( u =&gt; {
        if (u.edad &gt;= 18){
            return true;
        };
    });
    return arryPrem.length;
};
const userMay = cantMayores(usuarios);
console.log('Usuarios premium:', userMay);</code></pre></td><td>Usuarios premium: 3</td></tr></tbody></table>

### Solución Curso

Para resolver este ejercicio utiliza el método de reduce() acumulando en el contador la cantidad de elementos que va a encontrar con el valor de la propiedad "plan : premium" y luego lo mismo para la propiedad de "edad" que sean mayores.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Solucion Curso');
function cuantosPremium(usrs) {
    return usrs.reduce((acc, el) =&gt; {
        if (el.plan === 'premium') {
            return acc +1;
        }
        return acc;
    }, 0);
};
const usrsPrem = cuantosPremium(usuarios);
console.log('Usuarios premium:', usrsPrem);</code></pre></td><td><pre><code class="language-">Solucion Curso
Usuarios premium: 2</code></pre></td></tr></tbody></table>

Para los mayores cambiamos la condición de la propiedad edad:

<table><tbody><tr><td><pre><code class="language-javascript">function cuantosMayores(usrs) {
    return usrs.reduce((acc, el) =&gt; {
        if (el.edad &gt;= 18) {
            return acc +1;
        }
        return acc;
    }, 0);
};
const usrsMayores = cuantosMayores(usuarios);
console.log('Usuarios Mayores:', usrsMayores);</code></pre></td><td><pre><code class="language-">Solucion Curso
Usuarios Mayores: 3</code></pre></td></tr></tbody></table>

### Doble Filtro - Propio

Las dos lógicas para resolver el problema dan con el mismo resultado, ambas deben iterar todos los elementos por lo que consumen los mismos recursos. La ventaja de la lógica de .filter() es que podemos obtener tambien el arreglo para aplicar otro filtro como por ejemplo de los premium saber cuales son mayores de edad.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Doble Filtrado');
function cantPremiumMay(arr) {
    let arryPrem = arr.filter(u =&gt; {
        if (u.plan === 'premium') {
            return true;
        };
    });
    let arryPremMay = arryPrem.filter(u =&gt; {
        if (u.edad &gt;= 18){
            return true;
        }
    });
    return arryPremMay;
};
const userPremM = cantPremiumMay(usuarios);
console.log('Usuarios Premium - Mayores:', userPremM.length);
console.log(userPremM);</code></pre></td><td><p>Doble Filtrado</p><p>Usuarios Premium - Mayores: 1</p><ol><li><i>[{…}]</i><ol><li><strong>0</strong>: {edad: 18, nombre: 'Nico', plan: 'premium'}</li></ol></li></ol></td></tr></tbody></table>

Para optimizar los dobles condicionantes debemos usar el && y filtrar en un solo condicional doble:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Doble Filtrado');
function cantPremiumMay(arr) {
    let arryPremMay = arr.filter(u =&gt; {
        if (u.plan === 'premium' &amp;&amp; u.edad &gt;= 18) {
            return true;
        };
    });
    return arryPremMay;
};
const userPremM = cantPremiumMay(usuarios);
console.log('Usuarios Premium - Mayores:', userPremM.length);
console.log(userPremM);</code></pre></td><td><p>Doble Filtrado</p><p>Usuarios Premium - Mayores: 1</p><ol><li><i>[{…}]</i><ol><li><strong>0</strong>: {edad: 18, nombre: 'Nico', plan: 'premium'}</li></ol></li></ol></td></tr></tbody></table>

### Doble Filtro - Curso

Podemos realizar lo mismo con el método de .reduce() y crear un arreglo con una propiedad de cantidad y luego los usuarios que coinciden:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Solucion Curso');
function cuantosPremiumMay(usrs) {
    return usrs.reduce((acc, el) =&gt; {
        if (el.plan === 'premium' &amp;&amp; el.edad &gt;= 18) {
            return { cantidad: (acc + 1), usuarios: el };
        }
        return acc;
    }, []);
};
const usrsPremMayor = cuantosPremiumMay(usuarios);
console.log('Usuarios Premium-Mayores:');
console.log(usrsPremMayor);</code></pre></td><td><p>Usuarios Premium-Mayores:</p><ol><li><i>{cantidad: '1', usuarios: {…}}</i><ol><li><strong>cantidad</strong>: "1"</li><li><strong>usuarios</strong>: {edad: 18, nombre: 'Nico', plan: 'premium'}</li></ol></li></ol></td></tr></tbody></table>

## Ejercicio 05

En este ejercicio buscaremos el usuario con mayor edad del listado:

```javascript
const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "premium" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];
```

### Solución Propia - array.reduce()

Se resuelve con el método .reduce() donde empezamos con un valor del acumulador de {edad : 0} y con la condición que se el valor de la propiedad el.edad es mayor que el acumulado que asigne el objeto completo al acumulador y lo retorne para la siguiente iteración. Finalmente quedará el objeto acumulado con el que tenía la mayor edad:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Solución Propia');
function getMayor(usrs) {
    let mayor =  usrs.reduce((acc, el) =&gt; {
        if (acc.edad &lt; el.edad) {
            acc = el;
        };
        return acc;
    }, { edad: 0 });
    return mayor;
};
let mayorEdad = getMayor(usuarios);
console.log('El usuario de mayoer edad es:',mayorEdad.nombre);
console.log(mayorEdad);</code></pre></td><td><pre><code class="language-">Solución Propia
El usuario de mayoer edad es: Fernanda
{edad: 32, nombre: 'Fernanda', plan: 'free'}</code></pre></td></tr></tbody></table>

### Solución Curso - for ( obj of array)

Para reforzar conceptos se utiliza el loop de "for( obj of arry){};" donde vamos a empezar definiendo una variable que contiene el primer objeto de index 0 y luego empezará a compararlo con cada uno de los otros. Dentro del loop ponemos la condición que si "if" la propiedad edad del comparado es mayor, que reemplace el valor de la variable. Quedando o devolviendo finalmente el de mayor edad.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Solución Curso');
function obtenerMayor(arr){
    let compMay = arr[0]; // Obj inicial
    for ( let usuario of arr) {
        if (compMay.edad &lt; usuario.edad){
            compMay = usuario;
        }
    }
    // Retornar el usuario mayor
    return compMay;
};
mayorEdad = obtenerMayor(usuarios);
console.log('Usuario mayor edad:', mayorEdad.nombre);
console.log(mayorEdad);</code></pre></td><td><pre><code class="language-">Solución Curso
Usuario mayor edad: Fernanda
{edad: 32, nombre: 'Fernanda', plan: 'free'}</code></pre></td></tr></tbody></table>

## Ejercicio 06

Vamos a tener que poder separar un arreglo en los tipos de datos y además indexarlos con el nombre de la propiedad como el tipo quedando como ejemplo \[number : {numero}, string : {textos}\]

```javascript
const myArray = ["Hila", 12, true, "Mundo", {}, { id: 5 }, ["lala"]];
```

### Solución Propia - .reduce() - .push()

Resuelvo el problema con el método .reduce() determinando el formato del acumulador inicial como necesitamos que lo muestre. Al mostrar propiedades que son los tipos con valor de arreglo para guardar los elemento podemos usar el metodo de .push() agregando si cumple con el tipo el elemento junto con los que ya existen:

<table><tbody><tr><td><pre><code class="language-javascript">function dividePorTipoP(arr) {
    return arr.reduce((acc, el) =&gt; {
        if( typeof el === 'number'){
            acc.number.push(el);
        };
        if( typeof el === 'string'){
            acc.string.push(el);
        };
        if( typeof el === 'boolean'){
            acc.boolean.push(el);
        };
        if( typeof el === 'object'){
            acc.object.push(el);
        };
        return acc;
    }, {number: [],string: [], boolean: [], object: []});
};
let arr = dividePorTipoP(myArray);
console.log(arr);</code></pre></td><td><p>Solución Propia</p><ol><li><i>{number: Array(1), string: Array(2), boolean: Array(1), object: Array(3)}</i><ol><li><strong>boolean</strong>: [true]</li><li><strong>number</strong>: [12]</li><li><strong>object</strong>: (3)&nbsp;[{…}, {…}, Array(1)]</li><li><strong>string</strong>: (2)&nbsp;['Hola', 'Mundo']</li></ol></li></ol></td></tr></tbody></table>

### Solución Curso

Al usar el método de .reduce() en cada paso del elemento define un arreglo del tipo de la llave, si ya existe no la agrega y si no existe agrega una vacia (operador ternario). Agrega al objeto que contiene cada llave tipo y las coincidencias.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Solución Curso');
function dividePorTipoC(arr){
    return arr.reduce((acc, el)=&gt; {
        let llave = typeof el;
        // Generar arreglo de tipo
        acc[llave] = acc[llave] ? acc[llave] : [];
        // Agregar elemento al arreglo
        acc[llave].push(el);
        return acc;
    }, {});
};
arr = dividePorTipoC(myArray);
console.log(arr);</code></pre></td><td><p>Solución Curso</p><ol><li><i>{string: Array(2), number: Array(2), boolean: Array(2), object: Array(3)}</i><ol><li><strong>boolean</strong>: (2)&nbsp;[true, false]</li><li><strong>number</strong>: (2)&nbsp;[12, 10]</li><li><strong>object</strong>: (3)&nbsp;[{…}, {…}, Array(1)]</li><li><strong>string</strong>: (2)&nbsp;['Hola', 'Mundo']</li></ol></li></ol></td></tr></tbody></table>

Vemos que la llave se crea en "`acc[llave] = acc[llave] ? acc[llave] : [];`" Esta línea verifica si ya existe una propiedad en el acumulador **acc** con el nombre almacenado en **llave** (que es el tipo del elemento actual). Si ya existe, la usa; si no, inicializa un arreglo vacío para esa propiedad.

Esta línea de código está utilizando el operador ternario para realizar una verificación y asignación en una sola línea. Aquí está la explicación paso a paso:

#### Evaluación de la condición:

```javascript
acc[llave] = acc[llave]..
```

Esta parte verifica si ya existe una propiedad en el objeto **acc** con el nombre almacenado en la variable **llave**. **llave** contiene el tipo del elemento actual (por ejemplo, **'string'**, **'number'**, etc.).

#### Operador ternario:

```javascript
? acc[llave] : []
```

El operador ternario **? :** es una forma compacta de un **if-else**. Funciona de la siguiente manera:

- Si **acc\[llave\]** es verdadero (es decir, si **acc** ya tiene una propiedad con el nombre **llave** que no es **undefined**, **null** o **false**), entonces **acc\[llave\]** se usa como valor.
- Si **acc\[llave\]** es falso (es decir, si **acc** no tiene una propiedad con el nombre **llave** o su valor es **undefined**, **null**, **false**, etc.), entonces se asigna un nuevo arreglo vacío **\[\].**

Línea completa:

```javascript
acc[llave] = acc[llave] ? acc[llave] : [];
```

se puede leer de la siguiente manera:

- **Si** **acc** ya tiene una propiedad con el nombre **llave** (por ejemplo, **acc\['string'\]**):
  - Usa el valor existente de **acc\[llave\]** (que debería ser un arreglo).
- **De lo contrario**:
  - Crea un nuevo arreglo vacío **\[\]** y asígnalo a **acc\[llave\]**.

Esta verificación y asignación aseguran que **acc\[llave\]** siempre sea un arreglo, ya sea uno que ya existía o uno nuevo si no existía previamente. Este arreglo se usa para almacenar todos los elementos del arreglo original **arr** que tienen el mismo tipo.

Aquí hay un ejemplo práctico:

Supongamos que **acc** es inicialmente **{}** (un objeto vacío).

En la primera iteración, si el primer elemento de **arr** es **'Hola'** (un string):

- **llave** será **'string'**.
- **acc\['string'\]** no existe aún, así que la expresión ternaria **acc\['string'\] ? acc\['string'\] : \[\]** evaluará a **\[\]**.
- Entonces, **acc\['string'\] = \[\]** (se crea un nuevo arreglo vacío y se asigna a **acc\['string'\]**).
- Luego, **'Hola'** se agrega a **acc\['string'\]**.

En la segunda iteración, si el siguiente elemento es **12** (un number):

- **llave** será **'number'**.
- **acc\['number'\]** no existe aún, así que la expresión ternaria **acc\['number'\] ? acc\['number'\] : \[\]** evaluará a **\[\]**.
- Entonces, **acc\['number'\] = \[\]**.
- Luego, **12** se agrega a **acc\['number'\]**.

Y así sucesivamente, asegurando que cada tipo de dato en el arreglo original **arr** se agrupe correctamente en su respectiva propiedad en el objeto **acc**.

## Ejercicio 07 - groupBay(arr, prop){}

Existe un método para los objetos .groupBay() que es similar a los que vamos a resolver donde creamos una función que recibe un arreglo y además recibe una propiedad con la cual nosotros podemos agrupar los usuarios que lo contengan. Vamos a crear un arreglo de usuarios más grande:

```javascript
const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "premium" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 23, nombre: "Felipe", plan: "gold" },
  { edad: 25, nombre: "Jose", plan: "gold" },
  { edad: 26, nombre: "Martin", plan: "free" },
  { edad: 40, nombre: "Lucas", plan: "free" },
  { edad: 42, nombre: "Pedro", plan: "premium" },
];
```

Lo que debe devolver es un objeto que contenga cada propiedad como llave y como valores los usuarios que tengan ese plan. Es una función muy útili para filtrar y ordenar datos.

Creamos la función y usaremos el método .reduce()

```javascript
function groupBay(arr, prop) {
  return arr.reduce((acc, el) => {}, {});
}
```

La función quedaría:

<table><tbody><tr><td><pre><code class="language-javascript">function groupBay(arr, prop) {
    return arr.reduce((acc, el) =&gt; {
        // Obtenemos el valor de la prop que pasamos
        let valor = el[prop];
        // Evaluamos si existe o creamos propiedad
        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;
    }, {});
};
const grouped = groupBay(usuarios, 'plan');
console.log(grouped);</code></pre></td><td><ol><li><i>{premium: Array(3), free: Array(3), gold: Array(2)}</i><ol><li><strong>free</strong>: Array(3)<ol><li><strong>0</strong>: {edad: 32, nombre: 'Fernanda', plan: 'free'}</li><li><strong>1</strong>: {edad: 26, nombre: 'Martin', plan: 'free'}</li><li><strong>2</strong>: {edad: 40, nombre: 'Lucas', plan: 'free'}</li></ol></li><li><strong>gold</strong>: Array(2)<ol><li><strong>0</strong>: {edad: 23, nombre: 'Felipe', plan: 'gold'}</li><li><strong>1</strong>: {edad: 25, nombre: 'Jose', plan: 'gold'}</li></ol></li><li><strong>premium</strong>: Array(3)<ol><li><strong>0</strong>: {edad: 17, nombre: 'Nico', plan: 'premium'}</li><li><strong>1</strong>: {edad: 13, nombre: 'Chanchito', plan: 'premium'}</li><li><strong>2</strong>: {edad: 42, nombre: 'Pedro', plan: 'premium'}</li></ol></li></ol></li></ol></td></tr></tbody></table>

### Explicación detallada de la función \`groupBy\`

Vamos a desglosar y explicar paso a paso cómo funciona la función \`groupBy\` para agrupar elementos de un arreglo en una nueva propiedad basada en el valor de una propiedad específica de los objetos dentro del arreglo:

```javascript
function groupBy(arr, prop) {
  return arr.reduce((acc, el) => {
    // Obtenemos el valor de la propiedad que se pasa como argumento
    let valor = el[prop];
    // Evaluamos si existe la propiedad 'valor' en el acumulador, si no existe, se crea un array vacío
    acc[valor] = acc[valor] ? acc[valor] : [];
    // Agregamos el elemento actual al array correspondiente en 'acc'
    acc[valor].push(el);
    // Devolvemos el acumulador para la próxima iteración
    return acc;
  }, {});
}
```

### Declaración de la función groupBy

La función **groupBy** toma dos parámetros:

- **arr**: un arreglo de objetos.
- **prop**: una cadena que representa el nombre de la propiedad por la cual queremos agrupar los objetos.

```javascript
function groupBy(arr, prop) {},
```

### Inicio del método reduce:

El método **reduce** se utiliza para transformar el arreglo **arr** en un objeto acumulador **acc**. La función de reducción se ejecuta para cada elemento **el** del arreglo **arr**.

```javascript
return arr.reduce((acc, el) => {});
```

### Obtención del valor de la propiedad especificada:

Aquí obtenemos el valor de la propiedad **prop** del elemento actual **el**. Este valor se almacena en la variable **valor**.

```javascript
let valor = el[prop];
```

### Evaluación y creación de la propiedad en el acumulador:

```javascript
acc[valor] = acc[valor] ? acc[valor] : [];
```

Esta línea verifica si ya existe una propiedad en el acumulador **acc** con el nombre almacenado en **valor**.

- Si **acc\[valor\]** existe (es decir, no es **undefined**, **null**, o **false**), entonces **acc\[valor\]** se mantiene igual.
- Si **acc\[valor\]** no existe, se inicializa con un arreglo vacío **\[\]** con el nombre del valor "valor : \[\]".

### Agregar elemento actual al arreglo correspondiente:

Se agrega el elemento actual **el** al arreglo que corresponde a la propiedad **valor** dentro del objeto acumulador **acc**. Utilizando el método .push() que lo agrega al final del arreglo

```javascript
acc[valor].push(el);
```

### Devolución del acumulador para la próxima iteración:

Se devuelve el acumulador **acc** para la próxima iteración del **reduce**.

```javascript
return acc;
```

Completando asi uno por uno los elementos clasificandolos por el valor de la propiedad.

## Ejercicio 08

En este ejercicio haremos varios procesos de los datos para obtener:

```
//Obtener los usuarios pago
//Ordenar de mayor a menor por edad
//Devolver el nombre del usuario
//Crear una plantilla HTML
//Imprimir por pantalla
```

La lista de usuarios será:

```javascript
const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "premium" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 23, nombre: "Felipe", plan: "gold" },
  { edad: 25, nombre: "Jose", plan: "gold" },
  { edad: 26, nombre: "Martin", plan: "free" },
  { edad: 40, nombre: "Lucas", plan: "free" },
  { edad: 42, nombre: "Pedro", plan: "premium" },
];
```

### Solución propia

Para el _**primer punto**_ usaremos el método de .filter() para que nos cree un nuevo arreglo con los usuarios que cumplen "if()" con plan de premium o "||" plan gold.

<table><tbody><tr><td><pre><code class="language-javascript">const usrsBay = usuarios.filter( u =&gt; {
    if (u.plan === 'premium' || u.plan === 'gold'){
        return true;
    };
});
console.log('1- Usuarios de pago:');
console.log(usrsBay);</code></pre></td><td><p>1- Usuarios de pago:</p><ol><li><i>(5)&nbsp;[{…}, {…}, {…}, {…}, {…}]</i><ol><li><strong>0</strong>: {edad: 17, nombre: 'Nico', plan: 'premium'}</li><li><strong>1</strong>: {edad: 13, nombre: 'Chanchito', plan: 'premium'}</li><li><strong>2</strong>: {edad: 23, nombre: 'Felipe', plan: 'gold'}</li><li><strong>3</strong>: {edad: 25, nombre: 'Jose', plan: 'gold'}</li><li><strong>4</strong>: {edad: 42, nombre: 'Pedro', plan: 'premium'}</li></ol></li></ol></td></tr></tbody></table>

Para el _**segundo punto**_ que es ordenar de mayor a menor por la propiedad de edad usaremos el método de sort(); donde si el elemento "a" por su valor de propiedad edad "a.edad" es mayor que el elemento "b" por su valor de propiedad edad "b.edad" entonces deberá ir primero retornando -1 y si es menor deberá ir despues retornando 1.

<table><tbody><tr><td><pre><code class="language-javascript">const usrsEdad = usrsBay.sort((a, b) =&gt; {
    if (a.edad &gt; b.edad) { return -1 };
    if (a.edad &lt; b.edad) { return 1 };
    return 0;
});
console.log('2- Usuarios de Mayor a menor:');
console.log(usrsBay);</code></pre></td><td><p>2- Usuarios de Mayor a menor:</p><ol><li><i>(5)&nbsp;[{…}, {…}, {…}, {…}, {…}]</i><ol><li><strong>0</strong>: {edad: 42, nombre: 'Pedro', plan: 'premium'}</li><li><strong>1</strong>: {edad: 25, nombre: 'Jose', plan: 'gold'}</li><li><strong>2</strong>: {edad: 23, nombre: 'Felipe', plan: 'gold'}</li><li><strong>3</strong>: {edad: 17, nombre: 'Nico', plan: 'premium'}</li><li><strong>4</strong>: {edad: 13, nombre: 'Chanchito', plan: 'premium'}</li></ol></li></ol></td></tr></tbody></table>

Para el _**tercer punto**_ que tenemos que devolver el nombre del usuario como otro arreglo podemos usar reduce()  o hacer un mapeo con .map() Vamos a usar .reduce() para luego usar el .map() en la lista de HTML. Para agregar debemos usar el método de .push() y para ello debemos definir inicialmente al acumuladro como un arreglo vacio \[\] y no como un objeto {}.

<table><tbody><tr><td><pre><code class="language-javascript">const usrsBayName = usrsEdad.reduce((acc, el) =&gt; {
    acc.push(el.nombre);
    return acc;
}, []);
console.log('3- Nombres de usuarios:');
console.log(usrsBayName);</code></pre></td><td><p>3- Nombres de usuarios:</p><p>['Pedro', 'Jose', 'Felipe', 'Nico', 'Chanchito']</p></td></tr></tbody></table>

Para el _**cuarto punto**_ deberemos utilizar el método de map() para mapear un arreglo con una lista de HTML que se pueda devolver al DOM.

<table><tbody><tr><td><pre><code class="language-javascript">const usrsBayHTML = usrsBayName
    .map((arr) =&gt;{
    return `&lt;li&gt;${arr}&lt;/li&gt;`;
    });
console.log('4- Lista de usuarios:');
console.log(usrsBayHTML);</code></pre></td><td><p>4- Lista de usuarios:</p><ol><li><i>(5)&nbsp;['&lt;li&gt;Pedro&lt;/li&gt;', '&lt;li&gt;Jose&lt;/li&gt;', '&lt;li&gt;Felipe&lt;/li&gt;', '&lt;li&gt;Nico&lt;/li&gt;', '&lt;li&gt;Chanchito&lt;/li&gt;']</i><ol><li><strong>0</strong>: "&lt;li&gt;Pedro&lt;/li&gt;"</li><li><strong>1</strong>: "&lt;li&gt;Jose&lt;/li&gt;"</li><li><strong>2</strong>: "&lt;li&gt;Felipe&lt;/li&gt;"</li><li><strong>3</strong>: "&lt;li&gt;Nico&lt;/li&gt;"</li><li><strong>4</strong>: "&lt;li&gt;Chanchito&lt;/li&gt;"</li></ol></li></ol></td></tr></tbody></table>

Finalmente el _**quinto punto**_ será formatear con el método .join('') un código de HTML que se envie el DOM sin ser un arreglo.

<table><tbody><tr><td><pre><code class="language-javascript">const usrsHtmlName = `
&lt;ul&gt;
    ${usrsArrayHTML.join(`
    `)}
&lt;/ul&gt;`;
console.log('5- Lista HTML:');
console.log(usrsHtmlName);
console.log(' ');</code></pre></td><td>5- Lista HTML:<br>&lt;ul&gt;<br>&nbsp; &nbsp;&lt;li&gt;Pedro&lt;/li&gt;<br>&nbsp; &nbsp;&lt;li&gt;Jose&lt;/li&gt;<br>&nbsp; &nbsp;&lt;li&gt;Felipe&lt;/li&gt;<br>&nbsp; &nbsp;&lt;li&gt;Nico&lt;/li&gt;<br>&nbsp; &nbsp;&lt;li&gt;Chanchito&lt;/li&gt;<br>&lt;/ul&gt;</td></tr></tbody></table>

Vemos que formatemamos la lista con los templates y para que haga el salto de líne entre cada elemento de la lista usamos los templates y entre ellos apretamos el Enter para el salto de linea. También en una línea empieza el \<ul> y tabulado la lista con el .join(\`Enter\`).

### Solución Curso

Siguio la misma lógica pero en el .filter() utilizo el valor negativo es decir el que no cumple con la condición contraria se toma (todos los que son distintos a free).

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Solución CURSO');
// Ususarios pagos
const pagos = usuarios.filter(u =&gt; u.plan !== 'free')
// Ordenar pagos
pagos.sort((a, b) =&gt; {
    if (a.edad &lt; b.edad) {
        return 1;
    };
    if (a.edad &gt; b.edad) {
        return -1;
    };
    return 0;
});
// Lista no ordenada
const lista = pagos.map(u =&gt; `&lt;li&gt;${u.nombre}&lt;/li&gt;`);
// Lista HTML formateada
const html = `
&lt;ul&gt;
    ${lista.join(`
    `)}
&lt;/ul&gt;
`;
console.log(html);</code></pre></td><td><pre><code class="language-">Solución CURSO
&lt;ul&gt;
   &lt;li&gt;Pedro&lt;/li&gt;
   &lt;li&gt;Jose&lt;/li&gt;
   &lt;li&gt;Felipe&lt;/li&gt;
   &lt;li&gt;Nico&lt;/li&gt;
   &lt;li&gt;Chanchito&lt;/li&gt;
&lt;/ul&gt;</code></pre></td></tr></tbody></table>

También fue reduciendo la cantidad de declaraciones de varaibles o constantes para luego poder envolver todo esto en una función.

### Función - Reutilizar

Con el concepto de reutilizar código podemos trabajar estos pasos para convertirlos en una funcion que reciba el arreglo y devuelva la lista. Usando variables tipo "let" para que sean internas de la función y eliminando los comentarios.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Función Filtrar Pagos');
function listarPagosOrder(u){
    let p = u.filter(u =&gt; u.plan !== 'free')
    p.sort((a, b) =&gt; {
        if (a.edad &lt; b.edad) {
            return 1;
        };
        if (a.edad &gt; b.edad) {
            return -1;
        };
        return 0;
    });
    let l = p.map(u =&gt; `&lt;li&gt;${u.nombre}&lt;/li&gt;`);
    let h = `
    &lt;ul&gt;
        ${l.join(`
        `)}
    &lt;/ul&gt;
    `;
    return h;
};
const listaFunction = listarPagosOrder(usuarios);
console.log(listaFunction);</code></pre></td><td>Función Filtrar Pagos<br>&nbsp; &nbsp;&lt;ul&gt;<br>&nbsp; &nbsp; &nbsp; &nbsp;&lt;li&gt;Pedro&lt;/li&gt;<br>&nbsp; &nbsp; &nbsp; &nbsp;&lt;li&gt;Jose&lt;/li&gt;<br>&nbsp; &nbsp; &nbsp; &nbsp;&lt;li&gt;Felipe&lt;/li&gt;<br>&nbsp; &nbsp; &nbsp; &nbsp;&lt;li&gt;Nico&lt;/li&gt;<br>&nbsp; &nbsp; &nbsp; &nbsp;&lt;li&gt;Chanchito&lt;/li&gt;<br>&nbsp; &nbsp;&lt;/ul&gt;</td></tr></tbody></table>

## Ejercicio 09 - Distintas bases

Podemos tener o consumir recuersos de bases de datos de distintos lugars con las mismas propiedades pero con nombres en distinto idioma por lo que debemos unificar en un arreglo listas de usuarios con variaciones en los nombres de las propiedades.

```javascript
const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "premium" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 23, nombre: "Felipe", plan: "gold" },
];
const users = [
  { ege: 25, name: "Joshep", membership: "gold" },
  { ege: 26, name: "Martin", membership: "free" },
  { ege: 40, name: "Jhon", membership: "free" },
  { ege: 42, name: "Peter", membership: "premium" },
];
```

Por lo que tenemos que hacer es tomar uno de los arreglos y cambiar su extructura para qeu sea igual a la del otro.

- Unificar las estructuras para que sean iguales
- Fusionar los arreglos
- Ordenar por edad
- Crear plantilla HTML con \<li>Nombre: name, Edad: age>/li>
- Imprimir lista en consola

### Solución Propia

Par el _**primer punto**_ vamos a cambiar la estructura de usuarios\[\] para que sea igual a la de user\[\] siendo más global en ingles. Para ello usamo el map(); donde por cada usuario le asignaremos el valor de la propiedad en español a la propiedad equivalente en ingles.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Solución PROPIA');
const usuariosEn = usuarios.map( u =&gt; {
    return {
        age : u.edad,
        name : u.nombre,
        membership : u.plan,
    };
});
console.log(usuariosEn);</code></pre></td><td><p>Solución PROPIA</p><ol><li><i>(4)&nbsp;[{…}, {…}, {…}, {…}]</i><ol><li><strong>0</strong>: {age: 17, name: 'Nico', membership: 'premium'}</li><li><strong>1</strong>: {age: 13, name: 'Chanchito', membership: 'premium'}</li><li><strong>2</strong>: {age: 32, name: 'Fernanda', membership: 'free'}</li><li><strong>3</strong>: {age: 23, name: 'Felipe', membership: 'gold'}</li></ol></li></ol></td></tr></tbody></table>

En el _**segundo punto**_ vamos a fucionar agregando al arreglo de users\[\], los valores del nuevo arreglo. Para ello usamos .concat()

<table><tbody><tr><td><pre><code class="language-javascript">const usrsConcat = users.concat(usuariosEn);
console.log('Arreglo completo');
console.log(usrsConcat);</code></pre></td><td><p>Arreglo completo</p><ol><li><i>(8)&nbsp;[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]</i><ol><li><strong>0</strong>: {age: 25, name: 'Joshep', membership: 'gold'}</li><li><strong>1</strong>: {age: 26, name: 'Martin', membership: 'free'}</li><li><strong>2</strong>: {age: 40, name: 'Jhon', membership: 'free'}</li><li><strong>3</strong>: {age: 42, name: 'Peter', membership: 'premium'}</li><li><strong>4</strong>: {age: 17, name: 'Nico', membership: 'premium'}</li><li><strong>5</strong>: {age: 13, name: 'Chanchito', membership: 'premium'}</li><li><strong>6</strong>: {age: 32, name: 'Fernanda', membership: 'free'}</li><li><strong>7</strong>: {age: 23, name: 'Felipe', membership: 'gold'}</li></ol></li></ol></td></tr></tbody></table>

Quedando un solo arreglo con todos los ususarios formateados con las mismas propiedades.

Para el _**tercer punto**_ debemos ordenarlos por edad de mayor a menor. Para ello usamos .sort().

<table><tbody><tr><td><pre><code class="language-javascript">const usrsMayMin = usrsConcat.sort((a, b) =&gt; {
    if (a.age &gt; b.age) { return -1};
    if (a.age &lt; b.age) { return 1};
    return 0;
});
console.log('Arreglo ordenado por edad');
console.log(usrsMayMin);</code></pre></td><td><p>Arreglo ordenado por edad</p><ol><li><i>(8)&nbsp;[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]</i><ol><li><strong>0</strong>: {age: 42, name: 'Peter', membership: 'premium'}</li><li><strong>1</strong>: {age: 40, name: 'Jhon', membership: 'free'}</li><li><strong>2</strong>: {age: 32, name: 'Fernanda', membership: 'free'}</li><li><strong>3</strong>: {age: 26, name: 'Martin', membership: 'free'}</li><li><strong>4</strong>: {age: 25, name: 'Joshep', membership: 'gold'}</li><li><strong>5</strong>: {age: 23, name: 'Felipe', membership: 'gold'}</li><li><strong>6</strong>: {age: 17, name: 'Nico', membership: 'premium'}</li><li><strong>7</strong>: {age: 13, name: 'Chanchito', membership: 'premium'}</li></ol></li></ol></td></tr></tbody></table>

Para el _**cuarto punto**_ debemos crear una plantilla de HTML listando el nombre y la edad de cada usuario. Para ello usamos .map()

<table><tbody><tr><td><pre><code class="language-javascript">const usrsLista = usrsMayMin.map(u =&gt; {
    return `&lt;li&gt; Nombre: ${u.name}, Edad: ${u.age} &lt;/li`
});
console.log('Arreglo &lt;li&gt;Nombre Edad&lt;/li&gt;');
console.log(usrsLista);</code></pre></td><td><pre><code class="language-">Arreglo &lt;li&gt;Nombre Edad&lt;/li&gt;:
(8)&nbsp;['&lt;li&gt; Nombre: Peter, Edad: 42 &lt;/li',
'&lt;li&gt; Nombre: Jhon, Edad: 40 &lt;/li', 
'&lt;li&gt; Nombre: Fernanda, Edad: 32 &lt;/li', 
'&lt;li&gt; Nombre: Martin, Edad: 26 &lt;/li', 
'&lt;li&gt; Nombre: Joshep, Edad: 25 &lt;/li', 
'&lt;li&gt; Nombre: Felipe, Edad: 23 &lt;/li', 
'&lt;li&gt; Nombre: Nico, Edad: 17 &lt;/li', 
'&lt;li&gt; Nombre: Chanchito, Edad: 13 &lt;/li']</code></pre></td></tr></tbody></table>

En el quinto punto debemos transforma el arreglo de las listas en una formato de HTML listo para incrustar en el DOM. Para ello usaremos el .join() donde agregaremos el \<ul>\</ul> con el salto de linea que habiamos visto antes.

<table><tbody><tr><td><pre><code class="language-javascript">const html = `
&lt;ul&gt;
    ${usrsLista.join(`
    `)}
&lt;/ul&gt;
`;
console.log('Lista HTML para DOM');
console.log(html);</code></pre></td><td><pre><code class="language-">Lista HTML para DOM
&lt;ul&gt;
   &lt;li&gt; Nombre: Peter, Edad: 42 &lt;/li
   &lt;li&gt; Nombre: Jhon, Edad: 40 &lt;/li
   &lt;li&gt; Nombre: Fernanda, Edad: 32 &lt;/li
   &lt;li&gt; Nombre: Martin, Edad: 26 &lt;/li
   &lt;li&gt; Nombre: Joshep, Edad: 25 &lt;/li
   &lt;li&gt; Nombre: Felipe, Edad: 23 &lt;/li
   &lt;li&gt; Nombre: Nico, Edad: 17 &lt;/li
   &lt;li&gt; Nombre: Chanchito, Edad: 13 &lt;/li
&lt;/ul&gt;</code></pre></td></tr></tbody></table>

### Función - Reutilizar

Para transformar tdos estos paso en una función podemos concatenar los métodos en una funcion que reciba dos parametros, el arreglo en español primero y luego en ingles. Tambien reducimos los nombres de las variables y cambiamos a tipo "let" para que sean internas.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Funcion PROPIA');
function usersEn(es, en) {
    let uEn = es.map(u =&gt; {
        return {
            age: u.edad,
            name: u.nombre,
            membership: u.plan,
        };
    });
    let l = en
        .concat(uEn)
        .sort((a, b) =&gt; {
            if (a.age &gt; b.age) { return -1 };
            if (a.age &lt; b.age) { return 1 };
            return 0;
        })
        .map(u =&gt; {
            return `&lt;li&gt; Nombre: ${u.name}, Edad: ${u.age} &lt;/li`
        });
    let h = `
    &lt;ul&gt;
        ${l.join(`
        `)}
    &lt;/ul&gt;
    `;
    return h;
};</code></pre></td><td>Funcion PROPIA<br>Usuarios:<br>&nbsp; &nbsp;&lt;ul&gt;<br>&nbsp; &nbsp; &nbsp; &nbsp;&lt;li&gt; Nombre: Peter, Edad: 42 &lt;/li<br>&nbsp; &nbsp; &nbsp; &nbsp;&lt;li&gt; Nombre: Jhon, Edad: 40 &lt;/li<br>&nbsp; &nbsp; &nbsp; &nbsp;&lt;li&gt; Nombre: Fernanda, Edad: 32 &lt;/li<br>&nbsp; &nbsp; &nbsp; &nbsp;&lt;li&gt; Nombre: Martin, Edad: 26 &lt;/li<br>&nbsp; &nbsp; &nbsp; &nbsp;&lt;li&gt; Nombre: Joshep, Edad: 25 &lt;/li<br>&nbsp; &nbsp; &nbsp; &nbsp;&lt;li&gt; Nombre: Felipe, Edad: 23 &lt;/li<br>&nbsp; &nbsp; &nbsp; &nbsp;&lt;li&gt; Nombre: Nico, Edad: 17 &lt;/li<br>&nbsp; &nbsp; &nbsp; &nbsp;&lt;li&gt; Nombre: Chanchito, Edad: 13 &lt;/li<br>&nbsp; &nbsp;&lt;/ul&gt;</td></tr></tbody></table>

### Solución Curso

La lógica sigue siendo la misma pero la sintaxis es más eficiente tratando de usar menos líneas.

<table><tbody><tr><td><pre><code class="language-javascript">const todos = [...usuarios, ...usersEspanol];
// Ordenar
todos.sort((a, b) =&gt; {
    if (a.edad &gt; b.edad){ return -1};
    if (a.edad &lt; b.edad){ return 1};
    return 0;
});
// Lista
const lista = todos.map( u =&gt;
    `&lt;li&gt;Nombre: ${u.nombre}, Edad: ${u.edad}&lt;/li&gt;`
);
// HTML
const listaHtml = `
&lt;ul&gt;
    ${lista.join(`
    `)}
&lt;/ul&gt;
`;
console.log(listaHtml);</code></pre></td><td>Solución CURSO<br>&lt;ul&gt;<br>&nbsp; &nbsp;&lt;li&gt;Nombre: Peter, Edad: 42&lt;/li&gt;<br>&nbsp; &nbsp;&lt;li&gt;Nombre: Jhon, Edad: 40&lt;/li&gt;<br>&nbsp; &nbsp;&lt;li&gt;Nombre: Fernanda, Edad: 32&lt;/li&gt;<br>&nbsp; &nbsp;&lt;li&gt;Nombre: Martin, Edad: 26&lt;/li&gt;<br>&nbsp; &nbsp;&lt;li&gt;Nombre: Joshep, Edad: 25&lt;/li&gt;<br>&nbsp; &nbsp;&lt;li&gt;Nombre: Felipe, Edad: 23&lt;/li&gt;<br>&nbsp; &nbsp;&lt;li&gt;Nombre: Nico, Edad: 17&lt;/li&gt;<br>&nbsp; &nbsp;&lt;li&gt;Nombre: Chanchito, Edad: 13&lt;/li&gt;<br>&lt;/ul&gt;</td></tr></tbody></table>

En vez de usar .concat() para acoplar los arreglos, directamente usa los tres puntos \[ ...usuarios, ...esersEspanol\];
