
const ingredientenVerzamelen = (callbackFunction) => {
  setTimeout( function(){
    console.log('Ingredienten verzameld.');
    callbackFunction();
  }, 2500 );
}

function dinerKoken() {
  console.log('Lekker roeren in de soep');
}
 
ingredientenVerzamelen(dinerKoken);