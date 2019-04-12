//Business Logic
function unicornPizza(size, sauce, toppings) {
  this.size = [],
  this.sauce = [],
  this.toppings = [],
  this.cost = 0
}

unicornPizza.prototype.makePizza = function() {
  return this.size + " " + this.sauce + " " + this.toppings;
}

function cost(sizeCost, toppingsTotal) {
  this.sizeCost = 0,
  this.toppingsTotal = []
}

//User interface logic

function displayPizzaDetails(makePizza) {
var pizzaOrder = $("ul#displayOrder");
var htmlForPizzaOrder = "";
makePizza.unicornPizza.forEach(function(unicornPizza) {
  htmlForPizzaOrder += "<li id=" + unicornPizza.size + " " + unicornPizza.sauce + " " + unicornPizza.toppings +"</li>"
  });
};


$().ready(function() {
  $("form#pizza-time").submit(function(event) {
    event.preventDefault();
    $("#make-pizza").show();
    var inputtedSize = $("input:checkbox[name=size]:checked").val();
    var inputtedSauce = $("input:checkbox[name=sauce]:checked").val();
    var inputtedToppings = $("input:checkbox[name=toppings]:checked").val();
    var unicornPizza = new unicornPizza(inputtedSize, inputtedSauce, inputtedToppings);
    console.log("unicornPizza");


  });
});
