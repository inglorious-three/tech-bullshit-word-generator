const listUtils = require('./utils/listUtils');

const technology = require('./data/technology');
const programming_syntax = require('./data/programming_syntax');

function getRandomWord() {
   let data = programming_syntax.concat(technology);
   return data[listUtils.getRandomIndex(data)];
}

module.exports = {
   getRandomWord,
};
