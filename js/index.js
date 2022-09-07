$( document ).ready(function() {
  console.log( "ready!" );
});

$(() => {
  console.log( "ready!" );
});

$("#button").on("click", function(){
  alert("The button was clicked.");
}); 