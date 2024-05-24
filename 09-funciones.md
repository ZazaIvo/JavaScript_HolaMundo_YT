# Funciones

## Declaración VS Expresión

### Función nombrada

La declaración de funciones se realiza solamente con la palabra reservada de function acompañada del nombre de la función los parentecis con los argumentos necesarios y luego la acción a realizar. A este tipo de función se la conoce como función nombrada.

```javascript
function nombre(parametro) {
  accion;
}
```

### Función anónima

La diferencia de esta función es que no tiene nombre y se declara igual que la anterior pero saltando el nombre de la función. Pero esta función se puede declarar solo cuando va a ser ejecutada inmediatamente como en los métodos de los arry en un map().

```javascript
[].map(function () {
  console.log("funcion anomina..");
});
```

Pero naturalmente sería declarada fuera del método pero nos daría un error por lo que la dejaremos comentada:

```javascript
/* function (){
    console.log('funcion anomina..');
}; */
```

### Expresión de funciones anónima

Pero esto nos da un error ya que necesita un identificador pero al agregarla a una variable que la ejecute inmediatamente ya no tendrémos ese error. A esto se le llama expresión de funciones:

```javascript
let resta = function () {
  console.log("restando..");
};
resta();
```

Cada vez que el código llegue a la variable "resta()" automáticamente ejecutará esta función, por lo que no hay un llamado de la función y no se puede reutilizar el código. La diferencia es que la sintáxis es más simple ya que no asiganmos en una variable el llamado de la función, sino que ya está implicito.

### Expresión de funciones nombrada

También podemos tener expresiones de funciones nombradas, donde se llaman por una variable pero se asignan un nombre.

```javascript
// Expresion de funciones nombrada
const multiplica = function multiplicar() {
  console.log("multiplicando..");
};
multiplica();
```

### Declarar funcion flecha - fat array function

Podemos declarar una función flecha, resumiendo las funciones de expresión anónimas en su sintaxis. Y siempre va a ser anónima.

```javascript
// Expresión flecha
const divide = () => {
  console.log("dividiendo..");
};
divide();
```

### Declaración vs Expresión

Hay un adiferencia entre una función declarada con "function" y tra como expresión igualada a una variable. Si agregamos un console.log() al principio del código, antes de las declaraciones con el nombre de la funcion por declaración "suma":

<table><tbody><tr><td><pre><code class="language-javascript">console.log(sumar);</code></pre></td><td><pre><code class="language-">ƒ sumar(){
   console.log('sumando..');
}</code></pre></td></tr></tbody></table>

Nos muestra la declaración de la función, en otros lenguajes nos daría un error. Pero no marca error, por lo que si la llamamos antes de declararla se ejecuta:

<table><tbody><tr><td><pre><code class="language-javascript">// LLamado antes de las definiciones
console.log(sumar);
const sumando = sumar();</code></pre></td><td><pre><code class="language-">ƒ sumar(){
   console.log('sumando..');
}
sumando..</code></pre></td></tr></tbody></table>

El poder llamar a una función declarada en JavaScript antes de ser declarada se llama HOSTING y es levantar en español o izar. Lo que quiere decir es que va a levantar la función aun no declarada buscando en el código que sigue el llamado para ver si existe.

## Let - Var - Conts

La forma de declarar variables son tres pero ya no se debe utilziar la palabra reservada de "var" que era antes de ESC6. Declaramos tipos de variables:

<table><tbody><tr><td><pre><code class="language-javascript">function saludo(){};
let hola = 'hola';
const chao = 'chao';
var vieja = 'ya no debes utilizar esto';
console.log(saludo);
console.log(hola);
console.log(chao);
console.log(vieja);</code></pre></td><td><pre><code class="language-">ƒ saludo(){}
hola
chao
ya no debes utilizar esto</code></pre></td></tr></tbody></table>

