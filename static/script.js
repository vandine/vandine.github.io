$(document).ready(function() {
    $("#links").children().hover(function() {
        $(this).animate({"letter-spacing":".4em"}, 200);
    }, function() {
        $(this).animate({"letter-spacing": ".2em"}, 200);
    });

    $(".indepth").hide();
    
    $(".type").click(function() {
        $(".intro-header").fadeOut();
        var indepthId;

        switch($(this).attr("id")) {
            case "game":
                indepthId = "#games";
                break;
            case "brain":
                indepthId = "#brains";
                break;
            case "thing":
                indepthId = "#making";
                break;
            default:
                indepthId = "ERR";
                break;
        }
        
        $(indepthId).fadeIn();
    });

    $(".cancel").click(function() {
        $(this).parent().fadeOut();
        $(".intro-header").fadeIn(800);
    });  
});
