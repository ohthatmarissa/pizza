//Business Logic
function UnicornPizza(size, sauce, toppings) {
  this.size = size,
  this.sauce = sauce,
  this.toppings = toppings
}

UnicornPizza.prototype.order = function() {
  return " A " + this.size + " Unicoron Pizza With " + this.sauce + " Sprinkled With " + this.toppings + " $" + this.cost();
}

UnicornPizza.prototype.cost = function() {
  var cost = 0;
  if (this.size === "Small") {
    cost += 10;
  }
  else if (this.size === "Medium") {
    cost += 15;
  }
  else if (this.size === "Large") {
    cost += 20;
  }

  for (var topping in this.toppings) {
    if (topping === "Fresh Fruit") {
      cost += 3;
    }
    else {
      cost += 1;
    }
  }
  return cost;
}


//User interface

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

  });
});
