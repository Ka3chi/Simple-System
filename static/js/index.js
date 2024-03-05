$(document).ready(function () {
    // Function to load dashboard page
    $("#loadDashboard").click(function() {
        $("#content").load("{% url 'templates/Dashboard/dashboard.html' %}");
    });

    $("#loadUsermanagement").click(function(event) {
        event.preventDefault();  // Prevent default behavior (e.g., following the link)

        // Perform AJAX request to load user management content
        $.ajax({
            url: "{% url '../../templates/Usermanagement/usermanagement.html' %}",
            type: "GET",
            success: function(response) {
                // Replace the content of a specific element with the loaded HTML
                $("#content").html(response);
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    });

    $('#b1').click(function () { 
        // var sidebar = $('#sidebar')
        // var compared = sidebar.css('width')
        

        // if(sidebar.css('width') === "300px"){
        // sidebar.css('display','none');
        // sidebar.css('width','0');
        // $('#content').css('left','0')
        // }else{
        //     sidebar.css('display','block');
        //     sidebar.css('width','300px');
        //     $('#content').css('left','300px')
        // }
     
    });
    
});