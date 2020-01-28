// Function Declaration

// function Mahasiswa(nama, energi) {
//    let mahasiswa = {}
//    mahasiswa.nama = nama
//    mahasiswa.energi = energi

//    mahasiswa.makan = function (porsi) {
//       this.energi += porsi
//       console.log(`Halo ${this.nama}, selamat makan`)
//    }
//    mahasiswa.main = function (jam) {
//       this.energi -= jam
//       console.log(`Halo ${this.nama}, selamat bermain`)
//    }
//    mahasiswa.tidur = function (jam) {
//       this.energi += jam * 2
//       console.log(`Halo ${this.nama}, selamat tidur`)
//    }
//    return mahasiswa
// }

// let sandhika = Mahasiswa('Sandhika', 10)
// let doddy = Mahasiswa('Doddy', 20)




// Object.Create()

// const methodMahasiswa = {
//    makan: function (porsi) {
//       this.energi += porsi
//       return `Halo ${this.nama}, selamat makan`
//    },
//    main: function (jam) {
//       this.energi -= jam
//       return `Halo ${this.nama}, selamat bermain`
//    },
//    tidur: function (jam) {
//       this.energi += jam * 2
//       return `Halo ${this.nama}, selamat tidur`
//    }
// }

// function Mahasiswa(nama, energi) {
//    let mahasiswa = Object.create(methodMahasiswa)
//    mahasiswa.nama = nama
//    mahasiswa.energi = energi

//    return mahasiswa
// }

// let sandhika = Mahasiswa('Sandhika', 10)
// let doddy = Mahasiswa('Doddy', 20)





// Prototype in Heritance (Pewarisan Prototype)

// function Mahasiswa(nama, energi) {
//    this.nama = nama
//    this.energi = energi
// }

// Mahasiswa.prototype.makan = function (porsi) {
//    this.energi += porsi
//    return `Halo ${this.nama}, selamat makan`
// }
// Mahasiswa.prototype.main = function (jam) {
//    this.energi -= jam
//    return `Halo ${this.nama}, selamat bermain`
// }
// Mahasiswa.prototype.tidur = function (jam) {
//    this.energi += jam * 2
//    return `Halo ${this.nama}, selamat tidur`
// }

// let sandhika = new Mahasiswa('Sandhika', 10)
// let doddy = new Mahasiswa('Doddy', 20)




// Versi Class

class Mahasiswa {
   constructor(nama, energi) {
      this.nama = nama
      this.energi = energi
   }

   makan(porsi) {
      this.energi += porsi
      return `Halo ${this.nama}, selamat makan`
   }

   main(jam) {
      this.energi -= jam
      return `Halo ${this.nama}, selamat bermain`
   }

   tidur(jam) {
      this.energi += jam * 2
      return `Halo ${this.nama}, selamat tidur`
   }
}

let sandhika = new Mahasiswa('Sandhika', 10)
let doddy = new Mahasiswa('Doddy', 20)




// let angka = [3, 2, 4, 10, 20]

// console.log(angka.sort((a, b) => a - b))
