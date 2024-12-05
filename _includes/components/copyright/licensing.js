//
// CUSTOMIZED FILE
// Updated the some-exceptions language, line 20
// Added comma, line 37
//

const { oneLine } = require('~lib/common-tags')

module.exports = function(eleventyConfig) {
  return function (params) {
    const { publication } = eleventyConfig.globalData
    const { license } = publication

    let licenseText = ''

    const licenseAbbreviation = license.abbreviation || license.name
    const licenseName = license.url
      ? `<a rel="license" href="${license.url}" target="_blank">${license.name}</a>`
      : license.name

    if (license.scope == 'some-exceptions') {
      licenseText += `
        Unless otherwise indicated, the text and images of this work are licensed under a ${licenseName}.
      `
    } else if (license.scope === 'text-only') {
      licenseText += `
        The text of this work is licensed under a ${licenseName}. Unless otherwise indicated, all illustrations are excluded from the ${licenseAbbreviation} license.
      `
    } else {
      licenseText += `
        This work is licensed under a ${licenseName}.
      `
    }

    return oneLine`
      ${licenseText}
      <span class="is-print-only">
        To view a copy of this license, visit ${license.url}.
      </span>
    `
  }
}
