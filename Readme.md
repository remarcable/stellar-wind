![image](https://user-images.githubusercontent.com/10008938/38724226-d9357da6-3f03-11e8-8605-6f31882404b9.png)

# Stellar Wind
Unique music composed by a decentralized organism - the [Stellar](https://www.stellar.org) transaction network

## Description

Stellar Wind transforms the activity on the Stellar Network into harmonic musical art by mapping every transaction to a musical note depending on the relative height of the transaction amount.

It is intended to be kept open in a browser tab to listen to for relaxation, coding or any other activity requiring calmness and focus.<br>

*Headphone usage strongly recommended!*

## Data

The data for Stellar Wind to compose music is streamed from the [Horizon API server](https://github.com/stellar/horizon). It captures all occurring transactions and stores all non zero amounts from operations in the network.

Those amounts are taken off a queue in regular intervals and used as normalized inputs for the music composition.

## Music

Behind the scenes, Stellar Wind uses [tone.js](https://tonejs.github.io/) to play music. To create interesting melodies, notes are picked from a C-minor pentatonic scale with an added A flat. (that adds some interesting colors) ;)

## Plans for the future

We want to compose even more interesting melodies using advanced algorithms and – most importantly – rhythm! The harmonic foundation is currently prerecorded and should be generated in the browser as well. This would allow interesting features: Like choosing different moods and becoming an even more advanced background music composer.

## License

The project is [MIT-licensed](./LICENSE).
