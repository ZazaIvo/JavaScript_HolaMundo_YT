# Ejercicios hasta Control de Flujo

## Ejercicio 01

Crear una función que compare dos números y nos indique luego en un llamado cual es mayor. Para ello creamos la función "cualeEsMayor()"

```javascript
function cualEsMayor(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    console.log("Son iguales");
  }
}
```

Donde ponemos las condiciones que retorne el mayor y si no se cumplen la primera o segunda condición es porque son iguales.

Creamos el llamado con la cariable "mayor" y pasamos los argumentos.

<table><tbody><tr><td><pre><code class="language-javascript">function cualEsMayor(a,b){
    if (a &gt; b) {
        return a;
    } else if (b &gt; a) {
        return b;
    } else {
        console.log('Son iguales');
    };
}; 
let mayor = cualEsMayor(10,5);
console.log('El número mayor es:',mayor);</code></pre></td><td><p>Por consola para 10 y 5:</p><pre><code class="language-">El número mayor es: 10</code></pre></td></tr></tbody></table>

## Ejercicio 02

Vamos a crear una función que nos identifique el nombre de la resolución que estamos indicando. Con dos parametros el ancho y el alto en pixeles.

Primero colocamos los nombres según la calidad o tamaño para tener de guia.  Para analizar en que resolucion se encuentra, debe cumplir dos condiciones. Por lo que estaremos usando en operador lógico and "&&" resolviendo con condicional "if" agregando "else if"

<table><tbody><tr><td><pre><code class="language-javascript">let ancho;
let alto;
let resol;
function nombreResolucion (a, h){
    if (a &gt;= 7680 &amp;&amp; h &gt;= 4320){
        return '8K';
    } else if (a &gt;= 3840 &amp;&amp; h &gt;= 2130) {
        return '4K';
    } else if (a &gt;= 1920 &amp;&amp; h &gt;= 1080) {
        return 'FHD';
    } else if (a &gt;= 1280 &amp;&amp; h &gt;= 720) {
        return 'HD';
    };
};
ancho = 7680;
alto = 4320;
resol = nombreResolucion(ancho,alto);
console.log('Para', ancho, 'x', alto);
console.log('La resolución es: ',resol);</code></pre></td><td><p>Por consola:</p><pre><code class="language-">Para 7680 x 4320
La resolución es:  8K</code></pre></td></tr></tbody></table>

Para usar Switch la condición es que retorne un valor cuando la evaluación del rango sea true. Por ello podemos hacerlo de la siguiente manera:

<table><tbody><tr><td><pre><code class="language-javascript">function nombreResolucionSwitch(a, h) {
    switch (true) {
        case (a &gt;= 7680 &amp;&amp; h &gt;= 4320):
            return '8K';
            break;
        case (a &gt;= 3840 &amp;&amp; h &gt;= 2130):
            return '4K';
            break;
        case (a &gt;= 1920 &amp;&amp; h &gt;= 1080):
            return 'FHD';
            break;
        case (a &gt;= 1280 &amp;&amp; h &gt;= 720):
            return 'HD';
            break;
        default :
        return 'Error';
    };
};
resol = nombreResolucionSwitch (ancho, alto);
console.log('Método Switch');
console.log('Para', ancho, 'x', alto);
console.log('La resolución es: ', resol);</code></pre></td><td><p>Por consola:</p><pre><code class="language-">Método Switch
Para 7680 x 4320
La resolución es:  8K</code></pre></td></tr></tbody></table>

Podemos llegar a lo mismo. Tener en cuenta como importante que los rangos evalúan una condición booleana; por lo que en el switch(condicion) debe ser el resultado booleano que queremos.

## Ejercicio 03

Construir una función que nos devuelva un elemento por su indice, pero debe existir el elemento y el indice no puede ser menor que 0.  Tendremos un arreglo con varios elementos contenidos. Luego haremos la función que tendrá como parámetro.

```javascript
// Arreglo
let arr = [1, 2, 3];
```

La función:

```javascript
function getByIdx(arr, idx) {
  if (idx < 0 || arr.length <= idx) {
    return "Elemento no existe";
  }
  return arr[idx];
}
```

Donde verificamos dos condiciones para avisar que no existe, una que el indice "idx" sea mayor o igual que 0 y que la cantidad de elementos tienen que ser más que el indice, por ejemplo para el indice 0 debe ser por lo menos arr.length = 1. Si no cumple cualqueira de estas dos limitaciones pasa a retornar el valor para el indice seleccionado "arr\[idx\];"

