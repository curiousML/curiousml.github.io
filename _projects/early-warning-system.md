---
title: "Early Warning System for Infectious Diseases"
order: 3
featured: true
status: "Research collaboration"
period: "2022 to 2024"
lede: >-
  Spatiotemporal modelling and NLP over news and social posts to detect outbreak
  signals early, as part of the Mathematics for Public Health initiative.
stack: [NLP, "Spatiotemporal models", Biostatistics, Python]
links:
  - { label: "Mathematics for Public Health", url: "http://www.fields.utoronto.ca/activities/public-health", icon: link }
---

## The problem

Official surveillance data is reliable and slow. Text on the open web is fast and
extremely noisy. An early-warning system has to extract a usable signal from the
second without inheriting all of its noise, and then place that signal in space
and time well enough for a public-health body to act on it.

## Approach

The pipeline combines document-level classification of disease mentions with
spatiotemporal models that pool information across neighbouring regions and
recent weeks. The statistical question underneath is a hard one: how do you
calibrate an alarm threshold when your data-generating process includes media
attention as a confounder?

> Placeholder description. Edit `_projects/early-warning-system.md` to add
> results, figures or links once they are public.
