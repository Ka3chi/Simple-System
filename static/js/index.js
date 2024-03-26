$(document).ready(function() {
    //open modal
    // $(document).on("click", "#editbtn", function(e){
    //     // e.preventDefault()
    //     // var link = $(this).attr("href")

    //     // // fetch the usermodal
    //     // $("#usermodalcontent").load(link)

    //     // //open modal
    //     // $("#Openusermodal").click();
    // });

     // JavaScript to handle side navigation toggle without page reload
    document.getElementById('toggleButton').addEventListener('click', function() {
        document.getElementById('sidenav').classList.toggle('active');
    });

    // JavaScript to prevent default link behavior and load content via AJAX
    var sideLinks = document.querySelectorAll('.sideLink');
    sideLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of clicking a link
            var url = this.getAttribute('href');

            // Fetch the content of the clicked URL via AJAX
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    // Extract the content from the fetched HTML
                    var parser = new DOMParser();
                    var htmlDoc = parser.parseFromString(data, 'text/html');
                    var content = htmlDoc.getElementById('content').innerHTML;

                    // Update the page content with the fetched content
                    document.getElementById('content').innerHTML = content;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        });
    });

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
    
            // Swal.fire({
            //     position: "center",
            //     icon: "success",
            //     title: "Successfully Created User",
            //     showConfirmButton: false,
            //     timer: 1500
            //   });

            //   Swal.fire({
            //     position: "center",
            //     icon: "error",
            //     title: "Please provide a valid info",
            //     showConfirmButton: false,
            //     timer: 1500
            //   });

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
        // }

        
    });
});