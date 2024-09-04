---
title: "Works Cited"
layout: page
order: 5000
---

## Primary Sources

{% for entry in references.entries %}
{% if entry.type == 'primary-source' %}

{{ entry.id }}
: {{ entry.full }}

{% endif %}
{% endfor %}

## Books and Articles

{% for entry in references.entries %}
{% if entry.type != 'primary-source' %}

{{ entry.id }}
: {{ entry.full }}

{% endif %}
{% endfor %}