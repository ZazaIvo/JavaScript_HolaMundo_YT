let i = 0;
while (i<6){
    i++;
    if (i === 2){
        continue;
    } else if (i === 4){
        continue;
    };
    console.log(i);
};
i = 0;
console.log('Valores Pares:');
while (i<10){
    i++;
    if (i % 2 != 0){
        continue;
    };
    console.log(i);
};
console.log('Para Break:');
i = 0;
while (i<6){
    i++;
    if (i === 2){
        continue;
    } else if (i === 4){
        break;
    };
    console.log(i);
};