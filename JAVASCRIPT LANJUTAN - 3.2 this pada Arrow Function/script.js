// Konsep this pada Arrow Function


// Constructor Function

// let Mahasiswa = function () {
//    this.nama = 'Sandhika'
//    this.umur = 33,
//       this.sayHello = function () {
//          console.log(`Hello, nama saya ${this.nama}, saya ${this.umur} tahun.`)
//       }
//    // console.log(this)
// }

// let sandhika = new Mahasiswa()  




// Arrow Function
// tidak bisa begitu saja membuat arrow function pada kasus contoh Constructor gk bisa di buat jadi arrow 

// const Mahasiswa = function () {
//    this.nama = 'Sandhika'
//    this.umur = 33,
//       this.sayHello = () => {
//          console.log(`Hello, nama saya ${this.nama}, saya ${this.umur} tahun.`)
//       }
//    // console.log(this)
// }

// let sandhika = new Mahasiswa()





// Object Literal
// undefined jika method diganti menjadi arrow function

// let mhs1 = {
//    nama: 'Sandhika',
//    umur: 33,
//    sayHello: function () {
//       console.log(`Hello nama saya ${this.nama}, saya ${this.umur} tahun.`)
//       console.log(this)
//    }

// }





// Context this pada setInterval menggunakan function declaration dia jadi hoisting sehingga menghasilkan nilai undefined
// undefined++ menjadi NaN namun menggunakan Arrow Function maka tidak ada hoisting 

// let Mahasiswa = function () {
//    this.nama = 'Sandhika'
//    this.umur = 33,
//       this.sayHello = function () {
//          console.log(`Hello, nama saya ${this.nama}, saya ${this.umur} tahun.`)
//       }

//    setInterval(() => {
//       console.log(this.umur++)
//       // console.log(this)
//    }, 500)
// }

// let sandhika = new Mahasiswa()





// Implementasi Arrow Function pada DOM

// const box = document.querySelector('.box')

// box.addEventListener('click', function () {
//    let satu = 'size'
//    let dua = 'caption'

//    if (this.classList.contains(satu)) {
//       [satu, dua] = [dua, satu]
//    }

//    this.classList.toggle(satu)
//    setTimeout(() => {
//       this.classList.toggle(dua)
//    }, 600)
// })



let arr = [1, 3]

// let temp = arr[0]
// arr[0] = arr[1]
// arr[1] = temp

arr[0] = arr[1]
arr[1] = arr[0] - (arr[0] - arr[1])

console.log(arr)
