//Business Logic
function unicornPizza(size, sauce, toppings) {
  this.size = size,
  this.sauce = sauce,
  this.toppings = toppings
}

unicornPizza.prototype.yumPizza = function() {
  return this.size + " " + this.sauce + " " + this.toppings;
}
// unicornPizza.prototype.cost = function() {
//   if (this.size === "small") {
//     cost += 10; }
//   else if (this.size === "medium") {
//     cost += 15; }
//   else if (this.size === "large") {
//     cost += 20; }
//
//   if (this.topping === "freshFruit")
//   }





//User interface logic

function displayPizzaDetails(makePizza) {
var pizzaOrder = $("ul#displayOrder");
var htmlForPizzaOrder = "";
makePizza.unicornPizza.forEach(function(unicornPizza) {
  htmlForPizzaOrder += "<li id=" + unicornPizza.size + " " + unicornPizza.sauce + " " + unicornPizza.toppings +"</li>"
  });
  pizzaOrder.html(htmlForPizzaOrder);
};


$().ready(function() {
  $("form#pizza-time").submit(function(event) {
    event.preventDefault();
    $("#make-pizza").show();
    var inputtedSize = $("input:checkbox[name=size]:checked").each(function() {
      size.push(this.val);
      });
    var inputtedSauce = $("input:checkbox[name=sauce]:checked").each(function() {
      sauce.push(this.val);
      });
    var inputtedToppings = $("input:checkbox[name=toppings]:checked").each(function() {
      toppings.push(this.val);
      });

    var unicornPizza = new unicornPizza(inputtedSize, inputtedSauce, inputtedToppings);
    unicornPizza.yumPizza(newUnicornPizza);
    console.log(unicornPizza);
    // var cost = 0;


  });
});
