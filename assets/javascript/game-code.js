

$(document).on('click', '.nba-button', function () {
    var players = $(this).attr("new-players");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + players + "&api_key=9iyLviGDMo6fB51jmQuzh8TYylX2LGFQ";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        var results = response.data;
        console.log(results);

            var resultsContainerSection = $("<section class='results-container'>");

        for (var i = 0; i < results.length; i++){

            var singleResultDiv = $("<div class='result-container'>");
    		
    		var rating = results[i].rating;

    		var p = $("<p>").text("Rating: " + rating);

    		var nbaImg = $("<img class='result'>");
    		nbaImg.attr("src", results[i].images.fixed_height_still.url);
    		nbaImg.attr("data-state", "still");
    		nbaImg.attr("data-still", results[i].images.fixed_height_still.url);
    		nbaImg.attr("data-animate", results[i].images.fixed_height.url);

    		singleResultDiv.prepend(nbaImg);
    		singleResultDiv.prepend(p);

    		resultsContainerSection.prepend(singleResultDiv);

        }
        $('.gif-display').preprend(resultsContainerSection);

    })
});

$(document).on("click", ".result", function() {
	var state = $(this).attr("data-state");

	if(state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});


var nbaplayers = [
    "Lebron James",
    "Kobe Bryant",
    "Tim Duncan",
    "Lonzo Ball",
    "Chris Paul",
    "Kyrie Irving",
    "Scottie Pippen",
    "Blake Griffen",
    "Anthony Davis",
    "Zion Williams",
];

for (var i = 0; i < nbaplayers.length; i++) {
    var button = $('<button>').text(nbaplayers[i]);
    button.attr("new-players", nbaplayers[i]);
    button.addClass("nba-button");
    $(".sarea").append(button);
}

$("#add-b").on("click", function (e) {
    e.preventDefault();
    var alreadyExist = false;
    if (nbaplayers.indexOf($("#new-gifs").val()) !== -1) {
        alreadyExist = true;
    }
    if ($("#new-gifs").val() !== "" && alreadyExist === false) {
        var newp = $("#new-gifs").val().toLowerCase();
        nbaplayers.push(newp);
        var button = $('<button>').text(newp);
        button.attr("new-players", newp);
        button.addClass("nba-button");
        $(".sarea").append(button);

    }
    $("#new-gifs").val("");
    console.log(newp);
    console.log(nbaplayers);
})

