$(function () {
    
$('.step').click(function(){
    
    $('.step.active1').removeClass('active1');
        $(this).addClass('active1');
let id = this.getAttribute('data-id')
    
    $('.content.active2').removeClass('active2');
    $(id).addClass('active2');
   console.log( )
})
    
 



   


// $('.next1').click(function (e) { 
//     e.preventDefault();
//     $('.content.active2').removeClass('active2');
 


    

    
// });
    
    
// $('.prev1').click(function (e) { 
//     e.preventDefault();
//     $('.content.active2').removeClass('active2');
//     $($('.content').prev()).addClass('active2');
//     $($('.content').prev()).addClass('active2');

// });



 if ($('.step')                ) {
    $('.prev1').addClass('d-none')
    }//else{ $('.prev1').removeClass('d-none')}


    
    
});