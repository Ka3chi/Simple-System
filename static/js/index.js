$(document).ready(function () {
    //button shrink side nav
    $('#b1').click(function () {
        var sidenav = $('#sidenav');

        
        if (sidenav.css('width') === "250px") {
            sidenav.css({
                'width': '100px',
                // 'transition': 'width 0.3s ease'
            });
            $('.sidelabel').css('display', 'none');
        } else {
            sidenav.css({
                'width': '250px',
                // 'transition': 'width 0.3s ease'
            });
            $('.sidelabel').css('display', 'block');
        }
    });
    
    $('#formcreateuser').submit(function(event) {
  
        // if($('.errorlist').is(':visible')) { 
        //     event.preventDefault();
        // }
        // else
        // {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Created User",
                showConfirmButton: false,
                timer: 1500
              });
        // }

        
    });
});