function isPerfectSquare(numberToVerify) {
  let square = parseInt(Math.sqrt(numberToVerify));
  return square * square === numberToVerify;
}

export const isFibonacci = (num) => {
  if (num < 0) return false;
  return (
    isPerfectSquare(5 * (num * num) - 4) || isPerfectSquare(5 * (num * num) + 4)
  );
};
