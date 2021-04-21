let num = [5,8,4]
num.push(7)
num[4] = 9

num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O quinto valor é ${num[4]}`)
let pos = num.indexOf(4)
console.log(`O valor 4 esta na posição ${pos}`)