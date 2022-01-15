let eye = document.querySelector("#eye");
let inp = document.querySelector("#inp");



eye.addEventListener("click", function () {

if (inp.type =="password") {
    inp.type = "text"
}else{
    inp.type = "password"
}

if (this.classList[1] == "bi-eye-slash-fill" ) {
    this.classList.replace("bi-eye-slash-fill", "bi-eye-fill" )
}else{
    this.classList.replace("bi-eye-fill", "bi-eye-slash-fill"    )

}


})


let change = document.querySelectorAll(".changecolor");
let body = document.querySelector("body");

let colors;
change.forEach(el => {
el.addEventListener("click", function(){
colors = el.style.backgroundColor;
body.style.backgroundColor = colors;
})
});













