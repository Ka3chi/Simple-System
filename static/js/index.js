$(document).ready(function () {
    //button shrink side nav
    $('#b1').click(function () { 
        var sidenav = $('#sidenav')
        // var compared = sidenav.css('width')
        
        if(sidenav.css('width') === "250px"){
        sidenav.css('width','100px');
        $('.sidelabel').css('display','none')
        }else{
            sidenav.css('width','250px');
            $('.sidelabel').css('display','block');
        }
     
    });
    
});