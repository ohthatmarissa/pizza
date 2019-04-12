//Business Logic
function unicornPizza(size, sauce, toppings) {
  this.size = size,
  this.sauce = sauce,
  this.toppings = toppings
}

unicornPizza.prototype.makePizza = function() {
  return this.size + " " + this.sauce + " " + this.toppings;
}



$().ready(function() {
  $("form#pizza-time").submit(function(event) {
    event.preventDefault();
    $("#make-pizza").show();
    $("input:checkbox[name=pizza-size + pizza-sauce + pizza-toppings]:checked").each(function() {

    })
  });
});
