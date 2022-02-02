$(function () {

$(document).on( 'click', '.add1' , function (e) { 
    e.preventDefault();
$('h4').append(`
 <div class="input-group mt-3 delinp">
 <input type="text" class="form-control" placeholder="enter title" aria-label="Recipient's username" aria-describedby="button-addon2">
 <button class="btn btn-outline-secondary del1" type="button" id="button-addon2"><i class="bi bi-trash-fill"></i></button>
 </div>
`)
});

$(document).on( 'click' , '.del1' ,  function (e) { 
    e.preventDefault();
    $(this).parent().remove();
});



$('.switch1').click(function (e) { 
    e.preventDefault();
    $('body').toggleClass('bg-dark');
    $('.ball').toggleClass('switchball');

});




let t = 'Well, here we are!'.split('')

let i = 0;


$('.st').click(function (e) { 
    e.preventDefault();
    
function type() {

if (i < t.length) {
     document.querySelector('h1').innerHTML += t[i]
       i++;
     setTimeout(type,400)

}}
type()

});













})