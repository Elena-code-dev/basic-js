const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let filter = arr.filter((a,b) => a !== -1).sort((a,b) => a-b)
  let res = arr.map((a,b,c) => a == -1 ? filter.splice(b,0,a) : a)
   return filter;
}

module.exports = {
  sortByHeight
};
