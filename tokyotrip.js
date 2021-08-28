const textElement = document.getElementById('text')
const choiceButtonsElement = document.getElementById('choice-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

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
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'You arrive at Narita Airport and now have to get to Tokyo. How do you choose to do that?',
    options: [
      {
        text: 'Go to JR counter to buy a trainticket to Shinjuku',
        setState: { trainTicket: true },
        nextText: 2
      },
      {
        text: 'Go to the platform of the train to Shinjuku',
        nextText: 2
      }
    ]
  },
  
  {
    id: 2,
    text: 'Before you reach the platform you arrive at a gate that is closed. What do you do?',
    options: [
      {
        text: 'Insert your newly purchased ticket into the slot',
        requiredState: (currentState) => currentState.trainTicket,
        setState: { trainTicket: false, sword: true },
        nextText: 3
      },
      {
        text: 'Ask the nearby staff for help',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false },
        nextText: 3
      },
      {
        text: 'Quicky hurry back to the JR counter.',
        nextText: 1
      }
    ]
  },
  
   {
    id: 2,
    text: 'Before you reach the platform you arrive at a gate that is closed. What do you do?',
    options: [
      {
        text: 'Insert your newly purchased ticket into the slot',
        requiredState: (currentState) => currentState.trainTicket,
        setState: { trainTicket: false, sword: true },
        nextText: 3
      },
      {
        text: 'Ask the nearby staff for help',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false },
        nextText: 3
      },
      {
        text: 'Quicky hurry back to the JR counter.',
        nextText: 3
      }
    ]
  },
  
  {
    id: 3,
    text: 'After reaching Shinjuku station - which district to wish to go to?',
    options: [
      {
        text: 'Akihabara',
        nextText: "akihabara"
      },
      {
        text: 'Shinjuku',
        nextText: "shinjuku"
      },
      {
        text: 'Shibuya',
        nextText: "shibuya"
      }
    ]
  },
  {
    id: "akihabara",
    text: 'You reach the pop culutre center of Akihabara',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: "shinjuku",
    text: 'You arrive at the busiest train station in the world. It has east asias biggest nightlife area',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: "shibuya",
    text: 'Shibuya is famours for the worlds longest pedastrian crossing, often featured in media. It is a vibrant downtown area with many high rises.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()