<table><tbody><tr><td><pre><code class="language-javascript">idx = 0;
let resultado = getByIdx(arr,idx);
console.log('El elemento para',idx,'es',resultado);</code></pre></td><td><pre><code class="language-">El elemento para 0 es 1</code></pre></td></tr></tbody></table>

Comporbamos para menor que 0:

<table><tbody><tr><td><pre><code class="language-javascript">function getByIdx(arr, idx) {
    if (idx &lt; 0 || arr.length &lt;= idx) {
        return 'Elemento no existe';
    };
    return arr[idx];
};
idx = -1;
let resultado = getByIdx(arr,idx);
console.log('El elemento para',idx,'es',resultado);</code></pre></td><td><pre><code class="language-">El elemento para -1 es Elemento no existe</code></pre></td></tr></tbody></table>

Comprobamos indice mayor que la cantidad de elementos:

<table><tbody><tr><td><pre><code class="language-javascript">idx = 5;
let resultado = getByIdx(arr,idx);
console.log('El elemento para',idx,'es',resultado);</code></pre></td><td><pre><code class="language-">El elemento para 5 es Elemento no existe</code></pre></td></tr></tbody></table>

## Ejercicio 04

Imprimir los valores impares desde el 0 al 10. Utilizando un loop while.

<table><tbody><tr><td><pre><code class="language-javascript">let x;
let i = 0;
function numberImpar(x) {
    while (i &lt;= x) {
        if ((i % 2) !== 0) {
            console.log('impar', i);
        };
        i++;
    }
};
x = 10;
let impares = numberImpar (x);</code></pre></td><td><pre><code class="language-">impar 1
impar 3
impar 5
impar 7
impar 9</code></pre></td></tr></tbody></table>

## Ejercicio 05 - Prueba Técnica

Vamos a buscar el número mayor y el número nemor de un arreglo de números. Estamos buscando dos elementos, entonces tendremos dos variables. Una variable busca al mayor y la otra buscar al menor "let mayor" y "let menor". Pero queremos que empiecen con el valor del primer elemento del arreglo:

```javascript
let menor = arr[0]; // Primer valor
let mayor = arr[0]; // Primer valor
```

Luego tenemos que iterar el arreglo para comparar el valor de las variables. Por ello usamos "for-of" para recorrer los valores de los elementos. La lógica que vamos a usar con el operador ternario, realizando una camparación booleana, luego si extiste un resultado verdadero "true" realiza la primer expresión; pero si es "false" realiza la expresión siguiente a los dos puntos ":"

```javascript
var = condicion(true/false) ? (valor en true) : (valor en false);
```

Quedando para el ejercicio:

```javascript
for (num of arr) {
  menor = menor <= num ? menor : num;
}
```

Entonces "menor" vale inicialmente arr\[0\] y se compara con el valor del primer incice, donde si es menor o igual asigna el valor que tenía. Si no es menor, entonces toma el valor del indice con el que se está comparando "num". Esto lo realizará por todo el arreglo. Para mayor seguimos la misma lógica. Finalmente luego que termine de pasar el el arreglo y queden asignados los valores de menor y mayor; los retornamos como un arreglo:

```javascript
// Función
function getMayorMenor(arr) {
  let menor = arr[0]; // Primer valor
  let mayor = arr[0]; // Primer valor
  for (num of arr) {
    menor = menor <= num ? menor : num;
    mayor = mayor >= num ? mayor : num;
  }
  return [menor, mayor];
}
```

Vamos a llamar la función pasando los valores para el arreglo array1

<table><tbody><tr><td><pre><code class="language-javascript">// Arreglo
let array1 = [2,5,7,15,-5,-100,55];
let extremo = getMayorMenor(array1);
console.log(extremo);</code></pre></td><td><pre><code class="language-">[ -100, 55 ]</code></pre></td></tr></tbody></table>

Pasamos ahora el arreglo array2:

<table><tbody><tr><td><pre><code class="language-javascript">let array2 = [7,25,6,12,-5,-101,46];
let extremo = getMayorMenor(array2);
console.log(extremo);</code></pre></td><td><pre><code class="language-">[ -101, 46 ]</code></pre></td></tr></tbody></table>

## Ejercicio 06

En este ejercicio vamos a buscar la cantidad de número negativos o positivos en un arreglo. Tomaremos los arreglos del ejercicio anterior.

