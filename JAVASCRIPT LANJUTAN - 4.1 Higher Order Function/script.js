// Contoh 1

// function kerjakanTugas(mataKuliah, selesai) {
//    console.log(`Mulai mengerjakan tugas ${mataKuliah}...`)
//    selesai()
// }

// function selesai() {
//    alert(`Selesai mengerjakan tugas`)
// }

// kerjakanTugas('pemrograman web', selesai)



// Contoh 2
// setTimeout
// setInterval
// addEventListener    




// Contoh 3
// Closure

// function ucapkanSalam(waktu) {
//    return function (nama) {
//       console.log(`Halo ${nama} selamat ${waktu},semoga harimu menyenangkan!`)
//    }
// }

// let selamatPagi = ucapkanSalam('Pagi')
// console.log(selamatPagi('Sandhika'))




// Contoh 4

// for (let i = 0; i < 10; i++) {
//    console.log(i)
// }




// function repeatLog(n) {
//    for (let i = 0; i < n; i++) {
//       console.log(i)
//    }
// }

// repeatLog(10)





// HIGHER ORDER FUNCTION
function repeat(n, action) {
   for (let i = 0; i < n; i++) {
      action(i)
   }
}

repeat(10, console.log)
repeat(3, alert)


