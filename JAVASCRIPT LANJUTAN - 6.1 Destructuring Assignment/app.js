// Destructuring Variable / Assignment

// Destructuring Array

// const perkenalan = ['Halo', 'nama', 'saya', 'Sandhika Galih']

// const [salam, satu, dua, nama] = perkenalan

// Skipping items
// const [salam, , , nama] = perkenalan

// console.log(nama)

// swap items

// let a = 1
// let b = 2
// console.log(a)
// console.log(b)

// let [c, d] = [b, a]

// console.log(c)
// console.log(d)


// return value pada function
// function coba(params) {
//    return [1, 2]
// }

// const [a, b] = coba()
// console.log(a)
// console.log(b)


// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5]
// console.log(a)
// console.log(values)




// Destructuring object
// const mhs = {
//    nama: 'Sandhika Galih',
//    umur: 33
// }

// const { nama, umur } = mhs //Gak boleh sembarangan keynya kecuali kita ganti key di parameter

// console.log(nama)


// Assignment tanpa deklarasi object
// ({ nama, umur } = { nama: 'Sandhika Galih', umur: 33 })

// console.log(nama)


// Assign ke variabel baru
// const mhs = {
//    nama: 'Sandhika Galih',
//    umur: 33
// }

// const { nama: n, umur: u } = mhs
// console.log(n)



// Memberikan default value
// const mhs = {
//    nama: 'Sandhika Galih',
//    umur: 33,
//    email: 'sandhikagalih@gmail.com'    //Jika tidak ada emailnya maka program otomatis memberikan default email
// }

// const { nama, email = 'default@gmail.com', umur} = mhs
// console.log(umur)



// Memberi nilai default + assign ke variabel baru

// const mhs = {
//    nama: 'Sandhika Galih',
//    umur: 33,
//    email: 'Sandhikagalih@gmail.com'
// }

// const { nama: n, umur: u, email: e = 'email@default.com' } = mhs
// console.log(e)



// Rest Parameter
// const mhs = {
//    nama: 'Sandhika Galih',
//    umur: 33,
//    email: 'sandhikagalih@gmail.com'
// }

// const { nama, ...values } = mhs
// console.log(nama)  //Sandhika Galih
// console.log(values)  //{ umur: 33, email: 'sandhikagalih@gmail.com' }




// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// Banyak digunakan di Framework seperti Express
const mhs = {
   id: 123,
   nama: 'Sandhika Galih',
   umur: 33,
   email: 'sandhikagalih@gmail.com'
}

function getIdMhs({ id }) {
   return id
}

console.log(getIdMhs(mhs))
