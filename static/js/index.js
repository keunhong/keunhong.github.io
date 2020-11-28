
$(document).ready(function() {
    $('#nerfie-image').mouseover(function() {
        $('#nerfie-image video').css('display', 'inline');
        $('#nerfie-image img').css('display', 'none');
    });
    $('#nerfie-image').mouseout(function() {
        $('#nerfie-image video').css('display', 'none');
        $('#nerfie-image img').css('display', 'inline');
    });
})
