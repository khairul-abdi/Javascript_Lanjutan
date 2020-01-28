// for..of
// const mhs = ['Sandhika', 'Galih', 'Doddy']

// for (let i = 0; i < mhs.length; i++) {
//    console.log(mhs[i])
// }

// mhs.forEach(m => console.log(m))

// for (const i of mhs) {
//    console.log(i)
// }


// String
// const nama = 'Sandhika'
// for (const n of nama) {
//   console.log(n) 
// }

// nama.forEach(e => {    Error: nama.forEach is not a function (Karna forEach hanya bisa digunakan untuk ARRAY)
//    console.log(e)
// });


// Menfaatkan Index (Memasukkan Index)
// const mhs = ['Sandhika', 'Galih', 'Doddy']
// mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i + 1}`))

// for (const [i, m] of mhs.entries()) {
//    console.log(`${m} adalah mahasiswa ke-${i + 1}`)
// }



// NodeList
// const liNama = document.querySelectorAll('.nama')
// console.log(liNama)


// liNama.forEach(m => console.log(m.outerText))


// arguments
// function jumlahkanAngka() {
//    // arguments.reduce((a, i) => a + i)    //Tidak bisa untuk meloop arguments
//    // arguments.forEach(e => { jumlah += e });   //Tidak bisa juga
//    
//    let jumlah = 0
//    for (const i of arguments) {
//       jumlah += i
//    }
//    return jumlah
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5))



// for..in
// arguments  //Bisa digunakan karna arguments itu object

// function jumlahkanAngka() {
   
//    let jumlah = 0
//    for (const i in arguments) {
//       jumlah += arguments[i]
//    }
//    return jumlah
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5))


const mhs = {
   nama: 'Sandhika',
   umur: 33,
   email: 'sandhikagalih@gmail.com'
}

for (const key in mhs) {
  console.log(mhs[key])
}

