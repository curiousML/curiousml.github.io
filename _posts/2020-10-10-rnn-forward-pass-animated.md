---
title: "The RNN forward pass, animated"
date: 2020-10-10
lede: >-
  One hidden state, carried from step to step, with the same weights reused
  every time. The animation makes that second part obvious in a way the
  equations never quite do.
tags: ["Neural networks", NLP, Teaching]
glyph: "→"
math: true
---

*Made in October 2020 for the NLP sessions of the Data Science pour l'Actuaire
course at the Institut des Actuaires. Left online because the picture has not
aged, even if the frameworks around it have.*

![Forward pass of a recurrent neural network]({{ '/images/animations/rnn-forward.gif' | relative_url }})

A recurrent network reads a sequence one element at a time. At step $$t$$ it
takes the current input $$x_t$$ and the hidden state $$h_{t-1}$$ left over from
the previous step, and produces a new hidden state:

$$h_t = \tanh(W_x x_t + W_h h_{t-1} + b)$$

That is the entire idea. The hidden state is the network's only memory of
everything it has read so far, and it is a fixed-size vector — which is both why
RNNs handle sequences of any length and why they forget.

The part worth watching in the animation is the weights. $$W_x$$ and $$W_h$$ do
not change as the animation moves right: the *same* matrices are applied at
every step. An unrolled RNN looks like a deep network, but it is one small
network applied repeatedly. That weight sharing is what makes the parameter
count independent of sequence length, and it is also what makes the gradients
behave badly — see
[backpropagation through time]({{ '/blog/backpropagation-through-time-animated/' | relative_url }}).

The original notebook export, if you want it:
[RNN forward]({{ '/teaching/DSA/RNNforward.html' | relative_url }}).
