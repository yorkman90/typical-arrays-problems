
exports.min = function min(array) {
  let count = 0;
  if (!array || array.length === 0) return count;
  return array.reduce((count, item) => (item < count) ? count = item : count);
}

exports.max = function max(array) {
  let count = 0;
  if (!array || array.length === 0) return count;
  return array.reduce((count, item) => (item > count) ? count = item : count);
}

exports.avg = function avg(array) {
  let count = 0;
  if (!array || array.length === 0) return count;
  return array.reduce((count, item) => item + count) / array.length;
}
