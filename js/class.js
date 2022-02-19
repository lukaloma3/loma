class costumer1 {
constructor(name, email, role, data, style, select){
this.name = name
this.email = email
this.role = role
this.data = data
this.style = style
this.select=select

}


usercolor(){
    
    for (const k in this.style) {
       
            const v = this.style[k];
            const p = k;
       document.querySelector(this.select).style[p] = v;
    }}
}


fetch('https://fakestoreapi.com/products', {
method: 'GET',
}).then(response=> response.json().then(
json1=>{
json1.forEach(el => {
     
let costumer2 = new costumer1(el.image,el.category ,el.title ,el.price )
let div = `
<div class="col-lg-4 mb-3">
<div class="card"  >
<img src="${costumer2.name}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${costumer2.email}</h5>
<h5 class="card-title">${costumer2.role}</h5>
<h5 class="card-title">price: ${costumer2.data}$</h5>  
</div>
</div>
</div>`

document.querySelector('.cards').innerHTML += div;

});
}
))