Si ahora movemos los console.log() arriba de las declaraciones veremos que con las variables "let" y "const" nos avisa que hay un error ya que no estan definidas. En cambio con "var" nos devuelve "undefine" al igual que la función definida con "function". Esto quiere decir que los está levantando o Hosting luego hará lo mismo con las variables declaradas con "var" pero no va a pasar la definición o el valor, solo las va a declarar al inicio.

Con "let" y "conts" nos restringe el uso hasta que no las inicialicemos. Que no es lo mismo a no estár declaradas. Todas las variables tienen hosting solo que las var les asigan "undefine" y a las variables "let" y "const" no permite acceder hasta que se inicialicen en el momento del código donde las declaramos.

### Objeto Window

El objeto window se encuentra en todos los exploradores que existen. En este objeto aparecen todos los objetos en el navegador y podremos encontrar por orden alfabético la función que declaramos y también la variable declarada como "var" por lo que van a ir a para a este objeto estos nombres. No pasa lo mismo con "let" y "const"

Pueden existir librerías que utilicen "var" para declarar la variable o funciones con nombre y traer un conficto. Como por ejemplo una función llamada "render()" es posible que se haya utilizado y si está nuestra función después, va a reemplazar la funcionalidad que tenía al igual que las declaradas con "var"

### Resumen

<table><tbody><tr><td>No utilziar "var"</td><td>Conflictos con librerías y asignaciones en el objeto "window"</td></tr><tr><td>fnction nombre(){};</td><td>Se encapsula para no generar conflictos en el objeto "window"</td></tr><tr><td>Utilizar "let" y "conts"</td><td>No generán conflictos con nombres en el objeto "window" porque no se declaran allí.</td></tr></tbody></table>

## Alcance

Si definimos funciones y variables dentro de una función podremos acceder a ellas dentro de esta función como por ejemplo:

<table><tbody><tr><td><pre><code class="language-javascript">function alcnaces(){
    function saludo(){};
    var vieja = 'ya no usar';
    let variable = 'Hola Mundo';
    const constante = 'Hola Mundo';
    console.log(saludo);
    console.log(vieja);
    console.log(variable);
    console.log(constante);
};
alcnaces();</code></pre></td><td><pre><code class="language-">ƒ saludo(){}
ya no usar
Hola Mundo
Hola Mundo</code></pre></td></tr></tbody></table>

Pero si las llamamos a las variables fuera de la función:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Llamado fuera de la');
console.log(saludo);
console.log(vieja);
console.log(variable);
console.log(constante);</code></pre></td><td><pre><code class="language-">Llamado fuera de la funcion:
Uncaught ReferenceError: saludo is not defined
   at 03-alcance.js:16:13</code></pre></td></tr></tbody></table>

Vemos que no encuentra a ninguna, ni siquiera la función y var con hosting. Por lo que las variables y funciones fuera de una función no existen. Solo se van a hostear o alzar dentro de la función con el mismo criterio de seteo.

<table><tbody><tr><td><p>Declarado:</p><pre><code class="language-javascript">function alcnaces(){
    let variable = 'Hola Mundo';
    const constante = 'Hola Mundo';
    function saludo(){};
    var vieja = 'ya no usar';
    console.log(saludo);
    console.log(vieja);
    console.log(variable);
    console.log(constante);
};</code></pre></td><td><p>Seteado (hosting):</p><pre><code class="language-javascript">function alcnaces(){
    function saludo(){};
    var vieja = 'ya no usar';
    
</code></pre><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><code>let variable = 'Hola Mundo';</code><br><code>const constante = 'Hola Mundo';</code><br><code>console.log(saludo);</code><br><code>console.log(vieja);</code><br><code>console.log(variable);</code><br><code>console.log(constante);</code><br>&nbsp;</p><p><code>};</code></p></td></tr></tbody></table>

### Variables y funciones Globales

Las variables y funciones que declaremos fuera de una función se podrán acceder por todas las funciones y variables al mismo nivel. Pudiendo cambiar sus valores dentro de una función actualizando sus datos. Veremos una variable global como se puede llamar y cambiar su valor dentro de una función y comparar antes y despues:

