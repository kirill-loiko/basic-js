const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false;

  let result = [];
  // console.log(members[0][0] === ' ')
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      if (members[i][0] === ' ') {
        for (let j = 0; j < members[i].length; j++) {
          if (members[i][j] !== ' ') {
            result.push(members[i][j].toUpperCase());
            break;
          }
        }
      } else {
        result.push(members[i][0].toUpperCase());
      }
    }
  }
  return result.sort().join('').toString();
}

module.exports = {
  createDreamTeam
};
