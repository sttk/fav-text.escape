(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.fav||(g.fav = {}));g=(g.text||(g.text = {}));g.escape = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var regexp = require('./lib/regexp');
var regexpCharClass = require('./lib/regexp-charclass');
var htmlEntity = require('./lib/html-entity');
var htmlAttribute = require('./lib/html-attribute');
var byPreposition = require('./lib/create/by-preposition');
var byReplacement = require('./lib/create/by-replacement');

var escape = {};

Object.defineProperties(escape, {
  RegExp: { enumerable: true, value: regexp },
  RegExpCharClass: { enumerable: true, value: regexpCharClass },
  HtmlEntity: { enumerable: true, value: htmlEntity },
  HtmlAttribute: { enumerable: true, value: htmlAttribute },
  byPreposition: { enumerable: true, value: byPreposition },
  byReplacement: { enumerable: true, value: byReplacement },
});

module.exports = escape;

},{"./lib/create/by-preposition":2,"./lib/create/by-replacement":3,"./lib/html-attribute":4,"./lib/html-entity":5,"./lib/regexp":7,"./lib/regexp-charclass":6}],2:[function(require,module,exports){
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

},{"../regexp-charclass":6}],3:[function(require,module,exports){
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

},{"../regexp-charclass":6}],4:[function(require,module,exports){
'use strict';

var create = require('./create/by-replacement');

module.exports = create({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  '\'': '&apos;',
});

},{"./create/by-replacement":3}],5:[function(require,module,exports){
'use strict';

var create = require('./create/by-replacement');

module.exports = create({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  ' ': '&nbsp;',
  '\n': '<br/>',
});

},{"./create/by-replacement":3}],6:[function(require,module,exports){
'use strict';

function regexpCharClass(source) {
  return source.replace(/([\-\^\]\\])/g, '\\$&');
}

module.exports = regexpCharClass;

},{}],7:[function(require,module,exports){
'use strict';

function regexp(source) {
  return source.replace(/([\\^$.*+?()[\]{}|])/g, '\\$&');
}

module.exports = regexp;

},{}]},{},[1])(1)
});
