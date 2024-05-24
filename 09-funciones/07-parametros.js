console.log('Parametros');
console.log(' ');

// Lógica OR
function confgAPI(url) {
    const defaulUrl = url || 'https://luazdesarrollo.com';
    return `${defaulUrl}`;
};
console.log(confgAPI());
console.log(confgAPI('https://byluaz.com'));
console.log(' ');

// Lógica declarativa
function confgApiDec(url = 'https://hola.com') {
    return `${url}`;
};
console.log(confgApiDec());
console.log(confgApiDec('https://chau.com'));
console.log(' ');

// Extraccion parametro
let objConf = {
    url: 'https://hola.com',
    bucket: 'amazonS3',
    port: 80,
};

function extrPar({ url }) {
    return `${url}`;
};
console.log('Url:');
console.log(extrPar(objConf));

// Parametro por defecto
function extrParDef({ url } = { url: 'https://holaPorDef.com' }) {
    return `${url}`;
};
console.log('Url por defecto:');
console.log(extrParDef());
console.log(' ');

// Varios parámetros por defecto
console.log('Varios parametros por defecto');
function varParDef(url = 'https://hola.com', bucket = 145, port = 80) {
    return `${url}/${bucket}/${port}`;
};
console.log(varParDef('https://cambio', 90));
console.log(' ');

// varios parámetro como objeto
console.log('Parametro omitido');
function varParDefObj({ url= 'https://hola.com', bucket= 145, port= 80 } = {}) {
    return `${url}/${bucket}/${port}`;
}
console.log(varParDefObj({ port: 75, bucket: 90 }));