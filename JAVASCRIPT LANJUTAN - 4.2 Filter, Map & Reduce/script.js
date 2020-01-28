const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

// FILTER

// LOOP FOR

// const arr = []
// for (let i = 0; i < angka.length; i++) {
//    if (angka[i] >= 3) {
//       arr.push(angka[i])
//    }
// }
// console.log(arr)





// LOOP WHILE

// const newAngka = []
// let i = 0
// while (i < angka.length) {
//    if (angka[i] >= 3) {
//       newAngka.push(angka[i])
//    }
//    i++
// }
// console.log(newAngka)





// FILTER
// Filter dengan Function Declaration
// const newArr = angka.filter(function (e) {
//    return e >= 3
// })
// console.log(newArr)



// Filter dengan Arrow Function
// const result = angka.filter(e => e >= 3)
// console.log(result)





// MAP
// kalikan semua angka dengan 2
// const newNum = angka.map(e => e * 2)
// console.log(newNum)





// REDUCE
// Jumlahkan seluruh elemen pada array
// const sum = angka.reduce((acc, cur) => acc + cur)
// console.log(sum)


// const sum1 = angka.reduce((acc, cur) => acc + cur, 5) //5 sebagai nilai awal sebenarnya reduce pasti punya nilai awal yaitu 0
// console.log(sum1)




// METHOD CHAINING
// Cari angka > 5
// kalikan 3
// jumlahkan

const hasil = angka.filter(e => e > 5).map(e => e * 3).reduce((acc, cur) => acc + cur)
console.log(hasil)

