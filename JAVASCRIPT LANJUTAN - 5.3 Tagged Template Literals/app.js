// Tagged Templates
const nama = 'Sandhika Galih'
const umur = 33
const email = 'kabdi384@gmail.com'

// function coba(strings,...values) {
//    let result = ''
//    strings.forEach((el, i) => {
//       result += `${el}${values[i] || ''}`
//    });
//    return result
// }



// function coba(strings,...values) {
//    return strings.reduce((result, str, i) =>
//       `${result}${str}${values[i] || ''}`,''
//    )
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`
// console.log(str)




// Highlight

function highlight(strings,...values) {
   return strings.reduce((result, str, i) =>
      `${result}${str}<span class="light">${values[i] || ''}</span>`,'');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun dan email saya adalah : ${email}`
// console.log(str)

document.body.innerHTML = str