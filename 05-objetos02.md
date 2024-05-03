## Strings

Los strings los podemos definir simplemente al definir la propiedad colocando el texto entre dos comillas o dos tildes rectas. Tambien podemos usar el constructor "new String()" pero nos crea un objeto con un string como valor.

```javascript
const saludo = "Hola Mundo!";
const despedida = new String("Chao mundo :(");
```

SI vemos el typeof() de estos dos string veremos que uno es un tipo string y el otro es un object:

<table><tbody><tr><td><pre><code class="language-javascript">console.log(typeof(saludo));
console.log(typeof(despedida));</code></pre></td><td><pre><code class="language-">string
object</code></pre></td></tr></tbody></table>

Si tratamos a la variable de saludo como un objeto y colocamos seguido el punto para acceder a una propiedad "saludos." nos despliega el VCS un monton de métodos como length "saludo.length" por lo que JavaScript envuelve al string en un objeto y le proporciona métodos nativos. Al igual que al "saludo" que es un obejto:

<table><tbody><tr><td><pre><code class="language-javascript">let letras = saludo.length;
console.log('Las letras de -',saludo, '- son:', letras);
letras = despedida.length;
console.log('Las letras de',despedida, 'son:', letras);</code></pre></td><td><pre><code class="language-">Las letras de - Hola Mundo! - son: 11
Las letras de String&nbsp;{'Chao mundo :('} son: 13</code></pre></td></tr></tbody></table>

Vemos en la consola que como "saludo" es un objeto debemos buscar su valor para mostrarlo con .toString():

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Las letras de -',saludo.toString(), '- son:', letras);</code></pre></td><td><pre><code class="language-">Las letras de - Hola Mundo! - son: 13</code></pre></td></tr></tbody></table>

Por lo que nos permite trabajar como un obejto al string pero no es un objeto.

### Propiedad .length

Ya vimos esta propiedad y es la cantidad de caracteres del texto incluyendo símbolos y espacios.

<table><tbody><tr><td><pre><code class="language-javascript">let letras = saludo.length;
console.log('Las letras de -',saludo, '- son:', letras);</code></pre></td><td><pre><code class="language-">Las letras de - Hola Mundo! - son: 11</code></pre></td></tr></tbody></table>

Método .indexOf()

Nos permite encontrar el indice de un caracter especial reconociendo las mayúsculas y minúsculas. Le debemos pasar el caracter como argumento entre los paréntesis:

<table><tbody><tr><td><pre><code class="language-javascript">let getM = saludo.indexOf("M");
console.log('El indice de M es:',getM);</code></pre></td><td><pre><code class="language-">El indice de M es: 5</code></pre></td></tr></tbody></table>

En el caso de que no exista el caracter que le hemos pasado nos devuelve "-1" por lo que podemos usar esto para los condicionales y mostrar un mensaje.

<table><tbody><tr><td><pre><code class="language-javascript">let caracter = "2";
let getM = saludo.indexOf(caracter);
if (getM &gt;= 0) {
    console.log('El indice de M es:', getM);
} else if (getM &lt;= 0) {
    console.log('No hay coincidencia');
};</code></pre></td><td><pre><code class="language-">No hay coincidencia</code></pre></td></tr></tbody></table>

### Método .includes()

Este método nos devuelve un true o false si existe o no una coincidencia dentro del texto que estamos buscando.

<table><tbody><tr><td><pre><code class="language-javascript">let getInc = saludo.includes("Ho");
if (getInc){
    console.log('El texto buscado se encuentra');
} else {
    console.log('No se encuentra');
};</code></pre></td><td><pre><code class="language-">El texto buscado se encuentra</code></pre></td></tr></tbody></table>

### Método .replace();

Este método nos permite reemplazar un texto por otro, enviamos como primer argumento el texto que queremos reemplazar y como segundo el valor nuevo.

<table><tbody><tr><td><pre><code class="language-javascript">// Cambiar texto
let saludo2 = saludo.replace('Mundo','a todos!');
console.log(saludo);
console.log('Cambia por:');
console.log(saludo2);</code></pre></td><td><pre><code class="language-">Hola Mundo!
Cambia por:
Hola a todos!!</code></pre></td></tr></tbody></table>

Para guardar el cambio debimos guardarlo en una nueva variable ya que no cambia el valor original por lo que en la consola pudimos imprimir saludo despues de aplicar el cambio mostrando el valor original.

### Método toUpperCase() y toLowerCase()

Transformam todo el texto en mayúsculas el .toUpperCase() y a minúsculas el .toLowerCase(). Como son métodos de un objeto no modifican el valor del string. Por lo que si queremos guardar el cambio debemos asignarlo a variables nuevas.

<table><tbody><tr><td><pre><code class="language-javascript">let saludoMay = saludo.toUpperCase();
let saludoMin = saludo.toLowerCase();
console.log('Saludo en Mayúsculas:');
console.log(saludoMay);
console.log('Saludo en Minúsculas:');
console.log(saludoMin);</code></pre></td><td><pre><code class="language-">Saludo en Mayúsculas:
HOLA MUNDO!
Saludo en Minúsculas:
hola mundo!</code></pre></td></tr></tbody></table>

### Método .substring()

Este método nos devuelve una porción del texto entre dos indices. Por lo que debemos pasarle como argumento el indice inicial y el indice siguiente al último caracter que queremos, es decir que si queremos entre 1 y 3 debemos pasarle .substring(1,4);

<table><tbody><tr><td><pre><code class="language-javascript">// Devolver parte del texto
let hola = saludo.substring(0, 4);
console.log(hola);</code></pre></td><td><pre><code class="language-">Hola</code></pre></td></tr></tbody></table>

### Método .substr() - deprecaded

