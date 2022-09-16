
var promiseType = (resolve, reject) => {

  setTimeout(() => {
    var randomNumber = Math.random();

    if (randomNumber > 0.5) {
       return resolve(randomNumber);
    }
    return reject(randomNumber);
  }, 2000)
};

var promiseTypeAlwaysResolve = (resolve) => {

  setTimeout(() => {
    var randomNumber = Math.random();

    resolve(randomNumber);
  }, 2000)
};

var promiseTypeAlwaysReject = (_, reject) => {

  setTimeout(() => {
    var randomNumber = Math.random();

    reject(randomNumber);
  }, 2000)
};

var promiseTypeReturnsYes = (resolve) => {

  setTimeout(() => {
    resolve("yes");
  }, 1500 + Math.random() * 1000);
};

var promiseTypeReturnsNo = (resolve) => {

  setTimeout(() => {
    resolve("no");
  }, 1500 + Math.random() * 1000);
};

const doFunc = async () => {
  try
  {
    var randomNumberPromiseWithAwait = await new Promise(promiseType);

    console.log(`randomNumberPromise with await resolved: ${randomNumberPromiseWithAwait}`);
  } catch (randomNumber)
  {
    console.log(`randomNumberPromise with await rejected: ${randomNumberPromiseWithAwait}`);
  }

  var randomNumberPromiseWithThen = new Promise(promiseType)
    .then(randomNumber => 
      console.log(`randomNumberPromiseWithThen with then resolved: ${randomNumberPromiseWithAwait}`))
    .catch(randomNumber =>
      console.log(`randomNumberPromiseWithThen with then rejected: ${randomNumberPromiseWithAwait}`));

  var promiseWithinAPromise = new Promise(promiseType)
      .then(randomNumber => {
        return new Promise(promiseType);
      })
      .then(randomNumber => 
        console.log(`promiseWithinAPromise with then resolved: ${randomNumberPromiseWithAwait}`))
      .catch(randomNumber =>
        console.log(`promiseWithinAPromise with then rejected: ${randomNumberPromiseWithAwait}`));


  var allPromisesAlwaysResolve = Promise.all([
    new Promise(promiseTypeAlwaysResolve),
    new Promise(promiseTypeAlwaysResolve)
  ])
    .then(([result1, result2]) => {
      console.log(`allPromisesAlwaysResolve with then resolved: ${result1}`);
      console.log(`allPromisesAlwaysResolve with then resolved: ${result2}`);
    })

  var allPromisesAlwaysFail = Promise.all([
    new Promise(promiseTypeAlwaysResolve),
    new Promise(promiseTypeAlwaysResolve),
    new Promise(promiseTypeAlwaysReject)
  ])
    .then(([result1, result2]) => {
      console.log(`allPromisesAlwaysFail with then resolved: ${result1}`);
      console.log(`allPromisesAlwaysFail with then resolved: ${result2}`);
    })
    .catch(result => console.log(`allPromisesAlwaysFail with then failed: ${result}`));
    
  var racePromises = Promise.race([
    new Promise(promiseTypeReturnsYes),
    new Promise(promiseTypeReturnsNo)
  ])
    .then(result => {
      console.log(`racePromises with then resolved: ${result}`);
    }); 
};

doFunc();