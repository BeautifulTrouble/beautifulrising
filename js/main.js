$('#menu-button').click(function (e) {
    if ($(document.body).hasClass('page-beautiful-rising')) {
        $('#menu-update').addClass('active');
        $('#menu-update-content').removeClass('hide');
    }
    $('#menu-overlay').toggleClass('hide');
    e.preventDefault();
});
$('#menu-close').click(function (e) {
    $('#menu-overlay').toggleClass('hide');
    e.preventDefault();
});
$('#menu-update').click(function (e) {
    $(this).toggleClass('active');
    $('#menu-update-content').toggleClass('hide');
    e.preventDefault();
});

$(".content img").each(function() {
    var alt = $(this).attr("alt");
    if (alt) {
        $(this).after('<h6>' + alt + '</h6>');
        $(this).attr("title", alt);
    }
});
