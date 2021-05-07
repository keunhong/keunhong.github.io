
$(document).ready(function() {
    $('#nerfie-image').mouseover(function() {
        $('#nerfie-image video').css('display', 'inline-block');
        $('#nerfie-image img').css('display', 'none');
    });
    $('#nerfie-image').mouseout(function() {
        $('#nerfie-image video').css('display', 'none');
        $('#nerfie-image img').css('display', 'inline-block');
    });

    $('#fignerf-image').mouseover(function() {
        $('#fignerf-image video').css('display', 'inline-block');
        $('#fignerf-image img').css('display', 'none');
    });
    $('#fignerf-image').mouseout(function() {
        $('#fignerf-image video').css('display', 'none');
        $('#fignerf-image img').css('display', 'inline-block');
    });
})
