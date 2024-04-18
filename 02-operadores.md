# Operadores

Los operadores sirven para crear expresiones, con las expresiones creamos algoritmos y con ellos solucionamos un problema. Lo operadores que veremos son:

- Aritméticos
- Asignación
- Comparación
- Lógicos
- Bitwise

## Aritméticos

Veremos simplemente con la expresión dentro de un console.log() cada operador aritmético

```javascript
let a = 5;
let b = 7;
console.log(a + b); // Sumar
console.log(a - b); // Resta
console.log(a * b); // Multiplicar
console.log(a / b); // Dividir
```

Y por consola:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\02-operadores\01-aritmeticos.js"
12
-2
35
0.7142857142857143
```

Siguiendo las reglas de agrupamiento de matemáticas como:

```javascript
console.log((a / b) * (a + b));
```

Dando como resultado 8.571428571428571

Hay otro operador que es el módulo con el simbolo de % que nos muestra el resto de una divición. Por ejemplo si dividimos 7 en 5 entra el 5 una vez y sobran dos enteros, entoneces el módulo es 2:

```javascript
console.log(b % a); // modulo
```

Resultado 2

También tenemos el operador de potencia con doble asterisco que eleva un numero a la potencia del que le sigue despues de los asteriscos.

```javascript
console.log(a ** 2); // potencia
console.log(b ** 2); // potencia
```

Por consola:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\02-operadores\01-aritmeticos.js"
25
49
```

Vamos a agregar al console.log la funcionalidad de poder agregar otro parametro para que muestre despues de una coma:

```javascript
let a = 5;
let b = 7;
console.log(a + b, "Suma de 5 y 7"); // Sumar
console.log(a - b, "Resta de 5 y 7"); // Resta
console.log(a * b, "Multiplicación de 5 y 7"); // Multiplicar
console.log(a / b, "Divición de 5 y 7"); // Dividir
console.log((a / b) * (a + b), "Agrupar {(5/7)*(5+7)}"); // Agrupamiento
console.log(b % a, "El resto de 7/5"); // modulo
console.log(a ** 2, "Potencia de 5 al cuadrado"); // potencia
console.log(b ** 2, "Potencia de 7 al cuadrado"); // potencia
```

Dando como resultado por consola:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\02-operadores\01-aritmeticos.js"
12 Suma de 5 y 7
-2 Resta de 5 y 7
35 Multiplicación de 5 y 7
0.7142857142857143 Divición de 5 y 7
8.571428571428571 Agrupar {(5/7)*(5+7)}
2 El resto de 7/5
25 Potencia de 5 al cuadrado
49 Potencia de 7 al cuadrado
```

## Incrementar/Decrementar

Estos operadores permiten ir incrementando un cierto valor en una iteración para una lógica por ejemplo donde nececitamos que avance el indice de uno en uno.

### Incrementar

Para incrementar podemos poner el operador antes de la variable o despues de la variable. Se usa el doble simbolo de ++ antes o despues para incrementar en 1 el valor de la variable. Si la variable a = 5 al incrementar en uno será 6:

```javascript
// Incrementar
console.log(++a); // Por delante
console.log(a++); // Seguido
console.log(a); // Resultado
```

Por consola:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\02-operadores\01-aritmeticos.js"
6
6
7
```

Lo que ha pasado es que en el primer caso incrementa 1 a lo que sigue y lo muestra, en el segundo caso seguido de la variable, muestra la variable y luego lo incrementa en uno. Por eso tenemos el 6 del primer incremento, luego muestra el valor incrementado a 6 y suma uno más pero no muestra el incremento. Finalmente mostramos que se incrementó.

### Decrementar

Al igual que para incrementar agregamos doble signo ++ ahora para decrementar en 1 agregamos doble --

```javascript
// Decrementar
console.log(--a); // Por delante
console.log(a--); // Seguido
console.log(a); // Resultado
```

