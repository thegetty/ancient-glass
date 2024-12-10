---
title: Cover
layout: cover
order: 1
menu: false
toc: false
image: cover-background.jpg
outputs:
  - html
---

{% if publication.additional_contributors %}
<div class="cover-authors">
  {{ publication.additional_contributors }}
</div>
{% endif %}

{{ publication.description.full }}