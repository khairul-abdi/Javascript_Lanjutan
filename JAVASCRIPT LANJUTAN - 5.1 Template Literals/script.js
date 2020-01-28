// Template Literal || Template String
const nama = 'Sandhika'
const umur = 33
console.log(`Halo, nama saya ${nama}, saya ${umur} tahun.`)




// Embedded Expression
// console.log(`${1 + 1}`)
// console.log(`${alert('Halo!')}`)

const x = 10
console.log(`${x % 2 == 0 ? 'Genap' : 'Ganjil'}`)



// HTML Fragments
const mhs = {
   nama: 'Sandhika Galih',
   umur: 33,
   nrp: '043040023',
   email: 'sandhikagalih@unpans.ac.id'
}

const el = `<div className="mhs">
   <h2>${mhs.nama}</h2>
   <span className="nrp">${mhs.nrp}</span>
</div>`

console.log(el)