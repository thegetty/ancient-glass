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

<section class="title-block">

{%- if publication.title -%}
  <h1 class="title">{{ publication.title | markdownify }}{% if publication.subtitle %} <span class="subtitle">{{ publication.subtitle | markdownify }}</span>{% endif %}
  {% if publication.reading_line %}<br /><br />{{ publication.reading_line | markdownify }}{% endif %}</h1>
{%- endif -%}
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

</section>

<section class="publisher-block">

{%- for publisher in publication.publisher -%}
  {%- if publisher.name -%}
    <p class="publisher">{{ publisher.name }}{% if publisher.location %}, {{ publisher.location }}{% endif %}</p>
  {%- endif %}
{%- endfor -%}

</section>
