// Using jQuery and ajax make a get request to your express server
// Display the retrieved data on the html page
$(document).ready(function() {
    $('form').on('submit', function (event) {
        event.preventDefault();
        const userInput = ($('input[name="user-inp"]').val()).toLowerCase();
    })


});