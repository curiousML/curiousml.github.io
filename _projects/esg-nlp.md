---
title: "ESG concepts in corporate reporting"
order: 4
featured: false
status: "Research collaboration"
period: "2022 to 2024"
lede: >-
  Identifying Environmental, Social and Governance concepts in the disclosures of
  Canadian companies, with Algora Lab (UdeM / Mila).
stack: [NLP, "Topic models", "Sustainable finance"]
links:
  - { label: "Algora Lab", url: "https://algoralab.ca/", icon: link }
  - { label: "Mila", url: "https://mila.quebec/mila/", icon: link }
---

## The question

ESG scores are produced by vendors whose methodologies are proprietary and often
mutually inconsistent. If two providers disagree about the same company, the
disagreement is hard to resolve from the outside. One response is to go back to
the primary documents and extract concepts directly and transparently.

## What we did

Concept extraction over corporate disclosures (annual reports, sustainability
reports, management discussion sections) for Canadian issuers, with attention
to the gap between what a company *says* and what a scoring methodology
*credits*.

Three things make this harder than a standard text-classification exercise:

- **The vocabulary moves.** "Transition plan", "scope 3", "just transition" and
  "double materiality" were rare or absent a decade ago and are now boilerplate.
  A fixed taxonomy dates quickly; a purely unsupervised one drifts into topics
  nobody in sustainable finance recognises. The workable answer sits in between,
  with topic models proposing structure and domain reading disciplining it.
- **Disclosure is not behaviour.** Corporate reporting is written to be scored.
  Length, tone and enthusiasm are cheap; commitments with dates and figures are
  not. Any extraction that counts mentions is measuring communication, and it
  should say so rather than quietly presenting itself as a measure of conduct.
- **Someone chooses the categories.** Deciding what counts as "social", and at
  what granularity, is a normative act performed before any model runs. The
  collaboration with Algora Lab, whose work is on AI governance and the ethics
  of automated decision-making, exists to keep that question visible instead of
  burying it in a preprocessing step.

## Why it matters

The commercial argument for transparent extraction is straightforward: an
investor who can see which sentences drove a score can contest it, and a company
can tell whether it is being penalised for a practice or for its prose. The
research argument is the one I find more interesting. The discrepancy between
providers is itself a measurement, and reconstructing scores from primary text
is a way to find out where the disagreement actually lives.

## Status

Work carried out during my postdoc at Université de Montréal, 2022 to 2024. The
methodological thread continues in the R&D AI Lab at Milliman, where the same
problem reappears as retrieval and extraction over regulatory and actuarial
documents. Nothing from this strand is published yet; when it is, it will be
linked here and on the
[research page]({{ '/research/' | relative_url }}).