<table><tbody><tr><td><pre><code class="language-javascript">// Variables globales
let afuera = 'estoy afuera';
function modifica(){
    afuera = 'estoy adentro';
};
console.log('Antes de la función');
console.log(afuera);
modifica();
console.log('Despues de la función');
console.log(afuera);</code></pre></td><td><pre><code class="language-">Antes de la función
estoy afuera
Despues de la función
estoy adentro</code></pre></td></tr></tbody></table>

## Argumentos

Vamos a repasar los argumentos de una función con más profundidad. Declaramos una función que tenga dos parámetros (a, b) y que sea la suma de estos dos:

<table><tbody><tr><td><pre><code class="language-javascript">function suma(a, b) {
    return a + b;
};
console.log('La suma es:',suma(3,5));</code></pre></td><td><pre><code class="language-">La suma es: 8</code></pre></td></tr></tbody></table>

En JavaScript si no le pasamos uno de los parámetros va a interpretarlo como que tiene un valor de "undefine" por lo que intentará ejecutar con ese valor.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Con un solo parámetro:', suma(3));</code></pre></td><td><pre><code class="language-">Con un solo parámetro: NaN</code></pre></td></tr></tbody></table>

Devuelve un valor NaN que es "Not a Number" si la llamaramos sin pasarle ningún valor trataría de sumar undefine + undefine y devolvería nuevamente NaN.

También podriamos pasarle con más argumentos de los parámetros que necesita como:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Con varios argumentos:', suma(1, 3, 2, 7, 9));</code></pre></td><td><pre><code class="language-">Con varios argumentos: 4</code></pre></td></tr></tbody></table>

Donde lo que sucede es que utiliza de izqueirda a derecha los valores para completar los parámetros que necesita y luego los otros valores quedan a disposición. JavaScript nos permite mostrar o acceder a los argumentos que recibe la función por más que no los utilice a todos, esto se puede ver con "arguments" dentro de la función.

<table><tbody><tr><td><pre><code class="language-javascript">function suma(a, b) {
    console.log(arguments);
    return a + b;
};
console.log('Mustra los argumentos:');
console.log('Con varios argumentos:', suma(1, 3, 2, 7, 9));</code></pre></td><td><pre><code class="language-">Mustra los argumentos:
Arguments(5)&nbsp;[1, 3, 2, 7, 9, callee: ƒ, Symbol(Symbol.iterator): ƒ]
Con varios argumentos: 4</code></pre></td></tr></tbody></table>

Parece ser Arguments\[\] un arreglo, pero en realidad _**es un Objeto**_ de tipo "iterator" que tendrá un "callee" que es la función que lo llama, un largo "length", asigna cada argumento a un indice como si fuera un arreglo. Podemos trabajar con los valores del objeto como realizar la suma de todos los argumentos.

<table><tbody><tr><td><pre><code class="language-javascript">function sumar(a, b) {
    console.log(arguments);
    let total = 0;
    for (valor of arguments) {
        total += valor;
    };
    return total;
};
console.log('Sumar el total');
console.log(sumar(1, 3, 2, 7, 9));</code></pre></td><td><pre><code class="language-">Sumar el total
Arguments(5)&nbsp;[1, 3, 2, 7, 9, callee: ƒ, Symbol(Symbol.iterator): ƒ]
22</code></pre></td></tr></tbody></table>

Con el loop "for ( val of obj)" pudimos sumar cada valor a una variable que acumulaba la suma, obteniendo el total. Siendo el objeto "arguments" la palabra reservada "arguments" no se usa en la actualidad, más adelante veremos como se denomina.

Para mejorar el loop podemor convertir todos las propiedades iterables del objeto en un arreglo con Array.from(Obj) y asignarlo a una variable.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Mejorando la iteración con Array.from(Obj)');
function sumaArray(a, b) {
    console.log(arguments);
    let args = Array.from(arguments);
    // Utilizar métodos de Array
    args = args.reduce((acc, el) =&gt; {
        return acc + el;  
    });
    return args;
};
console.log(sumar(1, 3, 2, 7, 9));</code></pre></td><td><pre><code class="language-">Mejorando la iteración con Array.from(Obj)
Arguments(5)&nbsp;[1, 3, 2, 7, 9, callee: ƒ, Symbol(Symbol.iterator): ƒ]
22</code></pre></td></tr></tbody></table>

