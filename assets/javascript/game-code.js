// $(document).ready(function () {
//     var nbaplayers = [
//         "Lebron James",
//         "Kobe Bryant",
//         "Tim Duncan",
//         "Lonzo Ball",
//         "Chris Paul",
//         "Kyrie Irving",
//         "Scottie Pippen",
//         "Blake Griffen",
//         "Anthony Davis",
//         "Zion Williams",
//         "Tracy Mcgrady",
//     ];

//     buttonDisplay()
//     function buttonDisplay() {
//         //created for loop that goes thru the nba players listed to search
//         for (var i = 0; i < nbaplayers.length; i++) {
//             $("#nba-button").append("<button type='button' class='btn btn-primary' value=' " + nbaplayers[i] + "'> " + nbaplayers[i] + " </button>");
//             // event.preventDefult();
//         }

//   

//


//                 for (var i = 0; i < results.length; i++) {
//                     // event.preventDefault();
//                     var gifDiv = $('<div>');
//                     gifDiv.addClass('col-4 gif-div');

//                     var rated = $('<p>');
//                     rated.addClass('rating');

//                     rated.text("rated: " + results[i].rating);

//                     var gifimage = $('<img>')

//                     gifimage.attr("src", results[i].images.fixed_height_still.url);
//                     gifimage.attr("gif-still", results[i].images.fixed_height_still.url);
//                     gifimage.attr("gif-animate", results[i].images.fixed_height.url);
//                     gifimage.attr("gif-state", "still")
//                     gifimage.addClass('image-gif');

//                     gifDiv.append(rated);
//                     gifDiv.append(gifimage);

//                     $('.gif-display').append(gifDiv);

//                     function playGif () {
//                         var state = $(this).attr('data-state');
//                         if (state === 'still') {
//                           $(this).attr('src', $(this).attr('data-animate'));
//                           $(this).attr('data-state', 'animate');
//                         }
//                         else {
//                           $(this).attr('src' , $(this).attr('data-still'));
//                           $(this).attr('data-state', 'still');
//                         }
//                       }

//                     $(document).on("click", ".animate-gif", playGif);
//                 }
//             })
//             // renderButtons();
//         });
//     }
//     // event.preventDefault();

//     function searchGif() {
//         var nplayers = $(this).attr("data-name");
//         // event.preventDefult();
//         if (nplayers !== undefined) {
//             var p = nplayers;
//         }
//         else {
//             p = $("#add-gifs").val();
//         }
//         event.preventDefault();


//     };
// });
$(document).ready(function() {
    // creating loop to go through nba players
    var nbaplayers = ['Lebron James', 'Kobe Bryant', 'Allen Iverson', 'Chris Paul', 'Tracy Mcgrady', 'Robert Horry', 'Zion Williamson', 'TJ Ford', 'Kyrie Irving'];


    //Function to display info on the nbaplayers by calling an API and retrieving the info 
    function displayInfo(){
      $('#nba-view').empty();
      var topic = $(this).attr('data-name');
      var apikey = "9iyLviGDMo6fB51jmQuzh8TYylX2LGFQ";
     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).html() + "&api_key=" + apikey + "&limit=10";
     console.log(queryURL)

      // AJAX call to GET information 
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        // If no information on nbaplayers is found, the alert the user
        if (response.pagination.total_count == 0) {
          alert('Sorry, there are no Gifs for this topic');
          var itemindex = nbaplayers.indexOf(topic);
          // otherwise display button
          if (itemindex > -1) {
            nbaplayers.splice(itemindex, 1);
            renderButtons();
            }
        }
        
        // Save response from API call (JSON) to a variable results
        var results = response.data;
        for (var j = 0; j < results.length; j++){
          // Create new Div
          var newTopicDiv = $("<div class='hero-name'>");
          // Save responses from API into variables and add to DOM
          // GIF Rating
          var Rating = $('<p>').text('Rating: ' + results[j].rating.toUpperCase());
          // GIF Title
        //   var Title = $('<p>').text('Title: ' + results[j].title.toUpperCase());
          // GIF URL
          var gifURL = results[j].images.fixed_height_still.url;         
          var gif = $('<img>');
          gif.attr('src', gifURL);
          gif.attr('data-still', results[j].images.fixed_height_still.url);
          gif.attr('data-animate', results[j].images.fixed_height.url);
          gif.attr('data-state', 'still');
          gif.addClass ('animate-gif');
          // Appending info 
          newTopicDiv.append(Rating);
        //   newTopicDiv.append(Title);
          newTopicDiv.append(gif);
           // Putting the saved info to new div
          $('#nba-view').prepend(newTopicDiv);
        } 

        // var rated = $('<p>');
//                     rated.addClass('rating');

//                     rated.text("rated: " + results[i].rating);

//                     var gifimage = $('<img>')

//                     gifimage.attr("src", results[i].images.fixed_height_still.url);
//                     gifimage.attr("gif-still", results[i].images.fixed_height_still.url);
//                     gifimage.attr("gif-animate", results[i].images.fixed_height.url);
//                     gifimage.attr("gif-state", "still")
//                     gifimage.addClass('image-gif');

//                     gifDiv.append(rated);
//                     gifDiv.append(gifimage);
      });
    };
    
    // Function for displaying buttons
    function renderButtons() {
      // Deletes the movies prior to adding new movies
      $('.buttons-view').empty();
      // Loops through the array of nbaplayers to create buttons for all nbaplayers
      for (var i = 0; i < nbaplayers.length; i++) {
        var createButtons = $('<button>');
        createButtons.addClass('topic btn btn-info');
        createButtons.attr('data-name', nbaplayers[i]);
        createButtons.text(nbaplayers[i]);
        $('.buttons-view').append(createButtons);
      }
    }

    // Function to remove buttons
    function removeButton(){
      $("#nba-view").empty();
      var topic = $(this).attr('data-name');
      var itemindex = nbaplayers.indexOf(topic);
      if (itemindex > -1) {
        nbaplayers.splice(itemindex, 1);
        renderButtons();
      }
    }

    // Function to play or still Gif images
    function playGif () {
      var state = $(this).attr('data-state');
      if (state === 'still') {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', 'animate');
      }
      else {
        $(this).attr('src' , $(this).attr('data-still'));
        $(this).attr('data-state', 'still');
      }
    }

    ///EVENT LISTENERS aka CLICK EVENTS
    // Click on the submit button to add a new hero button
    $("#add-hero").on("click", function(event) {
      event.preventDefault();
      // capture input from the form
      var hero = $("#nba-input").val().trim();
      // check if topic exsits already
      if (nbaplayers.toString().toLowerCase().indexOf(hero.toLowerCase()) != -1) {
        alert("Topic already exists");
      }
      else {
        nbaplayers.push(hero);
        renderButtons();
      }
    });

    // Click on hero button to display Gifs and other info from API
    $(document).on("click", ".topic", displayInfo);
    // Click on the Gif image to animate or make it still
    $(document).on("click", ".animate-gif", playGif);
    // Double-click on any hero button to remove it from the array. Tried this for the first time.
    $(document).on("dblclick", ".topic", removeButton);

    // Calling the renderButtons function to display the intial buttons
    renderButtons();


}); 