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
        var username = $('#username').val()
        var firstname = $('#firstname').val()
        var lastname = $('#lastname').val()
        var email = $('#email').val()
        var password = $('#password').val()
        var message =  "all fiels are required"
        
        if(username === "" || firstname === "" || lastname === "" || email === "" || password === "")
        { 
            event.preventDefault();

            $('#error-message').text(message);
            setTimeout(function() {
                $('#error-message').text("");
            }, 3000);

            console.log(error)
            console.log("not complete")
        }
        else
        {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Created User",
                showConfirmButton: false,
                timer: 1500
              });
        }

        
    });
});