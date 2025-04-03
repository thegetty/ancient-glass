---
title: "Glossary"
layout: page
order: 4000
---

{% for def in glossary.entries %}

{{ def.term }}
: {{ def.definition }}

{% endfor %}