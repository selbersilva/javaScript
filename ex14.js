let valores = [5, 3, 7, 9, 1]

/*for (let pos = 0; pos < valores.length;  pos++ ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
