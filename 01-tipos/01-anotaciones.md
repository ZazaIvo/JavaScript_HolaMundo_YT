# Tipos de variables

Para definir variables debemos utilizar la palabra reservada let o var. Para empezar usaremos let.

```javascript
let nombre = "Hola mundo";
```

No hace falta que al crear una variable contenga un valor. Podemos cearla vacia:

```javascript
let nombre;
```

Y solo nos mostrará un console.log como undefine.

## Nombres

Los nombre de las variables deben empezar con letras o con un guión bajo. Tampoco se pueden usar palabras reservadas que se utilizan en el funcionamiento de javaScript

### Convenciones:

1- UpperCameCase: La primera letra empieza con mayuscula y si hay otra palabra debe estar seguida y empezar con mayusculas. En algunos lenguajes para nombrar constantes o clases.

```javascript
let NombreCompleto;
```

2- camelCase: La primera palabra empieza con minúscula y la siguientes palabras si las hay con mayúsculas. La más usada en JavaScript.

```javascript
let nombreCompleto;
```

3- snake_case: todas las palabras en minúsculas separadas por un guión bajo.

```javascript
let nombre_completo;
```

En JavaScript es case sensible, es decir que no es lo mismo nombreCompleto y NombreCompleto.

## Asiganar valor

Una variable se puede definir vacia y luego en el mismo nivel llamarla y asignarle el nuevo valor que queremos.

```javascript
let apellido;
apellido = "Azzarello";
```

Vemos que una vez que ya esta definida con la palabra reservada _**let**_ no debemos volver a usar la palabra reservada, solo el nombre.

### Convención de sintaxis.

Se puede definir o inicializar variables en linea de la siguiente manera:

```javascript
let nombre, apellido;
```

Pero por convención se declara o inicializa cada variable en una linea distinta:

```javascript
let nombre;
let apellido;
```