Vemos que llegamos al mismo valor utilizando un arreglo obtenido de los argumentos con los valores de los iterables. El método .reduce() al no tener un valor de inicio declarado, empieza con el avlor inicial el acumulador.

Una mejora de sintáxis es dejar el .reduce() en una sola linea y concatenar métodos:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Mejorando la iteración con Array.from(Obj)');
function sumaArray(a, b) {
    console.log(arguments);
    return Array.from(arguments)
        .reduce((acc, el) =&gt; acc + el);
};
console.log(sumar(1, 3, 2, 7, 9));</code></pre></td><td><pre><code class="language-">Mejorando la iteración con Array.from(Obj)
Arguments(5)&nbsp;[1, 3, 2, 7, 9, callee: ƒ, Symbol(Symbol.iterator): ƒ]
22</code></pre></td></tr></tbody></table>

## Fat Arrow Function

Habiamos visto que las funciones flecha son anónimas y se ejecutan internamente en una declaración o expresión. No son accesibles desde ningún otro lado que no sea quien las declara ya que no tienen nombre. Vamos a transforma una funcion del tema anterior a una función flecha por expresion anonima.

```javascript
function sumaArray(a, b) {
  console.log(arguments);
  return Array.from(arguments).reduce((acc, el) => acc + el);
  /*     let args = Array.from(arguments);
        // Utilizar métodos de Array
        args = args.reduce((acc, el) => {
            return acc + el;  
        });
        return args; */
}
```

Donde cambiamos primeo la declaración por una expresión:

<table><tbody><tr><td><pre><code class="language-javascript">const sumaArray = function (a, b) {
    console.log(arguments);
    return Array.from(arguments)
        .reduce((acc, el) =&gt; acc + el);
};
console.log(sumaArray(1, 3, 2, 7, 9));</code></pre></td><td><pre><code class="language-">
Arguments(5)&nbsp;[1, 3, 2, 7, 9, callee: ƒ, Symbol(Symbol.iterator): ƒ]
22</code></pre></td></tr></tbody></table>

Luego cambiamos la palabra reservada de function por la sintaxis de la flecha pero ahora perderemos la variable u Objeto de "arguments".

<table><tbody><tr><td><pre><code class="language-javascript">const sumaArray = (a, b) =&gt; {
    return Array.from(arguments)
        .reduce((acc, el) =&gt; acc + el);
};
console.log('La suma de los argumentos es:',sumaArray(1, 3, 2, 7, 9));</code></pre></td><td><pre><code class="language-">05-fat-arrow.js:4 Uncaught ReferenceError: arguments is not defined
   at sumaArray (05-fat-arrow.js:4:23)
   at 05-fat-arrow.js:7:45</code></pre></td></tr></tbody></table>

Por lo que no podremos acceder a los argumentos desde la palabra reservada "arguments". _**La función flecha es una versión reducida de las funciones declarativas para hacer más eficiente el código sin generar objetos o métodos**_. Por lo que no podremos realizar este caso.

## Método Rest (convención)

Para poder acceder a los argumentos de una función podemos simplificar la sintaxis con "...rest", por convención pero podríamos llamarlo "...arg", que debemos agregar en los parámetros de la función al declararla:

<table><tbody><tr><td><pre><code class="language-javascript">function suma(a, b, ...rest) {
    console.log(rest);
};
suma(1, 2, 3, 4);</code></pre></td><td><pre><code class="language-">(2)&nbsp;[3, 4]</code></pre></td></tr></tbody></table>

Nos devuelve un arreglo con el resto de los parámetros que no fueron declarados pero se reciben como argumentos. En este caso el 3 y el 4. Este parámetro que será un arreglo de todos los argumentos no declarados siempre deberá ser el último.

### Fat arrow Function - Rest

