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
    var inputSize = $("input:radio[name=size]:checked").val();
    var inputCrust = $("input:radio[name=crust]:checked").val();
    var inputToppings = []
    $("input:checkbox[name=topping]:checked").each(function(){
      inputToppings.push($(this).val());
    });
    var inputSauce = $("input:radio[name=sauce]:checked").val();
    var inputNumber = parseInt($("input#number").val());

    var inputPizza = new pizza(inputSize,inputCrust,inputToppings,inputSauce,inputNumber);
    console.log(inputPizza);
  });
});
