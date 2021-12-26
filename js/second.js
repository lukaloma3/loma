
//ford Mustang გამოდის 5.4 v8 ტიპის ძრავით, ასევე მისი მოდიფიკაციებია Boss 302 , shelby ,საუკეთესო მოდელები გამოდიოდა2018 დან 2021 წლამდე

let auto = ["Ford", "Mustang", 5.4, ["V6", "V8"], {variant:"boss 302", variant2:"Shelby", variant3:"Saalen", year:["2018 , 2022"]}];

let years = auto[4].year[0].split(" ")

let text = auto[0] + " " + auto[1] + " გამოდის " + auto[2] + " " + auto[3][1]  + " ტიპის ძრავით, ასევე მისი მოდიფიკაციებია "  + auto[4].variant + " , " + auto[4].variant2 + " საუკეთესო მოდელები გამოდიოდა " + years[0] + " დან "  + (years[2] - 1 ) + " წლამდე.";

console.log(text)

document.getElementById("ford").innerHTML = text;


//1
let n = [14, 584, 447, 5777, 1200, 65, 46354, 875, 86453, 546, 20, 30, 642]
console.log(n)

//2
n.push("new1")
console.log(n)

n.unshift("new2")
console.log(n)

//3
n.pop()
console.log(n)

n.shift()
console.log(n)

//4
let x = "";
for(let i = 0; i < n.length; i++) {
  x += n[i] + "<br>";
   
}
document.getElementById("arr").innerHTML = x;

//5

 n.splice(5, 0, "front-end")
console.log(n)

let y = "";
for(let i = 0; i < n.length; i++) {
  y += n[i] + "<br>";
  n.splice(5, 1, "back-end") 
}
document.getElementById("arr2").innerHTML = y;



//6
let bn = n.every(b=>{
return b > 10
})
console.log(bn)
   

//7
let an = n.some(a=>{
return a > 4768
})
console.log(an)