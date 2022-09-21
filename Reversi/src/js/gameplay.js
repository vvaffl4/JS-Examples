
Game.Gameplay = (() => {

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