Ahora con este parámetro podremos recuperar en una función flecha los argumentos sobrantes que no podiamos con "arguments" Por lo que podemos transfromar ahora la función y sumar todos los valores:

<table><tbody><tr><td><pre><code class="language-javascript">let suma = (a, b, ...rest) =&gt; {
    return a + b + rest.reduce((acc , el) =&gt; acc + el);
};
console.log(suma(1, 2, 3, 4));</code></pre></td><td><pre><code class="language-">10</code></pre></td></tr></tbody></table>

### Ejemplo real (...rest y ...array)

Si quisieramos poder ver los mensajes que recibimos en una función que no sabremos cuales son ni cuantos serán como los errores de un servidor:

<table><tbody><tr><td><pre><code class="language-javascript">const logMsg = (desc, ...msgs) =&gt; {
    for (let msg of msgs){
        console.log(desc , msg);
    };
};
logMsg('Servidor:', 'Error 1', 'Peticion aceptada', 'socket activo');</code></pre></td><td><pre><code class="language-">Servidor: Error 1
Servidor: Peticion aceptada
Servidor: socket activo</code></pre></td></tr></tbody></table>

Pero puede ser que recibamos los mensajes como un arreglo y debemos debemos formatear:

<table><tbody><tr><td><pre><code class="language-javascript">const logMsg = (desc, ...msgs) =&gt; {
    for (let msg of msgs){
        console.log(desc , msg);
    };
};
let mens = ['Error 1', 'Peticion aceptada', 'socket activo'];
logMsg('Cliente móvil:', mens);</code></pre></td><td><pre><code class="language-">Cliente móvil: (3)&nbsp;['Error 1', 'Peticion aceptada', 'socket activo']</code></pre></td></tr></tbody></table>

Pero podemos hacer un spread para expandir este arreglo que lo estamos pasando para que el for entienda que no es solo un valor sino que tiene que iterar por cada valor dentro de ese argumento tipo arreglo.

<table><tbody><tr><td><pre><code class="language-javascript">const logMsg = (desc, ...msgs) =&gt; {
    for (let msg of msgs){
        console.log(desc , msg);
    };
};
let mens = ['Error 1', 'Peticion aceptada', 'socket activo'];
logMsg('Cliente móvil:', ...mens);</code></pre></td><td><pre><code class="language-">Cliente móvil: Error 1
Cliente móvil: Peticion aceptada
Cliente móvil: socket activo</code></pre></td></tr></tbody></table>

Y como son argumentos que le estamos pasando quedando contenidos en el parámetro "...rest" podemos agregar más argumentos además del arreglo.

<table><tbody><tr><td><pre><code class="language-javascript">const logMsg = (desc, ...msgs) =&gt; {
    for (let msg of msgs){
        console.log(desc , msg);
    };
};
let mens = ['Error 1', 'Peticion aceptada', 'socket activo'];
logMsg('Cliente móvil:', ...mens, 'Otro error');</code></pre></td><td><pre><code class="language-">Cliente móvil: Error 1
Cliente móvil: Peticion aceptada
Cliente móvil: socket activo
Cliente móvil: Otro error</code></pre></td></tr></tbody></table>

## Parámetros Predeterminados

Si creamos una función como por ejemplo para configurar una Api para suber archivos o consultarlos creamos un objeto con esa configuración:

```javascript
let objConf = {
  url: "",
  bucket: "amazon S3",
  port: 80,
};
```

Luego creamos la función:

<table><tbody><tr><td><pre><code class="language-javascript">function confgAPI(url){
    return `${url}`;
};
console.log(confgAPI('https://luazdesarrollo.com'));</code></pre></td><td><pre><code class="language-">https://luazdesarrollo.com</code></pre></td></tr></tbody></table>

Pero se puede conectar a varias Api la misma función para consumir datos de distintos lugares:

<table><tbody><tr><td><pre><code class="language-javascript">function confgAPI(url){
    return `${url}`;
};
console.log(confgAPI('https://luazdesarrollo.com'));
console.log(confgAPI('https://byluaz.com'));</code></pre></td><td><pre><code class="language-">https://luazdesarrollo.com
https://byluaz.com</code></pre></td></tr></tbody></table>

