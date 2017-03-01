(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
'use strict';

var H = require('html-script');
var DomAdapter = require('./dom-adapter');

var DomScript = function DomScript(document) {

  var domAdapter = DomAdapter(document);

  return H(domAdapter);
};

if (typeof window !== 'undefined') Object.assign(DomScript, DomScript(window.document));

module.exports = DomScript;
},{"./dom-adapter":1,"html-script":14}],3:[function(require,module,exports){
'use strict'

window.DomScript = require( '../../dist' )

},{"../../dist":2}],4:[function(require,module,exports){
module.exports={
  "html": {
    "content": [ "<head>", "<body>" ],
    "singular": true
  },
  "head": {
    "content": [ "metadata content" ],
    "parent": [ "<html>" ],
    "singular": true
  },
  "body": {
    "categories": [ "sectioning root" ],
    "content": [ "flow content" ],
    "parent": [ "<html>" ],
    "singular": true
  },

  "title": {
    "categories": [ "metadata content" ],
    "content": [ "text" ],
    "parent": [ "<head>" ],
    "singular": true
  },
  "base": {
    "categories": [ "metadata content" ],
    "parent": [ "<head>" ],
    "singular": true
  },
  "link": {
    "categories": [ "metadata content" ],
    "parent": [ "<head>" ]
  },
  "meta": {
    "categories": [ "metadata content" ],
    "parent": [ "<head>" ]
  },
  "style": {
    "categories": [ "metadata content" ],
    "content": [ "text" ],
    "parent": [ "<head>" ]
  },

  "address": {
    "categories": [ "flow content", "palpable content" ],
    "content": [ "flow content" ],
    "disallow": [ "<address>", "heading content", "sectioning content", "<header>", "<footer>" ]
  },
  "article": {
    "categories": [ "flow content", "sectioning content", "palpable content" ],
    "content": [ "flow content" ],
    "disallow": [ "<main>" ],
    "nospec": [ "4.01" ]
  },
  "aside": {
    "categories": [ "flow content", "sectioning content", "palpable content" ],
    "content": [ "flow content" ],
    "disallow": [ "<main>" ],
    "nospec": [ "4.01" ]
  },
  "footer": {
    "categories": [ "flow content", "palpable content" ],
    "content": [ "flow content" ],
    "disallow": [ "<footer>", "<header>", "<main>" ],
    "nospec": [ "4.01" ]
  },
  "header": {
    "categories": [ "flow content", "palpable content" ],
    "content": [ "flow content" ],
    "disallow": [ "<footer>", "<header>", "<main>" ],
    "nospec": [ "4.01" ]
  },
  "h1": {
    "categories": [ "flow content", "heading content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "h2": {
    "categories": [ "flow content", "heading content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "h3": {
    "categories": [ "flow content", "heading content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "h4": {
    "categories": [ "flow content", "heading content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "h5": {
    "categories": [ "flow content", "heading content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "h6": {
    "categories": [ "flow content", "heading content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "nav": {
    "categories": [ "flow content", "sectioning content", "palpable content" ],
    "content": [ "flow content" ],
    "disallow": [ "<main>" ],
    "nospec": [ "4.01" ]
  },

  "blockquote": {
    "categories": [ "flow content", "sectioning root", "palpable content" ],
    "content": [ "flow content" ]
  },
  "dd": {
    "content": [ "flow content" ],
    "parent": [ "<dl>" ],
    "previous": [ "<dt>", "<dd>" ]
  },
  "div": {
    "categories": [ "flow content", "palpable content" ],
    "content": [ "flow content" ]
  },
  "dl": {
    "categories": [ "flow content" ],
    "content": [ "<dt>", "<dd>" ]
  },
  "dt": {
    "content": [ "flow content" ],
    "parent": [ "<dl>" ],
    "disallow": [ "<footer>", "<header>", "sectioning content", "heading content" ],
    "next": [ "<dt>", "<dd>" ]
  },
  "figcaption": {
    "content": [ "flow content" ],
    "parent": [ "<figure>" ],
    "position": [ "first", "last" ],
    "nospec": [ "4.01" ]
  },
  "figure": {
    "categories": [ "flow content", "sectioning root", "palpable content" ],
    "content": [ "flow content", "<figcaption>" ],
    "nospec": [ "4.01" ]
  },
  "hr": {
    "categories": [ "flow content" ]
  },
  "li": {
    "content": [ "flow content" ],
    "parent": [ "<ul>", "<ol>", "<menu>" ]
  },
  "main": {
    "categories": [ "flow content", "palpable content" ],
    "content": [ "flow content" ],
    "nospec": [ "4.01" ]
  },
  "ol": {
    "categories": [ "flow content" ],
    "content": [ "<li>" ],
    "states": {
      ":not(:empty)": {
        "categories": [ "palpable content" ]
      }
    }
  },
  "p": {
    "categories": [ "flow content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "pre": {
    "categories": [ "flow content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "section": {
    "categories": [ "flow content", "sectioning content", "palpable content" ],
    "content": [ "flow content" ],
    "nospec": [ "4.01" ]
  },
  "ul": {
    "categories": [ "flow content" ],
    "content": [ "<li>" ],
    "states": {
      ":not(:empty)": {
        "categories": [ "palpable content" ]
      }
    }
  },

  "a": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "flow content", "phrasing content" ],
    "disallow": [ "interactive content" ],
    "states": {
      "[href]" : {
        "categories": [ "interactive content" ]
      }
    }
  },
  "abbr": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "b": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "bdi": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ],
    "nospec": [ "4.01" ]
  },
  "bdo": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ],
    "nospec": [ "4.01" ]
  },
  "br": {
    "categories": [ "flow content", "phrasing content" ]
  },
  "cite": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "code": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "data": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ],
    "nospec": [ "4.01" ]
  },
  "dfn": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ],
    "disallow": [ "<dfn>" ]
  },
  "em": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "i": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "kbd": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "mark": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ],
    "nospec": [ "4.01" ]
  },
  "q": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "rp": {
    "content": [ "phrasing content" ],
    "parent": [ "<ruby>" ],
    "nospec": [ "4.01" ]
  },
  "rt": {
    "content": [ "phrasing content" ],
    "parent": [ "<ruby>", "<rtc>" ],
    "nospec": [ "4.01" ]
  },
  "rtc": {
    "content": [ "phrasing content", "<rt>" ],
    "parent": [ "<ruby>" ],
    "nospec": [ "4.01" ]
  },
  "ruby": {
    "categories": [ "flow content", "phrasing content" ],
    "content": [ "phrasing content", "<rp>", "<rt>", "<rtc>" ],
    "nospec": [ "4.01" ]
  },
  "s": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "samp": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "small": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "span": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "strong": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "sub": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "sup": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "time": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ],
    "nospec": [ "4.01" ]
  },
  "u": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "var": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "wbr": {
    "categories": [ "flow content", "phrasing content" ],
    "nospec": [ "4.01" ]
  },

  "area": {
    "categories": [ "flow content", "phrasing content" ],
    "ancestor": [ "<map>" ]
  },
  "audio": {
    "categories": [ "flow content", "phrasing content", "embedded content" ],
    "content": [ "transparent", "<track>" ],
    "disallow": [ "<audio>", "<video>" ],
    "states": {
      "[controls]": {
        "categories": [ "interactive content", "palpable content" ]
      },
      ":not([src])": {
        "content": [ "<source>" ]
      }
    },
    "nospec": [ "4.01" ]
  },
  "map": {
    "categories": [ "flow content", "phrasing content", "palpable content" ],
    "content": [ "transparent", "<area>" ]
  },
  "track": {
    "parent": [ "<audio>", "<video>" ],
    "nospec": [ "4.01" ]
  },
  "video": {
    "categories": [ "flow content", "phrasing content", "embedded content" ],
    "content": [ "transparent", "<track>" ],
    "disallow": [ "<audio>", "<video>" ],
    "states": {
      "[controls]": {
        "categories": [ "interactive content", "palpable content" ]
      },
      ":not([src])": {
        "content": [ "<source>" ]
      }
    },
    "nospec": [ "4.01" ]
  },

  "embed": {
    "categories": [ "flow content", "phrasing content", "embedded content", "interactive content", "palpable content" ],
    "nospec": [ "4.01" ]
  },
  "iframe": {
    "categories": [ "flow content", "phrasing content", "embedded content", "interactive content", "palpable content" ],
    "content": [ "phrasing content" ],
    "disallow": [ "<script>" ]
  },
  "img": {
    "categories": [ "flow content", "phrasing content", "embedded content", "palpable content" ],
    "states": {
      "[usemap]": {
        "categories": [ "interactive content" ]
      }
    }
  },
  "object": {
    "categories": [ "flow content", "phrasing content", "embedded content", "palpable content", "form-associated content", "listed", "submittable" ],
    "content": [ "transparent", "<param>" ],
    "states": {
      "[usemap]": {
        "categories": [ "interactive content" ]
      }
    }
  },
  "param": {
    "parent": [ "<object>" ]
  },
  "source": {
    "parent": [ "<picture>", "<audio>", "<video>" ],
    "position": [ "first" ],
    "nospec": [ "4.01" ]
  },

  "canvas": {
    "categories": [ "flow content", "phrasing content", "embedded content", "palpable content" ],
    "content": [ "transparent" ],
    "nospec": [ "4.01" ]
  },
  "noscript": {
    "categories": [ "flow content", "phrasing content", "metadata content" ],
    "disallow": [ "<noscript>" ],
    "states": {
      "head > noscript": {
        "content": [ "<link>", "<style>", "<meta>" ]
      },
      ":not( head > noscript )": {
        "content": [ "transparent" ]
      }
    }
  },
  "script": {
    "categories": [ "flow content", "phrasing content", "metadata content" ],
    "content": [ "text" ]
  },
  "template": {
    "categories": [ "metadata content", "flow content", "phrasing content" ],
    "content": [ "metadata content", "flow content" ],
    "parent": [ "body", "head", "colgroup" ],
    "nospec": [ "4.01" ]
  },

  "del": {
    "categories": [ "flow content", "phrasing content" ],
    "content": [ "transparent" ]
  },
  "ins": {
    "categories": [ "flow content", "phrasing content" ],
    "content": [ "transparent" ]
  },

  "caption": {
    "content": [ "flow content" ],
    "parent": [ "<table>" ],
    "position": [ "first" ]
  },
  "col": {
    "parent": [ "<colgroup>" ]
  },
  "colgroup": {
    "parent": [ "<table>" ],
    "states": {
      ":not([span])": {
        "content": [ "<col>" ]
      }
    }
  },
  "table": {
    "categories": [ "flow content" ],
    "content": [ "<caption>", "<colgroup>", "<thead>", "<tbody>", "<tfoot>", "<tr>" ]
  },
  "tbody": {
    "content": [ "<tr>" ],
    "parent": [ "<table>" ]
  },
  "td": {
    "content": [ "flow content", "phrasing content" ],
    "parent": [ "<tr>" ]
  },
  "tfoot": {
    "content": [ "<tr>" ],
    "parent": [ "<table>" ]
  },
  "th": {
    "content": [ "phrasing content" ],
    "parent": [ "<tr>" ]
  },
  "thead": {
    "content": [ "<tr>" ],
    "parent": [ "<table>" ]
  },
  "tr": {
    "content": [ "<th>", "<td>" ],
    "parent": [ "<table>", "<thead>", "<tbody>", "<tfoot>" ]
  },

  "button": {
    "categories": [ "flow content", "phrasing content", "interactive content", "form-associated content", "listed", "labelable", "submittable", "palpable content" ],
    "content": [ "phrasing content" ]
  },
  "datalist": {
    "categories": [ "flow content", "phrasing content" ],
    "content": [ "phrasing content", "<option>" ],
    "nospec": [ "4.01" ]
  },
  "fieldset": {
    "categories": [ "flow content", "sectioning root", "form-associated content", "listed", "palpable content" ],
    "content": [ "<legend>", "flow content" ]
  },
  "form": {
    "categories": [ "flow content", "palpable content" ],
    "content": [ "flow content" ],
    "disallow": [ "<form>" ]
  },
  "input": {
    "categories": [ "flow content", "phrasing content", "form-associated content", "listed", "submittable", "resettable" ],
    "states": {
      ":not([type=hidden])": {
        "categories": [ "labelable", "palpable content" ]
      }
    }
  },
  "label": {
    "categories": [ "flow content", "phrasing content", "interactive content", "form-associated content", "palpable content" ],
    "content": [ "phrasing content" ],
    "disallow": [ "<label>" ]
  },
  "legend": {
    "content": [ "phrasing content" ],
    "parent": [ "<fieldset>" ],
    "position": [ "first" ]
  },
  "meter": {
    "categories": [ "flow content", "phrasing content", "form-associated content", "labelable", "palpable content" ],
    "content": [ "phrasing content" ],
    "disallow": [ "<meter>" ],
    "nospec": [ "4.01" ]
  },
  "optgroup": {
    "content": [ "<option>" ],
    "parent": [ "<select>" ]
  },
  "option": {
    "content": [ "text" ],
    "parent": [ "<select>", "<optgroup>", "<datalist>" ]
  },
  "output": {
    "categories": [ "flow content", "phrasing content", "form-associated content", "listed", "labelable", "resettable", "palpable content" ],
    "content": [ "phrasing content" ],
    "nospec": [ "4.01" ]
  },
  "progress": {
    "categories": [ "flow content", "phrasing content", "form-associated content", "labelable", "palpable content" ],
    "content": [ "phrasing content" ],
    "disallow": [ "<progress>" ],
    "nospec": [ "4.01" ]
  },
  "select": {
    "categories": [ "flow content", "phrasing content", "interactive content", "form-associated content", "listed", "labelable", "submittable", "resettable" ],
    "content": [ "<optgroup>", "<option>" ]
  },
  "textarea": {
    "categories": [ "flow content", "phrasing content", "interactive content", "form-associated content", "listed", "labelable", "submittable", "resettable" ],
    "content": [ "text" ]
  },

  "details": {
    "categories": [ "flow content", "sectioning root", "interactive content", "palpable content" ],
    "content": [ "<summary>", "flow content" ],
    "nospec": [ "4.01", "5" ],
    "experimental": true
  },
  "dialog": {
    "categories": [ "flow content", "sectioning root" ],
    "content": [ "flow content" ],
    "nospec": [ "4.01", "5" ],
    "experimental": true
  },
   "hgroup": {
    "categories": [ "flow content", "heading content", "palpable content" ],
    "content": [ "<h1>", "<h2>", "<h3>", "<h4>", "<h5>", "<h6>" ],
    "nospec": [ "4.01", "5" ],
    "experimental": true
  },
  "menu": {
    "categories": [ "flow content" ],
    "states": {
      "[type=list], :not([type])": {
        "categories": [ "palpable content" ],
        "content": [ "flow content", "<li>", "<script>", "<template>" ]
      },
      "[type=menu]": {
        "content": [ "<script>", "<template>", "<menu>", "<menuitem>", "<hr>" ]
      }
    },
    "nospec": [ "4.01", "5" ],
    "experimental": true
  },
  "menuitem": {
    "parent": [ "<menu>" ],
    "nospec": [ "4.01", "5" ],
    "experimental": true
  },
  "picture": {
    "categories": [ "flow content", "phrasing content", "embedded content" ],
    "content": [ "<source>", "<img>" ],
    "nospec": [ "4.01", "5", "5.1" ],
    "experimental": true
  },
  "shadow": {
    "content": [ "flow content" ],
    "nospec": [ "4.01", "5", "5.1", "LS" ],
    "experimental": true
  },
  "summary": {
    "content": [ "phrasing content", "heading content" ],
    "parent": [ "<details>" ],
    "nospec": [ "4.01", "5" ],
    "experimental": true
  }
}

},{}],5:[function(require,module,exports){
'use strict';

var elementData = require('../data/elements.json');
var schema = require('../schema/hinfo.schema.json');

// ensure a fresh copy, in case the consumer modifies it
var hinfo = function hinfo() {
  return JSON.parse(JSON.stringify(elementData));
};

hinfo.schema = function () {
  return JSON.parse(JSON.stringify(schema));
};

module.exports = hinfo;
},{"../data/elements.json":4,"../schema/hinfo.schema.json":7}],6:[function(require,module,exports){
'use strict'

module.exports = require( './dist' )

},{"./dist":5}],7:[function(require,module,exports){
module.exports={
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "html element meta data",
    "description": "schema for html element meta data",
    "type": "object",
    "patternProperties": {
        "^[a-z][a-z\\d]*$": {
            "$ref": "#/definitions/elementDef"
        }
    },
    "additionalProperties": false,
    "definitions": {
        "elementDef": {
            "type": "object",
            "properties": {
                "categories": {
                    "$ref": "#/definitions/categoryArrayDef"
                },
                "content": {
                    "$ref": "#/definitions/stringArrayDef"
                },
                "parent": {
                    "$ref": "#/definitions/stringArrayDef"
                },
                "disallow": {
                    "$ref": "#/definitions/stringArrayDef"
                },
                "ancestor": {
                    "$ref": "#/definitions/stringArrayDef"
                },
                "position": {
                    "$ref": "#/definitions/positionArrayDef"
                },
                "previous": {
                    "$ref": "#/definitions/tagArrayDef"
                },
                "next": {
                    "$ref": "#/definitions/tagArrayDef"
                },
                "states": {
                    "$ref": "#/definitions/stateDef"
                },
                "nospec": {
                    "$ref": "#/definitions/nospecDef"
                },
                "singular": {
                    "type": "boolean"
                },
                "experimental": {
                    "type": "boolean"
                }
            },
            "additionalProperties": false
        },
        "stringArrayDef": {
            "type": "array",
            "items": {
                "type": "string"
            },
            "uniqueItems": true
        },
        "tagArrayDef": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^<[a-z][a-z0-9]*>$"
            },
            "uniqueItems": true
        },
        "categoryArrayDef": {
            "type": "array",
            "items": {
                "enum": [
                    "embedded content",
                    "flow content",
                    "form-associated content",
                    "heading content",
                    "interactive content",
                    "labelable",
                    "listed",
                    "metadata content",
                    "palpable content",
                    "phrasing content",
                    "resettable",
                    "sectioning content",
                    "sectioning root",
                    "submittable"
                ]
            },
            "uniqueItems": true
        },
        "positionArrayDef": {
            "type": "array",
            "items": {
                "enum": [
                    "first",
                    "last"
                ]
            },
            "uniqueItems": true
        },
        "stateDef": {
            "type": "object",
            "patternProperties": {
                "^[\\w\\d :=,<>\\(\\)\\[\\]]+$": {
                    "type": "object",
                    "properties": {
                        "categories": {
                            "$ref": "#/definitions/stringArrayDef"
                        },
                        "content": {
                            "$ref": "#/definitions/stringArrayDef"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "additionalProperties": false
        },
        "nospecDef": {
            "type": "array",
            "minItems": 1,
            "items": {
                "enum": [
                    "4.01",
                    "5",
                    "5.1",
                    "LS"
                ]
            },
            "uniqueItems": true
        }
    }
}
},{}],8:[function(require,module,exports){
'use strict';

var hinfo = require('hinfo');

var nodeDefs = {
  '#document': {
    'content': ['#documentType', '<html>']
  },
  '#documentType': {
    'parent': ['#document']
  },
  '#text': {
    'categories': ['flow content', 'phrasing content', 'palpable content']
  },
  '#comment': {
    'categories': ['flow content']
  },
  '#documentFragment': {
    'content': ['flow content']
  }
};

var ensureArray = function ensureArray(obj, name) {
  if (!Array.isArray(obj[name])) obj[name] = [];
};

var ensureProperties = function ensureProperties(def) {
  ensureArray(def, 'categories');
  ensureArray(def, 'content');
  ensureArray(def, 'parent');
};

var defaultDefs = Object.assign(hinfo(), nodeDefs);

var Html = function Html() {
  var defs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultDefs;

  defs = JSON.parse(JSON.stringify(defs));

  var _tagNames = Object.keys(defs);

  var hasCategory = function hasCategory(tagName, categoryName) {
    return defs[tagName].categories.includes(categoryName);
  };

  var predicates = {
    empty: function empty(tagName) {
      return defs[tagName].content.length === 0;
    },
    metadata: function metadata(tagName) {
      return hasCategory(tagName, 'metadata content');
    },
    inline: function inline(tagName) {
      return hasCategory(tagName, 'phrasing content');
    },
    embedded: function embedded(tagName) {
      return hasCategory(tagName, 'embedded content');
    },
    block: function block(tagName) {
      return hasCategory(tagName, 'flow content') && !predicates.inline(tagName);
    },
    container: function container(tagName) {
      return !predicates.empty(tagName);
    }
  };

  var doesAccept = function doesAccept(tagName, childTagName) {
    if (predicates.empty(tagName)) return false;

    var def = defs[tagName];
    var childDef = defs[childTagName];

    if (childDef.parent.includes('<' + tagName + '>')) return true;

    if (def.content.includes('<' + childTagName + '>') || def.content.includes('#' + childTagName)) return true;

    return childDef.categories.some(function (category) {
      return def.content.includes(category);
    });
  };

  var predicateNames = Object.keys(predicates);

  var maps = {
    accepts: {}
  };

  predicateNames.forEach(function (name) {
    return maps[name] = {};
  });

  var allCategories = [];

  _tagNames.forEach(function (tagName) {
    var def = defs[tagName];

    ensureProperties(def);

    allCategories = allCategories.concat(def.categories);

    predicateNames.forEach(function (predicateName) {
      return maps[predicateName][tagName] = predicates[predicateName](tagName);
    });

    maps.accepts[tagName] = {};

    _tagNames.forEach(function (childTagName) {
      ensureProperties(defs[childTagName]);

      maps.accepts[tagName][childTagName] = doesAccept(tagName, childTagName);
    });
  });

  var _categoryNames = Array.from(new Set(allCategories)).sort();

  var api = {
    tagNames: function tagNames() {
      return _tagNames;
    },
    categoryNames: function categoryNames() {
      return _categoryNames;
    },
    isEmpty: function isEmpty(tagName) {
      return maps.empty[tagName];
    },
    isMetadata: function isMetadata(tagName) {
      return maps.metadata[tagName];
    },
    isInline: function isInline(tagName) {
      return maps.inline[tagName];
    },
    isEmbedded: function isEmbedded(tagName) {
      return maps.embedded[tagName];
    },
    isBlock: function isBlock(tagName) {
      return maps.block[tagName];
    },
    isContainer: function isContainer(tagName) {
      return maps.container[tagName];
    },
    accepts: function accepts(tagName, childTagName) {
      return maps.accepts[tagName][childTagName];
    },
    def: function def(tagName) {
      if (defs[tagName]) return JSON.parse(JSON.stringify(defs[tagName]));
    }
  };

  return api;
};

module.exports = Html;
},{"hinfo":6}],9:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"./dist":8,"dup":6}],10:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var utils = require('mojule-utils');

