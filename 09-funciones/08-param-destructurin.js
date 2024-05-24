console.log('Destructuring');
console.log(' ');

const configObj = {
    url: 'https://hola.com',
    router: 2700,
    port: 80,
    direccion: {
        calle: 'Las palmeras',
        casa: 2,
        puerta: '3D',
        loc: 'Colunga',
    },
};

// Para objetos
console.log(('Object Destructuring').toUpperCase());
function webServer1(config) {
    const url = config.url;
    return url;
};
console.log('La url:');
console.log(webServer1(configObj));
console.log(' ');

function webServer2(config) {
    const { url } = config;
    return url;
};
console.log('La url:');
console.log(webServer2(configObj));
console.log(' ');

function webServer4({ url, direccion: { calle }, direccion: { puerta }, direccion: { loc } }) {
    return `
    Url: ${url}
    Calle: ${calle}, ${puerta} - ${loc}`;
};
console.log(webServer4(configObj));
console.log(' ');

function webServer5(config) {
    const { url } = config;
    const { direccion: { calle } } = config;
    const { direccion: { puerta } } = config;
    const { direccion: { loc } } = config;
    return `
    Url: ${url}
    Calle: ${calle}, ${puerta} - ${loc}`;
};
console.log(webServer5(configObj));
console.log(' ');

// Para arreglos
console.log(('Array Destructuring').toUpperCase());
// Arreglo
const configArray = [
    'https://hola.com',
    2700,
    80,
    [
        'Las palmeras',
        2,
        '3D',
        'Colunga',
    ],
];

// Funcion con Distructuring
console.log('Destructuring como variables');
function webServer6(config) {
    const [url, bucket, port] = config;
    return url;
};
console.log('Url:', webServer6(configArray));
console.log(' ');

console.log('Destructuring como parámetros');
function webServer7([url, bucket, port]) {
    return url;
};
console.log('Url:', webServer7(configArray));
console.log(' ');

console.log('Destructuring con ...rest');
function webServer8([url, bucket, port, ...rest]) {
    return rest;
};
console.log('Resto de elementos:', webServer8(configArray));