//BUSINESS LOGIC
var total = 0;
function pizza(pizzaSize,crust,toppings,sauce,number) {
  this.pizzaSize = pizzaSize;
  this.crust = crust;
  this.toppings = toppings;
  this.sauce = sauce;
  this.number = number;
}
pizza.prototype.price= function () {
  total = 0
//Calculate pizza size price
  if (this.pizzaSize === "small") {
    total+=3
  } else if (this.pizzaSize === "medium") {
    total+=4
  } else { total+= 5};
};
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

  });
});
