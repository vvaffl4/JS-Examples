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
    apiUrl: '',
    token: ''
  };

  const stateMap = {
    gameState: 0
  }

  // Private function list
  const init = (afterInit) => {
    console.log(configMap.apiUrl);

    getCurrentGameState();
    afterInit();
  }

  const getCurrentGameState = () =>
    setInterval(() => {
      stateMap.gameState = Game.Model.getGameState(configMap.token);
    }, 2000)

  // Waarde/object geretourneerd aan de outer scope
  return {
    init
  }
})(apiUrl)


Game.Reversi = (() => {
  const configMap = {

  }

  const init = () => {
    console.log('private init Reversi');
  }

  return {
    init
  }
})();

Game.Data = (() => {
  let configMap = {
    mock: [
      {
          url: 'api/Spel/Beurt',
          data: 0
      }
    ],
    apiKey: ''
  };

  let stateMap = {
    environment: 'development'
  }

  const init = (environment) => {
    console.log('private init Data');

    if (environment) {
      if (environment == 'development' || environment == 'production') {
        stateMap.environment = environment;
      } else {
        throw new Error("Environment must be 'development' or 'production'")
      }
    }
  }

  const getData = (url) =>  
    $.get(url)
        .then(r => {
            return r
            })
        .catch(e => {
            console.log(e.message);
        });  

  const getMockData = (url) =>
    new Promise((resolve, reject) => {
        resolve(configMap.mock);
    });

  const get = (url) => 
    stateMap.environment == 'production' 
      ? getData(url) 
      : getMockData(url);

  return {
    init,
    get
  }
})();

Game.Model = (() => {
  const configMap = {

  }

  const init = () => {
    console.log('private init Model');
  }


  const getGameState = (token) =>
    Game.Data.get(`.api/Spel/Beart/${token}`)
      .then(gameState => {
        if (gameState < 0 || gameState > 2) {
          throw new Error('GameState is invalide')
        }
        return gameState;
      });

  return {
    init,
    getGameState
  }
})();

// Game.Reversi.init();
// Game.Data.init();
// Game.Model.init();

const afterInit = () => {
  console.log('Game init voltooid');
}

$(() => Game.init(afterInit));