// Arreglo

```javascript
let array1 = [2, 5, 7, 15, -5, -100, 55];
let array2 = [7, 25, -6, 12, -5, -101, 46];
```

Para la función de conteo usaremos una variable interna de conteo "cantPos" que irá contando los números positivos. Deberemos iterar el arreglo que tenga como parámetro obteniendo el valor de elemento, para ello usamos el "for-of". Dentro del "for-of" debo preguntar si el valor es mayor que cero y de ser true la respuesta, debe sumar una unidad al contador "cantPos". Finalmente cuando termine la iteración me debe retornar el valor de "cantPos".

<table><tbody><tr><td><pre><code class="language-javascript">function cuantosPosit(arr) {
    let cantPos = 0;
    for (let num of arr) {
        if (num &gt; 0) {
            cantPos++;
        };
    };
    return cantPos;
};
resultado = cuantosPosit(array1);
console.log('Cantidad de números positivos arreglo 1', resultado);
resultado = cuantosPosit(array2);
console.log('Cantidad de números positivos arreglo 2', resultado);</code></pre></td><td><pre><code class="language-">Cantidad de números positivos arreglo 1: 5
Cantidad de números positivos arreglo 2: 4</code></pre></td></tr></tbody></table>

## Ejercicio 07

Vamos a crear una calculadora de impuestos, que devuelva el precio del producto más el impuesto. Por lo que tendremos tres variables el precio, el impuesto y el resultado.

```javascript
// Variables
let precio;
let impuesto;
let valor;
```

Debemos incrementar el precio en el porcentaje del impuesto. Y asignarlo al valor final.

<table><tbody><tr><td><pre><code class="language-javascript">// Variables
let precio;
let impuesto;
let valor;
//Función impuesto
function valorImp(precio, impuesto) {
    valor = precio * (1 + impuesto);
    return valor;
};
valor = valorImp(10, 0.15)
console.log('El valor con impuesto para', precio,'es:',valor);</code></pre></td><td><pre><code class="language-">El valor con impuesto para undefined es: 11.5</code></pre></td></tr></tbody></table>

## Ejercicio 08 (for-of)

Este tipo de ejercicio se utiliza mucho en la realidad. Lo que hace es crear un arreglo de objetos o arreglos. Donde asigna un indice y el objeto o arreglo. Es muy útil ya que se utiliza para registro de ususarios.

Creamos un arreglo con 3 objetos que tienen dos propiedades el id y el nombre cada uno.

```javascript
let array = [
  {
    id: 1,
    name: "Nicolas",
  },
  {
    id: 2,
    name: "Felipe",
  },
  {
    id: 3,
    name: "Chanchito",
  },
];
```

Crearemos la función para crear un arreglo de arreglos, los arreglos serán de dos partes una que es el número identificatorio primero y luego el objeto. Quedando como resultado final:

```javascript
let pares = [
  [1, { id: 1, name: "Nicolas" }],
  [2, { id: 2, name: "Felipe" }],
  [3, { id: 3, name: "Chanchito" }],
];
```

Pasamos de un Objeto JSON a un arreglo, por eso es tan utilizado ya que las consultas a los servidores Express con MongoDB devuelve el controlador un JSON.

La lógica que usaremos será con un for-of que recorra el arreglo que le pasamos por parámetro y que agregue un nuevo elemento al arreglo de pares. Debemos inicializar al arreglo pares como vacio "let pares = \[\];" para que entienda que puede agregar el elemento a la variable.

```javascript
let array1 = [
  { id: 1, name: "Nicolas" },
  { id: 2, name: "Felipe" },
  { id: 3, name: "Chanchito" },
];
let pares = [];
```

Para ir agregando elementos podemos igualar el indice con un contador "i" que se incremente con cada iteración empezando por el valor de indice 0. Definimos una variable "obj" que tomará el valor de cada objeto en la iteración de "arr"

```javascript
function toPairs(arr) {
  let i = 0;
  for (let obj of arr) {
    i++;
  }
}
```

Ahora para agregar un nuevo elemento al arreglo podemos usar la asignación por igualdad o el push(). Con la igualdad nos aseguramos que reescriba o agrege el elemento por indice, con push() agregará al final de lo que ya existe, pudiendo duplicar valores si ya tenía un valor previo.