Partiendo del valor de a = 7 que fueron los dos incrementos anteriores ahora tendremos:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\02-operadores\01-aritmeticos.js"
6
6
5
```

Vemos que por delante, resta el valor 1 y lo muestra. Seguido muestra el valor inicial y luego le resta uno pero no lo muestra. Finalmente comprobamos que realizo la resta que no mostró.

## Op. de Asignación

Los operadores de asignación son una reducción de operaciones. Ya que si queremos aumentar o disminuir un valor distinto a 1 podemos hacerlo con el símbolo segui del igual:

```javascript
let a = 5;
a += 5; // Aumenta 5
a -= 5; // Decrementa 5
a *= 5; // Multiplica 5
a /= 5; // Divide 5
a %= 5; // Resto de 5
a **= 5; // potencia 5
```

La vista por consola no tendrá mucho sentido ya que para ver la diferencia debeíamos asiganar cada asignación a una variable y mostrarla. Y la lógica de esto es reducir el código.

## Op. Comparación

Se utilizan para comparar variables entre si o con otro valor. Y nos devuelve un valor booleano de true o false. Por ejmplo:

```javascript
let a = 10;
console.log(a > 5);
```

Por consola devuelve:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\02-operadores\03-comparacion.js"
true
```

Solo devuelve que es verdad que el valor de a = 5; es mayor que 5.

<table><tbody><tr><td>Símbolo</td><td>Lógica</td></tr><tr><td>&lt;</td><td>menor que</td></tr><tr><td>&gt;</td><td>mayor que</td></tr><tr><td>&lt;= ; &gt;=</td><td>menor o igual ; mayor o igual</td></tr><tr><td>==</td><td>igual que</td></tr><tr><td>!=</td><td>distinto que</td></tr></tbody></table>

Por ejemplo si a = 10; tendremos:

<table><tbody><tr><td>console.log(a &gt; 5);</td><td>true</td></tr><tr><td>console.log(a &lt; 5);</td><td>false</td></tr><tr><td>console.log(a &lt;= 5);</td><td>false</td></tr><tr><td>console.log(a &gt;= 5);</td><td>true</td></tr><tr><td>console.log(a == 5);</td><td>false</td></tr><tr><td>console.log(a != 5);</td><td>true</td></tr></tbody></table>

Si cambiamos el valor de a = 5; veremos como se comportan el mayor igual o el menor igual:

<table><tbody><tr><td>console.log(a &gt; 5);</td><td>false</td></tr><tr><td>console.log(a &lt; 5);</td><td>false</td></tr><tr><td>console.log(a &lt;= 5);</td><td>true</td></tr><tr><td>console.log(a &gt;= 5);</td><td>true</td></tr></tbody></table>

### Comparación estricta

Si en el caso de la igualdad con el == preguntamos si a que vale 5 es igual al string de '5' nos dirá que es true.

<table><tbody><tr><td>Comparación</td><td>Respuesta</td></tr><tr><td>console.log(a == '5');</td><td>true</td></tr></tbody></table>

Esto pasa porque el == solo compara el valor sin incluir el tipo. Por lo que sería lo mismo 5 que '5' mientras que uno es un number y el otro un string. Para preguntar tambien el tipo de valor devemos usar la triple igualdad ===

<table><tbody><tr><td>Comparación</td><td>Respuesta</td></tr><tr><td>console.log(a == '5');</td><td>true</td></tr><tr><td>console.log(a === '5');</td><td>false</td></tr></tbody></table>

Para evitar errores se utiliza === para igualdad y el !== para desigualdad

## Op. Lógicos

En JavaScript los operadores lógicos son tres AND - OR - NOT y devuelven un valor booleano al comparar dos expresiones booleanas.

<table><tbody><tr><td>Operador</td><td>Símbolo</td></tr><tr><td>ADN</td><td>&amp;&amp;</td></tr><tr><td>OR</td><td>||</td></tr><tr><td>NOT</td><td>!</td></tr></tbody></table>

### AND

Con el AND le decimos a JavaScript que evalúe dos valores y si los dos son verdaderos entontonces devuelve verdadero. Si uno de los valores no es verdadero devuelve el conjunto co o falso.

<table><tbody><tr><td>Lógica</td><td>Resultado</td></tr><tr><td>console.log( true &amp;&amp; true);</td><td>true</td></tr><tr><td>console.log( false &amp;&amp; true);</td><td>false</td></tr><tr><td>console.log( true &amp;&amp; false);</td><td>false</td></tr></tbody></table>

Con un ejemplo de una suscripción a un canal de videos podemos verificar si el usuario es mayor y si está suscripto:

```typescript
let mayor = true;
let suscrito = true;
console.log("Ejemplo AND:", mayor && suscrito);
```

