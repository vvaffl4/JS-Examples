
// 1. declareren van module pattern
// 2. 'eerste oogje' is een scope
// 3. de functie wordt direct uitgevoerd, zonder aanroep
// 4. de functie kan een waarde retourneren (voor de outerscope!)
// 5. 'tweede oogje' is voor argumenten meegeven aan scopoe van de module
// 6. maak submodules door een module als property van de hoofdmodule toe te kennen
// app.gameplay = <module> 
let app = ((dag) => {

  let configMap = {
    environment: 'development'
  };

  const isDevelopment = () => configMap.environment === 'development'

  let init = () => {
    app.gameplay.init();

  }

  return {
    init,
    dag
  }
})('vrijdag');

app.gameplay = (() => {

  let init = () => {
    console.log('gameplay gestart');
  }

  const doeZet = (zet) => {
    console.log(zet);
  }

  return {
    init,
    doeZet
  }
})();


// aplicatie modules
console.log(app.dag);


app.gameplay.doeZet("Dit is een zet");