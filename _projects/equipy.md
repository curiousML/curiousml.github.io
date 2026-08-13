---
title: "EquiPy"
order: 1
featured: true
status: "Open source"
period: "Since 2023"
lede: >-
  A Python package for post-processing fairness: it takes a trained model and
  returns a calibrated, fairer one, for a single sensitive attribute or several
  at once.
stack: [Python, "Optimal transport", scikit-learn, Fairness]
links:
  - { label: "Documentation", url: "https://equilibration.github.io/equipy/equipy.fairness.html", icon: link }
  - { label: "GitHub", url: "https://github.com/equilibration/equipy", icon: code }
  - { label: "Paper (AAAI 2024)", url: "https://arxiv.org/abs/2309.06627", icon: pdf }
---

## What it does

Much fairness tooling asks you to retrain. EquiPy works the other way round: it
sits after your model and transports its score distribution towards a
Wasserstein barycenter, so that the distributions seen by each protected group
coincide, either exactly or partially, along a tunable fairness path.

The multi-attribute case is the interesting one. Correcting for gender and then
for age is not the same as correcting for both, and naive sequential correction
undoes itself. EquiPy implements the sequential mechanism from our AAAI 2024
paper, which composes corrections in a way that keeps earlier guarantees intact.

## Why it matters in insurance

A pricing model cannot usually be retrained on demand: it is validated,
documented and sometimes filed with a regulator. Post-processing lets you audit
and correct an existing model, and quantify what the correction costs in premium
accuracy. In our experience that last number is the one a risk committee asks
for first.

## Related work

- *A sequentially fair mechanism for multiple sensitive attributes*, AAAI 2024
- *Fairness in multi-task learning via Wasserstein barycenters*, ECML-PKDD 2023
- *Mitigating discrimination in insurance with Wasserstein barycenters*, BIAS 2023
