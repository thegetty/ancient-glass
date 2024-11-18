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

First edition, {{ publication.pub_date | date: "%Y" }}

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

Front cover: Clockwise from top left: Bowl ([cat. 239](/catalogue/cat-239/)), Flask ([cat. 396](/catalogue/cat-396/)), Flask ([cat. 153](/catalogue/cat-153/)), Sprinkler Flask ([cat. 347](catalogue/cat-347/)), Date-Shaped Unguentarium ([cat. 195](/catalogue/cat-195/)), Head Jug ([cat. 182](/catalogue/cat-182/)), Gold-Band Flask ([cat. 146](/catalogue/cat-146/)), Flask ([cat. 363](/catalogue/cat-363/)), Flask ([cat. 270](/catalogue/cat-270/)), Mosaic Bowl ([cat. 90](/catalogue/cat-90/)), Discoid Mosaic Face Bead ([cat. 535](/catalogue/cat-535/)), Fragment of a Mosaic Inlay with Floral Motif ([cat. 453](/catalogue/cat-453/)), Alabastron ([cat. 117](/catalogue/cat-117/)), Cameo Glass Skyphos ([cat. 82](/catalogue/cat-82/))
Back cover: TK

Every effort has been made to contact the owners and photographers of illustrations reproduced here whose names do not appear in the captions or in the illustration credits at the back of this book. Anyone having further information concerning copyright holders is asked to contact Getty Publications so this information can be included in future printings.

</div>

