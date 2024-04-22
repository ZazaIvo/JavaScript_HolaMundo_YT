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

## Ejercicio 05

Vamos a buscar el número mayor y el número nemor de un arreglo de números. Estamos buscando dos elementos, entonces tendremos dos variables. Una variable busca al mayor y la otra buscar al menor "let mayor" y "let menor". Pero queremos que empiecen con el valor del primer elemento del arreglo:

```javascript
let menor = arr[0]; // Primer valor
let mayor = arr[0]; // Primer valor
```

Luego tenemos que iterar el arreglo para comparar el valor de las variables. Por ello usamos "for-of" para recorrer los valores de los elementos. La lógica que vamos a usar con el operador ternario, realizando una camparación booleana, luego si extiste un resultado verdadero "true" realiza la primer expresión; pero si es "false" realiza la expresión siguiente a los dos puntos ":"

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
