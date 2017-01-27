//BUSINESS LOGIC
var total = 0;
function pizza(pizzaSize,crust,toppings,sauce,quantity) {
  this.pizzaSize = pizzaSize;
  this.crust = crust;
  this.toppings = toppings;
  this.sauce = sauce;
  this.quantity = quantity;
}
//USER INTERFACE
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
  
  });
});
