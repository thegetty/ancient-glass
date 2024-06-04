---
title: Title
layout: base.11ty.js
classes:
  - title-page
order: 3
outputs:
  - pdf
  - epub
toc: false
menu: false
---

<div class="title-page">
  {% if publication.cover_title %}
  <span class="title-tp">
    {{ publication.cover_title }}
  </span><br />
  {% endif %}
  {% if publication.subtitle %}
  <span class="sub-title">
    {{ publication.subtitle }}
  </span><br />
  {% endif %}
  <span class="contributor">
    {%- if publication.contributor_as_it_appears -%}
      {{ publication.contributor_as_it_appears | markdownify }}
    {%- else -%}
      {% contributors context=publicationContributors type="primary" format="string" %}
    {%- endif -%}
  </span><br />
  {%- if publication.additional_contributors -%}
    <span class="contributor additional-contributor">
      {{ publication.additional_contributors | markdownify }}
    </span><br />
  {%- endif -%}
  <span class="publisher">
    {%- for publisher in publication.publisher -%}
      {%- if publisher.name -%}
        {{ publisher.name }}{% endif %}{% if publisher.name and publisher.location %}, {% endif %}{% if publisher.location %}{{ publisher.location }}
      {%- endif -%}
    {%- endfor -%}
  </span>
</div>
