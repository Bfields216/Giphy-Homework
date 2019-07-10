
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
    "Tracy Mcgrady",
];


$(document).ready(function () {
    buttonDisplay()
    function buttonDisplay() {
        for (var i = 0; i < nbaplayers.length; i++) {
            $("#nba-button").append("<button type='button' class='btn btn-primary' value=' " + nbaplayers[i] + "'> " + nbaplayers[i] + " </button>");
            //
        }
        $(document).on("click", 'button', function () {
            var gifName = $(this).attr("value");
            console.log(gifName);
            searchGif();
        });
    }
});

function searchGif() {
    var nplayers = $(this).attr("value");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + nplayers + "&api_key=kQTqI3d65jDDiaMioN2oKPlakpTMnqre";
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "Get"
    }).then(function (response){
        $('.gif-display').empty();
        
        var results = response.data;
        console.log(results);


        for (var i = 0; i <results.length; i++){
            
            var gifDiv = $('<div>');
            gifDiv.addClass('col-4 gif-div');

            var rated = $('<p>');
            rated.addClass('rating');

            rated.text("rated: "+results[i].rating);

            var gifimage = $('<img>')

            gifimage.attr("src", results[i].images.fixed_height_still.url);
            gifimage.attr("gif-still", results[i].images.fixed_height_still.url);
            gifimage.attr("gif-animate", results[i].images.fixed_height.url);
            gifimage.attr("gif-state", "still")
            gifimage.addClass('image-gif');

            gifDiv.prepend(rated);
            gifDiv.prepend(gifimage);

            $('.gif-display').append(gifDiv);




        }
    })

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {

    
};
