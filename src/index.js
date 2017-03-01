'use strict'

const H = require( 'html-script' )
const DomAdapter = require( './dom-adapter' )

const DomScript = document => {


  const domAdapter = DomAdapter( document )

  return H( domAdapter )
}

if( typeof window !== 'undefined' )
  Object.assign( DomScript, DomScript( window.document ) )

module.exports = DomScript