Devolviendo:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\02-operadores\04-logicos.js"
Ejmp AND: true
```

### OR

El operador OR evalúa si una de las condiciones es verdader devuelve verdadero. Es decir que se debe cumplir solo una para que devuelva el verdadero. Es decir que para que sea falso deben ser las dos expresiones falses.

<table><tbody><tr><td>Lógica</td><td>Resutado</td></tr><tr><td>console.log(true || false);</td><td>true</td></tr><tr><td>console.log(false || true);</td><td>true</td></tr><tr><td>console.log(false || false);</td><td>false</td></tr></tbody></table>

Con el mismo ejemplo cambiando a falso si es mayor podremos ver como funciona:

```javascript
mayor = false;
suscrito = true;
console.log("Ejemplo AND:", mayor || suscrito);
```

Lo que nos devuelve un verdadero, podríamos interpretar que puede ingresar pero ver solo el contenido para menores:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\02-operadores\04-logicos.js"
Ejemplo OR: true
```

### NOT

El simbolo vimos que es agregando antes de la variable la admiración para abajo. Lo que nos hace es devolver el contrario del resultado booleano. Si la variable es true nos devuelve un falso

<table><tbody><tr><td>Lógica</td><td>Resultado</td></tr><tr><td>console.log('Operador NOT para !true: ', !true);</td><td>false</td></tr><tr><td>console.log('Operador NOT para !false: ', !false);</td><td>true</td></tr></tbody></table>

Como vemos en la consola:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\02-operadores\04-logicos.js"
Operador NOT para !true:  false
Operador NOT para !false:  true
```

El caso practico es que si el usuario no es mayor y el resultado de la variable mayor = false; Podemos tomar estoy y usar otra variable que muestre el catálogo infantil para menores:

```javascript
mayor = false;
let soloCatalogoInfantil = !mayor;
console.log("Mostrar catálogo infantil: ", soloCatalogoInfantil);
```

Por consola tendremos:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\02-operadores\04-logicos.js"
Mostrar catálogo infantil:  true
```

# Short - circuit

Si en la consola del navegador evaluamos entre un arreglo y un objeto primero en OR y luego en AND. Como ambos existen vacios devolveran un true. Pero vemos que nos da como resultado:

```
[] || {}
[]
[] && {}
{}
```

Donde del OR nos devuelve el primero que evalue en true y el AND nos devuelve si todos son true el último que evalua en true. Por eso de la expresion \[\] || {} nos devuelve verdadero el primero \[\] y de la expresión de \[\] && {} nos devuelve el último true {}.

Para saber cuales valores evalúan en verdadero es más facil saber cuales evalúan en falso primero y luego el resto serán verdaderos. Lo valores que devuelven falso serán:

- false
- 0
- ' '
- null
- undefined
- NaN

## Falsy OR

Tenemos una plataforma que si el usuario no existe o no está logueado puede acceder a ver contenido gratuito como marketing de la plataforma. Donde si no tiene un nombre al usuario le asigna el valor de 'Anonimo'. Esto lo podemos hacer con el OR ya que si dos valores son verdaderos nos devuelve el primer valor verdadero que quisieramos que sea el nombre:

let nombre = '';

let userName= nombre || 'Anonimo';

Como en este caso el nombre es un string vacio será falso y devuelve el valor verdadero que es un string 'Anonimo' pero si tubieva un valor nombre nos devueve este. Probamos y vemos por consola:

<table><tbody><tr><td>Lógica</td><td>Resultado</td></tr><tr><td><pre><code class="language-javascript">let nombre = '';
let userName= nombre || 'Anonimo';
console.log('El usuario es: ',userName);</code></pre></td><td><pre><code class="language-">El usuario es:  Anonimo</code></pre></td></tr><tr><td><pre><code class="language-javascript">nombre = 'Ivan'
userName= nombre || 'Anonimo';
console.log('El usuario es: ', userName);</code></pre></td><td><pre><code class="language-">El usuario es:  Ivan</code></pre></td></tr></tbody></table>

Vemos que cuando los dos son verdaderos nos devuelve el valor del primer verdadero. Se dice el primer verdadero porque pueden ser de más de una comparativa agregando otra variable para comparar:

