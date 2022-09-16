// $( document ).ready(function() {
//   console.log( "ready!" );
// });

// $(() => {
//   console.log( "ready!" );
// });

$("#button").on("click", function(){
  alert("The button was clicked.");
}); 

const apiUrl = 'url/super/duper/game';

const Game = ((apiUrl) => {
  
  const configMap = {
    apiUrl
  };

  // Private function list
  const init = (afterInit) => {
    console.log(configMap.apiUrl);
    Game.Data.init();
    Game.Model.init();

    afterInit();
  }

  // Waarde/object geretourneerd aan de outer scope
  return {
    init
  }
})(apiUrl)


Game.Data = (() => {
  const configMap = {

  }

  const init = () => {
    console.log('private init Data');
  }

  return {
    init
  }
})();

Game.Model = (() => {
  const configMap = {

  }

  const init = () => {
    console.log('private init Model');
  }

  return {
    init
  }
})();

// Game.Reversi.init();
// Game.Data.init();
// Game.Model.init();

const afterInit = () => {
  console.log('Game init voltooid');
}

$(() => Game.init(afterInit));