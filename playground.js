function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79)
    }, 1000)
  });
}

getTempPromise('Bloomington').then(function (temp) {
  console.log("Success");
}, function (err) {
  console.log("Promise error " + err);
});

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof a==="number" && typeof(b)==="number") {
      resolve(a+b);
    } else {
      reject("Please pass numbers");
    }
  });

}

addPromise(3,4).then(function(sum){
  console.log(sum);
}, function (err) {
  console.log(err);
});
