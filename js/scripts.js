$("document").ready(function(){
  $(".button1").click(function(){
    $(".form1").toggle(); 
  });
  function order(size,toppings,number,delivery,type){
      this.size = size;
      this.toppings =toppings;
      this.number = number;
      this.delivery = delivery;
      this.type = type;
  }

  order.prototype.price = function(){
      let price =0;
      let Total =0;
      if (this.size === "Large"){
       price =1100;
       Total = price + 300;
       Total = Total * this.number;

      }

      else if (this.size === "Medium"){
          price = 800;
          Total = price + 300;
          Total =Total * this.number;
      }

      else if(this.size ==="small"){
          price=500
          Total = price + 300;
          Total = Total * this.number;

      }

      else alert("Enter your sizes ")
      var delivery=prompt("Would like it hand delivered or you would like to proceed to our restaurant ? YES/NO")
      if(delivery === "YES"){
          alert("You'll have to add ksh.300 to your full price ")
          Total = Total + 300;
           var location =prompt("Please enter your location")
           $("#location").text("Your location is "+location)

      }

      else if(delivery === "NO"){
          alert("We are expecting you soon");

      }
      else alert('Wrong choice');
      $("#details").text("Your pizza will be ready shortly,The total price is  "+Total +" Your order is  " +this.type +" And your  pizza size is  "+this.size);
  
  }

   $(".button7").click(function(){
       var type = $("#type").val()
       var size= $("#size").val();
       var toppings = $(".toppings").val();
       var number = $(".number").val();
       var delivery = $(".delivery").val();
        var myOrder = new order(size,toppings,number,delivery,type);
        myOrder.price()

   });   

})