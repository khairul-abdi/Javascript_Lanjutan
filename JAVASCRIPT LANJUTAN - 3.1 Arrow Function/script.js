// Function Expression

// let tampilNama = function (nama) {
//    return `Halo, ${nama}`
// }

// console.log(tampilNama('Sandhika'))



// Arrow Function
// Contoh 1 Parameter boleh menggunakan buka kurung di parameternya ataupun tidak menggunakan buka kurung

// let tampilNama = nama => {
//    return `Halo ${nama}`
// }
// console.log(tampilNama('Sandhika'))



// Implisit return

// let tampilNama = nama => `Halo ${nama}`
// console.log(tampilNama('Sandhika'))



// Arrow Function tanpa ada parameter

// let hello = () => `Hello World`
// console.log(hello())




// Contoh 2 Parameter dan harus menggunakan buka kurung di parameternya

// const tampilNama = (nama, waktu) => `Selamat ${waktu}, ${nama}`
// console.log(tampilNama('Erik', 'Malam'))




// Map dengan Function Declaration

let mahasiswa = ['Sandhika Galih', 'Doddy Ferdiansyah', 'Erik']

// let jumlahHuruf = mahasiswa.map(function (nama) {
//    return nama.length
// })

// console.log(jumlahHuruf)





// Map dengan Arrow Function

// let jumlahHuruf = mahasiswa.map(nama => nama.length)
// console.log(jumlahHuruf)




// Map dengan Arrow Function dan Hasilnya bentuk objek

let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }))
// console.log(jumlahHuruf)   //Untuk di browser || di terminal namun berantakan
// console.table(jumlahHuruf)   //Untuk di browser agar berbentuk table
