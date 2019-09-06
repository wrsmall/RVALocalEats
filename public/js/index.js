$(document).ready(function () {

  var $submitBtn = $('#rest_submit');

  var $submitBtnTwo = $('#rest_submitTwo');

  // The API object contains methods for each kind of request we'll make
  var API = {
    saveExample: function (newRestaurant) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "/api/restaurants",
        data: JSON.stringify(newRestaurant)
      });
    },
    getRestaurants: function (userPreference) {
      return $.ajax({
        url: `api/restaurants/${userPreference.vegetarian}/${userPreference.vegan}/${userPreference.carnivore}/${userPreference.pescatarian}/${userPreference.glutenFree}/${userPreference.spice}/${userPreference.wait}/${userPreference.type}/${userPreference.price}/`,
        type: "GET"
      });

      // deleteExample: function(id) {
      //   return $.ajax({
      //     url: "api/examples/" + id,
      //     type: "DELETE"
      //   });
    }
  };

  var findRestaurant = function (event) {
    // var $inputName = $("#inputName2");
    //var $inputAddress = $("#inputAddress2");
    var $inputCity = $("#inputCity2");
    var $inputZip = $("#inputZip2");
    var $carnivore = $("input[name='carnivore2']:checked").val();
    var $pescatarian = $("input[name='pescatarian2']:checked").val();
    var $vegetarian = $("input[name='vegetarian2']:checked").val();
    var $vegan = $("input[name='vegan2']:checked").val();
    var $gf = $("input[name='glutenFree2']:checked").val();
    var $spice = $("input[name='spice2']:checked").val();
    var $wait = $("input[name='wait2']:checked").val();
    var $price = $("input[name='price2']:checked").val();
    var $type = $("input[name='type2']:checked").val();

    var userPreference = {
      //name: $inputName.val().trim(),
      //city: $inputAddress.val().trim(),
      state: $inputCity.val().trim(),
      address: $inputZip.val().trim(),
      vegetarian: $vegetarian,
      vegan: $vegan,
      pescatarian: $pescatarian,
      carnivore: $carnivore,
      glutenFree: $gf,
      type: $type,
      price: $price,
      wait: $wait,
      spice: $spice,

    };

    console.log(userPreference)

    API.getRestaurants(userPreference).then(function () {
      console.log('cat');
    })


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
  var handleFormSubmit = function (event) {
    var $inputName = $("#inputName");
    var $inputAddress = $("#inputAddress");
    var $inputCity = $("#inputCity");
    var $inputZip = $("#inputZip");
    var $carnivore = $("input[name='carnivore']:checked").val();
    var $pescatarian = $("input[name='pescatarian']:checked").val();
    var $vegetarian = $("input[name='vegetarian']:checked").val();
    var $vegan = $("input[name='vegan']:checked").val();
    var $gf = $("input[name='glutenFree']:checked").val();
    var $spice = $("input[name='spice']:checked").val();
    var $wait = $("input[name='wait']:checked").val();
    var $price = $("input[name='price']:checked").val();
    var $type = $("input[name='type']:checked").val();

    var newRestaurant = {
      name: $inputName.val().trim(),
      city:$inputCity.val().trim(),
      state: $inputCity.val().trim(),
      address:  $inputAddress.val().trim(),
      zip: $inputZip.val().trim(),
      vegetarian: $vegetarian,
      vegan: $vegan,
      pescatarian: $pescatarian,
      carnivore: $carnivore,
      glutenFree: $gf,
      type: $type,
      price: $price,
      wait: $wait,
      spice: $spice,

    };
    console.log("This is:", newRestaurant);


    if (!(newRestaurant.name && newRestaurant.address)) {
      alert("You must enter a restaurant name and zip code!");
      return;
    }

    API.saveExample(newRestaurant).then(function () {
      // refreshExamples();
      console.log('cat')
    });

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
  console.log("onclick registered...")
  $submitBtn.on("click", (event) => {
    console.log(event);
    event.preventDefault();
    console.log("hit");
    handleFormSubmit();
  })
  console.log("onclick registered...")
  $submitBtnTwo.on("click", (event) => {
    console.log(event);
    event.preventDefault();
    console.log("hit");
    findRestaurant();
    //$exampleList.on("click", ".delete", handleDeleteBtnClick);
  });











  //app.post("/api/restaurants", function (req, res) {
  // var newRestaurant = req.body;
  // var match = 0;
  // var minimumDifference = 1000;
  // for (let i = 0; i < Restaurant.length; i++) {
  //   var totalDifference = 0;
  //   for (let x = 0; x < Restaurant[i].scores.length; x++) {
  //     var difference = Math.abs(newRestaurant.scores[x] - Restaurant[i].scores[x])
  //     totalDifference += difference;
  //   }
  //   if (totalDifference < minimumDifference) {
  //     match = i;
  //     minimumDifference = totalDifference;
  //   }
  // }
  // Restaurant.push(newRestaurant);

  // res.json(Restaurant[match]);
});
//}})






