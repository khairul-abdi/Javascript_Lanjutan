// console.log(nama) //ReferenceError: nama is not defined




// console.log(nama)    //undefined
// var nama = 'Sandhika'




// var nama = 'Sandhika'
// console.log(nama)   //Sandhika




// Creation Phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window




// Execution Phase

// console.log(sayHello())

// var nama = 'Sandhika'
// var umur = 33

// function sayHello() {
//    return `Halo,nama saya ${nama}, saya ${umur} tahun.`
// }




// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting



// var nama = 'Sandhika Galih'
// var username = '@sandhikagalih'

// function cetakURL(username) {
//    var instagramURL = 'http://instagram.com/'
//    return instagramURL + username
// }

// console.log(cetakURL(username))




// Menggunakan arguments

// var nama = 'Sandhika Galih'
// var username = '@sandhikagalih'
// function cetakURL() {

//    var instagramURL = 'http://instagram.com/'
//    return instagramURL + arguments[0]
// }

// console.log(cetakURL('@doddyferdiansyah'))



// function a() {
//    console.log('ini a')

//    function b() {
//       console.log('ini b')

//       function c() {
//          console.log('ini c')
//       }

//       c()
//    }

//    b()

// }

// a()

// ini a
// ini b
// ini c




// function a() {

//    function b() {

//       function c() {
//          return 'ini c'
//       }

//       console.log(c())
//       return 'ini b'
//    }

//    console.log(b())

//    return 'ini a'
// }

// console.log(a())

// ini c
// ini b
// ini a





// function satu() {
//    var nama = 'Sandhika'
//    console.log(nama)
// }

// function dua() {
//    console.log(nama)
// }

// console.log(nama)
// var nama = 'Erik'
// satu()
// dua('Doddy')
// console.log(nama)


// Modifikasi menggunakan return 

// function satu() {
//    var nama = 'Sandhika'
//    return nama
// }

// function dua() {
//    return nama
// }

// console.log(nama)
// var nama = 'Erik'
// console.log(satu())
// console.log(dua('Doddy'))
// console.log(nama)