var camelCaseToHyphenated = utils.camelCaseToHyphenated;


var handlers = {
  'boolean': function boolean(obj, key, value) {
    if (value) obj[key] = '';else delete obj[key];
  },
  'object': function object(obj, key, value) {
    if (key in handlers) handlers[key](obj, key, value);else delete obj[key];
  },
  'style': function style(obj, key, value) {
    var keys = Object.keys(value);

    obj.style = keys.reduce(function (style, key) {
      return style + (key + ': ' + value[key] + '; ');
    }, '').trim();
  },
  'data': function data(obj, key, value) {
    var keys = Object.keys(value);

    keys.forEach(function (camelKey) {
      var dataKey = 'data-' + camelCaseToHyphenated(camelKey);

      obj[dataKey] = value[camelKey];
    });

    delete obj.data;
  },
  'null': function _null(obj, key, value) {
    delete obj[key];
  },
  'undefined': function undefined(obj, key, value) {
    delete obj[key];
  },
  /*
    Let the adapter handle events, but have a handler to prevent conversion
    to string
  */
  'function': function _function() {}
};

var attributes = function attributes(obj) {
  obj = Object.assign({}, obj);

  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);

    if (valueType in handlers) handlers[valueType](obj, key, value);else obj[key] = String(value);
  });

  return obj;
};

