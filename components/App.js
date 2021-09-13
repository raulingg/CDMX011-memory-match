import { CardContainer } from "./CardContainer.js";
import { Heading } from "./Heading.js";

const TIMEOUT_2000_MS = 2000
const flippedClass = 'card--flipped'
const disabledClass = 'card--disabled'

const App = ({ cards, title }) => {
  const el = document.createElement("div");
  const state = {
    flips: 0,
    matches: 0,
  }

  function flip(el) {
    state.flips +=1
    el.classList.add(flippedClass)
  }

  function flipBack(el) {
    state.flips -= 1
    el.classList.remove(flippedClass)
  }

  function resetFlips() {
    state.flips = 0
  }

  function flipBackCardsAfter(cards, timeInMs) {
    setTimeout(() => cards.forEach(flipBack), timeInMs);
  }

  function disableCards(cards) {
    cards.forEach((card) => card.classList.add(disabledClass))
  }

  function flipFirstTwoCards(e) {
    if (state.flips === 2) return

    if (e.currentTarget.classList.contains(flippedClass)) {
      flipBack(e.currentTarget)
    } else {
      flip(e.currentTarget)
    }

    if (state.flips === 2) {
      const flippedCards = document.querySelectorAll(
        `:not(.${disabledClass}).${flippedClass}`
      )

      if (flippedCards[0].dataset.id === flippedCards[1].dataset.id) {
        state.matches += 1
        disableCards(flippedCards)
        resetFlips()

        if(state.matches === cards.length) {
          alert('Congratulations!, You have won')
        }
      } else {
        flipBackCardsAfter(flippedCards, TIMEOUT_2000_MS)
      }
    }
  }


  el.append(
    Heading({ title}),
    CardContainer({
      cards: cards.concat(cards),
      flipFirstTwoCards
    })
  )

  return el;
};

export default App;
