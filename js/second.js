let students = [
{
name: "ლუკა",
photo:"https://thumbs.dreamstime.com/z/man-logo-beard-white-background-vector-illustration-man-logo-beard-white-background-179387925.jpg" ,
age: 20,
date: "2020/09/22",
type: "front-end" ,
attend:100,
scholarship: true,
},
{
  name: "ნიკა",
  photo: "https://thumbs.dreamstime.com/z/man-logo-beard-white-background-vector-illustration-man-logo-beard-white-background-179387925.jpg",
  age: 21,
  date: "2020/07/29",
  type: "front-end" ,
  attend:100,
  scholarship: true,
},

{
  name: "მარიამი",
  photo: "https://thumbs.dreamstime.com/z/man-logo-beard-white-background-vector-illustration-man-logo-beard-white-background-179387925.jpg",
  age: 22,
  date: "2020/01/04",
  type: "front-end" ,
  attend:45,
  scholarship: false,
  },

  {
    name: "გიორგი",
    photo: "https://thumbs.dreamstime.com/z/man-logo-beard-white-background-vector-illustration-man-logo-beard-white-background-179387925.jpg",
    age: 19,
    date: "2016/09/13",
    type: "front-end" ,
    attend:95,
    scholarship: true,
    },

    {
      name: "გიორგი",
      photo:"https://thumbs.dreamstime.com/z/man-logo-beard-white-background-vector-illustration-man-logo-beard-white-background-179387925.jpg" ,
      age: 22,
      date: "2021/06/26",
      type: "back-end" ,
      attend:100,
      scholarship: false,
      },


      {
        name: "ჯეკო",
        photo: "https://thumbs.dreamstime.com/z/man-logo-beard-white-background-vector-illustration-man-logo-beard-white-background-179387925.jpg",
        age: 19,
        date: "2017/09/02",
        type: "front-end" ,
        attend:45,
        scholarship: true,
        },


        {
          name: "ნინო",
          photo:"https://thumbs.dreamstime.com/z/man-logo-beard-white-background-vector-illustration-man-logo-beard-white-background-179387925.jpg" ,
          age: 18,
          date: "2020/09/22",
          type: "back-end" ,
          attend:75,
          scholarship: false,
          },

          {
            name: "გიორგი",
            photo: "https://thumbs.dreamstime.com/z/man-logo-beard-white-background-vector-illustration-man-logo-beard-white-background-179387925.jpg",
            age: 22,
            date: "2017/09/22",
            type: "back-end" ,
            attend:45,
            scholarship: false,
            },


            {
              name: "თინათინი",
              photo: "https://thumbs.dreamstime.com/z/man-logo-beard-white-background-vector-illustration-man-logo-beard-white-background-179387925.jpg",
              age: 17,
              date: "2019/09/21",
              type: "front-end" ,
              attend:55,
              scholarship: true,
              },


              {
                name: "ზურა",
                photo: "https://thumbs.dreamstime.com/z/man-logo-beard-white-background-vector-illustration-man-logo-beard-white-background-179387925.jpg",
                age: 19,
                date: "2020/06/02",
                type: "back-end" ,
                attend:50,
                scholarship:false,
                },


]

function filter1(id){
cards.innerHTML = '';
let filt ;
if (id == 1) {
  filt = students.filter(el =>{
return el.type == "front-end"
  })
}else if (id == 2) {
  filt = students.filter(el =>{
    return el.type == "back-end";})
}else{
  filt = students
} 
filterstudents(filt);
}


function filter2(id){
  cards.innerHTML = '';
  let filt ;
  if (id == 1){
    filt = students.filter(el =>{
  return el.scholarship == true
    })
  }else if (id == 2){
    filt = students.filter(el =>{
      return el.scholarship == false;})
  }else{
    filt = students
  } 
  filterstudents(filt);
};

