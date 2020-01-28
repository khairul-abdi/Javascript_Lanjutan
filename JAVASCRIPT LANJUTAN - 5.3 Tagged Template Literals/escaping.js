function sanitize(strings, ...values) {
   return DOMPurify.sanitize(aboutMe)
}

const name = 'petyr baelish'
const aboutMe = `I love to do evil <img src="http://unplash.it/100/100?random" onload="alert('I hacked you. Haha')" />`

const html = sanitize`
<h3>${name}</h3>
<p>${aboutMe}</p>`

// console.log(html)
document.body.innerHTML = html