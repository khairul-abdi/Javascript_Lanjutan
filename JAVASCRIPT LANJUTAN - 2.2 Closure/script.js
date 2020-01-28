// function init() {
//    let nama = 'Sandhika'
//    function tampilNama() {
//       console.log(nama)
//    }
//    tampilNama()
// }
// init()





// SUDAH MENGGUNAKAN INPUTAN DARI User Melalui prompt

// function init() {
//    return function (nama) {
//       console.log(nama)
//    }
// }

// let panggilNama = init()
// panggilNama(prompt('Masukkan Nama : '))   





//Contoh 1. Function factories

// function init() {
//    // let nama = 'Sandhika'
//    return function (nama) {
//       console.log(nama)
//    }
// }
// let panggilNama = init()
// panggilNama('Sandhika')





//Contoh 2. Function factories

// function ucapkanSalam(waktu) {
//    return function (nama) {
//       console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`)
//    }
// }

// ucapkanSalam('Siang')('Sandhika')  //Bisa juga seperti ini aku dapat dari komentar di channel unpas (Dhea Zautha)
// let selamatPagi = ucapkanSalam('Malam')('Sandhika')
// let selamatSiang = ucapkanSalam('Siang')
// let selamatMalam = ucapkanSalam('Malam')

// selamatPagi('Sandhika')




// Private Method
// counter di Line 74 tidak mempengaruhi hoisting di dalam function
// SEPERTINYA IIFE (IMMEDIATLY INVOKE FUNCTION EXPRESSION) 


// let add = (function () {
//    let counter = 0
//    return function () {
//       return ++counter
//    }
// })()

// counter = 10

// console.log(add())
// console.log(add())
// console.log(add())