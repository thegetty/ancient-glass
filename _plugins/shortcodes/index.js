//
// CUSTOMIZED FILE
// Add new def and cat shortcodes
//
const accordion = require('./accordion.js')
const addComponentTag = require('../../_plugins/components/addComponentTag')
const backmatter = require('./backmatter')
const bibliography = require('./bibliography')
const cat = require('./cat')
const cite = require('./cite')
const contributors = require('./contributors')
const def = require('./def')
const figure = require('./figure')
const figureGroup = require('./figureGroup')
const ref = require('./ref')
const shortcodeFactory = require('../components/shortcodeFactory')
const thumb = require('./thumb')
const title = require('./title')
const tombstone = require('./tombstone')

module.exports = function(eleventyConfig, collections, options) {
  const { addShortcode, addPairedShortcode } = shortcodeFactory(eleventyConfig, collections)

  addPairedShortcode('accordion', accordion)
  addComponentTag(eleventyConfig, 'ref', ref)
  addPairedShortcode('backmatter', backmatter)
  addShortcode('bibliography', bibliography)
  addShortcode('cat', cat)
  addShortcode('cite', cite)
  addComponentTag(eleventyConfig, 'contributors', contributors)
  addShortcode('def', def)
  addShortcode('figure', figure)
  addShortcode('figuregroup', figureGroup)
  addShortcode('title', title)
  addShortcode('thumb', thumb)
  addShortcode('tombstone', tombstone)
}
