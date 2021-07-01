
const firstRandomNum=Math.floor(Math.random()*6)+1
const firstImage='assets/dice'+firstRandomNum+".jpg"
document.querySelectorAll('img')[0].setAttribute('src',firstImage)


const secondRandomNum=Math.floor(Math.random()*6)+1
const secondImage='assets/dice'+secondRandomNum+".jpg"
document.querySelectorAll('img')[1].setAttribute('src',secondImage)