### Lógica antigua OR

Pero si no queremos que siempre sea la misma conexión y qeremos que tenga una por defecto otilizamos el Or que devolvia el último true:

<table><tbody><tr><td><pre><code class="language-javascript">function confgAPI(url){
    const defaulUrl = url || 'https://luazdesarrollo.com';
    return `${defaulUrl}`;
};
console.log(confgAPI());
console.log(confgAPI('https://byluaz.com'));</code></pre></td><td><pre><code class="language-">https://luazdesarrollo.com
https://byluaz.com</code></pre></td></tr></tbody></table>

Como en el primer llamado no está definido el parametro en la función porque no le pasamos un argumento selecciona el OR el último true que es la dirección por defecto. Este método era el antiguo y habrá código que se mantenga de esta forma.

### Lógica Actual - Declarativo

En la actualidad existe una funcionalidad que se define en los parámetros de la función cual es el valor por defecto que tendrá ese parámetro y si se recibe un argumento para ese parámetro cambia el valor. Esto es con la sintaxis de igualar el parámetro en la declaración de la función dentro de las llaves.

<table><tbody><tr><td><pre><code class="language-javascript">function confgApiDec( url = 'https://hola.com'){
    return `${url}`;
};
console.log(confgApiDec());
console.log(confgApiDec('https://chau.com'));</code></pre></td><td><pre><code class="language-">https://hola.com
https://chau.com</code></pre></td></tr></tbody></table>

Vemos que en el primer llamado no de pasa el argumento y mantiene el valor por defecto y en el segundo llamado se le pasa un argumentos y el parámetro toma este valor cambiando el predeterminado.

### Argument Extraction - Argumento Objeto

Si pasamos un objeto como argumento podemos realizar una extracción del parámetro de la url para que lo utilice la función pero esto lo podemos hacer con una sintaxis en la declaración de los parámetros donde entre llaves indicamos que recibimos un objeto y dentro de las llaves colocamos el nómbre del parámetro que vamos a extraer function "_**extracPar({ parametro }){};**_"

<table><tbody><tr><td><pre><code class="language-javascript">let objConf = {
    url: 'https://hola.com',
    bucket: 'amazon S3',
    port: 80,
};
function extrPar( {url}) {
    return `${url}`;
 };
console.log('Url:');
 console.log(extrPar(objConf));</code></pre></td><td><pre><code class="language-">Url:
https://hola.com</code></pre></td></tr></tbody></table>

### Extracción por defecto

Si queremos que tenga un valor por defecto por si hay un error o está vacio el objeto o no tiene ese propiedad que necesitamos podemos definir un valor por defecto igualando a que propiedad y que valor deberá tomar si no existe con "_**funtion parDef({parametro} = {parmDef: valor}){};**_"

<table><tbody><tr><td><pre><code class="language-javascript">function extrParDef({ url } = { url: 'https://holaPorDef.com'}) {
    return `${url}`;
};
console.log('Url por defecto:');
console.log(extrParDef());</code></pre></td><td><pre><code class="language-">Url por defecto:
https://holaPorDef.com</code></pre></td></tr></tbody></table>

### Varios parámetros por defecto

Existe la posibilidad o necesidad que tengamos que declarar tres o más parámetros y algún valor queremos que sea por defecto y no es el último. Esto genera que si hacemos un llamado sin el argumento que tomará por defecto, en vez de asignar lo que definímos tomará el siguiente argumento y quedará el último con undefine.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Varios parametros por defecto');
function varParDef( url, bucket = 145, port){
    return `${url}/${bucket}/${port}`;
};
console.log(varParDef('https:hola.com',2700));</code></pre></td><td><pre><code class="language-">Varios parametros por defecto
https:hola.com/2700/undefined</code></pre></td></tr></tbody></table>

