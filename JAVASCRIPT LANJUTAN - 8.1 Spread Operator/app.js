// Spread Operator
// memecah iterables menjadi single element

// const mhs = ['Sandhika', 'Doddy', 'Erik']
// console.log(...mhs)
// console.log(...mhs[0])



// Menggabungkan 2 array
// const mhs = ['Sandhika', 'Doddy', 'Erik']
// const dosen = ['Ade', 'Hendra', 'Wenda']
// const orang = [...mhs, ...dosen]
// console.log(orang)


// const orang = [...mhs, 'Aji', ...dosen]
// console.log(orang)


// const orang = mhs.concat(dosen) //Tidak powerfull ketimbang dengan Spread Operator
// console.log(orang)




// meng-copy array
// const mhs = ['Sandhika', 'Doddy', 'Erik']
// const mhsCopy = mhs   //Tidak bisa meng-Copy array
// mhsCopy[0] = 'Fajar'
// console.log(mhs) 


// const mhsCopy = [...mhs]   //Bisa digunakan untuk meng-Copy array
// mhsCopy[0] = 'Fajar'
// console.log(mhs)
// console.log(mhsCopy)


// const liMhs = document.querySelectorAll('li')
// console.log(liMhs[0].textContent)
// const mhs = []

// for (let i = 0; i < liMhs.length; i++) {
//    mhs.push(liMhs[i].textContent)
// }

// console.log(mhs)


// const mhs = [...liMhs].map(m => m.textContent)
// console.log(mhs)



const nama = document.querySelector('.nama')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')
// console.log(huruf)

nama.innerHTML = huruf

