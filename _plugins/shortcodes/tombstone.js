//
// CUSTOMIZED FILE
// Object properties can have a defined `field` and `label` to 
// allow for custom label naming. Markdown is supported on the labels.
//
const { html, oneLine } = require('~lib/common-tags')
const path = require('path')

/**
 * A shortcode for tombstone display of object data on an entry page
 */
module.exports = function(eleventyConfig, { page }) {
  const { config, objects } = eleventyConfig.globalData
  const { objectLinkText } = config.entryPage

  return function (pageObjects = []) {
    const titleCase = eleventyConfig.getFilter('titleCase')
    const icon = eleventyConfig.getFilter('icon')
    const markdownify = eleventyConfig.getFilter('markdownify')
    const properties = objects.object_display_order

    const tableRow = (object, propField, propLabel) => {
      if (!object[propField]) return ''

      return html`
        <tr>
          <td>${propLabel}</td>
          <td>${markdownify(object[propField].toString())}</td>
        </tr>
      ` 
    }

    const tableRowGroup = (object) => {
      let rows = ''
      for (const prop of properties) {
        const propField = prop.field ? prop.field : prop
        const propLabel = prop.label ? markdownify(prop.label) : titleCase(prop)

        rows += tableRow(object, propField, propLabel)
      }
      return rows
    }

    const objectLink = (object) => object.link
      ? oneLine`
        <a class="button" href="${object.link}" target="_blank">
          ${objectLinkText} ${icon({ type: 'link', description: '' })}
        </a>`
      : ''

    const table = (object) => html`
      <section class="quire-entry__tombstone">
        <div class="container">
          <table class="table is-fullwidth">
            <tbody>
              ${tableRowGroup(object)}
            </tbody>
          </table>
          ${objectLink(object)}
        </div>
      </section>
    `
    return pageObjects.map((object) => table(object)).join('')
  }
}
