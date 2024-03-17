# Declaraciones y Expresiones

En cada lenguaje se implementarán declaraciones y extenciones dependiendo de su sintaxis. Para JavaScript tendremos tres estados o partes de la lógica, las declaraciones, las statement y las expresiones.

- Expressions -- traducido --> expresiones
- Declarations -- traducido --> declaración (verbal)
- Statement -- traducido --> declaración (escrita)

## Declaration

Se le llama declaración en JavaScript a una referencia que se usará en un futuro y son:

- let
- cosnt
- function
- function\*
- async function
- async function\*
- class
- export/import

Estas son las declaraciones que debemos aprendernos.

## Statement

Todas las instrucciones que no se encuentran en la lista de declaraciones serán Statement. Ya que no serán llamadas o declaradas para un futuro, sino que serán ejecutadas en el momento que se las llame. Como son:

- if
- else if
- for
- switch

## Expresiones

Las expresiones son cualquier linea de código o porción de código que evalue un valor. Cómo por ejemplo 4 +6 evalua en 10, o una asignación de un valor a una variable como x = 10; esta adquiriendo un valor. O una porción de código como un llamado a una función que se le pasó parámetros y regresa un valor.

Cada vez que el codigo hace algo y se puede obtener un valor de ello es una expresión.

## Regla memotécnica

A todo lo que le podemos hacer un console.log es una expresión y a lo que no le podemos hacer un console.log() es una Declaracion/Statement

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

Hay otro operador que es el módulo con el simbolo de % que nos muestra la resta de una divición. Por ejemplo si dividimos 7 en 5 entra el 5 una vez y sobran dos enteros, entoneces el módulo es 2:

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
a **= 5; // Divide 5
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

# .
