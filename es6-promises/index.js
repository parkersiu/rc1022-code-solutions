const takeAChance = require('./take-a-chance');
const myPromise = takeAChance('Parker');
myPromise.then(resolve => {
  console.log(resolve);
});
myPromise.catch(reject => {
  console.error(reject);
});
