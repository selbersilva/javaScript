let num = [5, 8 , 4, 9, 2]

num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)
if(pos == -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(' O vaor está na posição $[pos]')
}