$(document).ready(function() {
    //open modal
    $(document).on("click", "#editbtn", function(e){
        e.preventDefault()
        var link = $(this).attr("href")

        // fetch the usermodal
        $("#usermodalcontent").load(link)

        //open modal
        $("#Openusermodal").click();
    });
    
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
    
    $('#formuser').submit(function(event) {
  
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