Object.assign(attributes, { handlers: handlers });

module.exports = attributes;
},{"mojule-utils":16}],11:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var fromJsonML = function fromJsonML(jsonML, h) {
  var mapArg = function mapArg(arg) {
    if (Array.isArray(arg)) return fromArr(arg);

    return arg;
  };

  var fromArr = function fromArr(arr) {
    var head = arr[0];
    var args = arr.slice(1).map(mapArg);

    if (head in h) return h[head].apply(h, _toConsumableArray(args));

    return h.element.apply(h, [head].concat(_toConsumableArray(args)));
  };

  return mapArg(jsonML);
};

module.exports = fromJsonML;
},{}],12:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Html = require('html-node');
var utils = require('mojule-utils');
var defaultAdapter = require('./jsonml-adapter');
var attributeMapper = require('./attribute-mapper');
var _fromJsonML = require('./from-jsonml');

var html = Html();
var capitalizeFirstLetter = utils.capitalizeFirstLetter;


var H = function H() {
  var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAdapter;
  var isNode = adapter.isNode,
      createText = adapter.createText,
      createElement = adapter.createElement,
      appendChild = adapter.appendChild,
      addAttributes = adapter.addAttributes,
      addEventListener = adapter.addEventListener;


  var handleArg = function handleArg(el, arg) {
    if (typeof arg === 'string') {
      var text = createText(arg);
      appendChild(el, text);
    } else if (isNode(arg)) {
      appendChild(el, arg);
    }
  };

  var eventListeners = function eventListeners(el, attributes) {
    Object.keys(attributes).forEach(function (key) {
      var value = attributes[key];

      if (typeof value === 'function') {
        if (typeof addEventListener === 'function' && key.startsWith('on')) {
          var eventName = key.slice(2);
          addEventListener(el, eventName, value);
        }

        delete attributes[key];
      }
    });
  };

  var createFromArgs = function createFromArgs(tagName) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var el = createElement(tagName);

    args.forEach(function (arg) {
      handleArg(el, arg);

      if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && !isNode(arg)) {
        var attributes = attributeMapper(arg);

        eventListeners(el, attributes);
        addAttributes(el, attributes);
      }
    });

    return el;
  };

  var h = {
    element: createFromArgs,
    adapters: {
      jsonml: defaultAdapter
    },
    attributeMapper: attributeMapper,
    fromJsonML: function fromJsonML(jsonML) {
      return _fromJsonML(jsonML, h);
    }
  };

  var nodeNames = html.tagNames();

  var _nodeNames$reduce = nodeNames.reduce(function (categories, name) {
    if (name.startsWith('#')) {
      categories.nonTags.push(name.slice(1));
    } else {
      categories.tags.push(name);
    }

    return categories;
  }, { tags: [], nonTags: [] }),
      tags = _nodeNames$reduce.tags,
      nonTags = _nodeNames$reduce.nonTags;

  tags.forEach(function (name) {
    return h[name] = function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return createFromArgs.apply(undefined, [name].concat(args));
    };
  });

  nonTags.forEach(function (name) {
    var fname = 'create' + capitalizeFirstLetter(name);

    h[name] = function () {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var node = void 0;

      if (html.isEmpty('#' + name)) {
        node = adapter[fname].apply(adapter, args);
      } else {
        node = adapter[fname]();

        args.forEach(function (arg) {
          handleArg(node, arg);
        });
      }

      return node;
    };
  });

  return h;
};

