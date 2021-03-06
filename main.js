const textElement = document.getElementById('text')
const choiceButtonsElement = document.getElementById('choice-buttons')
const restart = document.getElementById('reset')

let state = {}

function startGame() {
  state = {}
  showTextNode("arrival")
}
import {textNodes} from "./variables.js";


function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (choiceButtonsElement.firstChild) {
    choiceButtonsElement.removeChild(choiceButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      choiceButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText

  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

restart.addEventListener("click", () => {
startGame();
});

startGame()


