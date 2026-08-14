---
title: "Predicting blacklegged tick populations"
order: 3
featured: true
status: "Research collaboration"
period: "2022 to 2024"
lede: >-
  A Lancet review of how the research community predicts where Lyme disease
  vectors live and how many there are, and of the data gaps that keep those
  predictions from being trusted.
stack: ["Species distribution models", "Mechanistic models", Biostatistics, "Public health"]
links:
  - { label: "Lancet paper (2024)", url: "https://www.thelancet.com/journals/lanam/article/PIIS2667-193X(24)00033-4/fulltext", icon: link }
  - { label: "Open access (PMC)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10943480/", icon: pdf }
  - { label: "Mathematics for Public Health", url: "http://www.fields.utoronto.ca/activities/public-health", icon: link }
---

## Why a tick

*Ixodes scapularis*, the blacklegged or deer tick, is the animal that carries
Lyme disease across most of North America. It takes two to three years to go
from larva to nymph to adult, it needs a mouse or a deer at each stage, and it
only survives where the temperature and the humidity suit it. Warming winters
are moving it steadily north, into places that have never had to think about it.

That makes it a public health forecasting problem rather than a purely
ecological one. If you can predict where the ticks will be, you can warn people
before the cases arrive rather than after. Whether anyone can predict it well is
the question this work set out to answer.

The review was published in April 2024 in
*[The Lancet Regional Health – Americas](https://www.thelancet.com/journals/lanam/article/PIIS2667-193X(24)00033-4/fulltext)*
with Bouchra Nasri's group at Université de Montréal and colleagues across the
Mathematics for Public Health network.

## What we did

We read the literature, properly. We screened 4661 papers published between
January 2012 and July 2022 and kept the 41 that actually build a predictive
model of tick abundance or distribution in North America. For each one we
recorded what it predicts, how, and on what data.

![Alluvial diagram linking the 41 studies to their modelling approaches, tick data sources, hydroclimatic variables, ecological variables and human components]({{ '/images/tick-review/alluvial-data-to-models.jpg' | relative_url }})

*Figure 2 from the paper: every study, the approach it used, and every category
of data that fed it. The two widest bands on the right are both labelled
"None", which is the finding in one picture.*

## What we found

1. **Two schools, unevenly sized.** Four out of five studies (33 of 41) are
   *data-driven*: fit a regression or a machine-learning model to observations
   and let the data speak. The rest (8) are *mechanistic*: write down the tick's
   life cycle as equations and simulate it. Both work; they fail differently.
   Data-driven models fail when the data is thin, which is exactly at the
   invasion front you most want to watch. Mechanistic models fail when your
   assumptions about the animal are wrong, and they are much harder to read.

2. **Predicting "where" and predicting "how many" are different jobs.** Just
   over half the studies (22) predict *distribution*: is the tick present here,
   is this habitat suitable. A third (14) predict *abundance*: how many. Only
   five do both. That matters, because habitat suitability tells you a place is
   plausible, not that it is dangerous; risk tracks the number of *infected*
   ticks.

3. **Almost nobody counts the deer.** Every study used tick data. Most combined
   climate variables with ecological ones. But only 9 studies out of 41 included
   host density, even though the tick cannot complete its life cycle without
   mice and deer. This was the finding that surprised us most, and it is the
   clearest open gap: models are predicting an animal while ignoring what it
   feeds on.

4. **The data underneath is the real bottleneck.** *Active* surveillance, with
   researchers dragging a cloth through undergrowth, is precise and expensive,
   and covers short windows that miss a multi-year life cycle. *Passive*
   surveillance and citizen science, people mailing in the tick they pulled off
   the dog, scale beautifully and are biased in obvious ways: they undercount
   nymphs, which are small, hard to spot, and the stage that infects most
   people. Roughly a third of studies reported no accuracy measure at all, and
   the ones that did are barely comparable to each other.

![Bar chart of the 41 studies by model type and model output, split into data-driven and mechanistic frameworks]({{ '/images/tick-review/model-types-and-outputs.jpg' | relative_url }})

*Figure 5 from the paper, which is points 1 and 2 in one chart. Regression
dominates the data-driven side, MaxEnt only ever produces distributions, and the
"Both" slice is thin in every column.*

## What we concluded

The modelling has got better; the data has not kept up. The recommendation is
unglamorous and, I think, correct: standardise collection protocols, combine
active and passive surveillance instead of choosing, publish validation results
in comparable form, and put hosts and human behaviour into the models rather
than treating the tick as if it lived alone. That is the One Health framing, and
for anything meant to warn a public health body it is not optional. A prediction
nobody can validate is not a warning.

## Reference

Sharma Y, Laison EKE, Philippsen T, Ma J, Kong J, Ghaemi S, Liu J, **Hu F**,
Nasri B. *Models and data used to predict the abundance and distribution of
Ixodes scapularis (blacklegged tick) in North America: a scoping review.*
The Lancet Regional Health – Americas, 32:100706, April 2024.
[doi:10.1016/j.lana.2024.100706](https://doi.org/10.1016/j.lana.2024.100706) ·
open access.

Figures 2 and 5 are reproduced from that paper under
[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
