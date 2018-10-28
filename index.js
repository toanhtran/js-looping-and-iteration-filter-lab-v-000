// Code your solution in this file
function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, partialName {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slic(0, lengthOfName) === partialName;
  });
}
