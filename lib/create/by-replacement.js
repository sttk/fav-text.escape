'use strict';

var escapeReCharClass = require('../regexp-charclass');

function createEscapingByReplacement(escapingMap) {
  var chars = Object.keys(escapingMap).join('');
  var regexp = new RegExp('[' + escapeReCharClass(chars) + ']');

  return function(source) {
    var rs = regexp.exec(source);
    if (!rs) {
      return source;
    }
    var escaped = source.slice(0, rs.index) + escapingMap[source[rs.index]];
    var st = rs.index + 1;
    for (var ed = st; ed < source.length; ed++) {
      var val = escapingMap[source[ed]];
      if (val != null) {
        escaped += source.slice(st, ed) + val;
        st = ed + 1;
      }
    }
    return escaped + source.slice(st);
  };
}

module.exports = createEscapingByReplacement;
