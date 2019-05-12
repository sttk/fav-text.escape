'use strict';

const BenchmarkTester = require('benchmark-tester');

const inputted = '[lodash](https://lodash.com/)';
const expected = '\\[lodash\\]\\(https://lodash\\.com/\\)';
const expected2 = '\\[lodash\\]\\(https\\:\\/\\/lodash\\.com\\/\\)';

new BenchmarkTester()
  .addTest('@fav/text.escape', (escape, inputted) => {
    return escape.RegExp(inputted);
  })
  .addTest('lodash', (lodash, inputted) => {
    return lodash.escapeRegExp(inputted);
  })
  .addTest('escape-string-regexp', (escape, inputted) => {
    return escape(inputted);
  })
  .addTest('regexp.escape', (escape, inputted) => {
    return escape(inputted);
  })
  .addTest('escape-regexp', (escape, inputted) => {
    return escape(inputted);
  })
  .verifyTest('@fav/text.escape', inputted, expected)
  .verifyTest('lodash', inputted, expected)
  .verifyTest('escape-string-regexp', inputted, expected)
  .verifyTest('regexp.escape', inputted, expected)
  .verifyTest('escape-regexp', inputted, expected2)
  .runTest('No special characters', 'Hello,World!')
  .runTest('Many special characters', inputted)
  .print();