Este método lo podemos encontrar en algúna lugar que haya que realizar manteniminento y la diferencia con el anterior es que pasamos como primer argumento el indice y como el segundo la cantidad de caracteres apartir del indice que pasamos.

<table><tbody><tr><td><pre><code class="language-javascript">let hola2 = saludo.substr(0, 4);
console.log(hola2);</code></pre></td><td><pre><code class="language-">Hola</code></pre></td></tr></tbody></table>

### Caracteres de escape

Para dar formato al texto queremos indicar tabulaciones, saltos de línea e incluso poder agregar comillas dobles dentro de las comillas dobles que definen al string sin que nos corte el string. Para ello existen los caracteres de escape que empiezan todos con \\ y siguen de otro caracter según lo que deseamos:

- \\n nueva línea
- \\t tabulación
- \\' comilla simple
- \\" comilla doble
- \\\\ backslash

Crearemos un texto para ver esto:

```javascript
const texto =
  "\"Hola mundo\"\nEste es un 'texto' con:\n\t-Comillas dobles\n\t-Comillas simples\n\t-Saltos de línea\n\t-Tabulaciones\nTodo con caracteres de escape";
console.log(texto);
```

Devolviendo un texto formateado:

```
"Hola mundo"
Este es un 'texto' con:
    -Comillas dobles
    -Comillas simples
    -Saltos de linea
    -Tabulaciones
Todo con caracteres de escape
```

### Esto lo podemos ver en algunos códigos que podemos encontrar.

### Template Strings (\`)

El mejor método es con templates strings. Que todo lo que escribamos dentro respetará hasta los saltos y las tabulaciones. Para ello pondremos el texto entre comillas invertidas \`\`

<table><tbody><tr><td><pre><code class="language-javascript">let plantilla = `"Hola Mundo!"
Bienvenidos a Ultimate JavaScript
Todo sobre:
    -Variables
    -Arreglos
    -Objetos
    -Clases
    -Funciones
Muy buen curso!
`;
console.log(plantilla);</code></pre></td><td><pre><code class="language-">"Hola Mundo!"
Bienvenidos a Ultimate JavaScript
Todo sobre:
   -Variables
   -Arreglos
   -Objetos
   -Clases
   -Funciones
Muy buen curso!</code></pre></td></tr></tbody></table>

Siendo lo más usado ya que nos permite tambien formatear el texto con etiquetas de HTML5

<table><tbody><tr><td><pre><code class="language-javascript">let plantilla2 = `&lt;h2&gt;"Hola Mundo!"&lt;/h2&gt;
Bienvenidos a Ultimate JavaScript
Todo sobre:
&lt;ul&gt;
    &lt;li&gt;-Variables&lt;/li&gt;
    &lt;li&gt;-Arreglos&lt;/li&gt;
    &lt;li&gt;-Objetos&lt;/li&gt;
    &lt;li&gt;-Clases&lt;/li&gt;
    &lt;li&gt;-Funciones&lt;/li&gt;
&lt;/ul&gt;
Muy buen curso!
`;
console.log(plantilla2);</code></pre></td><td><pre><code class="language-">&lt;h2&gt;"Hola Mundo!"&lt;/h2&gt;
Bienvenidos a Ultimate JavaScript
Todo sobre:
&lt;ul&gt;
   &lt;li&gt;-Variables&lt;/li&gt;
   &lt;li&gt;-Arreglos&lt;/li&gt;
   &lt;li&gt;-Objetos&lt;/li&gt;
   &lt;li&gt;-Clases&lt;/li&gt;
   &lt;li&gt;-Funciones&lt;/li&gt;
&lt;/ul&gt;
Muy buen curso!</code></pre></td></tr></tbody></table>

Y esto cuando lo insertemos en el HTML tomará el formato insertando lo que queramos en código HTML como un menú, barra de navegación, artículos, formularios, etc.

### ${} dentro de template

También pueden recibir variables para ir formateando coon distintos datos el texto. La sintaxis que debemos usar es colocar la variable entre ${variable} y tomará el valor que tenga esa variable agregandola al texto:

<table><tbody><tr><td><pre><code class="language-javascript">let nombre = 'Ivan';
let user = 'Zaza';
let plantilla3 = `Hola ${nombre}!
Tu nuevo usuario es:
    ${user}
Que tengas buen día!
`;
console.log(plantilla3);</code></pre></td><td><pre><code class="language-">Hola Ivan!
Tu nuevo usuario es:
   Zaza
Que tengas buen día!</code></pre></td></tr></tbody></table>

Tambien podemos llamar funciones que retornen lo que mostraremos en el texto:

<table><tbody><tr><td><pre><code class="language-javascript">function saludar() {
    return 'Hola';
};
let plantilla4 = `${saludar()} ${nombre}!
Tu nuevo usuario es:
    ${user}
Que tengas buen día!
`;
console.log(plantilla4);</code></pre></td><td><pre><code class="language-">Hola Ivan!
Tu nuevo usuario es:
   Zaza
Que tengas buen día!</code></pre></td></tr></tbody></table>

### Como función

Tambien podemos crear una función que retorne esta plantilla generada con template string (\`\`) Donde al llamarla le pasamos los valores de las varables como argumentos:

<table><tbody><tr><td><pre><code class="language-javascript">console.log('Como una función');
function plantilla5(nombre) {
    return `${saludar()} ${nombre}!
Tu nuevo usuario es:
    ${user}
Que tengas buen día!
`;
};
let saludo5 = plantilla5('Ivan');
console.log(saludo5);</code></pre></td><td><pre><code class="language-">Como una función
Hola Ivan!
Tu nuevo usuario es:
   Zaza
Que tengas buen día!</code></pre></td></tr></tbody></table>
