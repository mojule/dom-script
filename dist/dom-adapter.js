'use strict';

var DomAdapter = function DomAdapter(document) {
  var domAdapter = {
    isNode: function isNode(node) {
      return node && node.nodeName && node.nodeType;
    },
    createElement: function createElement(tagName) {
      return document.createElement(tagName);
    },
    createText: function createText(value) {
      return document.createTextNode(value);
    },
    appendChild: function appendChild(node, child) {
      return node.appendChild(child);
    },
    addAttributes: function addAttributes(node, attributes) {
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        node.setAttribute(name, value);
      });
    },
    createDocument: function createDocument() {
      var doc = document.implementation.createHTMLDocument('');

      while (doc.firstChild) {
        doc.firstChild.remove();
      }return doc;
    },
    createDocumentType: function createDocumentType(name) {
      var publicId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var systemId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      return document.implementation.createDocumentType(name, publicId, systemId);
    },
    createComment: function createComment(value) {
      return document.createComment(value);
    },
    createDocumentFragment: function createDocumentFragment() {
      return document.createDocumentFragment();
    },
    addEventListener: function addEventListener(node, name, listener) {
      return node.addEventListener(name, listener);
    }
  };

  return domAdapter;
};

module.exports = DomAdapter;