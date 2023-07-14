function devideAndSort(param) {
  const divide = param.toString().split("0");
  const sorting = divide.map((num) => num.split("").sort().join(""));
  return parseInt(sorting.join(""));
}
console.log(devideAndSort(5956560159466056));
