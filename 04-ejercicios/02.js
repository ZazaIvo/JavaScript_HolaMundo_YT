/**
 * Nombre: ancho x alto
 * 8K 7680 x 4320
 * 4K 3840 x 2130
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */
// Método con if - else if
let ancho;
let alto;
let resol;
function nombreResolucionIf(a, h) {
    if (a >= 7680 && h >= 4320) {
        return '8K';
    } else if (a >= 3840 && h >= 2130) {
        return '4K';
    } else if (a >= 1920 && h >= 1080) {
        return 'FHD';
    } else if (a >= 1280 && h >= 720) {
        return 'HD';
    };
};
ancho = 7680;
alto = 4320;
resol = nombreResolucionIf(ancho, alto);
console.log('Método If - Else If');
console.log('Para', ancho, 'x', alto);
console.log('La resolución es: ', resol);

// Metodo con Switch
function nombreResolucionSwitch(a, h) {
    switch (true) {
        case (a >= 7680 && h >= 4320):
            return '8K';
            break;
        case (a >= 3840 && h >= 2130):
            return '4K';
            break;
        case (a >= 1920 && h >= 1080):
            return 'FHD';
            break;
        case (a >= 1280 && h >= 720):
            return 'HD';
            break;
        default :
        return 'Error';
    };
};
resol = nombreResolucionSwitch (ancho, alto);
console.log('Método Switch');
console.log('Para', ancho, 'x', alto);
console.log('La resolución es: ', resol);
