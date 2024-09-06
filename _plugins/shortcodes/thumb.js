//
// CUSTOMIZED FILE
// New shortcode to take cat number and return a thumbnail image
// with the cat and accession numbers, and linked to the main entry page
//
const chalkFactory = require('~lib/chalk')
const { renderOneLine } = require('~lib/common-tags')
const { warn } = chalkFactory('shortcodes:cat')
 
/**
* Shortcode to create thumbnail links from cat numbers
*
* @param      {String}   catNumber    The object cat number
* @return     {boolean}  An HTML <figure> element
*/
module.exports = function (eleventyConfig, { page }) {
  const objects = eleventyConfig.globalData.objects
    ? eleventyConfig.globalData.objects.object_list
    : []
  const figures = eleventyConfig.globalData.figures
    ? eleventyConfig.globalData.figures.figure_list
    : []
 
  return function (catNumber) {
    const catPrefix = 'cat-'
    const catId = catPrefix.concat(catNumber)
    const obj = objects.find((object) => object.id === catId)
 
    if (!obj) {
      warn(`Object entry not found for '${catNumber}'`)
      return renderOneLine`<span style="background-color:yellow;">${catNumber}</span>`
    }
    
    const catPath = '/catalogue/'
    const catLink = catPath.concat(catId,'/')
    const catAccNo = obj.accession_number
    const catFigureId = obj.figure[0].id

    const fig = figures.find((figure) => figure.id === catFigureId)
    const figPath = fig.src.replace('figures', catFigureId).replace('.jpg','')

    return renderOneLine`
      <figure class="cat-thumbnail">
        <a href="${catLink}">
        <img src="/iiif/${figPath}/thumbnail.jpg" />
        <figcaption><strong>Cat. ${catNumber}</strong>&nbsp;(${catAccNo})</figcaption>
        </a>
      </figure>
      `
  }
}