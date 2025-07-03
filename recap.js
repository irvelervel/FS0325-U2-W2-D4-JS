// JS RECAP!

// VARIABILI
// una variabile è un contenitore per un valore

let myVar = 1
myVar = 2

const myURL = 'https://epicode.com'

// QUALI SONO I TIPI DI DATO PRIMITIVI?
// - stringhe
// - numeri
// - booleani
// - undefined
// - null

// anche se una variabile permette la riassegnazione del suo valore,
// una cosa genericamente "tabù" è il cambio di TIPO

let myName = 'Giangiorgio'
let lunghezza = myName.length // 11
console.log(myName.slice(0, 4)) // 'Gian'

// QUALI SONO I TIPI DI DATO NON PRIMITIVI?
// ARRAY
// un array è una lista (collezione) di valori
const pets = ['Gatto', 'Cane', 'Orso']
const numbers = [2, 6, 19]
const arrOfArr = [['s'], ['t'], ['e']]

// cosa si può fare con un array?
// si possono recuperare individualmente gli elementi
pets[0] // 'Gatto'
pets[1] // 'Cane'
pets[2] // 'Orso'

// si possono riassegnare individualmente le posizioni a nuovi valori
pets[2] = 'Fenicottero'

// si può inserire elementi nuovi
pets.push('Salamandra')
pets.unshift('Criceto')

// si possono rimuovere elementi
pets.pop() // rimuove l'ultimo
pets.shift() // rimuove il primo
pets.splice(2, 1) // dalla posizione 2, rimuovo 1 elemento

// anche gli array, come le stringhe, hanno una lunghezza
pets.length

// OGGETTI
// un oggetto in JS è un contenitore di COPPIE CHIAVE:VALORE
// serve a rappresentare in modo dettagliato una controparte digitale
// di un'entità della vita reale

const city = {
  name: 'San Lorenzo Isontino', // questa è una PROPRIETÀ
  population: 2000, // chiave: valore (key: value)
  area: {
    location: 'FVG',
    province: 'GO',
  },
  mainStreets: ['Corso Italia', 'Via Roma'],
}

// gli oggetti si possono esplorare con due tecniche:
// a) DOT NOTATION
city.population // 2000
city.area.province // 'GO'
// b) SQUARE BRACKETS NOTATION
city['name'] // 'San Lorenzo Isontino'

const qualcosa = 'population'
city.qualcosa // undefined
city[qualcosa] // 2000

// per esplorare proprietà complesse annidate si fa a capo delle diverse tecniche
city.mainStreets[1] // 'Via Roma'

city.population = 2500
city.mayor = 'Topo Gigio'
delete city.mayor // elimino la chiave "mayor"

// attenzione al processo di duplicazione di una variabile in JS!
// VARIABILI PRIMITIVE
let a = 10
let b = a
a = 0
// b vale sempre 10

// VARIABILI COMPLESSE
let objA = { n: 10 }
let objB = objA // NON CREA UNA "VERA" COPIA
objA.n = 0
// è cambiato anche objB.n, è diventato 0 anche lui! perchè erano semplicemente
// due riferimenti allo stesso oggetto in memoria

// per fare una copia corretta di un oggetto:
// a)
let objC = Object.assign({}, objA)
// b)
let objD = { ...objA }

// LOGICA CONDIZIONALE
// Nella risoluzione di un problema spesso è necessario prendere delle decisioni
// sulla base di valori, comparazioni, variabili etc.

const me = {
  name: 'Stefano',
  greyHair: true,
}

if (me.name === 'Stefano') {
  console.log('CIAO!')
}

if (!me.greyHair) {
  // la condizione è che me.greyHair sia FALSE
  console.log('aspetta e vedrai!')
} else {
  console.log("te l'avevo detto!")
}

// TERNARY OPERATOR
let catName = city.mayor === 'Topo Gigio' ? 'Lorenzo' : 'Giovanni'

// tradotto con if/else, sarebbe:
// let catName
// if(city.mayor === 'Topo Gigio'){
//     catName = 'Lorenzo'
// } else {
//     catName = 'Giovanni'
// }

// è infine possibile collegare diverse condizioni insieme secondo due logiche:
// LOGICA AND (&&)
// due condizioni collegate da && torneranno complessivamente TRUE solamente se
// ENTRAMBE sono TRUE, altrimenti torneranno sempre FALSE

// LOGICA OR (||)
// due condizioni collegate da || torneranno complessivamente FALSE solamente se
// ENTRAMBE sono FALSE, altrimenti torneranno sempre TRUE

// TRUTHY/FALSY
// in JS anche se un valore non è esplicamente true/false può venire utilizzato
// come condizioni
if ('Stefano') {
  // questo blocco verrebbe eseguito!
}

if (200) {
  // questo blocco verrebbe eseguito!
}

// in JS tutti i valori esistenti hanno significato di TRUTHY a parte:
// - false
// - null
// - undefined
// - 0 e -0
// - '' (stringa vuota)
// - NaN (Not a Number, es. 'Stefano' / 50)

let yourName = 'Davide'

if (yourName) {
  console.log('CIAO!')
}

let number = 5
number = number / 5
number = number - 1

if (number) {
  // NON ENTRO QUI DENTRO! perchè number vale 0
}

// C I C L I
// un ciclo è una struttura in grado di ripetere l'esecuzione di un blocco di istruzioni

// WHILE
// si riesegue un'operazione fino a che non si raggiunge il risultato desiderato
// es. fare 6 con un dado

let lancioDado = 0

while (lancioDado !== 6) {
  // Math.random() * 6 // 0.000001 - 0.9999999 -> 0.000006 - 5.9999999
  lancioDado = Math.ceil(Math.random() * 6) // 0.000006 - 5.9999999 -> 1 - 6
  console.log(lancioDado)
}

console.log('sono uscito dal ciclo while!')

// FOR
// esegue un blocco di istruzioni un numero assolutamente PRECISO e PREDETERMINATO
// di volte

for (let i = 0; i < 10; i++) {
  // questo blocco si ripeterà 10 volte
  // la prima volta i vale 0
  // la seconda volta i vale 1
  // la terza volta i vale 2
  // la quarta volta i vale 3
  // ...
  // la decima volta i vale 9
  console.log(i)
}

// è un alleato perfetto per esplorare gli array in JS
// perchè se la i parte da 0 e arriva fino a raggiungere (ma senza mai toccare)
// la lunghezza dell'array, ecco che la i diventa SEMPRE un indice valido per gli
// elementi di quell'array, dal primo all'ultimo!
const array = ['Mario', 'Zelda', 'Link', 'Jill', 'Astro']

for (let i = 0; i < array.length; i++) {
  // la i è 0, 1, 2 etc.
  // array[i] è 'Mario', 'Zelda, 'Link' etc.
  console.log(array[i])
}

array.forEach((character, i) => {
  console.log('CIAO', character, i)
})

// FUNZIONI
