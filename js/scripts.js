//Business Logic
function UnicornPizza(size, sauce, toppings) {
  this.size = size,
  this.sauce = sauce,
  this.toppings = toppings
}

UnicornPizza.prototype.order = function() {
  return this.size + " " + this.sauce + " " + this.toppings + " $" + this.cost();
}

UnicornPizza.prototype.cost = function() {
  var cost = 0;
  if (this.size === "small") {
    cost += 10;
  }
  else if (this.size === "medium") {
    cost += 15;
  }
  else if (this.size === "large") {
    cost += 20;
  }

  for (var topping in this.toppings) {
    if (topping === "freshFruit") {
      cost += 3;
    }
    else {
      cost += 1;
    }
  }

  return cost;
}




//
// User interface logic
//
// function displayPizzaDetails(makePizza) {
// var pizzaOrder = $("ul#displayOrder");
// var htmlForPizzaOrder = "";
// makePizza.unicornPizza.forEach(function(unicornPizza) {
//   htmlForPizzaOrder += "<li id=" + unicornPizza.size + " " + unicornPizza.sauce + " " + unicornPizza.toppings +"</li>"
//   });
//   pizzaOrder.html(htmlForPizzaOrder);
// };


$().ready(function() {
  $("form#pizza-time").submit(function(event) {
    event.preventDefault();

    var sauce = [];
    var toppings = [];

    var size = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=sauce]:checked").each(function() {
      sauce.push(this.value);
    });
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppings.push(this.value);
    });
    var unicornPizza = new UnicornPizza(size, sauce, toppings);
    $("#order").append(unicornPizza.order())
    $("#order").show();
    // console.log(unicornPizza.order());
    // var cost = 0;


  });
});
