This is the repository for *Ancient Glass in the J. Paul Getty Museum*, by Anastassios Antonaras. This digital book was first published April 8, 2025, by the J. Paul Getty Museum. It is available online at https://www.getty.edu/publications/ancient-glass/ and may be downloaded there free of charge in multiple formats.

## About the Book

The J. Paul Getty Museum’s collection of ancient glass—astonishingly delicate, richly hued, and fancifully shaped—is among the most celebrated in the United States. Ranging from the Bronze Age to the medieval period (1500 BCE–1000 CE), the 584 objects included in this publication originated from a wide geographical area, including the Middle East, the Mediterranean, and central Europe.

This catalogue, written by acclaimed scholar Anastassios Antonaras, begins with a fascinating essay on the history of glassmaking—a highly technical art form that is still practiced similarly today—and continues with detailed and informative entries on the works. Each entry is accompanied by vivid photography. The book also includes a history of the collection, glossary of glassmaking terms, technical study, and full bibliography.

## Using this Repository

This is one in series of multiformat publications using [Quire](http://quire.getty.edu)™, Getty’s multiformat publishing tool. 

We are dedicated to maintaining this publication for years to come at the permanent URL, https://www.getty.edu/publications/ancient-glass/, and in its various formats and incarnations. For any updates to the book, we will be following something between an app and traditional book publication model. Updates will only be made in regulated chunks as formal revisions and new editions and will always be thoroughly documented here in the repository, as well as in the revision history included with each of the book’s many formats.

The primary content pieces of the book can be found in the `content` directory. The `main` branch represents the current, published edition at all times, and the `revisions` branch, when present, will show changes currently under consideration. We invite you to submit suggestions or corrections via pull request on the revisions branch, by posting an issue, or by emailing us at [pubsinfo@getty.edu](mailto:pubsinfo@getty.edu).

## Development Notes

This project was last built with the following software versions:

- Node 20.18.1
- Quire CLI 1.0.0-rc.25

### Branches

| branch | about |
| --- | --- |
| `main` | The primary branch |
| `first-pages`, `second-pages`, `final-pages`, `final-pages-v2`, `final-pages-v3` | Versions of the project at various staages |
| `forthcoming` | A static placeholder page that was displayed at the book’s final URL on getty.edu prior to publication |
| `revisions` | Any revisions currently under consideration but not yet published |
| `prototype` | An early prototype of the project built to verify final manuscript prep |

### Figure Images Submodule

Some of figure images for *Ancient Glass* are licensed from third parties for use exclusively in this publication. As such, they are kept in a separate, private repository, https://github.com/thegetty/ancient-glass/, which is linked to this main publication repository as a submodule in `content/_assets/images/figures/`. When cloning this repo for further development, you’ll permissions for the private repository and will need to clone recursively in order to clone both the main repo and the submodule.

```
git clone --recursive https://github.com/thegetty/ancient-glass.git
```

### Creating a PDF Version

1. Switch `url` in publication.yaml to `url: 'http://localhost:8080'`

2. **Temporarily** comment out all `printImage`, `thumbnail`, `manifestId`, and `canvasId` values from figures.yaml file. (This is an accomodation as external IIIF is not actually working properly for PDF and EPUB outputs.)

3. Run `quire build`

4. In the `_site/pdf.html` file, find `<section class="quire-page quire-entry" data-footer-page-title="Catalogue" id="page-catalogue-cat-1">` and right before it, add `<div class="catalogue-entries-wrapper">`. And then find `<section class="quire-page quire-essay" data-footer-page-title="Appendix 1. Noninvasive Analytical Strategies" id="page-appendix-1">` and right before it, add `</div>`. (This creates a new element that wraps all of the catalogue entry pages into one group so that they can flow together in 2-columns.)  

5. If the PDF will be sent to digital printer, run the following command to ensure color profiles are correct:

    ```
    magick mogrify -profile bin/adobe-rgb-1998.icm _site/iiif/**/print-image.jpg
    ```

    ```
    magick mogrify -colorspace Gray -profile bin/gray-gamma-2-2.icm _site/iiif/**-bw/**/print-image.jpg
    ```

6. With PrinceXML 14.2 installed, run `quire pdf --lib prince`

### Creating an EPUB Version

1. Switch `url` in publication.yaml to `url: 'http://localhost:8080'`

2. **Temporarily** comment out all `printImage`, `thumbnail`, `manifestId`, and `canvasId` values from figures.yaml file. (This is an accomodation as external IIIF is not actually working properly for PDF and EPUB outputs.)

3. Run `quire build`

4. Run `quire epub`

5. Use a tool like , to unzip the resulting EPUB file, and in `getty-research-journal-20/ops/package.opf` add the following metadata items

    ```
    <meta property="schema:accessibilitySummary">This publications meets baseline accessibility standards</meta>
    <meta name="schema:accessMode" content="textual" />
    <meta name="schema:accessMode" content="visual" />
    <meta name="schema:accessModeSufficient" content="textual" />
    <meta name="schema:accessModeSufficient" content="visual" />
    <meta name="schema:accessibilityFeature" content="alternativeText" />
    <meta name="schema:accessibilityFeature" content="structuralNavigation" />
    <meta name="schema:accessibilityFeature" content="tableOfContents" />
    <meta name="schema:accessibilityHazard" content="noFlashingHazard" />
    <meta name="schema:accessibilityHazard" content="noMotionSimulationHazard" />
    <meta name="schema:accessibilityHazard" content="noSoundHazard" />
    ```

6. Delete the original EPUB file and use the same tool to repackage the raw files into a new EPUB

7. Run the resulting file through epubcheck-5.0.0 and Ace by DAISY accessibility checker to ensure there aren't any validation or accessibility errors or warnings.

### Customizations

**_includes/components/analytics.js**
**_layouts/base.11ty.js**
Added Google Analytics 4

**_includes/components/head.js**
Remove noindex,nofollow tag

**_includes/components/license-icons.js**
Remove CC SVG icons from epub output

**_includes/components/menu/item.js**
**_includes/components/table-of-contents/item/list.js**
**_includes/components/table-of-contents/item/grid.js**
Don't render menu or TOC links if page is `landing: false`

**_includes/components/object-filters/object-filters.webc**
Add formatOptionLabel function to strip out custom sort encoding for date ranges

**_includes/components/object-filters/objects-data.webc**
**_layouts/objects-page.webc**
Exclude various elements from epub output

**_includes/components/object-filters/object-cards-list.webc**
Adjust grid break points

**_includes/components/table-of-contents/item/list.js**
Add a `data-layout` attribute to facilitate CSS hiding of cat. entries

**_includes/components/copyright/licensing.js** 
Updated licensing language

**_layouts/cover.liquid**
Added publication.cover_title in place of the default title

**_layouts/entry.liquid**
Added section breadcrumbs to entry pages based on their file paths

**_layouts/pdf.liquid**
Made updates to improve PDF accessibility

**_plugins/figures/figure/index.js**
Allow for figure thumbnails to be defined in figures.yaml data

**_plugins/shortcodes/def.js**
**_plugins/shortcodes/index.js**
Add custom def shortcode for glossary pop-ups

**_plugins/shortcodes/cat.js**
**_plugins/shortcodes/index.js**
Add custom def shortcode for accession number catalogue links

**_plugins/shortcodes/thumb.js**
**_plugins/shortcodes/index.js**
Add custom thumb shortcode to create thumbnails based on cat numbers

**_plugins/shortcodes/tombstone.js**
Allow for optional custom labels with `field` and `label` attributes

**_plugins/transforms/outputs/pdf/transform.js**
Fixed transform that was converting external links to slugified anchor links

**_plugins/transforms/outputs/pdf/write.js**
Fed publication data to PDF layout for accessibility metadata needs

**_plugins/transforms/outputs/epub/manifest.js**
Make epub.defaultCoverImage the first choice, and then promoImage second

**content/_assets/javascript/application/index.js**
Display only one pop-up at a time

**content/_computed/eleventyComputed.js**
Allow for nextPage and previousPage to be overridden at page level

**_plugins/shortcodes/cat.js**
Allow for optional display text to override the default link text

**_plugins/shortcodes/figure.js**
Remove slugify from figure id as it was leading to EPUB validation issues

## License

© 2025 J. Paul Getty Trust

The text of this work is licensed under a <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="license">Creative Commons Attribution-NonCommercial 4.0 International License</a>. All images are reproduced with the permission of the rights holders acknowledged in captions and are expressly excluded from the CC BY-NC license covering the rest of this publication. These images may not be reproduced, copied, transmitted, or manipulated without consent from the owners, who reserve all rights. 