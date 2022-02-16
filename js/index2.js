fetch('https://fakestoreapi.com/products', {
method: 'GET',
}).then(response=> response.json().then(
    json1=>{
 
     json1.forEach(el => {
       let div = `
<div class="col-lg-4 mb-3">
<div class="card"  >
<img src="${el.image}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${el.category}</h5>
<h5 class="card-title">${el.title}</h5>
<h5 class="card-title">price: ${el.price}$</h5>  
</div>
</div>
</div>`
document.querySelector('.cards').innerHTML += div;
});
}
))




let obj = {
'firstname':'luka',
'lastname':'lomadze',
'id':'1',
}
let strobj = JSON.stringify(obj)
console.log(strobj)
let parobj = JSON.parse(strobj)
console.log(parobj)


let ball = document.querySelector('.ball')
let body = document.querySelector('body')
let switch1 = document.querySelector('.switch1')

//localStorage.setItem('dark', false)

switch1.addEventListener('click', function () {
    ball.classList.toggle('switchball')
    ball.classList.toggle('c')
body.classList.toggle('dark')

if (ball.classList.contains('switchball')) {
localStorage.setItem('dark', 1)
} 

if (ball.classList.contains('c')) {
localStorage.removeItem('dark')
} 
})

if (localStorage.getItem('dark') == 1) {
    ball.classList.toggle('switchball')
    ball.classList.toggle('c')
body.classList.toggle('dark')


}
let i = 5
let modal = document.querySelector('.modal1')
let background2 = document.querySelector('.background2')
function loadbody() {
    modal.classList.replace('d-none', 'd-block')
    background2.classList.replace('d-none', 'd-block')
 setTimeout(
 function () {
    modal.classList.add('d-none')
    background2.classList.add('d-none')
 },5000)
 setInterval(
    function () {
        document.querySelector('h4').innerHTML = `დაიხურება ${--i} წამში` 

    },1000)

}

