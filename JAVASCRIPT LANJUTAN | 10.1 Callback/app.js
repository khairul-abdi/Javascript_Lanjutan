// Callback
// Synchronous Callback
// function halo(nama) {
//    alert(`Halo, ${nama}`)
// }

// function tampilkanPesan(callback) {
//    const nama = prompt('Masukkan Nama : ')
//    callback(nama)
// }

// tampilkanPesan(halo)



// Anonymous Fucntion

// function tampilkanPesan(callback) {
//    const nama = prompt('Masukkan Nama : ')
//    callback(nama)
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`))



// const mhs = [
//    {
//       nama: "Sandhika Galih",
//       nrp: "0454343430",
//       email: "sandhikagalih@gmail.com",
//       jurusan: "Teknik Informatika",
//       idDosenWali: 1
//    },
//    {
//       nama: "Doddy Ferdiansyah",
//       nrp: "12344334",
//       email: "doddy@gmail.com",
//       jurusan: "Teknik Informatika",
//       idDosenWali: 2
//    },
//    {
//       nama: "Erik",
//       nrp: "64545455",
//       email: "erik@gmail.com",
//       jurusan: "Teknik Informatika",
//       idDosenWali: 2
//    },
// ]

// console.log('Mulai')
// mhs.forEach(m =>{
//    for (let i = 0; i < 10000000; i++) {
//       let date = new Date()  //Untuk pengecoh 
//    }
//    console.log(m.nama)
// })
// console.log('Selesai')



// Asynchronous Callback
function getDataMahasiswa(url, success, error) {
   let xhr = new XMLHttpRequest()

   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
         if (xhr.status === 200) {
            success(xhr.response)
         } else if (xhr.status === 404) {
            error()
         }
      }
   }

   xhr.open('get', url)
   xhr.send()
}


// CARA 1
// Menggunakan Callback //Modular
// function success(result) {
//    // console.log(JSON.parse(result))
//    const mhs = JSON.parse(result)
//    mhs.forEach(m => console.log(m.nama));
// }

// function error(e) {
//    e.responseText
// }


// console.log('Mulai')
// getDataMahasiswa('data/mahasiswa.json',success, error)
// console.log('Selesai')





// CARA 2
// console.log('Mulai')
// getDataMahasiswa('data/mahasiswa.json', result => {
//    // console.log(JSON.parse(result))
//    const mhs = JSON.parse(result)
//    mhs.forEach(m => console.log(m.nama));

// }, (e) => console.log(e.responseText))
// console.log('Selesai')




// JQuery

// console.log('Mulai')
// $.ajax({
//    url: 'data/mahasiswa.json',
//    success: (mhs) => {
//       // console.log(result)
//       mhs.forEach(m => console.log(m.nama));
//    },
//    error: (e) => console.log(e.responseText)
// })
// console.log('Selesai')