function filter3(id){
  cards.innerHTML = '';
  let filt ;
  if (id == 1){
    filt = students.filter(el =>{
      return el.attend == 100
    })
  }else if (id == 2){
    filt = students.filter(el =>{
      return  el.attend !== 100
    })
  }else{
    filt = students
  } 
  filterstudents(filt);
};


function search1(text){
  cards.innerHTML = '';
  let filt ;
  filt = students.filter(el =>{
return !el.age.toString().search(text)
  })
  filterstudents(filt);
}

function search2(text){
  cards.innerHTML = '';
  let filt ; 
  filt = students.filter(el =>{
return !el.name.search(text)
  })
  filterstudents(filt);
}


function search3(text){
  cards.innerHTML = '';
  let filt ;
  filt = students.filter(el =>{
return !el.date.toString().search(text)
  })
  filterstudents(filt);
}



function filterstudents(filt){

filt.forEach(el => {
let s ;
if (el.scholarship) {
  s = `<div class="bg-success p-3">სტიპენდიანტი</div>`
}else{
  s = `<div class="bg-dark text-white p-3">უსტიპენდიო</div>`
}
let a ;
if (el.attend == 100) {
  a = `<div class="bg-success p-3">წარმატებული დასწრება: ${el.attend}%</div>`
}else{
  a = `<div class="s p-3"> დასწრება: ${el.attend}%</div>`
}

cards.innerHTML += `<div class=" col-lg-4 mb-3 " style=" margin:auto;">  
<div class="card">
     <a href=""><img src="${el.photo}" class="card-img-top w-100" alt="..."></a> 
      <div class="card-body">
      <h5 >სახელი: ${el.name} </h5>
      <h5>ასაკი: ${el.age}</h5>
      <h5 >რეგისტრაციის თარიღი: ${el.date}</ </h5>
      <h5>კურსი: ${el.type}</</h5>
      <h5> ${a}</</h5>
      <h5>${s}</</h5>
</div></div></div>`;})}




































// //ford Mustang გამოდის 5.4 v8 ტიპის ძრავით, ასევე მისი მოდიფიკაციებია Boss 302 , shelby ,საუკეთესო მოდელები გამოდიოდა2018 დან 2021 წლამდე

// let auto = ["Ford", "Mustang", 5.4, ["V6", "V8"], {variant:"boss 302", variant2:"Shelby", variant3:"Saalen", year:["2018 , 2022"]}];

// let years = auto[4].year[0].split(" ")

// let text = auto[0] + " " + auto[1] + " გამოდის " + auto[2] + " " + auto[3][1]  + " ტიპის ძრავით, ასევე მისი მოდიფიკაციებია "  + auto[4].variant + " , " + auto[4].variant2 + " საუკეთესო მოდელები გამოდიოდა " + years[0] + " დან "  + (years[2] - 1 ) + " წლამდე.";

// console.log(text)

// document.getElementById("ford").innerHTML = text;


// //1
// let n = [14, 584, 447, 5777, 1200, 65, 46354, 875, 86453, 546, 20, 30, 642]
// console.log(n)

// //2
// n.push("new1")
// console.log(n)

// n.unshift("new2")
// console.log(n)

// //3
// n.pop()
// console.log(n)

// n.shift()
// console.log(n)

// //4
// let x = "";
// for(let i = 0; i < n.length; i++) {
//   x += n[i] + "<br>";
   
// }
// document.getElementById("arr").innerHTML = x;

// //5

//  n.splice(5, 0, "front-end")
// console.log(n)

// let y = "";
// for(let i = 0; i < n.length; i++) {
//   y += n[i] + "<br>";
//   n.splice(5, 1, "back-end") 
// }
// document.getElementById("arr2").innerHTML = y;



// //6
// let bn = n.every(b=>{
// return b > 10
// })
// console.log(bn)
   

// //7
// let an = n.some(a=>{
// return a > 4768
// })
// console.log(an)