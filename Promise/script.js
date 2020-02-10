// // 820758bb
// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=820758bb&s=avengers',
//   success: movies => console.log(movies),
//   error: err => console.log(err)
// })

// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response))
//     }
//   } else {
//     console.log(xhr.responseText)
//   }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=820758bb&s=avengers')
// xhr.send()

// const movies = fetch('http://www.omdbapi.com/?apikey=820758bb&s=avengers')
//   .then(response => response.json())
//   .then(response => console.log(response))

/*
Promise
Object yang merepsentasikan keberhasilan atau kegagalan sebuah event yang asynchronous di masa yang kaan datang
janji (terpenuhi// ingkar)
states (fulfiled // rejected // pending)
callback (resolve / reject / finally)
aksi (then / catch)
*/

// let ditepati = false

// contoh 1
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('Janji telah ditepati')
//   } else {
//     reject('Ingkar janji')
//   }
// })

// janji1
//   .then(response => console.log('OK : ' + response))
//   .catch(response => console.log('NOT OK : ' + response))

// contoh 2

// const janji2 = new Promise((resolve, reject) => {
//   if( ditepati ) {
//     setTimeout(() => {
//       resolve('Ditepati setelah beberapa waktu!')
//     }, 2000)
//   } else {
//     setTimeout(() => {
//       resolve('Tidak ditepati setelah beberapa waktu!')
//     }, 2000)
//   }
// })

// console.log('mulai')
// // console.log(janji2.then(() => console.log(janji2)))
// janji2
//   .then(response => console.log('OK : ' + response))
//   .catch(response => console.log('NOT OK : ' + response))
// console.log('selesai')




// contoh 3

// const janji3 = new Promise((resolve, reject) => {
//   if( ditepati ) {
//     setTimeout(() => {
//       resolve('Ditepati setelah beberapa waktu!')
//     }, 2000)
//   } else {
//     setTimeout(() => {
//       resolve('Tidak ditepati setelah beberapa waktu!')
//     }, 2000)
//   }
// })

// console.log('mulai')
// janji2
//   .finally(() => console.log('Selesai Menunggu'))
//   .then(response => console.log('OK : ' + response))
//   .catch(response => console.log('NOT OK : ' + response))
// console.log('selesai')



// Promise.all()

const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'Avengers',
      sutradara: 'Sandhika',
      pameran: 'Doddy, Erik'
    }])
  }, 1000)
})

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      kota: 'Bandung',
      temperatur: 26,
      kondisi: 'Cerah berawan'
    }])
  }, 500)
})

// film.then(response => console.log(response))
// cuaca.then(response => console.log(response))


// Promise.all([film, cuaca])
//   .then(response => console.log(response))


Promise.all([film, cuaca])
  .then(response =>{
    const [film, cuaca] = response
    console.log(film)
    console.log(cuaca)
  })