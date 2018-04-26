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
