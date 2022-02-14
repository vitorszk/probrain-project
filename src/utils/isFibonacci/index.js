export const isFibonacci = (num) => {
    function isSquare(s) {
      let n = Math.sqrt(s);
      return n * n === s;
    }
    return isSquare(5 * (num * num) - 4 || isSquare(5 * (num * num) + 4));
  };