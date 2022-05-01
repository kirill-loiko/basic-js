const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let newArr = [];

  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }

  for (let i = 0; i < arr.length; i++) {
    
    if (i === 0 && (arr[i] === '--discard-prev' || arr[i] === '--double-prev')) {
      i++;
    }

    if (i === arr.length - 1 && (arr[i] === '--discard-next' || arr[i] === '--double-next')) {
      return newArr;
    }

    if ((arr[i] === '--double-prev' && arr[i - 2] === '--discard-next') || (arr[i] === '--discard-prev' && arr[i - 2] === '--discard-next')) {
      i++;
    }

    if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
      newArr.push(arr[i]);
    }

    if (arr[i] === '--discard-next') {
      i++;
    } 

    if (arr[i] === '--double-next') {
      newArr.push(arr[i + 1]);
    }

    if (arr[i] === '--discard-prev') {
      newArr.pop();
    }
    
    if (arr[i] === '--double-prev') {
      newArr.push(arr[i - 1]);
    }
  }
  return newArr;
}

module.exports = {
  transform
};
