export const textNodes = [
  {
    id: "arrival",
    text:
      "You arrive at Narita Airport and now have to get to Tokyo. How do you choose to do that?",
    options: [
      {
        text: "Go to JR counter to buy a trainticket to Shinjuku",

        nextText: "jrcounter"
      },
      {
        text: "Go to the platform of the train to Shinjuku",
        nextText: "traingate"
      }
    ]
  },

  {
    id: "jrcounter",
    text: 'You stand in line until it is your turn. "How can I help you?',
    options: [
      {
        text: '"I would like one ticket för Shinjuku station please"',
        setState: { shinjukuTicket: true },
        nextText: "traingate"
      },
      {
        text: '"Actually I would like one ticket to Chibe station..."',
        setState: { chibaTicket: true },
        nextText: "traingate"
      },
      {
        text: '"Actually I think I will go straight to the trains platform.""',
        nextText: "traingate"
      }
    ]
  },

  {
    id: "traingate",
    text:
      "Before you reach the platform you arrive at a gate that is closed. What do you do?",
    options: [
      {
        text:
          "Insert your newly purchased ticket into the slot and board the train for Shinjuku",
        requiredState: currentState => currentState.shinjukuTicket,
        setState: { shinjukuTicket: false },
        nextText: "shinjukustation"
      },
      {
        text:
          "Insert your newly purchased ticket into the slot and board the train for Chiba station",
        requiredState: currentState => currentState.chibaTicket,
        setState: { chibaTicket: false },
        nextText: "chibastation"
      },
      {
        text: "Quicky hurry back to the JR counter.",
        nextText: "arrival"
      }
    ]
  },

  {
    id: "chibastation",
    text:
      "You arrive at Chiba station. It looks nice enough, in the heart of Chiba city... Which means you are not even close to central Tokyo. You figure that your best option is going back to the airport, or maybe try to buy a ticket here for Shinjuku.",

    options: [
      {
        text:
          "Buy a ticket for Shinjuku station at Chiba station... Confusing?",
        nextText: "shinjukustation"
      },
      {
        text:
          "Head back to the airports ticket counter to buy a ticket. Better safe than sorry.",
        nextText: "jrcounter"
      }
    ]
  },

  {
    id: "shinjukustation",
    text: "After reaching Shinjuku station - which district to wish to go to?",
    options: [
      {
        text: "Akihabara",
        nextText: "akihabara"
      },
      {
        text: "Shinjuku",
        nextText: "shinjuku"
      },
      {
        text: "Shibuya",
        nextText: "shibuya"
      }
    ]
  },
  {
    id: "akihabara",
    text:
      "You reach the pop culutre center of Akihabara Maybe you want to look at retro games, visit an anime café och play at the famous gacha machines",
    options: [
      {
        text: "Play some gacha machines!",
        nextText: "gacha"
      },
      {
        text: "Visit some of the biggest retro game stores on the world!",
        nextText: "retro"
      },
      {
        text: "Maybe... the manga cafe?",
        nextText: "manga"
      }
    ]
  },
  {
    id: "retro",
    text:
      "Famous retro stores like Super Potato (etc) fill the streets at Akihabara. You walk around, amazed at the pristine condition of the second hand wares in the stores. Now what?",
    options: [
      {
        text:
          "Walk back to Akihabar station to get your bearings and explore more of the district!",
        nextText: "akihabara"
      },
      {
        text: "Take the train to Shinjuku! station",
        nextText: "shinjukustation"
      },
      {
        text: "Maybe... the manga cafe?",
        nextText: "manga"
      }
    ]
  },
  {
    id: "gacha",
    text:
      "You walk around for hours playing gacha machines. You win some figures you want, and many you donät really care for. Afterwards you decide to...",
    options: [
      {
        text:
          "Head back to Akihabara station to see what else you can do here.",
        nextText: "akihabara"
      },
      {
        text: "Take the train back to Shinjuku!",
        nextText: "shinjukustation"
      },
      {
        text: "Maybe...just maybe.. the manga cafe?",
        nextText: "manga"
      }
    ]
  },
  {
    id: "manga",
    text:
      "You carefully enter one of the famous manga caf+es where you can order specialised dishes with the theme of your favorite book or show. You buy a special cup which one gets to keep as a souvenir.",

    options: [
      {
        text:
          "Full after the meal, you slowly walk back to the station to explore more of the district",
        nextText: "akibara"
      },
      {
        text:
          "The food made you tired, so you head back to the station to take the train to Shinjuku again",
        nextText: "shinjukustation"
      },
      {
        text: "Hm, that bench seems like a nice spot for a short nap...",
        nextText: "manga"
      }
    ]
  },
  {
    id: "shibuya",
    text:
      "You arrive at Shibuya, with it's famous crossing, busy shopping district and trendy streets. Some of stores are (record store), Shibuya 101 and the Disney sstore.",
    options: [
      {
        text: "You decide to spend some time at the big crossing",
        nextText: "crossing"
      },
      {
        text: "Time to shop! Or at least winow shop...",
        nextText: "shibuya101"
      },
      {
        text: "Head up to the famous Starbucks.",
        nextText: "starbucks"
      }
    ]
  },
  {
    id: "crossing",
    text:
      "You arrive at Shibuya, with it's famous crossing, busy shopping district and trendy streets. Some of stores are (record store), Shibuya 101 and the Disney sstore.",
    options: [
      {
        text:
          "Time to explore more of the district! I better head back to the station so that I know where to start exploring..",
        nextText: "shibuya"
      },
      {
        text: "I actually think I'll go back på Shinjuku for now.",
        nextText: "shinjukustation"
      }
    ]
  },
  {
    id: "starbucks",
    text:
      "The Starbucks at Shibuya crossing is famours for it's view of the crossing. The view has fatured in countless of movies, photos and shows. It is quite difficult to get a table near the windows.",
    options: [
      {
        text: "You decide to spend some time at the big crossing",
        nextText: "crossing"
      },
      {
        text: "Time to shop! Or at least winow shop...",
        nextText: "shibuya101"
      },
      {
        text: "Head up to the famous Starbucks.",
        nextText: "starbucks"
      }
    ]
  },
  {
    id: "shinjuku",
    text:
      "You walk out of the station to the district of Shinjuku, home of the busiest train station in the world. It has east asias biggest nightlife area",
    options: [
      {
        text: "Visit the nightlife district of Kabukicho...",
        nextText: "kabukicho"
      },
      {
        text:
          "Head to the famous golden alley, with it's small resturant and moody atmosphere.",

        nextText: "alley"
      },
      {
        text:
          "Walk up along the boardwalk overlooking the big station, allowing you to watch the consant flow of trains.",

        nextText: "boardwalk"
      },
      {
        text: "Go back into the station.",

        nextText: "shinjukustation"
      }
    ]
  },
  {
    id: "kabukicho",
    text:
      'The only area of Tokyo which some people would call "dodgy". A huge amount of bars and nightclubs populate the area, which has featured in many mvies and games. However, by international standards, it is still very safe.',
    options: [
      {
        text:
          "After exploring, head back to the center of Shinjuku before it becomes too late in the evening",
        nextText: "shinjuku"
      },
      {
        text:
          "Since it is becoming late, you mght as well head to the station straight away.",

        nextText: "shinjukustation"
      },
      {
        text: "Maybe yoou should visit one of those dodgy tourist traps...",
        nextText: "scammed"
      }
    ]
  },
  {
    id: "alley",
    text:
      "You eat your way though the cozy small resturants of the famous golden alley",
    options: [
      {
        text: "Head back to the center to explore more.",
        nextText: "shinjuku"
      },
      {
        text:
          "You are full and think that you might as well take a train instead of walking any more.",

        nextText: "shinjukustation"
      }
    ]
  },
  {
    id: "boardwalk",
    text:
      "A beautiful area. Expecially at night, with the view of the neon lights, the art deco clocktower and constans flow of trains",
    options: [
      {
        text:
          "You walk along the whole area, taking in the sights. You enter one of the many underground passages which leads you back to the city center",
        nextText: "shinjuku"
      },
      {
        text:
          "Stroll around a while and enter the side entrance to the station",
        nextText: "shinjukustation"
      }
    ]
  },
  {
    id: "boardwalk",
    text:
      "A beautiful area. Expecially at night, with the view of the neon lights, the art deco clocktower and constans flow of trains",
    options: [
      {
        text:
          "You walk along the whole area, taking in the sights. You enter one of the many underground passages which leads you back to the city center",
        nextText: "shinjuku"
      },
      {
        text:
          "Stroll around a while and enter the side entrance to the station",
        nextText: "shinjukustation"
      }
    ]
  },

  {
    id: "scammed",
    text:
      "You get served drinks, for a very cheap price... But when the bill arrives, it is higher than told. After a few arguments, the staff seems to realise that you are a foreigner and the bill is scrapped.",
    options: [
      {
        text: "With an annoyed frown, you head back to the city center",
        nextText: "shinjukustation"
      }
    ]
  }
];
