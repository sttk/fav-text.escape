'use strict';

const BenchmarkTester = require('benchmark-tester');

const inputted = 'fred,barney,&pebbles';
const expected = 'fred,barney,&amp;pebbles';

new BenchmarkTester()
  .addTest('@fav/text.escape', (escape, data) => {
    /* eslint new-cap: "off" */
    return escape.HtmlEntity(data);
  })
  .addTest('lodash', (lodash, data) => {
    return lodash.escape(data);
  })
  .addTest('escape-html', (escape, data) => {
    return escape(data);
  })
  .verifyTest('@fav/text.escape', inputted, expected)
  .verifyTest('lodash', inputted, expected)
  .verifyTest('escape-html', inputted, expected)
  .runTest('No special characters', 'Hello,World!')
  .runTest('Single special characters', inputted)
  .runTest('A few special characters', 'Foo_Bar_<foo.bar@mail.com>')
  .runTest('Many special characters', '\'>\'""&>h<e>&<y>')
  .print();
