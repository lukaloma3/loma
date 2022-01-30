let level = document.querySelector('.level').value;
let start = document.querySelector('.start');
let question1 = document.querySelector('.question1');
start.addEventListener('click', function(x){
x.preventDefault();
start.parentElement.parentElement.parentElement.classList.add('d-none');
question1.parentElement.parentElement.classList.remove('d-none');
console.log(level)
});


let questions1 = [
{name:`რამდენია 1+1?`  ,
img:'https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1',
ans:[3,2,5,4,],
correct:1,
},
{name:`რამდენია 2+2?`  ,
img:'https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1',
ans:[3,2,5,4,],
correct:3,
},
{name:`რამდენია 3+3?`  ,
img:'https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1',
ans:[6,2,5,4,],
correct:0,
},
{name:`რამდენია 4+4?`  ,
img:'https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1',
ans:[3,8,5,4,],
correct:1,
},
{name:`რამდენია 5+5?`  ,
img:'https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1',
ans:[3,2,10,4,],
correct:2,
},
{name:`რამდენია 6+6?`  ,
img:'https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1',
ans:[3,12,5,4,],
correct:1,
},
{name:`რამდენია 7+7?`  ,
img:'https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1',
ans:[3,2,5,14,],
correct:3,
},
{name:`რამდენია 8+8?`  ,
img:'https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1',
ans:[16,2,5,4,],
correct:0,
},
{name:`რამდენია 9+9?`  ,
img:'https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1',
ans:[3,2,5,18,],
correct:3,
},
{name:`რამდენია 9+0?`  ,
img:'https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1',
ans:[3,9,5,4,],
correct:1,
},
]
let correctans = document.querySelector('.correctans')
let questions =`questions ${level}`
 let n = questions1.length
questions1.forEach((question, id) => {
    
    let answer = '';
    question.ans.forEach((el , i) => {
    answer += `<div class="col-lg-6  mt-2"> <p class="bg-white p-2 ${i == question.correct ? 'correct' : ''}">${el}</p> </div>`
    });
    let q3 = `  
    <div class="row ${id == 0 ? 'current' : ''} f1">
    <img src=" ${question.img}" alt="">
    <div class="col-lg-12 fw-bold mt-2">${question.name}</div>
    ${answer}
    <div class="col-lg-12 ">
    <button class="btn btn-info prev1  ${id == 0 ? 'd-none' : 'd-inline-block'}">წინა</button>    
    <button class="btn btn-info next1 ${id == (n-1) ? 'd-none' : 'd-inline-block'}" >შემდეგი</button>
    <button class="btn btn-danger ${id == (n-1) ? 'd-inline-block' : 'd-none'} end" >დასრულება</button>
    </div>
    </div> `

    let q4 = `  
    <div class="row  f1 d-flex">
    <img src=" ${question.img}" alt="">
    <div class="col-lg-12 fw-bold mt-2">${question.name}</div>
    ${answer}
    </div> `

question1.innerHTML += q3;
correctans.innerHTML += q4;
});


let p = document.querySelectorAll('p')

p.forEach(ele => {
ele.addEventListener('click', function () {
let p4 = document.querySelectorAll('.current p')
p4.forEach(elem => {elem.classList.remove('active')})
    ele.classList.add('active')
})     
});

document.querySelectorAll('.next1').forEach(elem => {
elem.addEventListener('click', function () {
    let a = document.querySelector('.current');
 a.nextElementSibling.classList.add('current');
a.classList.remove('current');
})
});



document.querySelectorAll('.prev1').forEach(eleme => {
    eleme.addEventListener('click', function () {
        let a = document.querySelector('.current');
    a.classList.remove('current');
    a.previousElementSibling.classList.add('current');
  
})});


let endtext = document.querySelector('.endtext')
let see = document.querySelector('.see')
let end = document.querySelectorAll('.end')

let coren = 0;

end.forEach(end1 => {
end1.addEventListener('click', function () {
let a = document.querySelector('.current');
a.classList.remove('current')
endtext.classList.remove('d-none')
document.querySelector('.all').innerText = `სულ ${n} კითხვა`
p.forEach(element => {
    if (element.classList.contains('correct') && element.classList.contains('active')) {
        coren++;
    }
    let wronn = n - coren;
document.querySelector('.core').innerText = `სწორად უპასუხეთ ${coren} კითხვას`
document.querySelector('.wron').innerText = `შეცდომით უპასუხეთ ${wronn}  კითხვას`
})
});
})
see.addEventListener('click', function () {
    correctans.classList.toggle('d-none')
p.forEach(element => {
if (element.classList.contains('correct')) {
    element.classList.add('corans')
}
});
})
