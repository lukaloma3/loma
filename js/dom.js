let black = document.querySelector('.slide')
let icon1 = document.querySelector('.icon1')
let icon2 = document.querySelector('.icon2')


icon1.addEventListener("click", function(){
black.classList.add("show")
icon1.classList.add("n")
icon2.classList.add("b")


})

icon2.addEventListener("click", function(){
    black.classList.remove("show")
    icon1.classList.remove("n")
    icon2.classList.remove("b")
    
    
})
    




// let h1 = document.querySelector('h1');
// let p =  h1.nextElementSibling;
// let icon = p.parentElement.nextElementSibling;

// h1.addEventListener('click', function () {
//     if (p.classList != null && icon.classList[1] != null) {
//         p.classList.replace('d-none', 'd-block')
// icon.classList[1].replace('d-none', 'd-block')
//     }

// })

// icon.addEventListener('click', function () {
//     if (p.classList != null && this.classList[1] != null) {
//         p.classList.replace('d-none', 'd-block')
//     this.classList[1].replace('d-block', 'd-none')
//     }
    
//     })





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
















