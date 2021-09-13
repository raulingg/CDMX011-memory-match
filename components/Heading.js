export const Heading = ({ title }) => {
  const headingElement = document.createElement('h1')
  headingElement.textContent = title
  headingElement.classList.add('heading')

  return headingElement
}

