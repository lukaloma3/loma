let blog = [
{
name:"blog1",
desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, consequatur totam nobis non obcaecati, laboriosam doloribus ab harum temporibus molestias culpa blanditiis cumque? Ipsa in sequi a laborum maxime iste?",
photo:"https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
date: new Date('12/29/2021'),
cat:"category1",
active: true ,
seen:200,
},
{
  name:"blog2",
  desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, consequatur totam nobis non obcaecati, laboriosam doloribus ab harum temporibus molestias culpa blanditiis cumque? Ipsa in sequi a laborum maxime iste?",
  photo:"https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
  date: new Date('12/25/2021'),
  cat:"category2",
  active: true ,
  seen:150,
  },
  {
    name:"blog3",
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, consequatur totam nobis non obcaecati, laboriosam doloribus ab harum temporibus molestias culpa blanditiis cumque? Ipsa in sequi a laborum maxime iste?",
    photo:"https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
    date: new Date('1/9/2021'),
    cat:"category3",
    active: false ,
    seen: 100 ,
    },





]





blog.forEach(el=>{

let z 

let da = el.date.getFullYear() + '/' + Number(el.date.getMonth()+1) + '/' + el.date.getDate()
if (el.date.getDate() == new Date().getDate() &&   el.date.getFullYear() == new Date().getFullYear()    && el.date.getMonth() == new Date().getMonth()) {
  z = `<div class="bg-success p-3">დღეს დამატებული</div>`
}else{
  z = `<div class=" p-3"> ${da}</div>`
}
let x
if (el.desc.length > 50 && el.active == true  &&  el.seen < 1000) {
  x = `<div class="bg-success p-3">აუცილებლად წასაკითხი</div>`
}else{
  x = ``
}


cards.innerHTML += `<div class=" col-lg-4 mb-3 mt-3" style=" margin:auto;">  
<div class="card">
     <a href=""><img src="${el.photo}" class="card-img-top w-100" alt="..."></a> 
      <div class="card-body">
      <h5 > ${el.desc} </h5>
      <h5> ${el.cat}</h5>
      <h5 > ${el.active} </h5>
      <h5> ${el.seen}</h5>
      <h5> ${z}</h5>
      <h5> ${x}</h5>
</div></div></div>`;})

console.log(new Date())



































// let d = new Date();

//  console.log(d)
// // console.log(typeof d)

// // let day = d.getDate()
// // console.log(day)

// let month = d.getMonth() + 1
// console.log(month)
// let year = d.getFullYear()
// console.log(year)


// d.setFullYear(d.getFullYear() + 1 )
// console.log(d)





















