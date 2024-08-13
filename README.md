This is the repository for *Ancient Glass in the J. Paul Getty Museum*, by Anastassios Ch. Antonaras. This digital book was first published Month, DD, YYYY, by the J. Paul Getty Museum. It is available online at https://www.getty.edu/publications/ancient-glass/ and may be downloaded there free of charge in multiple formats.

## About the Book

TK

## Using this Repository

This is one in series of multiformat publications using [Quire](http://quire.getty.edu)™, Getty’s multiformat publishing tool. 

We are dedicated to maintaining this publication for years to come at the permanent URL, https://www.getty.edu/publications/ancient-glass/, and in its various formats and incarnations. For any updates to the book, we will be following something between an app and traditional book publication model. Updates will only be made in regulated chunks as formal revisions and new editions and will always be thoroughly documented here in the repository, as well as in the revision history included with each of the book’s many formats.

The primary content pieces of the book can be found in the `content` directory. The `main` branch represents the current, published edition at all times, and the `revisions` branch, when present, will show changes currently under consideration. We invite you to submit suggestions or corrections via pull request on the revisions branch, by posting an issue, or by emailing us at [pubsinfo@getty.edu](mailto:pubsinfo@getty.edu).

## Development Notes

This project was last built with the following software versions:

- Node 18.16.0
- Quire CLI 1.0.0-rc.11

### Branches

| branch | about |
| --- | --- |
| `main` | The primary branch |
| `first-pages`, `second-pages`, `final-pages`| Versions of the project at various staages |
| `forthcoming` | A static placeholder page that was displayed at the book’s final URL on getty.edu prior to publication |
| `revisions` | Any revisions currently under consideration but not yet published |
| `prototype` | An early prototype of the project built to verify final manuscript prep |

### Figure Images Submodule

Some of figure images for *Ancient Glass* are licensed from third parties for use exclusively in this publication. As such, they are kept in a separate, private repository, https://github.com/thegetty/ancient-glass/, which is linked to this main publication repository as a submodule in `content/_assets/images/figures/`. When cloning this repo for further development, you’ll permissions for the private repository and will need to clone recursively in order to clone both the main repo and the submodule.

```
git clone --recursive https://github.com/thegetty/ancient-glass.git
```

### Previewing the Online Edition Locally

1. Install Node.js 18.16.0 and verify with with `node --version`

2. Install the Quire CLI with `npm install -g @thegetty/quire-cli@1.0.0-rc.11`

3. Clone this repository and select the appropriate branch

4. Run `npm install` to install the project dependencies (this just needs to be done once when first cloning the project, or whenever the core template/code files are updated)

5. Change the `url` in `content/_data/publication.yaml` to `http://localhost:8080/`

6. See the preview with `quire preview`

### Creating a PDF Version

1. Switch `url` in publication.yaml to `url: 'http://localhost:8080'`

2. Run `quire build`

3. In the `_site/pdf.html` file, find `<section class="quire-page" data-footer-page-title="A. Vessels" data-footer-section-title="Catalogue" id="page-catalogue-a-vessels">` and right before it, add `<div class="catalogue-entries-wrapper">`. And then find `<section class="quire-page quire-essay" data-footer-page-title="Appendix 1. Non-invasive Analytical Strategies" id="page-appendix-1">` and right before it, add `</div>`. (This creates a new element that wraps all of the catalogue entry pages into one group so that they can flow together in 2-columns.) 

3. If the PDF will be sent to digital printer, run the following command to ensure color profiles are correct:

    ```
    magick mogrify -profile bin/adobe-rgb-1998.icm _site/iiif/**/print-image.jpg
    ```

4. With PrinceXML 14.2 installed, run `quire pdf --lib prince`

### Creating an EPUB Version

TK

### Customizations

**_includes/components/menu/item.js**
**_includes/components/table-of-contents/item/list.js**
**_includes/components/table-of-contents/item/grid.js**
Don't render menu or TOC links if page is `landing: false`

**_includes/components/table-of-contents/item/list.js**
Add a `data-layout` attribute to facilitate CSS hiding of cat. entries

**_layouts/cover.liquid**
Added publication.cover_title in place of the default title

**_layouts/entry.liquid**
Added section breadcrumbs to entry pages based on their file paths

**_plugins/shortcodes/def.js**
**_plugins/shortcodes/index.js**
Add custom def shortcode for glossary pop-ups

**_plugins/shortcodes/cat.js**
**_plugins/shortcodes/index.js**
Add custom def shortcode for accession number catalogue links

**content/_assets/javascript/application/index.js**
Display only one pop-up at a time

**content/_computed/eleventyComputed.js**
Allow for nextPage and previousPage to be overridden at page level

**_plugins/shortcodes/cat.js**
Allow for optional display text to override the default link text

## License

© 2025 J. Paul Getty Trust

The text of this work is licensed under a <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="license">Creative Commons Attribution-NonCommercial 4.0 International License</a>. All images are reproduced with the permission of the rights holders acknowledged in captions and are expressly excluded from the CC BY-NC license covering the rest of this publication. These images may not be reproduced, copied, transmitted, or manipulated without consent from the owners, who reserve all rights. 