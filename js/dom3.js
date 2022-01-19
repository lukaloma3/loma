let c = document.querySelectorAll(".col-lg-4");
let t = document.querySelectorAll(".t");
c.forEach(el => {
   
el.addEventListener('click', function () {
        
let n = el.getAttribute('data-n')
let text = document.querySelector(".text" + n)

c.forEach(element => {
    element.classList.remove('bg-white')
});
this.classList.add("bg-white")


t.forEach(ele => {
    ele.classList.add('d-none')
});
text.classList.remove('d-none')

})
});



































// let items = document.querySelectorAll('.carusel1')
// let bts = document.querySelectorAll('.bt')


// bts.forEach((el, i) => {
 
// items.forEach(els => {
//     els.classList.remove('.selitem')
// });

// bts.forEach(els => {
//     els.classList.remove('.selbt')
// });
// items[i].classList.add('.selitem')
// bts.classList.add('.selbt')


// });

