const bestelBroodje = (naam) =>
  new Promise((resolve) =>
    resolve({ naam, prijs: null }));

const broodjeKlaarmaken = (bestelling) =>
  new Promise((resolve) => setTimeout(resolve, 2000, bestelling));

const broodjeKosten = {
  kroket: 2.5,
  kaas: 1.8
};

const bestellingAfrekenen = ({ naam }) =>
  new Promise((resolve) => 
    resolve({ naam, prijs: broodjeKosten[naam]}));

const doBroodje = () => {
  bestelBroodje('kroket')
    .then(broodjeKlaarmaken)
    .then(bestellingAfrekenen)
    .then(console.log);
    
  bestelBroodje('kaas')
    .then(broodjeKlaarmaken)
    .then(bestellingAfrekenen)
    .then(console.log);
}

doBroodje();