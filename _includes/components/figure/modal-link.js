//
// CUSTOMIZED FILE
// Add non-linked version for epub and pdf output
//
const { html } = require('~lib/common-tags')

module.exports = function (eleventyConfig) {
  const { enableModal } = eleventyConfig.globalData.config.figures

  return ({ content, id }) => enableModal
    ? html`<a class="q-figure__modal-link" href="#${id}" data-outputs-include="html">${content}</a><span data-outputs-include="epub,pdf">${content}</span>`
    : content
}
