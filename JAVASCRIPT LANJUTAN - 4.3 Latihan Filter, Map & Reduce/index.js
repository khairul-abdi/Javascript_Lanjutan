// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'))


// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
   // Untuk pengambilan nilai pada text bisa 1. textContent   2.innerHTML   3.innerText   4.outerHTML   5.outerText

   // ambil durasi masing2 video
   .map(item => item.dataset.duration)
   
   // ubah durasi menjadi int, ubah menit menjadi detik
   .map(waktu => {
      const parts = waktu.split(':').map(part => parseInt(part))
      return parts[0] * 60 + parts[1]
   })
   
   
   // jumlahkan semua detik
   .reduce((total, detik) => total + detik)
   
   
   // ubah formatnya jadi jam menit detik
   const jam = Math.trunc(jsLanjut / 3600)
   jsLanjut -= jam * 3600
   const menit = Math.trunc(jsLanjut / 60)
   const detik = jsLanjut - menit *60
   

   // simpan di DOM
   const pDurasi = document.querySelector('.total-durasi')
   pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`
   
   const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length
   const pJmlVideo = document.querySelector('.jumlah-video')
   pJmlVideo.textContent = `${jmlVideo} Video.`