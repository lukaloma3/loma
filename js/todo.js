let todo = document.querySelector('#todo');
let n = 0;

todo.addEventListener('submit', function(e){
e.preventDefault();
let text = document.querySelector('.form-control');
let add = document.querySelector('#addtodo');
let tasks = document.querySelector('small');
let type = document.querySelector('form').getAttribute(`data-type`)
let id2 = document.querySelector('form').getAttribute(`data-id2`)


let newtodo = `
<div class="row p-2 bg-secondary mb-3" id="d${n}">
<div class="col-lg-10 newtext${n}" id="newtext${n}">${text.value}</div>
<div class="col-lg-2">
<button class="bg-success"  data-id="${n}" data-text="${text.value}"><i class="bi bi-pencil-fill"></i></button>
<button class="bg-danger"   data-id="${n}"><i class="bi bi-x-lg"></i></button>
</div></div>`

if (type == 1) {
tasks.innerText =` ${n+1} TASK`;
add.innerHTML += newtodo;
text.value = '';
n++;
}
if (type == 2) {
    
if (document.querySelector('#newtext' + id2 ) !== null) {
    document.querySelector('#newtext' + id2 ).innerText =  text.value;
    todo.setAttribute('data-type', '1')
text.value = '';
}}

let editbtn = document.querySelectorAll('.bg-success');
editbtn.forEach(el => {
    let tt = el.getAttribute(`data-text`)
    let nn = el.getAttribute(`data-id`)

    el.addEventListener('click', function () {
       text.value = tt
    todo.setAttribute('data-type', '2')
    todo.setAttribute('data-id2', nn)
    })
});



let delbtn = document.querySelectorAll('.bg-danger');
delbtn.forEach(el => {
   let nn = el.getAttribute(`data-id`)
el.addEventListener('click', function () {
    if (document.querySelector('#d'+ nn) !== null) {
        document.querySelector('#d'+ nn).remove();
    tasks.innerText =` ${n-1} TASK`;
n--;
    }  
})
});
})

