Vemos como completó el valor por defecto con el último y dejo indefinido el final. Para que esto no suceda debemos definir a la derecha del valor por defecto todos los otros parámetros con valor por defecto tambien.

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Varios parametros por defecto');
function varParDef(url, bucket = 145, port = 80) {
    return `${url}/${bucket}/${port}`;
};
console.log(varParDef('https:hola.com', 2700));</code></pre></td><td><pre><code class="language-">Varios parametros por defecto
https:hola.com/2700/80</code></pre></td></tr></tbody></table>

### Varios parámetros - valor omitido

El problema de esto es que mezcla los valores. Por lo que deberíamos igualar a un valor como "undefine" y dentro de la función asignar el valor por defecto si encuentra este problema para no mezclar los valores. Si queremos que se mantenga el orden del omitido podemos definir como parámetro un objeto que tenga los valores preestablecidos, y que al pasarlo como argumento debemos enviar un objeto con el nombre de cada propiedad.

<table><tbody><tr><td><pre><code class="language-javascript">// varios parámetro como objeto
console.log('Parametro omitido');
function varParDefObj({ url= 'https://hola.com', bucket= 145, port= 80 } = {}) {
    return `${url}/${bucket}/${port}`;
}
console.log(varParDefObj({ port: 75, bucket: 90 }));</code></pre></td><td><pre><code class="language-">Parametro omitido
https://hola.com/90/75</code></pre></td></tr></tbody></table>

Esta forma es muy importante ya que asi siempre devuelve correctamente un url valida y no desplaza los valores al estár omitido un parámetro.

## Param Destructuring { prop }

Tomamos el ejemplo de una función para configurar un servidor WEB para obtener la url de un objeto y retornarla. Normalmente se utilizaba tomar una variable y asignarle el valor de la propiedad deseada:

<table><tbody><tr><td><pre><code class="language-javascript">const configObj = {
    url: 'https://hola.com',
    router: 2700,
    port: 80,
};
function webServer1(config){
    const url = config.url;
    return url;
};
console.log('La url:');
console.log(webServer1(configObj));</code></pre></td><td><pre><code class="language-">La url:
https://hola.com</code></pre></td></tr></tbody></table>

Pero hay una forma nueva que permite sacar una propiedad como variable interna directamente del objeto asigando su valor con la sintaxis:

<table><tbody><tr><td><pre><code class="language-javascript">function webServer2(config){
    const {url} = config;
    return url;
};
console.log('La url:');
console.log(webServer2(configObj));</code></pre></td><td><pre><code class="language-">La url:
https://hola.com</code></pre></td></tr></tbody></table>

Vemos con const "{prop} = objeto;" que obtenemos una variable con el nombre de la propiedad del objeto y su valor asignado.

### Destructuring Objetos

Tambien podemos hacer esto diréctamente en los parámetros que al recibir un argumento como un objeto con muchas propiedades, que tome la que necesitamos y la defina como parámetro con ese nombre y el valor. Reduciendo mucho el codigo:

<table><tbody><tr><td><pre><code class="language-javascript">function webServer3({ url }) {
    return url;
};
console.log('La url:');
console.log(webServer3(configObj));</code></pre></td><td><pre><code class="language-">La url:
https://hola.com</code></pre></td></tr></tbody></table>

### También podemos seguir destructurando un objeto que contiene otro objeto accediendo entre las llaves al nombre del objeto interno y con dos puntos volver a indicar que queremos destructurar una propiedad interna.

<table><tbody><tr><td><pre><code class="language-javascript">function webServer4({ url, direccion: {calle}, direccion: {puerta}, direccion: {loc} }) {
    return `
    Url: ${url}
    Calle: ${calle}, ${puerta} - ${loc}`;
};
console.log(webServer4(configObj));</code></pre></td><td><pre><code class="language-">Url: https://hola.com
Calle: Las palmeras, 3D - Colunga</code></pre></td></tr></tbody></table>

Vemos como accedemos a las propiedades del objeto dirección dentro del objeto. No es muy aconsejable ya que se vuelve desprolijo en los parámetros. Podemos hacer esto en la definición de variables internas de la función.

