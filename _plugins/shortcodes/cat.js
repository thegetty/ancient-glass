//
// CUSTOMIZED FILE
// New shortcode to take accession numbers and return a "cat. #" link,
// an optional display text can be included to override the default link text
//
const chalkFactory = require('~lib/chalk')
const { renderOneLine } = require('~lib/common-tags')
const { warn } = chalkFactory('shortcodes:cat')
 
/**
* Shortcode to create links from accession numbers
*
* @param      {String}   accessionNumber     The object accession number, matching one in objects.yaml
* @return     {boolean}  An HTML <a> element linking to the catalogue page
*/
module.exports = function (eleventyConfig, { page }) {
  const objects = eleventyConfig.globalData.objects
    ? eleventyConfig.globalData.objects.object_list
    : []
 
  return function (accessionNumber, displayText) {
    const obj = objects.find((object) => object.accession_number === accessionNumber)
 
    if (!obj) {
      warn(`Object entry not found for '${accessionNumber}' on ${page.inputPath}`)
      return renderOneLine`<span style="background-color:yellow;">${accessionNumber}</span>`
    }
 
    const catLink = obj.path ? obj.path : ''
    const catLabel = displayText
      ? displayText : obj.id
      ? obj.id.replace("-",". ") : ''
 
    if (catLink == '') {
      warn(`Link path missing for '${accessionNumber}' on ${page.inputPath}`)
    }
 
    return renderOneLine`<a href="${catLink}">${catLabel}</a>`
  }
}