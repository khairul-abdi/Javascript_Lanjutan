// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'))



// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.outerHTML.includes('JAVASCRIPT LANJUTAN'))
   // Untuk pengambilan nilai pada text bisa 1. textContent   2.innerHTML   3.innerText   4.outerHTML   5.outerText



   // ambil durasi masing2 video
   .map(item => item.dataset.duration)



   // ubah durasi menjadi int, ubah menit menjadi detik
   .map(waktu => {
      // 10:30  -> [10, 30]
      const parts = waktu.split(':')

      if (parts.length == 2) {
         return parts[0] * 60 + Number(parts[1])
      } else if (parts.length == 3) {
         return (parts[0] * 3600) + (parts[1] * 60) + Number(parts[2])
      }
   })



   // jumlahkan semua detik
   .reduce((total, detik) => total + detik)



// ubah formatnya jadi jam menit detik
const jam = Math.trunc(jsLanjut / 3600)
jsLanjut -= jam * 3600
const menit = Math.trunc(jsLanjut / 60)
jsLanjut -= menit * 60
const detik = jsLanjut


// simpan di DOM
const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} Jam : ${menit} Menit : ${detik} Detik.`


const jmlVideo = videos.filter(item => item.outerHTML.includes('JAVASCRIPT LANJUTAN')).length
const pJmlVideo = document.querySelector('.jumlah-video')
pJmlVideo.textContent = jmlVideo


