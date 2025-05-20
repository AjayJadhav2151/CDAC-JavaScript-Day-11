exports.isPrime = (arr) => {
    let newArrPrime = arr.filter((curElem) => {
      let flag = true;
      if (curElem < 2) {
        flag= false;
      } else {
        for (let i = 2; i <= Math.sqrt(curElem); i++) {
          if (curElem%i == 0) {
             flag=false;
          }
        }
        return flag
      }
    });
    return newArrPrime;
  };
  
  exports.getLongest =function(alpha)
  {
      return alpha.reduce(
          function (a, b) {
          return a.length > b.length ? a : b;
      });
  };
  var month = ["january", "february", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
  exports.getDate = function() {
      const date = new Date();
      const day = date.getDate();
      const monthIndex = date.getMonth(); 
      const monthName = month[monthIndex]; 
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      return `${day} ${monthName} ${year} ${hours}:${minutes}:${seconds}`;
  };
//   module.exports = { isPrime, getLongest};
  