//BUSINESS LOGIC
var total = 0;
var price = 0;
function pizza(pizzaSize,crust,toppings,sauce,number) {
  this.pizzaSize = pizzaSize;
  this.crust = crust;
  this.toppings = toppings;
  this.sauce = sauce;
  this.number = number;
};
pizza.prototype.price= function () {
  total = 0
  //Calculate pizza size price
  if (this.pizzaSize === "small") {
    total+=3
  } else if (this.pizzaSize === "medium") {
    total+=4
  } else { total+= 5};
  //Calculate pizza crust price
  if (this.crust === "regular") {
    total+=3
  } else if (this.crust === "wheat") {
    total+=4
  } else { total+=5 };
  //Calculate pizza toppings price
  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] === " pepperoni"|| this.toppings[i] === " sausage"|| this.toppings[i] === " mushroom") {
      total +=2
    } else { total+=3 }; };
    //Calculate pizza sauce price
    if (this.sauce === "tomato") {
      total+=1
    } else { total+=2};
    //Calculate pizza quantity price
    total = total*this.number;
    price += total;
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
      if (inputSize == ""|| inputCrust == "" || inputToppings == "" || inputSauce == "" || inputNumber == "") {alert("Please make all selection!")}
      else if (inputNumber > 10 || inputNumber < 0) { alert("Please enter a number between 1 and 10")}
      else {
        var inputPizza = new pizza(inputSize,inputCrust,inputToppings,inputSauce,inputNumber);
        inputPizza.price();
        $(".total").show();
        $("#total").text(price);
        $("ul#choices").append("<li>"+ "<a href=''>" + inputNumber + " " + inputSize +" pizza(s) ," + inputCrust + " crust; " + inputToppings + " toppings ," + inputSauce + " sauce "  + " with the total of $ "+ total + ".99" + "</a>" +"</li>");
        $("#name").text($("input.name").val());
        $("#address").text($("input.address").val());
        $("#phone").text($("input.phone").val());
      }
    });
  });
