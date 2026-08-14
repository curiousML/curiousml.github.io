---
title: "The bidirectional RNN, animated"
date: 2020-10-10
lede: >-
  Two passes over the same sequence, one in each direction, concatenated. It
  buys you context from both sides and costs you the ability to run online.
category: "Machine learning"
cover: /images/covers/brnn-forward.png
tags: ["Neural networks", NLP, Teaching]
glyph: "⇄"
math: true
---

*Made in October 2020 for the NLP sessions of the Data Science pour l'Actuaire
course at the Institut des Actuaires. Left online because the picture has not
aged, even if the frameworks around it have.*

![Forward pass of a bidirectional recurrent neural network]({{ '/images/animations/brnn-forward.gif' | relative_url }})

A plain RNN reading left to right knows everything before position $$t$$ and
nothing after it. For most language tasks that is the wrong constraint: whether
*bank* means a riverside or a branch office is usually settled by a word further
along the sentence.

A bidirectional RNN runs two independent recurrent layers over the same input,
one left to right and one right to left, then glues their states together at
each position:

$$h_t = [\,\overrightarrow{h_t} \; ; \; \overleftarrow{h_t}\,]$$

That is the whole construction. The two directions share no weights and never
talk to each other during the pass; they only meet in the concatenation, which
is then what the output layer sees.

The animation makes the real cost obvious: the backward pass cannot start until
the last element has arrived. A bidirectional model therefore needs the complete
sequence up front, which rules it out for anything streaming (live
transcription, real-time scoring) and is fine for anything where you already
hold the whole document. That trade is the same one BERT makes and GPT does not,
which is a useful thing to have seen before meeting either.

The original notebook export:
[BRNN forward]({{ '/teaching/DSA/BRNNforward.html' | relative_url }}). The
one-directional version is
[here]({{ '/blog/rnn-forward-pass-animated/' | relative_url }}).
