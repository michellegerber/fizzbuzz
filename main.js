$(document).ready(function() {
   $("button").on("click", getData);
});
function getNumber (input) {
for( var i=1; i<=input; i++) {
        if ((i%5===0) && (i%3===0))
          { $(".num").append( "FizzBuzz" + "<br>");}
        else if (i%3===0)
          { $(".num").append( "Fizz" + "<br>");}
        else if  (i%5===0) 
          { $(".num").append(  "Buzz" + "<br>");}
        else { $(".num").append( i + "<br>");}  
		}

}
  function getData() {
    var custInput = $(".datainput");
    var input = custInput.val();
    
         if ((input !== "") && (input <= 100) && (input >= 1) && ($.trim(input) !== "")) 
{
      
    $(".num").html('');
   getNumber(input);
    custInput.val("");

  }
  else alert("Whoops! Try again!");
  }