<table><tbody><tr><td><pre><code class="language-javascript">function toPairs(arr) {
    let i = 0;
    for (let obj of arr) {
        pares[i] = [i + 1, obj];
        i++;
    };
    return pares;
};
pares = toPairs(array1);
console.log(pares);</code></pre></td><td><pre><code class="language-">[
  [ 1, { id: 1, name: 'Nicolas' } ],
  [ 2, { id: 2, name: 'Felipe' } ],
  [ 3, { id: 3, name: 'Chanchito' } ]
]</code></pre></td></tr></tbody></table>

Si tenemos un arreglo con id desordenados, _**nos dará un nuevo arreglo de pares que no respeta los id**_, sino que asigna nuevos segun el orden:

<table><tbody><tr><td><pre><code class="language-javascript">let array2 = [
    { id: 20, name: 'Ivan' },
    { id: 3, name: 'Pedro' },
    { id: 105, name: 'Yamila' },
    { id: 11, name: 'Juan' }
];
let resultado;
function toPairs(arr) {
    let i = 0;
    let pares = [];
    for (let obj of arr) {
        pares[i] = [i + 1, obj];
        i++;
    };
    return pares;
};
console.log('Para arreglo 2:');
resultado = toPairs(array2);
console.log(resultado);</code></pre></td><td><pre><code class="language-">Para arreglo 2:
[
  [ 1, { id: 20, name: 'Ivan' } ],
  [ 2, { id: 3, name: 'Pedro' } ],
  [ 3, { id: 105, name: 'Yamila' } ],
  [ 4, { id: 11, name: 'Juan' } ]
]</code></pre></td></tr></tbody></table>

Los nuevos id van de acuerdo a la cantidad empezando por el 1 hasta 4 sin considerar el id como propiedad de los objetos del arreglo original. Esto puede ser útil en una ApiRest que nos ensamble una base de datos con una Api que tiene otro tipo de configuración de id's para los datos.

## Ejercicio 08 (for-in) Más Usado

Vamos a utilizar el loop "for-in" para que respete los id que ya tiene cada objeto dentro del arreglo de objetos. Este es otro tipo de requerimientos más utilizados ya que permite llamar luego a cada objeto por el id ya conocido con el que se envía de la base de datos.

Creamos la función nueva para respetar el id "toPairsId()" que tendrá como parametro un arreglo que le pasemos y denomina como "arr". Luego definiremos una arreglo que se irá construyendo inicialmente vacio "let pares = \[\];" y retornará este arreglo nuevo.

```javascript
// Respetando el ID con "for-in"
function toPairsId(arr) {
  let pares = [];
  return pares;
}
```

Usaremos el "for-in" que primero asignará el lvalor del indice que va a iterar a la varaible "idx" en el arreglo "arr" siendo "for (idx in arr){};". Dentro del for queremos que cree por cada vez un arreglo que tendrá dos elementos, uno el "id" que ya existe y el otro el objeto completo. Entonces es primero una propiedad del objeto (elemento.id) y luego el objeto completo (elemento). Por ello creamos una variable interna del "for-in" que irá asigando cada arreglo u objeto a ella según el indice por el que esté pasando "idx"

```javascript
function toPairsId(arr) {
  let pares = [];
  for (idx in arr) {
    let elemento = arr[idx];
  }
  return pares;
}
```

Ahora agregaremos al arreglo "pares" los datos en el fomato que queremos "`[elemento.id,elemento]`":

```javascript
// Respetando el ID con "for-in"
function toPairsId(arr) {
  let pares = [];
  for (idx in arr) {
    let elemento = arr[idx];
    pares[idx] = [elemento.id, elemento];
  }
  return pares;
}
```

Vemos como nos devuelve el nuevo arreglo con los id´s según fueron asigandos en el arreglo original.

<table><tbody><tr><td><pre><code class="language-javascript">// Respetando el ID con "for-in"
function toPairsId(arr){
    let pares = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pares[idx] = [elemento.id,elemento];
    };
    return pares;
};
console.log('Para arreglo 1:');
resultado = toPairsId(array1);
console.log(resultado);
console.log('Para arreglo 2:');
resultado = toPairsId(array2);
console.log(resultado);</code></pre></td><td><pre><code class="language-">Para arreglo 1 "for-in":
[
  [ 1, { id: 1, name: 'Nicolas' } ],
  [ 2, { id: 2, name: 'Felipe' } ],
  [ 3, { id: 3, name: 'Chanchito' } ]
]
Para arreglo 2 "for-in":
[
  [ 20, { id: 20, name: 'Ivan' } ],
  [ 3, { id: 3, name: 'Pedro' } ],
  [ 105, { id: 105, name: 'Yamila' } ],
  [ 11, { id: 11, name: 'Juan' } ]
]</code></pre></td></tr></tbody></table>

