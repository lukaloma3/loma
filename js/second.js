let product = {
weight:"2kg",
count:30,
price:"20gel",
img:"img/html-css-js.jpg",



productfunc:function(){

if(this.count == 0){
return `<div>მარაგი ამოწურულია</div>
`;
}
return `<div>${product.count}</div>`;

},

};

console.log(product);




let producti =

`
     <div class="card col-lg-4" style=" margin:auto;">
      <img src="${product.img}" class="card-img-top w-100" alt="...">
      <div class="card-body">
      <h5 class="card-title">${product.weight} </h5>
      <h5 class="card-title"> ${product.count}  </h5>
      <h5 class="card-title"> ${product.price}</h5>
      
      <p class="card-text">${product.productfunc()}</p>
            
   </div>
      </div>
 `;

obj.innerHTML = producti;

































// //0
// function temp(far, selector) {

// let k = 5/9;

// let celsus = k * (far-32);

// document.getElementById(selector).innerHTML = celsus;
// console.log(celsus)
// }
// temp(50, "text")


// //1

// let me = "მე ვსაწვლობ frontend პროგამირებას."
// function change(){
// let changed = me.replace("frontend", "backend")
// console.log(changed)
// document.getElementById("text5").innerHTML = changed;
// };
// change();



// let x = "lomadze 333";
// h(65);
// function h(t){
//  // let g = x.toString();
//  // let p = g.replace(g, t)
//  x = t;
// return x;
// };
// console.log(h({firstName:"luka", lastName:"lomadze" }));
// document.getElementById("text6").innerHTML = h(["luka", "lomadze"] );



// //2

// function f2(){
// let n1 = "HTML is the code that is used to structure a web page and its content."
// let n2 = n1.replace("HTML", "").trim();
// console.log(n2);
// document.getElementById("text2").innerHTML = n2;
// }

// f2();






// //3

// function cards( img, h5, p, aherf, a, selector) {

//     let card =`<div class="card " style=" margin:auto;">
//    <img src="${img}" class="card-img-top w-100" alt="...">
//    <div class="card-body">
//     <h5 class="card-title">${h5}</h5>
//     <p class="card-text">${p}</p>
//     <a href="${aherf}" class="btn btn-primary">${a}</a>
//     </div>
// </div>`;

// document.getElementById(selector).innerHTML = card;
// };
// cards("https://3cthinkers.com/en/wp-content/uploads/2017/03/html-css-js.jpg", "Card title", "Some quick example text to build on the card title and make up the bulk of the card's content.", "#", "Go somewhere", "card1");
// cards("https://3cthinkers.com/en/wp-content/uploads/2017/03/html-css-js.jpg", "Card title", "Some quick example text to build on the card title and make up the bulk of the card's content.", "#", "Go somewhere", "card2");
// cards("https://3cthinkers.com/en/wp-content/uploads/2017/03/html-css-js.jpg", "Card title", "Some quick example text to build on the card title and make up the bulk of the card's content.", "#", "Go somewhere", "card3");





// //4

// function n4(d){
// let a = 57.23556;
// let b = 10.65476;
// let c = a * b;

// console.log(c.toFixed(d));
// document.getElementById("text3").innerHTML = c.toFixed(d);
// console.log(c.toPrecision(d))
// document.getElementById("text4").innerHTML = c.toPrecision(d);
// }
// n4()
// n4(1)
// n4(2);
// n4(3);
// n4(4);
// n4(5);



// let text = "მე ვსწავლობ itაკადემიაში";

// console.log(text.slice(3, -13));

// console.log(text.replace("itაკადემიაში", "frontend" ));
 
// console.log(text.split(" "));

// console.log(text.includes("მე"));

// console.log(text.startsWith("მე"));

// console.log(text.toUpperCase());

// let text1 = "       მე ვსწავლობ itაკადემიაში         ";

// console.log(text1.trim());



// let h5 = "Card title";

// let p = "Some quick example text to build on the card title and make up the bulk of the card's content." ;

// let a = "Go somewhere" ;

// let aherf = "#" ;

// document.getElementById("row").innerHTML =  (

//     `
//     <div class="card col-lg-4" style="width: 18rem; margin:auto;">
//   <img src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/hero/burj-al-arab-profile-exterior_6-4_landscape/burj-al-arab-profile-exterior_6-4_landscape__portrait.jpg?w=600" class="card-img-top w-100" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${h5}</h5>
//     <p class="card-text">${p}</p>
//     <a href="${aherf}" class="btn btn-primary">${a}</a>
//   </div>
// </div>
//     `
// );


// let num =  555555555 ;
// let array =  ["luka", "lomadze"] ;
// let string =  "luka lomadze" ;
// let boo1 =  true ; let boo2 =  false ;
// let object =  {firstName:"luka", lastName:"lomadze" } ;
// let func =  function( )  {} ;
// console.log( typeof(num) );
// document.getElementById("text").innerHTML = string ;
// console.log(object);
// console.log(object.lastName);
// console.log(array); 
// console.log(array[0]);
// console.log(array[0], object.lastName); 
// console.log( 5 == 5 )
// console.log( object.lastName == array[1] )
// let pi = Math.PI; console.log(p)
// let newdate = new Date ;
// console.log(newdate)
// console.log(newdate.getFullYear())
