// Uji coba ambil indeks yang diterapkan ke DOM untuk huruf yang ke ganjil ke atas dan huruf yang ke genap ke bawah 
function name(params) {
   // return params.map((m,i) => `${(i+1) % 2 != 0 ? m : ''}`)
   
   
   let tempgenap = [], tempGanjil = []
   for (let i = 0; i < params.length; i++) {
      if ((i+1) % 2 != 0) {
         tempGanjil.push(params[i])
      } else {
         tempgenap.push(params[i])
      }
   }
   return [tempGanjil, tempgenap]
}

console.log(name([3, 6, 4, 7, 8, 1, 9]))  //[[3, 4, 8, 9], [6, 7, 1]]
                //1  2  3  4  5  6  7


console.log(name('KHAIRUL'))  //[ [K, A, R, L], [H, I, U] ] 
                //1234567