<table><tbody><tr><td>Lógica</td><td>Resultado</td></tr><tr><td><pre><code class="language-javascript">let nombre = '';
let alias = '';
let userName= nombre || alias || 'Anonimo';
console.log('El usuario es: ',userName);</code></pre></td><td><pre><code class="language-">El usuario es:  Anonimo</code></pre></td></tr><tr><td><pre><code class="language-javascript">nombre = 'Ivan'
alias = '';
userName= nombre || alias || 'Anonimo';
console.log('El usuario es: ', userName);</code></pre></td><td><pre><code class="language-">El usuario es:  Ivan</code></pre></td></tr><tr><td><pre><code class="language-javascript">nombre = ''
alias = 'Zaza';
userName= nombre || alias || 'Anonimo';
console.log('El usuario es: ', userName);</code></pre></td><td><pre><code class="language-">El usuario es:  Zaza</code></pre></td></tr><tr><td><pre><code class="language-javascript">nombre = 'Ivan'
alias = 'Zaza';
userName= nombre || alias || 'Anonimo';
console.log('El usuario es: ', userName);</code></pre></td><td><pre><code class="language-">El usuario es:  Ivan</code></pre></td></tr></tbody></table>

Vemos en el último caso que los tres valores son true nos devuelve el primer true que es el nombre.

## Falsy AND

Para el caso de AND (&&) se puede usar si dos o más funciones se ejecutan tomar el valor de las que sean veraderas.

```javascript
function fn1() {
  console.log("Funcion 1");
  return true;
}
function fn2() {
  console.log("Funcion 2");
  return false;
}
function fn3() {
  console.log("Funcion 3");
  return true;
}
let x = fn1() && fn2() && fn3();
console.log(x);
```

Lo que ejecuta las funciones y las que sean veraderas las devuelve:

```
[Running] node "c:\Users\Administrador\Documents\Zaza\JavaScript-HolaMundo-\JavaScript_YT\02-operadores\05-falsy.js"
Funcion 1
Funcion 2
false
```

Como la fn3() es false no la devuelve pero se ejecuta igual dentro de la variable. Pero si imprimimos la variable x no dará "false" ya que una de las funciones fue de resultado "false".

Vimos entonces que hay valores que se interpretan con falso además de false y que si evaluamos expresiones y devuelven algún valor de estos depende de si usamos OR o AND nos mostrará el primer valor verdadero o todos respectivamente.

# Op. Bitwise

Estos operadores se utilizan muy poco incluso puede que núnca nos encontremos con ellos en la vida profecional.

- Bit: digito en binario que puede tomar el valor de 0 o de 1
- Byte: combinación de 8 bits que será por ejemplo 00000001 o otro byte puede ser 01000010

El incremento será:

- 00000000 -> 0
- 00000001 -> 1
- 00000010 -> 2
- 00000011 -> 3
- 00000100 -> 4
- 00000101 -> 5
- 00000110 -> 6
- 00000111 -> 7

Esto es escribir número con código binario y existe una fórmula matemática para poder transformar los número en binarios ya que las computadoras trabajan en binario.

Sistemas de representar números pueden ser decimal (dies caracteres) o binario (dos caracteres):

- Decimal: 0,1,2,3,4,5,6,7,8,9
- Binario: 0,1

## OR en bitwise

La comparación que se hace es de un número en byte se completa de los 8 dígitos los que tengan el valor 1 y devuelve esas coincidencias como un nuevo byte. La sintaxis del OR es con solo una barra:

Si comparamos el byte de 1 vemos que tiene el primer lugar con el 1 y el resto son todos ceros 00000001 y si tomamos el byte del 3 vemos que tiene el primero y el segúndo con el 1 por lo que tomar los valores donde haya 1 sería agregar el 1 al segúndo lugar dando como resultado el byte del 3

console.log(1 | 3); // 00000011 -> 3

Para el caso de compara el 1 y el 4 vamos a completar primero el 1 con el primer lugar, luego al comparar con el byte del 4 vemos que tiene un 1 en el tercer lugar por lo que lo agregamos al resultado en el tercer lugar, dando como resultado el byte del 5 -> 00000101

console.log(1 | 4); // 00000101 -> 5

Por consola:

<table><tbody><tr><td>Lógica</td><td>Resultado</td></tr><tr><td><pre><code class="language-javascript">console.log(1 | 3); // 00000011</code></pre></td><td><pre><code class="language-">3</code></pre></td></tr><tr><td><pre><code class="language-javascript">console.log(1 | 4); // 00000101</code></pre></td><td><pre><code class="language-">5</code></pre></td></tr><tr><td><pre><code class="language-javascript">console.log(1 | 2); // 00000011</code></pre></td><td><pre><code class="language-">3</code></pre></td></tr></tbody></table>

## AND en bitwise

El AND sólo tomará las coincidencias del 1 en los byte comparados, es decir que si en un caracter no coinciden los dos 1 tomará el 0:

<table><tbody><tr><td>Lógica</td><td>Resultado</td></tr><tr><td><pre><code class="language-javascript">console.log(1 &amp; 3); // 00000001</code></pre></td><td><pre><code class="language-">1</code></pre></td></tr><tr><td><pre><code class="language-javascript">console.log(1 &amp; 4); // 00000000</code></pre></td><td><pre><code class="language-">0</code></pre></td></tr><tr><td><pre><code class="language-javascript">console.log(2 &amp; 3); // 00000010</code></pre></td><td><pre><code class="language-">2</code></pre></td></tr></tbody></table>

Vemos que solo toma los valores 1 donde coinciden en ambos bytes comparados por eso en el (1 & 4) no coincien en ninguno y devuelve 0

# Orden de operaciones

Empezamos con un ejemplo basico:

```javascript
let resultado = (8 / 2) * (2 + 2);
console.log(resultado);
```

Donde devuelve 16. Esto es porque primero se resuelven los parentesis y las diviciones y luego las multiplicaciones. Esto es lo ya visto en matemáticas. Es decir que sigue las reglas de agrupamiento y distribución.

Siendo según en el ejemplo la resolución por agrupamiento:

<table><tbody><tr><td>Lógica</td><td>Resultado</td></tr><tr><td><pre><code class="language-javascript">resultado = (8/2)*(2+2);
console.log(resultado);</code></pre></td><td><pre><code class="language-">16</code></pre></td></tr></tbody></table>

Pero si cambiamos el order de agrupamiento:

<table><tbody><tr><td>Lógica</td><td>Resultado</td></tr><tr><td><pre><code class="language-javascript">resultado = 8/(2*2)+2;
console.log(resultado);</code></pre></td><td><pre><code class="language-">4</code></pre></td></tr></tbody></table>

Si queremos que nos de el resultado de 1 debemos cambiar el orden de los paréntesis:

<table><tbody><tr><td>Lógica</td><td>Resultado</td></tr><tr><td><pre><code class="language-javascript">resultado = 8/(2*(2+2));
console.log(resultado);</code></pre></td><td><pre><code class="language-">1</code></pre></td></tr></tbody></table>

Si necesitamos especificar un orden en especial debemos indicarlo con paréntesis redondos, resolviendo desde los internos a los externos:

```
( 3° ( 2° (1°)))
```

# Op. Ternarios

Estos operadores ya empiezan a modificar el flujo de ejecución de la lógica.

Tendremos una expresión que si devuelve true o si devuelve false el operador decide que valor va a asignar.  La sintaxis es con un signo de pregunta despues de la expresión:

```javascript
// expresion? 'si es true'= valor1 : 'si es false'= valor2
let edad = 18;
let acceso = edad > 17 ? "Permitir ingreso" : "No puede ingresar";
console.log(acceso);
```

Entonces de la expresion de comparación de edad mayor que 17 decidira si permite o no el acceso. Por ejemplo para 18 de edad como será true la expresión asignará el valor de "Permitir ingreso" y por consola tendremos:

```
Operadores Ternarios
Permitir ingreso
```

Si la edad fuera 17 o menos nos asigna el valor de "No puede ingresar"

<table><tbody><tr><td><p>Cambiamos el valor:</p><pre><code class="language-javascript">let edad = 17;
let acceso = edad &gt; 17 ? 'Permitir ingreso' : 'No puede ingresar';
console.log(acceso);</code></pre></td><td><p>Por consola:</p><pre><code class="language-">Operadores Ternarios
No puede ingresar</code></pre></td></tr></tbody></table>

Vemos como cambio el valor de asignación. Esto se parece mucho a los condicionales como el "if" que ya es control de flujo.
