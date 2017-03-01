'use strict'

const DomAdapter = document => {
  const domAdapter = {
    isNode: node => node && node.nodeName && node.nodeType,
    createElement: tagName => document.createElement( tagName ),
    createText: value => document.createTextNode( value ),
    appendChild: ( node, child ) => node.appendChild( child ),
    addAttributes: ( node, attributes ) => {
      Object.keys( attributes ).forEach( name => {
        const value = attributes[ name ]

        node.setAttribute( name, value )
      })
    },
    createDocument: () => {
      const doc = document.implementation.createHTMLDocument( '' )

      while( doc.firstChild )
        doc.firstChild.remove()

      return doc
    },
    createDocumentType: ( name, publicId = '', systemId = '' ) =>
      document.implementation.createDocumentType( name, publicId, systemId ),
    createComment: value => document.createComment( value ),
    createDocumentFragment: () => document.createDocumentFragment(),
    addEventListener: ( node, name, listener ) =>
      node.addEventListener( name, listener )
  }

  return domAdapter
}

module.exports = DomAdapter
