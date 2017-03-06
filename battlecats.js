var counter = 0;
hitsleft = 6;

function fireZeMissiles(squarenumber) {

    if ($("#" + squarenumber).hasClass("water missme"))

    {
        $("#ilovecats").hide();
        $("#" + squarenumber).removeClass("water");
        $("#" + squarenumber).addClass("showmiss");
        $("#lookhowcute").html("<div id='lookhowcute'>Awww! You totes missed...but look how cute!</div>");
    }

    else if ($("#" + squarenumber).hasClass("water hitme"))
    {
        $("#ilovecats").hide();
        $("#lookhowcute").html("<div id='lookhowcute'></div>");
        $("#" + squarenumber).removeClass("water");
        $("#" + squarenumber).addClass("showhit");
        counter++;
        hitsleft--;

        if (counter <= 4)
        {
            $("#catsLeft").html("<div id='catsLeft'>Keep firing ze missles! Only " + hitsleft + " battle cats left!</div>");
        }

        if (counter == 5)
        {
            $("#catsLeft").html("<div id='catsLeft'>You are almost done! Only " + hitsleft + " battle cat left!</div>");
        }

        if (counter == 6)
        {
            $("#catsLeft").html("<div id='catsLeft'></div>");

            $("#gameBoard").effect("explode", 1000);
            $(".grandFinale").html("Congratulations cat warrior!<br>You found all six battle cats!");
            $(".grandFinale").addClass("gameOverPic");
            $(".grandFinale").addClass("gameOverMessage");
        };
    };
};