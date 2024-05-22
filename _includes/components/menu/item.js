//
// CUSTOMIZED FILE
// Don't render menu link if page is `landing: false`
//
/**
 * Renders a menu item
 *
 * @param      {Object}  eleventyConfig
 * @param      {Object}  params
 * @property      {Object}  data Page data
 * @property      {String}  title Page title
 * @property      {String}  url Page url
 */
module.exports = function(eleventyConfig) {
  const pageTitle = eleventyConfig.getFilter('pageTitle')

  return function(params) {
    const { currentURL, page } = params
    const { data, url } = page
    const { label, landing, layout, title } = data

    const titleText = pageTitle({ label, title })
    /**
     * Check if item is a reference to a built page or just a heading
     * @type {Boolean}
     */
    const isPage = landing == false ? false : true
    return isPage
      ? `<a href="${url}" class="${currentURL === url ? 'active' : ''}">${titleText}</a>`
      : `<span class="no-landing">${titleText}</span>`
  }
}
