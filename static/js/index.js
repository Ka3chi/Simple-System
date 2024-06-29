$(document).ready(function() {
    let total = 0;

  $(".cartitem").each(function() {
    const priceElement = $(this).find(".price");
    const quantityElement = $(this).find(".quantity");

    if (priceElement.length && quantityElement.length) {
      const price = parseFloat(priceElement.data("price"));
      const quantity = parseInt(quantityElement.data("quantity"));

      // Log price and quantity for debugging
      console.log("Price:", price, "Quantity:", quantity);

      const itemTotal = price * quantity;
      console.log("Item Total:", itemTotal);

      total += itemTotal;
      console.log("Running Total:", total);
    }
  });

  $("#total-price").text(total.toFixed(2));

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

    // $('.posquantityform').submit(function(e) {
    //     e.preventDefault();

    //     var productname = $("#productname").val();
    //     var productid = $("#product_id").val();
    //     var productstocks = $("#stocks").val();
    //     var quantity = $("#quantity").val();
        
    //     total = productstocks - quantity

    //     console.log(productid)
    //     console.log(productname)
    //     console.log(total)
    //     console.log("x",quantity)
        
    // });

    //this is to render the data to model
    $(".selectproduct").click(function(){

        var productname = $(this).data('productname');
        var productquantity = $(this).data('productquantity');
        var product_id = $(this).data('product_id');

        // giving value
        $("#productname").val(productname);
        $("#stocks").val(productquantity);
        $("#product_id").val(product_id);

        // displaying text
        $("#productname").text(productname);
        $("#stocks").text(productquantity);
        $("#product_id").text(product_id);

    });

    // $('#myButton').focus();


//open modal
    // $(document).on("click", "#addproduct", function(e){
    //     e.preventDefault()
    //     var link = $(this).attr("href")

    //     // fetch the usermodal
    //     $("#openaddproduct").load(link)

    //     // //open modal
    //     $("#openaddproduct").click();
    // });

    // JavaScript to change URL and load content via AJAX
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
    //         });
    //     });


            // // Open the dialog
            // $('#openDialog').on('click', function(event) {
            //     event.preventDefault();
            //     $('#myDialog').removeClass('hidden').addClass('flex');
            // });
        
            // // Close the dialog
            // $('#closeDialog').on('click', function() {
            //     $('#myDialog').removeClass('flex').addClass('hidden');
            // });
        
            // // Optionally, close the dialog when clicking outside of it
            // $('#myDialog').on('click', function(event) {
            //     if ($(event.target).is('#myDialog')) {
            //         $('#myDialog').removeClass('flex').addClass('hidden');
            //     }
            // });
        
    });