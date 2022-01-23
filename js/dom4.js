let nav = document.querySelector("nav")
let header = document.querySelector("header")


window.addEventListener('scroll', function () {
const h = header.getBoundingClientRect().height - nav.getBoundingClientRect().height

if (window.scrollY > h) {
    nav.classList.add('scr')
}else{ nav.classList.remove('scr')}
   console.log(  h, window.scrollY) 
})



let circle = document.querySelector(".circle")

circle.addEventListener('click', function (ev) {
    let x = circle.getBoundingClientRect()
    if (ev.clientX > x.left &&  ev.clientX < x.right && ev.clientY > x.top && ev.clientY < x.bottom   ) {
        circle.classList.toggle('bg-danger')   
    }

console.log(ev.clientX , ev.clientY)
console.log( x)

})


let b1 = document.querySelector('.box1')
let b2 = document.querySelector('.box2')
let sign = document.querySelectorAll('.sign')
sign.forEach(el => {
    el.addEventListener('click', function () {
b1.classList.toggle('click1')
b2.classList.toggle('click2')
let n = el.getAttribute('data-n')
let s = document.querySelector('.s' + n)
let t = document.querySelector('.t' + n)
let ss = document.querySelectorAll('.ss' )
let ts = document.querySelectorAll('.ts' )


ss.forEach(ele => {
    ele.classList.add('d-none')
});
 s.classList.remove('d-none')


 ts.forEach(elem => {
    elem.classList.add('d-none')
});
 t.classList.remove('d-none')
})
});
