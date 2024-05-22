//
// CUSTOMIZED FILE
// New shortcode to add glossary pop-ups, from glossary.yaml file
//
const chalkFactory = require('~lib/chalk')
const { renderOneLine } = require('~lib/common-tags')
const { warn } = chalkFactory('shortcodes:def')

/**
 * Shortcode to display pop-up glossary definitions
 *
 * @param      {String}   term      Matching a term in glossary.yaml
 * @param      {String}   display   An optional override for inline display
 * @return     {boolean}  An HTML <span> element copying the citation pop-up
 */
module.exports = function (eleventyConfig, { page }) {
  const markdownify = eleventyConfig.getFilter('markdownify')

  const definitions = eleventyConfig.globalData.glossary
    ? eleventyConfig.globalData.glossary.entries
    : []

  return function (term, display) {
    const displayText = display ? display : term
    const def = definitions.find((definition) => definition.term === term)

    if (!def) {
      warn(`Glossary entry not found for '${term}' on ${page.inputPath}`)
      return renderOneLine`<span style="background-color:fuchsia;">${displayText}</span>`
    }

    return renderOneLine`
      <span class="quire-citation quire-definition expandable">
        <span class="quire-citation__button quire-definition__button" role="button" tabindex="0" aria-expanded="false">
          ${displayText}
        </span>
        <span hidden class="quire-citation__content quire-definition__content">
          <span class="visually-hidden">Definition: </span>
          <strong>${def.term}: </strong>${markdownify(def.definition)}
        </span>
      </span>`
  }
}