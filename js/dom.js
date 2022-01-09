let black = document.querySelector('.slide')
let icon1 = document.querySelector('.icon1')
let icon2 = document.querySelector('.icon2')


icon1.addEventListener("click", function(){
black.classList.add("show")
icon1.classList.add("n")
icon2.classList.add("b")


})

icon2.addEventListener("click", function(){
    black.classList.remove("show")
    icon1.classList.remove("n")
    icon2.classList.remove("b")
    
    
})
    

