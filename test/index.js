'use strict'

const DomScript = require( '../dist' )
const jsdom = require( 'jsdom' ).jsdom
const assert = require( 'assert' )
const doc = jsdom( '<html></html>' )
const H = DomScript( doc )

const {
  document, documentType, text, comment, documentFragment, element,
  html, head, body, meta, title, div, p, strong, input
} = H

const expected = '<!--Whose line is it anyway?--><div id="main"><p>The quick brown fox jumps over the <strong>lazy dog</strong></p><input type="text" name="firstName" placeholder="Alex"></div><!--Fragment not (usually) necessary but make sure it works--><!--Text not necessary but etc.--><p>lol wut</p><!--But what if it is not in the spec?--><customtag class="kk"><p>OK that works for me</p></customtag>'

describe( 'DomScript', () => {
  it( 'dom adapter', () => {
    const dom =
      div(
        comment('Whose line is it anyway?'),
        div({id:'main'},
          p('The quick brown fox jumps over the ',strong('lazy dog')),
          input({type:'text',name:'firstName',placeholder:'Alex'})
        ),
        comment('Fragment not (usually) necessary but make sure it works'),
        documentFragment(
          comment('Text not necessary but etc.'),
          p(text('lol '),'wut')
        ),
        comment('But what if it is not in the spec?'),
        element('customtag',{class:'kk'},
          p('OK that works for me')
        )
      )

    assert.equal( dom.innerHTML, expected )
  })
})
