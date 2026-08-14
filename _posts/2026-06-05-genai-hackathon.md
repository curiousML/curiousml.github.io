---
title: "Juste, pas cher, sobre: 36 hours of RAG"
date: 2026-06-05
lede: >-
  A generative AI hackathon with Milliman and Université Gustave Eiffel, where
  the assistant had to answer actuarial questions correctly, cheaply and with a
  small carbon footprint — all three at once, or it did not score.
category: "NLP & LLMs"
tags: [RAG, LLMs, Insurance, Teaching]
glyph: "?"
---

## The premise

Most student LLM projects are graded on whether they work. In production, "it
works" is the entry ticket, not the result — an assistant that answers well and
costs a fortune per query is not deployable, and one that burns a large model on
every trivial question is not defensible either.

So the brief for this one, run with Université Gustave Eiffel on 4–5 June 2026,
was deliberately three-sided: **juste, pas cher, sobre** — accurate, cheap,
low-carbon. Teams had 36 hours.

## The task

Build an internal assistant that answers technical actuarial questions from a
corpus of more than 150 published actuarial *mémoires*, supplied as PDFs. Nothing
about the answer is given: extracting, chunking and indexing that corpus is the
first half of the problem, and the retrieval quality caps everything downstream.
Retrieve the wrong passages and the best model in the world will still answer
badly.

Each team got a pre-configured Hugging Face Space, a working RAG baseline, two
Azure-hosted models — a large one and a small one — a token budget, and a strict
API contract: `POST /query`, exact response format, any deviation scores zero.
The baseline was there to be improved, not rewritten.

## How it was scored

A composite of three measurements, which is where the interesting behaviour came
from:

1. **Accuracy** — 130 multiple-choice questions plus 20 open ones graded by
   LLM-as-judge.
2. **Cost** — tokens consumed.
3. **Carbon** — estimated CO₂ of the LLM calls.

Routing everything to the large model buys accuracy and loses on the other two.
The scoring was designed so that the winning strategy is the one an engineering
team would actually have to find: decide, per question, how much machine the
question deserves. A partial leaderboard published at the end of day one, a
final one after the 16:00 code freeze on day two, then jury pitches.

## The teaching point

The day-one debrief is the part I would keep for any future edition, because it
is the lesson that transfers beyond hackathons. The pipeline splits into two
zones with completely different iteration costs:

- **The embedding zone** — PDF parser, chunk size and overlap, chunking
  strategy, embedding model. Touch any of these and every vector has to be
  recomputed: a full re-ingestion, an hour or more. Under a 36-hour clock that
  is a bet, not an adjustment.
- **The free zone** — query rewriting and HyDE, adaptive top-K, hybrid BM25
  plus dense retrieval, cross-encoder reranking, prompt engineering, small/large
  model routing. None of it moves the vector store, so iterations are minutes.

Teams that mapped this early spent day two measuring; teams that discovered it
late spent day two re-ingesting. Knowing which knob is expensive to turn is most
of what separates the two.

## How it turned out

Teams from two master's programmes at Gustave Eiffel, including the Master
Proba-Stat des Nouvelles Données, spent 36 hours and several hundred lines of
code on it.

- **Grand prize — Groupe 814**, for the most complete and original system.
- **Runner-up — Échec et Maths.**
- **Best presentation — Datack.**

That the pitch had its own prize is not decoration. A result a risk committee
cannot follow is a result that does not ship, and the students who understood
that were not always the ones highest on the leaderboard.

## My role, and the people who ran it

Subject lead and overall point of contact — I designed the problem, the corpus
and the evaluation, and mentored teams across both days. Students came from
three different profiles by design, data science, actuarial science and software
engineering, because no one of them covers the four axes the task needs.

None of it runs on one person. On the Milliman side: Quincy Hsieh on
infrastructure, Alexandre Ren on scoring and the leaderboard, Bertille Tierny
and Muhammad Umer mentoring, Chloé Rolland on organisation and communication.
On the Gustave Eiffel side, the jury and teaching staff: Thierry Jeantheau,
Mohamed Hebiri, Claire Lacour, Thomas Bonis, Jacques Printems and Florian
Valade.

Announcements from
[Milliman France](https://www.linkedin.com/posts/fran%C3%A7ois-hu-9b6295136_activity-7469737874192670720-pgbJ)
and the
[master's programme](https://www.linkedin.com/posts/fran%C3%A7ois-hu-9b6295136_activity-7469716779620081664-lTD1).

## The material

Everything the teams received, and the two decks from the sessions, is on the
[teaching page]({{ '/teaching/#hackathons' | relative_url }}) and here:

- [The brief]({{ '/teaching/3A-advanced-machine-learning/hackaton.pdf' | relative_url }})
  — the task, the corpus, the scoring, the rules.
- [Baseline walkthrough]({{ '/teaching/3A-advanced-machine-learning/hackaton_baseline.pdf' | relative_url }})
  — the RAG pipeline they started from, file by file.
- [RAG crash course]({{ '/teaching/3A-advanced-machine-learning/hackaton_rag.pdf' | relative_url }})
  — retrieval-augmented generation from scratch, in one morning.
- [Day 1 debrief]({{ '/teaching/3A-advanced-machine-learning/hackaton_debriefJ1.pdf' | relative_url }})
  — the map of optimisation levers described above.

Reusable for teaching. The corpus itself is not redistributable.
