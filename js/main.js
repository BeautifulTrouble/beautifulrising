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
    $(this).attr("title", $(this).attr("alt"));
});
