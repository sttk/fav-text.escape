'use strict';

var create = require('./create/by-replacement');

module.exports = create({
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  '\'': '&apos;',
});
