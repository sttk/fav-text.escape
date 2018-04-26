'use strict';

var escapeRegexpCharClass = require('../regexp-charclass');

function createEscapingByReplacement(escapingMap) {
  var regexpCharClass = Object.keys(escapingMap).join('');
  regexpCharClass = escapeRegexpCharClass(regexpCharClass);

  var regexp = new RegExp('[' + regexpCharClass + ']', 'g');

  function replaced(c) {
    return escapingMap[c];
  }

  return function(source) {
    return source.replace(regexp, replaced);
  };
}

module.exports = createEscapingByReplacement;
