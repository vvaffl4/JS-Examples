const bestelBroodje = (naam) =>
  new Promise((resolve) => {
    resolve({ naam, prijs: null });
  });

const broodjeKlaarmaken = (bestelling) =>
  new Promise((resolve) => setTimeout(resolve, 2000, bestelling))

const bestellingAfrekenen = ({ naam }) =>
  new Promise((resolve) => {
    if (naam === 'kroket') resolve({ naam, prijs: 2.5});
    if (naam === 'kaas') resolve({ naam, prijs: 1.8});
    resolve(0);
  })

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