// Rest Parameter

// function myFunc(...myArgs) { 
//    return myArgs
// }

// console.log(myFunc(1, 2, 3, 4, 5))




// function jumlahkan(...myArgs) { 
   // return myArgs.reduce((a, b) => a + b)

   // let jumlah = 0
   // for (const i of myArgs) {
   //    jumlah += i    
   // }
   // return jumlah


// }

// console.log(jumlahkan(1, 2, 3, 4, 5))


// Array Destructuring
// const kelompok1 = ['Sandhika', 'Doddy', 'Erik', 'Fajar', 'Hendra']

// const ketua = kelompok1[0]
// const wakil = kelompok1[1]
// const anggota = [kelompok1[2], kelompok1[3], kelompok1[4]]
// console.log(ketua, wakil, anggota)



// const [ketua, wakil, ...anggota] = kelompok1
// console.log(ketua, wakil, anggota)



// Object Destructuring
// const team = {
//    pm: 'Sandhika',
//    frontEnd1: 'Doddy',
//    frontEnd2: 'Erik',
//    backEnd: 'Fajar',
//    ux: 'Hendra',
//    devOps: 'Ferry'
// }

// const { pm, ...myTeam } = team
// console.log(myTeam)
// console.log(pm)




// Filtering
function filterBy(type, ...values) {
   return values.filter(v => typeof v === type)
}

console.log(filterBy('number', 1, 2, 'Sandhika', false, 10, true, 'Doddy'))
console.log(filterBy('string', 1, 2, 'Sandhika', false, 10, true, 'Doddy'))
console.log(filterBy('boolean', 1, 2, 'Sandhika', false, 10, true, 'Doddy'))


