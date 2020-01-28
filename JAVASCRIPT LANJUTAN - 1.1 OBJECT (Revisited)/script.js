// Cara untuk membuat object pada javascript
// 1. Object Literal

// let mahasiswa1 = {
//    nama: 'Sandhika',
//    energi: 10,
//    makan: function (porsi) {
//       this.energi += porsi
//       console.log(`Halo ${this.nama}, Selamat makan!`)
//    }
// }


// let mahasiswa2 = {
//    nama: 'Doddy',
//    energi: 20,
//    makan: function (porsi) {
//       this.energi += porsi
//       console.log(`Halo ${this.nama}, Selamat makan!`)
//    }
// }



// 2. Function Declaration

// let Mahasiswa = (nama, energi) => {
//    let mahasiswa = {}
//    mahasiswa.nama = nama
//    mahasiswa.energi = energi
//    mahasiswa.makan = function (porsi) {
//       this.energi += porsi
//       console.log(`Halo ${this.nama}, Selamat makan!`)
//    }

//    mahasiswa.main = function (jam) {
//       this.energi -= jam
//       console.log(`Halo ${this.nama}, Selamat bermain!`)
//    }
//    return mahasiswa
// }

// let sandhika = Mahasiswa('Sandhika', 10)
// let doddy = Mahasiswa('Doddy', 20)




// 3. Constructor Function
// keyword new

let Mahasiswa = function (nama, energi) {
   this.nama = nama
   this.energi = energi
   this.makan = function (porsi) {
      this.energi += porsi
      console.log(`Halo ${this.nama}, Selamat makan!`)
   }

   this.main = function (jam) {
      this.energi -= jam
      console.log(`Halo ${this.nama}, Selamat bermain!`)
   }
}

let sandhika = new Mahasiswa('Sandhika', 10)
let doddy = new Mahasiswa('Doddy', 20)







