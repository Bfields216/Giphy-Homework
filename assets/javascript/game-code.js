

// $(document).on('click', '.nba-button', function () {
   
// //    Getting gifs from api... into the html
//     var players = $(this).attr("new-players");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + players + "&api_key=9iyLviGDMo6fB51jmQuzh8TYylX2LGFQ";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).done(function (response) {
//         var results = response.data;
//         console.log(results);

//             var resultsContainerSection = $("<section class='results-container'>");

//         for (var i = 0; i < results.length; i++){

//             var singleResultDiv = $("<div class='result-container'>");
    		
//     		var rating = results[i].rating;

//     		var p = $("<p>").text("Rating: " + rating);

//     		var nbaImg = $("<img class='result'>");
//     		nbaImg.attr("src", results[i].images.fixed_height_still.url);
//     		nbaImg.attr("data-state", "still");
//     		nbaImg.attr("data-still", results[i].images.fixed_height_still.url);
//     		nbaImg.attr("data-animate", results[i].images.fixed_height.url);

//     		singleResultDiv.prepend(nbaImg);
//     		singleResultDiv.prepend(p);

//     		resultsContainerSection.prepend(singleResultDiv);

//         }
//         $('.gif-display').preprend(resultsContainerSection);

//     })
// });

// $(document).on("click", ".result", function() {
// 	var state = $(this).attr("data-state");

// 	if(state === "still") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//       } else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//     }
// });


// var nbaplayers = [
//     "Lebron James",
//     "Kobe Bryant",
//     "Tim Duncan",
//     "Lonzo Ball",
//     "Chris Paul",
//     "Kyrie Irving",
//     "Scottie Pippen",
//     "Blake Griffen",
//     "Anthony Davis",
//     "Zion Williams",
// ];

// for (var i = 0; i < nbaplayers.length; i++) {
//     var button = $('<button>').text(nbaplayers[i]);
//     button.attr("new-players", nbaplayers[i]);
//     button.addClass("nba-button");
//     $(".sarea").append(button);
// }

// $("#add-b").on("click", function (e) {
//     e.preventDefault();
//     var alreadyExist = false;
//     if (nbaplayers.indexOf($("#new-gifs").val()) !== -1) {
//         alreadyExist = true;
//     }
//     if ($("#new-gifs").val() !== "" && alreadyExist === false) {
//         var newp = $("#new-gifs").val().toLowerCase();
//         nbaplayers.push(newp);
//         var button = $('<button>').text(newp);
//         button.attr("new-players", newp);
//         button.addClass("nba-button");
//         $(".sarea").append(button);

//     }
//     $("#new-gifs").val("");
//     console.log(newp);
//     console.log(nbaplayers);
// })



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
$(document).ready(function(){
    for (var i = 0; i < nbaplayers.length; i++){
        $("#nba-button").append("<button type='button' onclick='searchGif(\"" + nbaplayers[i] + "\")' class='btn btn-primary' value=' " + nbaplayers[i] + "'> " + nbaplayers[i] + " </button>");
    }
});

function nbaButtonClicked(){
    var userInput = $("#NBAInput").val();
    searchGif(userInput);

}

function submitButtonClicked (){
    var userInput = $("NBAInput").val();

    if (userInput){
        $("#nba-button").append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
    
}

function searchGif(gifName) {
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + " &api_key=9iyLviGDMo6fB51jmQuzh8TYylX2LGFQ",
            type: 'GET',
        })
        .done(function(response) {
            displayGif(response);
        })
}

function displayGif(response){
    $(".gif-display").empty();
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">';

        image = '<div class="col-md-4">' + image + "</div>";
        $('.gif-display').append(image);
    }
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