Object.assign(H, H());

module.exports = H;
},{"./attribute-mapper":10,"./from-jsonml":11,"./jsonml-adapter":13,"html-node":9,"mojule-utils":16}],13:[function(require,module,exports){
'use strict';

var Html = require('html-node');
var utils = require('mojule-utils');

var html = Html();
var capitalizeFirstLetter = utils.capitalizeFirstLetter;


var jsonmlAdapter = {
  isNode: function isNode(node) {
    return Array.isArray(node);
  },

  createElement: function createElement(tagName) {
    return [tagName];
  },

  createText: function createText(text) {
    return text;
  },

  appendChild: function appendChild(el, child) {
    return el.push(child);
  },

  addAttributes: function addAttributes(el, attributes) {
    return el.push(attributes);
  },

  createDocument: function createDocument() {
    return ['document'];
  },

  createDocumentType: function createDocumentType(name) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return ['documentType', name].concat(args);
  },

  createComment: function createComment(value) {
    return ['comment', value];
  },

  createDocumentFragment: function createDocumentFragment() {
    return ['documentFragment'];
  }
};

module.exports = jsonmlAdapter;
},{"html-node":9,"mojule-utils":16}],14:[function(require,module,exports){
'use strict'

module.exports = require( './dist' )

},{"./dist":12}],15:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var clone = function clone() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return JSON.parse(JSON.stringify(obj));
};

