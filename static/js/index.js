$(document).ready(function() {
    
    // Shrink side nav and content
    $('#toggleButton').click(function () {
        var sidenav = $('#sidenav');

        if (sidenav.css('width') === "250px") {
            sidenav.css({
                'width': '100px',
            });
            $('.sidelabel').css('display', 'none');
        } else {
            sidenav.css({
                'width': '250px',
            });
            $('.sidelabel').css('display', 'block');
        }
    });

    $('#formuser').submit(function() {
        // if (success) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Created User",
                showConfirmButton: false,
                timer: 1500
            });
    });
        // } else {
        //     Swal.fire({
        //         position: "center",
        //         icon: "error",
        //         title: "Please provide valid information",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        // }

            // Swal.fire({
            //     position: "center",
            //     icon: "error",
            //     title: "Please provide valid information",
            //     showConfirmButton: false,
            //     timer: 1500
            // });


    //update user
    $('#updateuser').submit(function(event) {
  
  
        // if($('.errorlist').is(':visible')) { 
        //     event.preventDefault();
        // }
        // else
        // {

        // if($('.errorlist').is(':visible')) { 
        //     event.preventDefault();
        // }
        // else
        // {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Updated User",
                showConfirmButton: false,
                timer: 1500
              });
            });
    
    $('.addproductform').submit(function() {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Added a Product",
            showConfirmButton: false,
            timer: 1500
          });
    });


    //this is productview image
    $(".clickviewimage").click(function(){
        var imageUrl = $(this).data('info');
        $("#modalImage").attr('src', imageUrl);
    });

    $('.posquantityform').submit(function() {
        
    });

    //this is to render the data to model
    $(".selectproduct").click(function(){
        var productname = $(this).data('productname');
        var productquantity = $(this).data('productquantity');
        var product_id = $(this).data('product_id');

        $("#productname").text(productname);
        $("#stocks").text(productquantity);
        $("#product_id").text(product_id);
    });

});

//open modal
    // $(document).on("click", "#addproduct", function(e){
    //     e.preventDefault()
    //     var link = $(this).attr("href")

    //     // fetch the usermodal
    //     $("#openaddproduct").load(link)

    //     // //open modal
    //     $("#openaddproduct").click();
    // });

    // // JavaScript to change URL and load content via AJAX
    // $('.sideLink').on('click', function(event) {
    //     event.preventDefault(); // Prevent the default behavior of clicking a link
    //     var url = $(this).attr('href');
        
    //     // Update the URL without reloading the page
    //     history.pushState(null, null, url);
        
    //     // Fetch the content of the clicked URL via AJAX
    //     $.ajax({
    //         url: url,
    //         type: 'GET',
    //         success: function(data) {
    //             // Extract the content from the fetched HTML
    //             var content = $(data).find('#content').html();
                
    //             // Update the page content with the fetched content
    //             $('#content').html(content);
    //         },
    //         error: function(xhr, status, error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     });
    // });
    
    // // Listen for back/forward navigation events to handle browser history changes
    // $(window).on('popstate', function(event) {
    //     // Fetch the content corresponding to the current URL via AJAX
    //     var url = location.pathname; // Get the current URL path
    //     $.ajax({
    //         url: url,
    //         type: 'GET',
    //         success: function(data) {
    //             // Extract the content from the fetched HTML
    //             var content = $(data).find('#content').html();
                
    //             // Update the page content with the fetched content
    //             $('#content').html(content);
    //         },
    //         error: function(xhr, status, error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     });