
    //open modal
    // $(document).on("click", "#addproduct", function(e){
    //     e.preventDefault()
    //     var link = $(this).attr("href")

    //     // fetch the usermodal
    //     $("#openaddproduct").load(link)

    //     // //open modal
    //     $("#openaddproduct").click();
    // });

// $(document).ready(function() {

// });

    // // JavaScript to change URL and load content via AJAX
    // var sideLinks = document.querySelectorAll('.sideLink');
    // sideLinks.forEach(function(link) {
    //     link.addEventListener('click', function(event) {
    //         event.preventDefault(); // Prevent the default behavior of clicking a link
    //         var url = this.getAttribute('href');
    
    //         // Update the URL without reloading the page
    //         history.pushState(null, null, url);
    
    //         // Fetch the content of the clicked URL via AJAX
    //         fetch(url)
    //             .then(response => response.text())
    //             .then(data => {
    //                 // Extract the content from the fetched HTML
    //                 var parser = new DOMParser();
    //                 var htmlDoc = parser.parseFromString(data, 'text/html');
    //                 var content = htmlDoc.getElementById('content').innerHTML;
    
    //                 // Update the page content with the fetched content
    //                 document.getElementById('content').innerHTML = content;
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching data:', error);
    //             });
    //     });
    // });
    
    // // Listen for back/forward navigation events to handle browser history changes
    // window.addEventListener('popstate', function(event) {
    //     // Fetch the content corresponding to the current URL via AJAX
    //     var url = location.pathname; // Get the current URL path
    //     fetch(url)
    //         .then(response => response.text())
    //         .then(data => {
    //             // Extract the content from the fetched HTML
    //             var parser = new DOMParser();
    //             var htmlDoc = parser.parseFromString(data, 'text/html');
    //             var content = htmlDoc.getElementById('content').innerHTML;
    
    //             // Update the page content with the fetched content
    //             document.getElementById('content').innerHTML = content;
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // });

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
});

$(document).ready(function() {
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
    });

$(document).ready(function() {
    //update user
    $('#updateuser').submit(function(event) {
  
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
        });

//this is try
document.addEventListener('DOMContentLoaded', function () {
    const dialog = document.querySelector('[data-dialog-target="dialog"]');
    const productIdPlaceholder = document.getElementById('product_id_placeholder');

    dialog.addEventListener('click', function (event) {
        const productId = event.target.getAttribute('data-product-id');
        productIdPlaceholder.innerText = productId;
    });
});