var matches = function matches() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(source).every(function (key) {
    return obj[key] === source[key];
  });
};

var id = function id() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;

  if (prefix) prefix = identifier(prefix) + '-';

  var str = prefix;

  for (var i = 0; i < length; i++) {
    str += Math.floor(Math.random() * 16).toString(16);
  }

  return str;
};

var identifier = function identifier() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var caseSensitive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var id = value.replace(/[^a-z0-9]/gi, '-').replace(/-{2,}/g, '-').replace(/^-/i, '').replace(/-$/i, '');

  if (!caseSensitive) id = id.toLowerCase();

  return id;
};

var escapeHtml = function escapeHtml() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var result = str.replace(/</g, '&lt;');
  return result;
};

var capitalizeFirstLetter = function capitalizeFirstLetter() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var hyphenatedToCamelCase = function hyphenatedToCamelCase() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var capitalizeFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _str$split = str.split('-'),
      _str$split2 = _toArray(_str$split),
      head = _str$split2[0],
      rest = _str$split2.slice(1);

  if (capitalizeFirst) head = capitalizeFirstLetter(head);

  var capitalized = rest.map(capitalizeFirstLetter);

  return [head].concat(_toConsumableArray(capitalized)).join('');
};

var camelCaseToHyphenated = function camelCaseToHyphenated() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.replace(/([A-Z])/g, function (matches) {
    return '-' + matches[0].toLowerCase();
  });
};

var utils = {
  id: id, identifier: identifier, matches: matches, clone: clone, escapeHtml: escapeHtml, capitalizeFirstLetter: capitalizeFirstLetter,
  hyphenatedToCamelCase: hyphenatedToCamelCase, camelCaseToHyphenated: camelCaseToHyphenated
};

module.exports = utils;
},{}],16:[function(require,module,exports){
arguments[4][14][0].apply(exports,arguments)
},{"./dist":15,"dup":14}]},{},[3]);
