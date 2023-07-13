function devideAndSort(param) {
  const devide = param.toString().split("0");

  const sorting = devide.map((num) => num.split("").sort().join(""));

  return sorting.join("");
}
console.log(devideAndSort(5956560159466056));
