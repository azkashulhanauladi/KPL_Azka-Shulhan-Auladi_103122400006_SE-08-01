function toNumberArray(number) {
  const arr = Array.isArray(number) ? number : number.split(",");

  return arr
    .map(item => parseFloat(item.trim()))
    .filter(item => !isNaN(item));
}

console.log(toNumberArray("1, 2"))
console.log(toNumberArray(["1", "2"]))
console.log(toNumberArray(" 11,55,33 "))
console.log(toNumberArray(["0.2", "-11", "abc23"]))