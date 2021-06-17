const technology = require('./data/technology');
const programming_syntax = require('./data/programming_syntax');

function getRandomWord() {
   let data = programming_syntax.concat(technology);
   const random = Math.floor(Math.random() * data.length);
   return data[random];
}

module.exports = {
   getRandomWord,
};
