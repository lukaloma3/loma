$('.ic2').fadeOut(0)
$('.contact1').slideUp(0);
 
$(function () {

$('.ic').click(function (e) { 
    e.preventDefault();
    $('.contact3').animate({
        'width': '600px',
       'border-radius': '0',
       'max-width': '100%',
      
       

    },500,function() {
        $('.contact3').animate({
            'height': '100vh', 
           
        }, 1000, function () {
           $('.contact1').slideDown();
        })
    })
$('.ic').fadeOut(0)
$('.ic2').fadeIn(100)
});


$('.ic2').click(function (e) { 
    e.preventDefault();
    $('.contact1').slideUp()
    $('.contact3').animate({
        
        'height': '100px'
   
    },500,function() {
        $('.contact3').animate({
        'width':'100px',
        'border-radius':'50%'
        },1000,function () {
        $('.ic').fadeIn(100)
        $('.ic2').fadeOut(0)

        })
    })
$('.ic').fadeOut(0)
$('.ic2').fadeIn(100)
});









})