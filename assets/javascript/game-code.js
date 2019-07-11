$(document).ready(function () {
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

    buttonDisplay()
    function buttonDisplay() {
        //created for loop that goes thru the nba players listed to search
        for (var i = 0; i < nbaplayers.length; i++) {
            $("#nba-button").append("<button type='button' class='btn btn-primary' value=' " + nbaplayers[i] + "'> " + nbaplayers[i] + " </button>");
            // event.preventDefult();
        }
        //document on click searches the URL for the user input or nba player listed
        $(document).on("click", 'button', function () {
            var gifName = $(this).attr("value");
            console.log(gifName);
            searchGif();
            // event.preventDefult(); 
            //apikey to search Giphy URL
            var apikey = "9iyLviGDMo6fB51jmQuzh8TYylX2LGFQ";
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=" + apikey + "&limit=10";
            console.log(queryURL)


            $('.info').empty();
            $.ajax({
                url: queryURL,
                method: "Get"
            }).then(function (response) {
                $('.gif-display').empty();

                var results = response.data;
                console.log(results);


                for (var i = 0; i < results.length; i++) {
                    // event.preventDefault();
                    var gifDiv = $('<div>');
                    gifDiv.addClass('col-4 gif-div');

                    var rated = $('<p>');
                    rated.addClass('rating');

                    rated.text("rated: " + results[i].rating);

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
            // renderButtons();
        });
    }
    // event.preventDefault();

    function searchGif() {
        var nplayers = $(this).attr("data-name");
        // event.preventDefult();
        if (nplayers !== undefined) {
            var p = nplayers;
        }
        else {
            p = $("#add-gifs").val();
        }
        event.preventDefault();


    };
    



});
