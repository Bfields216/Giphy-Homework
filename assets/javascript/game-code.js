// $(document).ready(function () {
//     var nbaplayers = [
//       "Lebron James",
//       "Kobe Bryant",
//       "Tim Duncan",
//       "Lonzo Ball",
//       "Chris Paul",
//       "Kyrie Irving",
//       "Scottie Pippen",
//       "Blake Griffen",
//       "Anthony Davis",
//       "Zion Williams",
//       "Tracy Mcgrady",
//     ];
  
//     buttonDisplay()
//     function buttonDisplay() {
//       //created for loop that goes thru the nba players listed to search
//     //   for (var i = 0; i < nbaplayers.length; i++) {
//     //     $("#nba-button").append("<button type='button' class='btn btn-primary' value=' " + nbaplayers[i] + "'> " + nbaplayers[i] + " </button>");
//     //     // event.preventDefult();
//     //   }
//       //document on click searches the URL for the user input or nba player listed
//       $(document).on("click", 'button', function () {
//         var gifName = $(this).attr("value");
//         console.log(gifName);
//         searchGif();
//         // event.preventDefult(); 
//         //apikey to search Giphy URL
//         var apikey = "9iyLviGDMo6fB51jmQuzh8TYylX2LGFQ";
//         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=" + apikey + "&limit=10";
//         console.log(queryURL)
  
  
//         $('.info').empty();
//         $.ajax({
//           url: queryURL,
//           method: "Get"
//         }).then(function(response) {
//           // If no information on nbaplayers is found, the alert the user
//           if (response.pagination.total_count == 0) {
//             alert('No Gifs came back');
//             // var itemindex = nbaplayers.indexOf(topic);
//             // otherwise display button
//             if (itemindex > -1) {
//             //   nbaplayers.splice(itemindex, 1);
//             //   renderButtons();
//               }
//           }
  
//           var results = response.data;
//           console.log(results);
  
  
//           for (var i = 0; i < results.length; i++) {
//             // event.preventDefault();
//             var gifDiv = $('<div>');
//             gifDiv.addClass('col-4 gif-div');
  
//             var rated = $('<p>');
//             rated.addClass('rating');
  
//             rated.text("rated: " + results[i].rating.toUpperCase());
  
//             var gifimage = $('<img>')
  
//             gifimage.attr("src", results[i].images.fixed_height_still.url);
//             gifimage.attr("gif-still", results[i].images.fixed_height_still.url);
//             gifimage.attr("gif-animate", results[i].images.fixed_height.url);
//             gifimage.attr("gif-state", "still")
//             gifimage.addClass('image-gif');
  
//             gifDiv.append(rated);
//             gifDiv.append(gifimage);
  
//             $('.gif-display').append(gifDiv);
  
  
  
  
//           }
//         })
//         // renderButtons();
//       });
//       //function to display buttons
  
//     }
  
//     function searchGif() {
//       var nplayers = $(this).attr("data-name");
//       // event.preventDefult();
//       if (nplayers !== undefined) {
//         var p = nplayers;
//       }
//       else {
//         p = $("#add-gifs").val();
//       }
//       event.preventDefault();
  
  
    // };
    // function renderButtons() {
    //   $('.buttons-view').empty();
    //   for (var i = 0; i < nbaplayers.length; i++) {
    //     var newbuttons = $('<button>');
    //     newbuttons.addClass('topic btn btn-info');
    //     newbuttons.attr('data-name', nbaplayers[i]);
    //     newbuttons.text(nbaplayers[i]);
    //     $('.buttons-view').append(newbuttons);
    //   }
    // }
  
    // function removeButton(){
    //   $("#nba-view").empty();
    //   var noplayers = $(this).attr('data-lane');
    //   var playerindex = nbaplayers.indexOf(noplayers);
    //   if (playerindex > -1){
    //     nbaplayers.splice(playerindex, 1);
    //     buttonDisplay();
    //   }
    // }
    // // Function to play or still Gif images
    // function playGif () {
    //   var state = $(this).attr('data-state');
    //   if (state === 'still') {
    //     $(this).attr('src', $(this).attr('data-animate'));
    //     $(this).attr('data-state', 'animate');
    //   }
    //   else {
    //     $(this).attr('src' , $(this).attr('data-still'));
    //     $(this).attr('data-state', 'still');
    //   }
    // }
    // // // Click on the submit button to add a new hero button
    // $("#nenba").on("click", function(event) {
    //   event.preventDefault();
    //   // capture input from the form
    //   var uinput = $("#nba-input").val();
    //   // check if topic exsits already
    //   if (nbaplayers.toString().toLowerCase().indexOf(uinput.toLowerCase()) === -1) {
    //     alert("Topic already exists");
    //   }
    //   else {
    //     nbaplayers.push(uinput);
    //     buttonDisplay();
    //   }
    // });
  
    // // Click on hero button to display Gifs and other info from API
    // $(document).on("click", ".topic", buttonDisplay);
    // // Click on the Gif image to animate or make it still
    // $(document).on("click", ".animate-gif", playGif);
    // // Double-click on any hero button to remove it from the array. Tried this for the first time.
    // $(document).on("dblclick", ".topic", removeButton);
  
    // // Calling the renderButtons function to display the intial buttons
    // buttonDisplay();
  
  
  
  
//   });
  
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
        for (var i = 0; i < nbaplayers.length; i++) {
            $("#nba-button").append("<button type='button' class='btn btn-primary' value=' " + nbaplayers[i] + "'> " + nbaplayers[i] + " </button>");
            // event.preventDefult();
        }
        $(document).on("click", 'button', function () {
            var gifName = $(this).attr("value");
            console.log(gifName);
            searchGif();
            // event.preventDefult(); 
            var apikey = "9iyLviGDMo6fB51jmQuzh8TYylX2LGFQ";
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +$(this).html() + "&api_key=" + apikey + "&limit=10";
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

    function searchGif() {
        var nplayers = $(this).attr("data-name");
        // event.preventDefult();
        if (nplayers !== undefined) {
            var p = nplayers;
        }
        else {
            p = $("#add-gifs").val();
        }


    
    };


});
