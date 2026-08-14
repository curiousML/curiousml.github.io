---
title: "A sequentially fair mechanism for multiple sensitive attributes"
date: 2026-06-10
lede: >-
  Most bias-correction methods handle one sensitive variable at a time. Real
  problems have several. It turns out the order you correct them in does not
  change where you end up, and that fact is more useful than it sounds.
categories: ["Trustworthy AI"]
image: /images/covers/sequential-fairness.png
image_alt: "Two score distributions induced by a sensitive attribute, and their Wasserstein barycenter"
image_caption: "Two score distributions induced by the sensitive attribute, and the barycenter they are both transported towards."
tags: [Fairness, "Optimal transport", Insurance]
glyph: "∑"
---

<!--
  Adapted from the research summary Philipp Ratz and I wrote for the Montreal
  AI Ethics Institute:
  https://montrealethics.ai/a-sequentially-fair-mechanism-for-multiple-sensitive-attributes/
  Paper: https://arxiv.org/abs/2309.06627 (AAAI 2024)
-->

Fairness is rarely about one variable. A model touches age, sex, origin,
location and a dozen proxies for all of them at once, and yet most
bias-correction techniques are built to handle a single sensitive variable in
isolation. That leaves practitioners with an awkward question: which bias do you
correct first, and what does that choice do to everyone else?

This is the question behind our AAAI 2024 paper with Arthur Charpentier. The
short version of the answer: correcting for one sensitive variable and then the
other gives the same outcome as doing it the other way round. Because the
destination does not depend on the route, you can study the route itself, and
see who is affected at each step when you cannot correct everything at once.

## Why excluding the variable is not enough

Algorithms reproduce the biases in their training data even when the sensitive
variables have been removed, because they learn proxies for them. Postcode
stands in for origin, occupation for sex, purchase history for almost anything.
The goal is therefore not to hide the attribute but to make the model's
predictive distribution indistinguishable across its values.

## Fairness gerrymandering

There is a temptation to pick the sensitive features that make a model look best
and to evaluate only those. Correcting for sex alone can produce a model that is
defensible on sex and quietly worse on the intersection of sex and origin.
Evaluating all the variables together, rather than one convenient one, is what
stops the exercise from becoming presentational.

The obvious alternative is to treat the combination of all sensitive attributes
as a single variable. That is clean in theory and difficult in practice: with a
handful of attributes you get a large number of subgroups, most of them nearly
empty, and estimates that are mostly noise.

## The mechanism

Our approach removes the biases sequentially, transporting the score
distributions towards a multi-marginal Wasserstein barycenter at each step. Two
things fall out of it.

The final result does not depend on the order of correction. That is what makes
the sequential view legitimate rather than arbitrary.

And because each step works with the marginal distributions rather than the full
cross-product of subgroups, estimation does not depend on tiny cells. Adding a
new sensitive attribute later is cheap, which matters when the list of protected
characteristics is set by a regulator rather than by you.

## What it looks like on real data

On US Census wage data, correcting for racial disparities improves outcomes for
minority women and can make them worse for majority women. That is not an
argument against correcting. It is the kind of trade-off that is usually
invisible and is better stated out loud. With the effect of each step
quantified, deciding which sensitive variables to prioritise becomes an explicit,
arguable decision rather than an implicit one.

## What this does not settle

The method does not answer what fairness ought to mean. It makes the consequences
of a particular definition measurable, so the discussion can be about evidence
rather than intuition. There is also a real cost: fairness and accuracy trade
against each other, and the size of that trade is something to measure rather
than assume.

The algorithms are implemented in [EquiPy](/projects/equipy/), so none of this
requires reimplementing the paper.

---

**Further reading.** The [paper](https://arxiv.org/abs/2309.06627) (AAAI 2024,
with Philipp Ratz and Arthur Charpentier), and the
[research summary](https://montrealethics.ai/a-sequentially-fair-mechanism-for-multiple-sensitive-attributes/)
Philipp and I wrote for the Montreal AI Ethics Institute, which this post
follows closely.
