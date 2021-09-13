import { Card } from "./Card.js";

export const CardContainer = ({ cards, flipFirstTwoCards}) => {
  const containerElement = document.createElement('main')
  containerElement.classList.add('cards-container')

  cards.forEach(card => {
    containerElement.appendChild(Card({ card, flipFirstTwoCards }))
  });

  return containerElement
}
