let ass = document.getElementsByTagName('ul')[0]
let allListItems = ass.getElementsByTagName('li')


// Untuk mendapatkan Content 
// console.log(allListItems[0].innerHTML)




// Untuk mendapatkan Durasi
// let time = (allListItems[0].getAttribute("data-duration"))
// console.log(time)




let count = 0, menit, detik, detikTotal = 0, jam

for (let i = 0; i < allListItems.length; i++) {
   let potong = allListItems[i].innerHTML.slice(0, 19)
   if (potong == 'JAVASCRIPT LANJUTAN') {
      count++
      let duration = allListItems[i].getAttribute("data-duration")
      menit = duration[0] + duration[1]
      detik = duration[3] + duration[4]
      detikTotal += menit * 60
      detikTotal += Number(detik)
   }
   // console.log('Detik Total Video : ', detikTotal)
}

// console.log(detikTotal)

jam = Math.trunc(detikTotal / 3600)
menit = Math.trunc((detikTotal - (jam * 3600)) / 60)
detik = (detikTotal - ((jam * 3600) + (menit * 60)))

// console.log('JAM : ', jam)
// console.log('MENIT : ', menit)
// console.log('DETIK : ', detik)



// console.log(count)
const jmlVideo = document.querySelector('.jumlah-video')
jmlVideo.textContent = `${count} Video`

const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} Jam : ${menit} Menit : ${detik} Detik.`


