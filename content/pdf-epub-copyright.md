---
title: Copyright
layout: page
order: 4
classes:
  - copyright-page
outputs:
  - epub
  - pdf
toc: false
menu: false
---

{{ config.quire_credit_line }}

{{ publication.description.online_edition }}

{% copyright %}

First edition {{ publication.pub_date | date: "%Y" }}

{{ publication.revision_statement | markdownify }}

<div class="publisher no-break-container">

{% for press in publication.publisher %}
**Published by the {{ press.name }}, {{ press.location }}**
{{ press.address | markdownify }}
{% endfor %}

</div>
<div class="project-team no-break-container">

{% for person in publication.project_team %}
- {{ person | markdownify }}
{% endfor %}

</div>
<div class="distribution no-break-container">

Distributed in the United States and Canada by the University of Chicago Press

Distributed outside the United States and Canada by Yale University Press, London

</div>
<div class="cip-data no-break-container">

{{ publication.library_of_congress_cip | markdownify }}

</div>
<div class="cover-image-credits">

Front cover: Clockwise from top left: Bowl (cat. 239), Flask (cat. 396), Flask (cat. 153), Sprinkler Flask (cat. 347), Date-Shaped Unguentarium (cat. 195), Head Jug (cat. 182), Gold-Band Flask (cat. 146), Flask (cat. 363), Flask (cat. 270), Mosaic Bowl (cat. 90), Discoid Mosaic Face Bead (cat. 535), Fragment of a Mosaic Inlay with Floral Motif (cat. 453), Alabastron (cat. 117), Cameo Glass Skyphos (cat. 82)

Illustration Credits

Every effort has been made to contact the owners and photographers of illustrations reproduced here whose names do not appear in the captions or below. 
Anyone having further information concerning copyright holders is asked to contact Getty Publications so this information can be included in future printings.
Fig. 1: From Parke-Bernet Galleries 1940
Fig. 2: Institutional Archives, The Getty Research Institute, Los Angeles (2010.IA.04)
Fig. 3: *Los Angeles Times* Photographic Archive: "Julie Frazier standing next to case of objects." January 24, 1958. (Collection 1429. Box 328. Neg. #108387). UCLA Library Special Collections
Fig. 4: Bibliothèque nationale de France
Fig. 11: From Lierke 1999, p. 33, fig. 59
Fig. 12: From Lierke 1999, p. 42, fig. 42 
Fig. 13: From Schuler, F. “Ancient Glassmaking Techniques 1: The Molding Process.” *Archaeology* 12 (1959): p. 48
Fig. 14: From Lierke 1999, p. 42
Fig. 15: From Lierke 1999, p. 30 
Fig. 16: From Lierke 1999, p. 40
Fig. 17: Courtesy of Bologna, Museo Civico Archeologico. From Meconcelli Notarianni, Gioia, and Daniela Ferrari. *Vetri Antichi: Arte e Tecnica*. Exh. cat. Bologna, Museo Civico Archeologico, 1998, p.&nbsp;13
Fig. 18: Courtesy of Bologna, Museo Civico Archeologico. From Meconcelli Notarianni, Gioia, and Daniela Ferrari. *Vetri Antichi: Arte e Tecnica*. Exh. cat. Bologna, Museo Civico Archeologico, 1998, p.&nbsp;14
Fig. 19: University of Pennsylvania Museum of Archaeology and Anthropology. From Fleming 1999, p. 199, figs. 51–52
Fig. 20: From Lierke 1999, p. 24, fig. 44

</div>