<table><tbody><tr><td><pre><code class="language-javascript">function webServer5(config) {
    const {url} = config;
    const {direccion: {calle}} = config;
    const {direccion: {puerta}} = config;
    const {direccion: {loc}}= config;
    return `
    Url: ${url}
    Calle: ${calle}, ${puerta} - ${loc}`;
};
console.log(webServer5(configObj));</code></pre></td><td><pre><code class="language-">
   Url: https://hola.com
   Calle: Las palmeras, 3D - Colunga</code></pre></td></tr></tbody></table>

De esta forma destructuramos el objeto y asignamos a variables con el nombre y el valor de la propiedad.

### Destructuring Array

Si tivieramos un arreglo debemos cambiar la sintaxis y el objeto pasarlo a arreglo:

```javascript
const configArray = [
  "https://hola.com",
  2700,
  80,
  ["Las palmeras", 2, "3D", "Colunga"],
];
```

Declaramos la función y accedemos al url con el index que le coresponde del parametro que define con el argumento array que recibe. Pero podemos destructurar el parametro creando una serie de variables que recibiran el valor según el orden de elementos del arreglo:

<table><tbody><tr><td><pre><code class="language-javascript">function webServer6(config) {
    const [url, bucket, port] = config;
    return url;
};
console.log('Url:',webServer6(configArray));</code></pre></td><td><pre><code class="language-">Url: https://hola.com</code></pre></td></tr></tbody></table>

Como vemos entre las llaves \[url, bucket, port\] asignamos en sitaxis lo siguiente \[ url = config\[0\], bucket = config\[1\], port = config\[2\]\] pudiendo utilizar luego las variables o constantes por su nombre dentro de la función.

También podemos hacer el destructuring en los parámetros:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Destructuring como parámetros');
function webServer7([url, bucket, port]) {
    return url;
};
console.log('Url:', webServer7(configArray));</code></pre></td><td><pre><code class="language-">Destructuring como parámetros
Url: https://hola.com</code></pre></td></tr></tbody></table>

### Agrupado ...rest (object - array)

Podemos destructurar uno o varios valores tanto de un objeto (key: value) como de un arreglo (elemento) y el resto agreparlos en un objeto o un arreglo respectivamente. Con ello podremos trabajarlos con los métodos que corresponden como "for( of )" o "for( in )".

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Destructuring con ...rest');
function webServer8([url, bucket, port, ...rest]) {
    return rest;
};
console.log('Resto de elementos:', webServer8(configArray));</code></pre></td><td><p>Destructuring con ...rest</p><p>Resto de elementos:</p><ol><li><i>[Array(4)]</i><ol><li><strong>0</strong>: (4)&nbsp;['Las palmeras', 2, '3D', 'Colunga']</li></ol></li></ol></td></tr></tbody></table>

Lo mismo podemos hacer con los objetos.

## Getters and Setters

Podemos tener métodos dentro de los objetos que son funciones y como se llaman por el nombre del método puede ser una función flecha.

<table><tbody><tr><td><pre><code class="language-javascript">const usuario = {
    nombre: 'Ivan',
    apellido: 'Azzarello',
    edad: 40,
    nombreCompl: () =&gt; {
        return `${usuario.nombre} ${usuario.apellido}`;
    }
};
console.log(usuario.nombreCompl());</code></pre></td><td><pre><code class="language-">Ivan Azzarello</code></pre></td></tr></tbody></table>

De esta forma vemos que ejecutando el método usuario.nombreCompl() realiza la funcionalidad o acción dentro del objeto. Podemos tambien reducir más la sintaxis:

<table><tbody><tr><td><pre><code class="language-javascript">Flecha
    nombreCompl: () =&gt; {
        return `${usuario.nombre} ${usuario.apellido}`;
    }</code></pre></td><td><pre><code class="language-javascript">Reducido
    nombreCompl() {
        return `${usuario.nombre} ${usuario.apellido}`;
    },</code></pre></td></tr></tbody></table>

Siendo una declaración más corta.
