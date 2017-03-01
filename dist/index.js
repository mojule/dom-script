'use strict';

var H = require('html-script');
var DomAdapter = require('./dom-adapter');

var DomScript = function DomScript(document) {

  var domAdapter = DomAdapter(document);

  return H(domAdapter);
};

if (typeof window !== 'undefined') Object.assign(DomScript, DomScript(window.document));

module.exports = DomScript;