'use strict';

var escapeRegexpCharClass = require('../regexp-charclass');

function createEscapingByPreposition(escapingChar, escapedChars) {
  var regexpCharClass = escapingChar + (escapedChars || '');
  regexpCharClass = escapeRegexpCharClass(regexpCharClass);

  var regexp = new RegExp('([' + regexpCharClass + '])', 'g');
  var replaced = escapingChar + '$&';

  return function(source) {
    return source.replace(regexp, replaced);
  };
}

module.exports = createEscapingByPreposition;
