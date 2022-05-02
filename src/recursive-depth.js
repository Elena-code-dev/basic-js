const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(array) {
    let max = 0;

    if (Array.isArray(array)) {
      if(array.length === 0)
        return 1;

      for (let e of array)
        if (Array.isArray(e))
          max = Math.max(this.calculateDepth(e), max);

      return 1 + max;
    }
    return 0;
  }
  
}


module.exports = {
  DepthCalculator
};
