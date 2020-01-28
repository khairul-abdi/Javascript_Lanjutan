// // 1.HTML Fragments
// const mhs = {
//    nama: 'Sandhika Galih',
//    umur: 33,
//    nrp: '045343434',
//    email: 'sandhikagalih@gmail.com'
// }

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span>${mhs.nrp}</span> </div>`

// // console.log(el)
// document.body.innerHTML = el




// const mhs = [
//    {
//       nama: 'Sandhika Galih',
//       email: 'sandhikagalih@gmail.com'
//    }, {
//       nama: 'Doddy Ferdiansyah',
//       email: 'doddyferdiansyah@gmail.com'
//    }, {
//       nama: 'Erik',
//       email: 'erik@gmail.com'
//    },
// ]



// 2. Looping
// const el = `<div class="mhs">
//    ${mhs.map(m => `<ul>
//       <li>${m.nama}</li>
//       <li>${m.email}</li>
//    </ul>`).join('')}
// </div>`





// 3. Conditionals
// Ternary
// const lagu = {
//    judul: 'Tetap Dalam Jiwa',
//    penyanyi: 'Isyana Sarasvati',
//    feat: 'Rayi Putra'
// }

// const el = `<div class="mhs">
//    <ul>
//       <li>${lagu.penyanyi}</li>
//       <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})`: ''}</li>
//    </ul>
// </div>`

// document.body.innerHTML = el





// 4. Nested
// HTML Fragments bersarang

const mhs = {
   nama: 'Sandhika Galih',
   semester: 5,
   mataKuliah: [
   'Rekayasa Web', 
   'Analis dan Perancangan Informas',
   'Pemrograman Sistem Interaktif',
   'Perancangan Sistem Berorientasi Object'
   ]
}

function cetakMataKuliah(mataKuliah) {
   return `
   <ol>
      ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
   </ol>`
}

const el = `<div class="mhs">
   <h2>${mhs.nama}</h2>
   <span class="semester">Semester : ${mhs.semester}</span>
   <h4>Mata Kuliah</h4>
   ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el