Para la salida del arreglo 2 "array2" nos respetó el id original.

## Ejercio 09

Vamos a crear un arreglo de objetos a partir de un arreglo de pares que tengamos para por ejemplo poder enviar al servidor. Por lo que partimos de los dos arreglos pares del ejercicio anterior. Pero no contiene un "id" por lo que en base al número que tiene asignado debemos crear la propiedad "id : numero"

<table><tbody><tr><td><pre><code class="language-javascript">let arrPar1 = [
    [ 1, { name: 'Nicolas' } ],
    [ 2, { name: 'Felipe' } ],
    [ 3, { name: 'Chanchito' } ]
  ];</code></pre></td><td><pre><code class="language-javascript">let arrPar2 = [
    [ 20, { name: 'Ivan' } ],
    [ 3, { name: 'Pedro' } ],
    [ 105, { name: 'Yamila' } ],
    [ 11, { name: 'Juan' } ]
  ];</code></pre></td></tr></tbody></table>

Vamos necesitar volver a armar un arreglo de objetos con dos propiedades que son el "id" y "name" y usaremos el loop de "for-in". Las variables que contienen los valores de las propiedades serán internas de la función tipo let. En cada iteración iremos agregando a nuestro nuevo arreglo cada elemento, para ello usaremos una variable tipo arreglo interna a la función "let arreglo = \[\];" inicalmente vacia.

```javascript
function toCollection(arr) {
  let arreglo = [];
  let id;
  let name;
  return arreglo;
}
```

La función debe recibir por lo menos el parametro de arreglo que contenga en primer lugar el número que será el "id" y luego el "name", esta será "arr". El loop "for-in" tendrá una variable que será cada indice de "arr" llamada por convención "idx"

```javascript
for (idx in arr) {
}
```

Para cada indice correspondiente "idx" obtendremos el id que es el primer valor siendo "id = arr\[idx\]\[0\];" y el nombre de igual manera será para el segundo indice que es el 1 siendo "name = arr\[idx\].name;" Finalmente con los valores definidos agregaremos un elemento al nuevo objeto:

```javascript
function toCollection(arr) {
  let arreglo = [];
  let id;
  let name;
  for (idx in arr) {
    id = arr[idx][0];
    name = arr[idx][1].name;
    arreglo[idx] = { id, name };
  }
  return arreglo;
}
```

Realizamos las llamadas a la función pasando los dos casos:

<table><tbody><tr><td><pre><code class="language-javascript">let resultado;
function toCollection(arr) {
    let arreglo = [];
    let id;
    let name;
    for (idx in arr) {
        id = arr[idx][0];
        name = arr[idx][1].name;
        arreglo[idx] = { id, name };
    };
    return arreglo;
};
resultado = toCollection(arrPar1);
console.log(resultado);
resultado = toCollection(arrPar2);
console.log(resultado);</code></pre></td><td><pre><code class="language-">[
  { id: 1, name: 'Nicolas' },
  { id: 2, name: 'Felipe' },
  { id: 3, name: 'Chanchito' }
]
[
  { id: 20, name: 'Ivan' },
  { id: 3, name: 'Pedro' },
  { id: 105, name: 'Yamila' },
  { id: 11, name: 'Juan' }
]</code></pre></td></tr></tbody></table>

## Ejercicio 10

Crearemos una función que al pasarle un número N crea un arreglo con N elementos que serán los números desde 1 a N. También deberemos verificar que el número que pasemos sea positivo.

```javascript
let num;
let arrNum = [];
function crearArrayN(num) {
  let arr = [];
  let i = 0;
  if (num >= 0) {
  } else {
    return ["Error: número menor de cero"];
  }
}
```

Dentro del "if" ya que el argumento "num" es mayor que cero deberemos realizar un loop que inserte un número al arreglo de uno en uno tantas veces sea necesario hasta alcanzar el valor de N.

```javascript
    if (num >= 0) {
        while (i < num) {
            arr[i] = i + 1;
            i++;
        };
        return arr;
```

Quedando para valores de "num" en 15 y -10:

<table><tbody><tr><td><p>Para num = 15:</p><pre><code class="language-javascript">let num;
let arrNum = [];
function crearArrayN(num) {
    let arr = [];
    let i = 0;
    if (num &gt;= 0) {
        while (i &lt; num) {
            arr[i] = i + 1;
            i++;
        };
        return arr;
    } else {
        return ['Error: número menor de cero']
    };
};
num = 15;
arrNum = crearArrayN(num);
console.log(arrNum);</code></pre></td><td><pre><code class="language-">[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15
]</code></pre></td></tr><tr><td><p>Para num = -10</p><pre><code class="language-javascript">num = -10;
arrNum = crearArrayN(num);
console.log(arrNum);</code></pre></td><td><pre><code class="language-">[ 'Error: número menor de cero' ]</code></pre></td></tr></tbody></table>

Vamos a agregar además el loop For para el mismo número para tener otra alternativa de lógica.

<table><tbody><tr><td><pre><code class="language-javascript">// Arreglo de N números loop While
let num;
let arrNum = [];
function crearArrayN(num) {
    let arr = [];
    let i = 0;
    if (num === 0) {
        arr[0] = 1;
        return arr;
    } else if (num &gt;= 0) {
        while (i &lt; num) {
            arr[i] = i + 1;
            i++;
        };
        return arr;
    } else {
        return ['Error: número menor de cero']
    };
};
num = 10;
arrNum = crearArrayN(num);
console.log('Metodo While');
console.log('Para número: ',num);
console.log(arrNum);
// Arreglo de N números loop For
function crearArrayFor (num) {
    let arr = [];
    if (num &lt;= 0){
        return arr = ['Error, número menor o igual a 0'];
    };
    for (let i = 0; i &lt; num ; i++){
        arr[i] = i + 1;
    };
    return arr;
};
arrNum = crearArrayFor(num);
console.log('Metodo For');
console.log('Para número: ',num);
console.log(arrNum);</code></pre></td><td><pre><code class="language-">Metodo While
Para número:  10
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
Metodo For
Para número:  10
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]</code></pre></td></tr></tbody></table>

# Ejercicios Operador Ternario

## Ejercicio 11

Los operadores ternarios vimos que es un resumen de un if(){} para no usar tambien el else{}. Donde si una condición es verdadera ejecuta una expresión y si la expresión es falsa ejecuta otra expresión.

```javascript
// condición ? "expr p/verdadero" : "expr p/falso";
```

### Elegir bebida

Para el caso que debemos servir si es emenor de edad o mayor de edad en las bebidas podemos usar el if(){} con el else{} o el caso de operador ternario.

```javascript
// Seleccionar bebida.
console.log("Ejecicio tragos");
const edad = 20;
let bebida;
```

<table><tbody><tr><td><pre><code class="language-javascript">function selectBebida (edad){
    if (edad &lt; 18){
        return 'Jugo';
    } else{
        return 'Cerveza';
    };
};
bebida = selectBebida(edad);
console.log('Con if()');
console.log('Para',edad,'años, servir:',bebida);
console.log(' ');</code></pre></td><td><pre><code class="language-">Con if()
Para 20 años, servir: Cerveza</code></pre></td></tr><tr><td><pre><code class="language-javascript">console.log('Con ternario');
bebida = edad &lt; 18? 'Jugo' : 'Cerveza';
console.log('Para',edad,'años, servir:',bebida);
console.log(' ');</code></pre></td><td><pre><code class="language-">Con ternario
Para 20 años, servir: Cerveza</code></pre></td></tr></tbody></table>

Vemos que llegamos el mismo resultado pero con mucho menos código usando operador ternario "?"

### Consultar si es miembro

En el caso de un usuario que si es miembro paga menos "2" y si no es miembro paga "10" veremos la diferencia de usar ternario o if()

Con If(){} else {}:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Con if()');
function getMember(usrs) {
    if(usrs.isMember){
        return 2;
    } else {
        return 10;
    };
};
let bay = getMember(users);
console.log('Cobrar:',bay);</code></pre></td><td><pre><code class="language-">Con if()
Cobrar: 2</code></pre></td></tr></tbody></table>

Con ternario:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Con ternario');
bay = users.isMember ? 2 : 10;
console.log('Cobrar:',bay);
console.log(' ');</code></pre></td><td><pre><code class="language-">Con ternario
Cobrar: 2</code></pre></td></tr></tbody></table>

Siendo muy significativa la cantidad de lineas de codigo de diferencia.
