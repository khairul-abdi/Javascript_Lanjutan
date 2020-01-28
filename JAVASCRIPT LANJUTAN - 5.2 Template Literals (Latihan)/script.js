// 1. HTML Fragments

// const mhs = {
//    nama: "Sandhika Galih",
//    umur: 33,
//    nrp: "0423232323",
//    email: "sandhikagalih@unpas.ac.id"
// }

// const el = `<div class="mhs">
//    <h2>${mhs.nama}</h2>
//    <span>${mhs.nrp}</span>
// </div>`

// // console.log(el)
// document.body.innerHTML = el





// 2. Looping

// const mhs = [{
//       nama: "sandhika galih",
//       email: "sandhika@unpas.ac.id"
//    },
//    {
//       nama: "Doddy Ferdiansyah",
//       email: "doddy@unpas.ac.id"
//    },
//    {
//       nama: "Erik",
//       email: "erik@unpas.ac.id"
//    },
// ]

// const el = `<div class="mhs">
//    ${mhs.map(m=>`<ul>
//       <li>${m.nama}</li>
//       <li>${m.email}</li>
//    </ul>`).join('')}
// </div>`

// document.body.innerHTML = el




// 3.Conditionals
// ternary

// const lagu = {
//    judul: "Tetap Dalam Jiwa",
//    penyanyi: "Isyana Sarasvati",
//    feat: "Rayi Putra"
// }

// const el = `<div class="lagu">
//    <ul>
//       <li>${lagu.penyanyi}</li>
//       <li>${lagu.judul} ${(lagu.feat ? `feat${lagu.feat}`:'' )}</li>
//    </ul>
// </div>`

// document.body.innerHTML = el




// 3.Conditionals
// Loop and Ternary

const lagu = [{
   judul: "Tetap Dalam Jiwa",
   penyanyi: "Isyana Sarasvati",
}, {
   judul: "Kau Adalah",
   penyanyi: "Isyana Sarasvati",
   feat: "Rayi Putra"
}]


const el = `<div class="lagu">
   ${lagu.map(m=>`<ul>
         <li>
            <h4>Penyanyi: ${m.penyanyi} ${m.feat ? `feat: ${m.feat}` : ''}</h4>
         </li>
      </ul>`
   ).join('')}
</div>`

document.body.innerHTML = el