// Callback
// Synchronous Callback
// function halo(nama) {
//   alert(`Halo, ${nama}`)
// }

// function tampilkanPesan(callback) {
//   const nama = prompt('Masukkan Nama : ')
//   callback(nama)
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`))


const mhs = [
  {
    nama: "Sandhika Galih",
    nrp: "0454343430",
    email: "sandhikagalih@gmail.com",
    jurusan: "Teknik Informatika",
    idDosenWali: 1
 },
 {
    nama: "Doddy Ferdiansyah",
    nrp: "12344334",
    email: "doddy@gmail.com",
    jurusan: "Teknik Informatika",
    idDosenWali: 2
 },
 {
    nama: "Erik",
    nrp: "64545455",
    email: "erik@gmail.com",
    jurusan: "Teknik Informatika",
    idDosenWali: 2
 },
]

// for (const [i, data] of mhs.entries()) {
//   console.log(`${data.nama} adalah mahasiswa ke ${i+1}`);
// }
  
  
// for (const i in mhs) {
//   console.log(`${mhs[i].nama} adalah mahasiswa ke ${Number(i)+1}`);
// }


console.log('mulai');
mhs.forEach(m => console.log(m.nama))
console.log('selesai');
