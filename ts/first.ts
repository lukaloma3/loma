// numbers array
let narr:number[] = [3, 34, 565, 65, 65, 65, 6]
console.log(narr)
// end numbers array


// interface
interface first {
img : string,
role : boolean,
name: string,
age: number,
profesion: string[],
rolefun():any
}
//end interface


// object
let user:first = {
    img : "https://cdn5.vectorstock.com/i/1000x1000/84/94/cartoon-coder-young-man-vector-31688494.jpg",
role :true,
name: "Shako",
age: 26,
profesion:[" front-end " , " back-end"],
rolefun: function () {
let role2;
if (this.role) {
role2 =   `<div class="bg-success p-3 text-white"> ${user.name} is  admin</div>`
}else{
role2 = `<div class="bg-danger p-3 text-white"> ${user.name} is not admin</div>`
}
return role2;
}


}
// end object


let prof:any = user.profesion.toString()
console.log(prof)
console.log(user.rolefun())

let card = `
<div class="card mx-auto col-lg-5 mt-5" >
  <img src="${user.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">name: ${user.name}</p>
    <p class="card-text">age: ${user.age} y.o</p>
    <p class="card-text"> profession:${prof}</p>
${user.rolefun()}
  </div>
</div>
`
document.querySelector('.users').innerHTML += card;




