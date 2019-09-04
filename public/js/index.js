// Get references to page elements
$(document).ready(function() {

  var $inputName = $("#inputName");
  var $inputAddress = $("#inputAddress");
  var $inputCity = $("#inputCity");
  var $inputZip = $("#inputZip");
  var $carnivore = $('.carnivore');
  var $pescatarian = $('.pescatarian');
  var $vegetarian = $('.vegetarian');
  var $vegan = $('.vegan');
  var $gf = $('.gf');
  var $spice = $('.spice');
  var $wait = $('.wait');
  var $price = $('.price');
  var $type = $('.type');
  
  var $submitBtn = $('#rest_submit')
  
  // The API object contains methods for each kind of request we'll make
  var API = {
    saveExample: function(Restaurant) {
     return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "/api/restaurants",
        data: JSON.stringify(Restaurant)
      });
    // },
    // getExamples: function() {
    //   return $.ajax({
    //     url: "api/examples",
    //     type: "GET"
    //   });
    // },
    // deleteExample: function(id) {
    //   return $.ajax({
    //     url: "api/examples/" + id,
    //     type: "DELETE"
    //   });
    }
  };
  
  // refreshExamples gets new examples from the db and repopulates the list
  // var refreshExamples = function() {
  //   API.getExamples().then(function(data) {
  //     var $examples = data.map(function(example) {
  //       var $a = $("<a>")
  //         .text(example.text)
  //         .attr("href", "/example/" + example.id);
  
  //       var $li = $("<li>")
  //         .attr({
  //           class: "list-group-item",
  //           "data-id": example.id
  //         })
  //         .append($a);
  
  //       var $button = $("<button>")
  //         .addClass("btn btn-danger float-right delete")
  //         .text("ｘ");
  
  //       $li.append($button);
  
  //       return $li;
  //     });
  
  //     $exampleList.empty();
  //     $exampleList.append($examples);
  //   });
  // };
  
  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  var handleFormSubmit = function(event) {
    
    var newRestaurant = {
      name: $inputName.val().trim(),
      city: $inputAddress.val().trim(),
      state: $inputCity.val().trim(),
      address: $inputZip.val().trim(),
      vegetarian: $vegetarian.val().trim(),
      vegan: $vegan.val().trim(),
      pescatarian: $pescatarian.val().trim(),
      carnivore: $carnivore.val().trim(),
      glutenFree: $gf.val().trim(),
      type: $type.val().trim(),
      price: $price.val().trim(),
      wait: $wait.val().trim(),
      spice: $spice.val().trim(),
  
    };
    console.log(newRestaurant);
    
  
    if (!(newRestaurant.name && newRestaurant.address)) {
      alert("You must enter a restaurant name and zip code!");
      return;
    }
  
    API.saveExample(newRestaurant).then(function() {
      // refreshExamples();
      console.log('cat')
    });
  
    
      $inputName.val(""),
      $inputAddress.val(""),
      $inputCity.val(""),
      $inputZip.val("")
  };
  
  // handleDeleteBtnClick is called when an example's delete button is clicked
  // Remove the example from the db and refresh the list
  // var handleDeleteBtnClick = function() {
  //   var idToDelete = $(this)
  //     .parent()
  //     .attr("data-id");
  
  //   API.deleteExample(idToDelete).then(function() {
  //     refreshExamples();
  //   });
  // };
  
  // Add event listeners to the submit and delete buttons
  $submitBtn.on("click",() => {
    event.preventDefault();
    handleFormSubmit();
  
  })
  //$exampleList.on("click", ".delete", handleDeleteBtnClick);

});
