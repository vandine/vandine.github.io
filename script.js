$(document).ready(function() {
    $("#links").children().hover(function() {
        $(this).animate({"letter-spacing":".4em"}, 200);
    }, function() {
        $(this).animate({"letter-spacing": ".2em"}, 200);
    });
});
