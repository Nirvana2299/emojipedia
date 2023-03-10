const emojipedia = [
  {
    id: "1",
    emoji: "π",
    name: "Grinning Face",
    meaning: "Genuine happiness, positivity, delight."
  },
  {
    id: "2",
    emoji: "π",
    name: "Grinning Face With Big Eyes",
    meaning: "Happiness, delight, laughter."
  },
  {
    id: "3",
    emoji: "π",
    name: "Grinning Face With Smiling Eyes",
    meaning: "When something is so funny you are literally laughing."
  },
  {
    id: "4",
    emoji: "π",
    name: "Beaming Face With Smiling Eyes",
    meaning: "Seriously hilarious."
  },
  {
    id: "5",
    emoji: "π",
    name: "Grinning Squinting Face",
    meaning: "Too funny! Stop before I pee myself."
  },
  {
    id: "6",
    emoji: "π",
    name: "Grinning Face With Sweat",
    meaning:
      "Laughing but relieved, like when youβve escaped a close call or resolved a stressful situation."
  },
  {
    id: "7",
    emoji: "π€£",
    name: "Rolling On The Floor Laughing",
    meaning: "Hysterical laughter."
  },
  {
    id: "8",
    emoji: "π",
    name: "Face With Tears Of Joy",
    meaning:
      "Iβm laughing but Iβm also crying! Unsurprisingly, this was the most popular emoji of 2021."
  },
  {
    id: "9",
    emoji: "π",
    name: "Slightly Smiling Face",
    meaning:
      "The equivalent of someone saying βoh, thatβs so funnyβ with a completely straight face. Brutal."
  },
  {
    id: "10",
    emoji: "π",
    name: "Upside-Down Face",
    meaning:
      "Irony, sarcasm, facetiousness, laughing in the face of despair. (βGreat news, my rent just went up πβ). Best used with friends."
  },
  {
    id: "11",
    emoji: "π",
    name: "Winking Face",
    meaning: "Flirtatious or βjust kidding!β, depending on the context."
  },
  {
    id: "12",
    emoji: "π",
    name: "Smiling Face With Smiling Eyes",
    meaning: "Smiling, but with humility or warmth."
  },
  {
    id: "13",
    emoji: "π",
    name: "Smiling Face With Halo",
    meaning:
      "Angelic, innocent, sweet. When used in a joking manner, it can mean, βWho, me? Iβd never do that!β"
  },
  {
    id: "14",
    emoji: "π₯°",
    name: "Smiling Face With Hearts",
    meaning:
      "βWow, I love it/this/you!β Love, friendship, adoration. One of the most popular emoji of last year."
  },
  {
    id: "15",
    emoji: "π",
    name: "Smiling Face With Heart-Eyes",
    meaning:
      "When you see something that makes you go βawww!β Also one of the top-10 emoji of 2021, according to Emojipedia."
  },
  {
    id: "16",
    emoji: "π€©",
    name: "Star-Struck",
    meaning: "βWow, that dress makes you look like J Lo at the 2000 Grammys!β"
  },
  {
    id: "17",
    emoji: "π",
    name: "Face Blowing A Kiss",
    meaning: "Can be used as an affectionate greeting or sign-off."
  },
  {
    id: "18",
    emoji: "π",
    name: "Kissing Face",
    meaning:
      "A restrained smooch or whistling. Not sure who is using this one, TBH!"
  },
  {
    id: "19",
    emoji: "π",
    name: "Kissing Face With Closed Eyes",
    meaning:
      "The flushed cheeks indicate romance or friendship. A more genuine kiss."
  },
  {
    id: "20",
    emoji: "π",
    name: "Kissing Face With Smiling Eyes",
    meaning: "A polite or friendly kiss."
  },
  {
    id: "21",
    emoji: "π",
    name: "Face Savoring Food",
    meaning: "βYum, that looks so good!β"
  },
  {
    id: "22",
    emoji: "π",
    name: "Face With Tongue",
    meaning: "βWow, you look so good!β"
  },
  {
    id: "23",
    emoji: "π",
    name: "Winking Face With Tongue",
    meaning: "Goofiness, silliness, joking around."
  },
  {
    id: "24",
    emoji: "π€ͺ",
    name: "Zany Face",
    meaning: "Even goofier than the above, a real βIβm losing it!β vibe."
  },
  {
    id: "25",
    emoji: "π",
    name: "Squinting Face With Tongue",
    meaning:
      "Hilarity, excitement. Or maybe you just bit into something really sour."
  },
  {
    id: "26",
    emoji: "π€",
    name: "Money-Mouth Face",
    meaning:
      "βShow me the money!β Success, prestige, status, or when you splurge and buy the $9 juice at Whole Foods."
  },
  {
    id: "27",
    emoji: "π€",
    name: "Smiling Face With Open Hands",
    meaning: "A warm embrace."
  },
  {
    id: "28",
    emoji: "π€­",
    name: "Face With Hand Over Mouth",
    meaning: "Shock and disbelief. βOMGβ"
  },
  {
    id: "29",
    emoji: "π€«",
    name: "Shushing Face",
    meaning: "βBe quiet!β Or βThis is a secret, donβt tell anyone.β"
  },
  {
    id: "30",
    emoji: "π€",
    name: "Thinking Face",
    meaning:
      "Skeptical, questioning. βHuh, is that so?β Can be used sarcastically when someone says something that doesnβt make sense."
  },
  {
    id: "31",
    emoji: "π€",
    name: "Zipper-Mouth Face",
    meaning: "βI wonβt say a word.β"
  },
  {
    id: "32",
    emoji: "π€¨",
    name: "Face With Raised Eyebrow",
    meaning: "βExcuse me, what?β"
  },
  {
    id: "33",
    emoji: "π",
    name: "Neutral Face",
    meaning:
      "Picture Homer trying to dissolve into the bushes. Trying not to give away any reaction."
  },
  {
    id: "34",
    emoji: "π",
    name: "Expressionless Face",
    meaning: "βNope, Iβm not engaging with that.β"
  },
  {
    id: "35",
    emoji: "πΆ",
    name: "Face Without Mouth",
    meaning:
      "At a literal loss for words. Shock, surprise, bafflement, confusion."
  },
  {
    id: "36",
    emoji: "πΆβπ«οΈ",
    name: "Face In Clouds",
    meaning: "A person in a steam room, or maybe hotboxing."
  },
  {
    id: "37",
    emoji: "π",
    name: "Smirking Face",
    meaning:
      "Sarcasm, joking around, or expressing βGet a load of this guy!β On Snapchat, it means you are one of their best friends, but theyβre not one of yours."
  },
  {
    id: "38",
    emoji: "π",
    name: "Unamused Face",
    meaning: "βNot funny.β"
  },
  {
    id: "39",
    emoji: "π",
    name: "Face With Rolling Eyes",
    meaning: "βNot funny and also cringe.β"
  },
  {
    id: "40",
    emoji: "π¬",
    name: "Grimacing Face",
    meaning:
      "βYikes!β On Snapchat, this means your best friend is their best friend too."
  },
  {
    id: "41",
    emoji: "π?βπ¨",
    name: "Face Exhaling",
    meaning: "Sighing, expressing relief, or letting out a puff of smoke."
  },
  {
    id: "42",
    emoji: "π€₯",
    name: "Lying Face",
    meaning: "Like Pinocchio, this means you told a lie."
  },
  {
    id: "43",
    emoji: "π",
    name: "Relieved Face",
    meaning: "Serene, unbothered, blissful."
  },
  {
    id: "44",
    emoji: "π",
    name: "Pensive Face",
    meaning: "Thoughtful, or sad, depressed, downcast."
  },
  {
    id: "45",
    emoji: "πͺ",
    name: "Sleepy Face",
    meaning: "Tired or sleeping. Yes, thatβs a snot bubble."
  },
  {
    id: "46",
    emoji: "π€€",
    name: "Drooling Face",
    meaning: "βThat [person or cheeseburger] looks sooooo good.β"
  },
  {
    id: "47",
    emoji: "π΄",
    name: "Sleeping Face",
    meaning: "So tired right now."
  },
  {
    id: "48",
    emoji: "π·",
    name: "Face With Medical Mask",
    meaning: "Sick, or taking precautions to avoid getting sick."
  },
  {
    id: "49",
    emoji: "π€",
    name: "Face With Thermometer",
    meaning: "Definitely sick."
  },
  {
    id: "50",
    emoji: "π€",
    name: "Face With Head-Bandage",
    meaning: "Sick, with a headache, or hungover."
  },
  {
    id: "51",
    emoji: "π€’",
    name: "Nauseated Face",
    meaning: "βThatβs disgustingβ"
  },
  {
    id: "52",
    emoji: "π€?",
    name: "Face Vomiting",
    meaning: "βSo gross I could pukeβ"
  },
  {
    id: "53",
    emoji: "π€§",
    name: "Sneezing Face",
    meaning: "Sick, suffering from allergies, or crying into a tissue."
  },
  {
    id: "54",
    emoji: "π₯΅",
    name: "Hot Face",
    meaning:
      "Sweatingβ from heat, spicy food, or because you saw something (or someone) youβre really into."
  },
  {
    id: "55",
    emoji: "π₯Ά",
    name: "Cold Face",
    meaning:
      "In addition to the obvious meaning (βIβm freezing!β), this emoji is also used to refer to frosty behavior: βDamn, thatβs cold!β"
  },
  {
    id: "56",
    emoji: "π₯΄",
    name: "Woozy Face",
    meaning:
      "Perfect for any state of confusion or disorientation: drunkenness, bafflement, or exhaustion."
  },
  {
    id: "57",
    emoji: "π΅",
    name: "Face With Crossed-Out Eyes",
    meaning: "Shock, surprise, or horror."
  },
  {
    id: "58",
    emoji: "π΅βπ«",
    name: "Face With Spiral Eyes",
    meaning:
      "Can be used like the woozy face for confusing situations, as well as dizziness or staring at a Magic Eye puzzle too long."
  },
  {
    id: "59",
    emoji: "π€―",
    name: "Exploding Head",
    meaning: "Mind blowing, awe-inspiring, unbelievable"
  },
  {
    id: "60",
    emoji: "π€ ",
    name: "Cowboy Hat Face",
    meaning:
      "Ready for anything? This emoji signals that youβre down for an adventure. Giddy-up!"
  },
  {
    id: "61",
    emoji: "π₯³",
    name: "Partying Face",
    meaning: "For good news, celebrations, happy announcements, and birthdays."
  },
  {
    id: "62",
    emoji: "π",
    name: "Smiling Face With Sunglasses",
    meaning:
      "When youβre feeling chill, carefree, slick, and under control. On Snapchat, this means ββone of your best friends is one of their best friends."
  },
  {
    id: "63",
    emoji: "π€",
    name: "Nerd Face",
    meaning: "When youβre too excited about the upcoming Star Wars movie."
  },
  {
    id: "64",
    emoji: "π§",
    name: "Face With Monocle",
    meaning:
      "When youβre pondering, looking closely, or thinking deeply about something."
  },
  {
    id: "65",
    emoji: "π",
    name: "Confused Face",
    meaning:
      "Perfect for strange situations or texts you donβt quite know how to interpret."
  },
  {
    id: "66",
    emoji: "π",
    name: "Worried Face",
    meaning: "When your friend texts, βGreat news! I picked up day-old sushi!β"
  },
  {
    id: "67",
    emoji: "π",
    name: "Slightly Frowning Face",
    meaning: "When youβre just a little worried."
  },
  {
    id: "68",
    emoji: "π?",
    name: "Face With Open Mouth",
    meaning: "βOh wow!β Can be positive or negative."
  },
  {
    id: "69",
    emoji: "π―",
    name: "Hushed Face",
    meaning: "A more muted βuh, wow!β reaction."
  },
  {
    id: "70",
    emoji: "π²",
    name: "Astonished Face",
    meaning: "A βWTF!β emoji for all-purpose bafflement."
  },
  {
    id: "71",
    emoji: "π³",
    name: "Flushed Face",
    meaning: "Embarrassment or shock."
  },
  {
    id: "72",
    emoji: "π₯Ί",
    name: "Pleading Face",
    meaning:
      "With its big Bambi eyes, this face can be used when asking for a special favor, or when something strikes you as incredibly adorable."
  },
  {
    id: "73",
    emoji: "π¦",
    name: "Frowning Face With Open Mouth",
    meaning: "Used for unpleasant surprises or unfortunate events."
  },
  {
    id: "74",
    emoji: "π§",
    name: "Anguished Face",
    meaning:
      "Like the frowning face above, but the raised eyebrows add even more emphasis to your unhappy emotions."
  },
  {
    id: "75",
    emoji: "π¨",
    name: "Fearful Face",
    meaning: "When things are not looking good, but youβre not panicking."
  },
  {
    id: "76",
    emoji: "π°",
    name: "Anxious Face With Sweat",
    meaning: "Okay, now youβre panicking."
  },
  {
    id: "77",
    emoji: "π₯",
    name: "Sad But Relieved Face",
    meaning:
      "The worst is overβ youβre not happy, but it didnβt turn out that bad after all."
  },
  {
    id: "78",
    emoji: "π’",
    name: "Crying Face",
    meaning: "Sad but trying to keep it in check."
  },
  {
    id: "79",
    emoji: "π­",
    name: "Loudly Crying Face",
    meaning:
      "One of the most popular emojis, this is used for intense emotions ranging from sadness to relief, happiness, and love."
  },
  {
    id: "80",
    emoji: "π±",
    name: "Face Screaming In Fear",
    meaning: "Horror, terror, just saw the biggest spider in the shower."
  },
  {
    id: "81",
    emoji: "π",
    name: "Confounded Face",
    meaning: "Frustrated, grumpy, upset."
  },
  {
    id: "82",
    emoji: "π£",
    name: "Persevering Face",
    meaning: "Focused, or maybe you just took a bite of something really sour."
  },
  {
    id: "83",
    emoji: "π",
    name: "Disappointed Face",
    meaning: "Bummed out, or just plain tired."
  },
  {
    id: "84",
    emoji: "π",
    name: "Downcast Face With Sweat",
    meaning: "Under a lot of pressure, worried."
  },
  {
    id: "85",
    emoji: "π©",
    name: "Weary Face",
    meaning: "Tired, stressed out, anxious, or worried."
  },
  {
    id: "86",
    emoji: "π«",
    name: "Tired Face",
    meaning: "Even more exhausted and ready to quit."
  },
  {
    id: "87",
    emoji: "π₯±",
    name: "Yawning Face",
    meaning: "Definitely ready for bed."
  },
  {
    id: "88",
    emoji: "π€",
    name: "Face With Steam From Nose",
    meaning: "Irritated, annoyed, in a huff."
  },
  {
    id: "89",
    emoji: "π‘",
    name: "Pouting Face",
    meaning: "Stronger negative emotionsβ youβre upset or angry."
  },
  {
    id: "90",
    emoji: "π ",
    name: "Angry Face",
    meaning:
      "When you come home and find someone has eaten the last piece of pizza."
  },
  {
    id: "91",
    emoji: "π€¬",
    name: "Face With Symbols On Mouth",
    meaning: "Furious, outraged, just received a parking ticket."
  },
  {
    id: "92",
    emoji: "π",
    name: "Smiling Face With Horns",
    meaning:
      "Often used in flirtatious ways, this little devil indicates cheekiness."
  },
  {
    id: "93",
    emoji: "πΏ",
    name: "Angry Face With Horns",
    meaning: "Youβre ready to wreak some havoc."
  },
  {
    id: "94",
    emoji: "π",
    name: "Skull",
    meaning:
      "Death, dying, also used by Gen Z when something is so hilarious you could die."
  },
  {
    id: "95",
    emoji: "β οΈ",
    name: "Skull And Crossbones",
    meaning:
      "Like the skull above, this can mean βdeathβ or βdeath from laughter.β"
  },
  {
    id: "96",
    emoji: "π©",
    name: "Pile Of Poo",
    meaning: "When something is awful, but you have a sense of humour about it."
  },
  {
    id: "97",
    emoji: "π€‘",
    name: "Clown Face",
    meaning: "When someone is making a fool of themselves."
  },
  {
    id: "98",
    emoji: "π»",
    name: "Ghost",
    meaning: "βBoo!β Can be used for surprising someone, or being silly."
  },
  {
    id: "99",
    emoji: "π½",
    name: "Alien",
    meaning: "Weirdness, eeriness, spooky vibes."
  },
  {
    id: "100",
    emoji: "πΎ",
    name: "Alien Monster",
    meaning:
      "A friendly little space creature that looks straight from an old arcade game. For that reason, itβs popular with vintage computer and gaming folks."
  },
  {
    id: "101",
    emoji: "π€",
    name: "Robot",
    meaning: "A charming little robot for weird, nerdy, or technical occasions."
  },
  {
    id: "102",
    emoji: "πΊ",
    name: "Grinning Cat",
    meaning: "Pleasure, happiness."
  },
  {
    id: "103",
    emoji: "πΈ",
    name: "Grinning Cat With Smiling Eyes",
    meaning: "Absolutely thrilled."
  },
  {
    id: "104",
    emoji: "πΉ",
    name: "Cat With Tears Of Joy",
    meaning: "When something is genuinely hilarious or funny."
  },
  {
    id: "105",
    emoji: "π»",
    name: "Smiling Cat With Heart-Eyes",
    meaning: "Love, delight, admiration."
  },
  {
    id: "106",
    emoji: "πΌ",
    name: "Cat With Wry Smile",
    meaning: "Sarcasm, cheekiness, mischief."
  },
  {
    id: "107",
    emoji: "π½",
    name: "Kissing Cat",
    meaning: "Affection, love, friendship."
  },
  {
    id: "108",
    emoji: "π",
    name: "Weary Cat",
    meaning: "Alarm, fear, horror."
  },
  {
    id: "109",
    emoji: "πΏ",
    name: "Crying Cat",
    meaning: "Sad, heartbroken, disappointed."
  },
  {
    id: "110",
    emoji: "πΎ",
    name: "Pouting Cat",
    meaning: "Angry, annoyed, upset."
  },
  {
    id: "111",
    emoji: "π",
    name: "See-No-Evil Monkey",
    meaning:
      "βOMG! I donβt want to see that!β Cringing, embarrassed, or surprised."
  },
  {
    id: "112",
    emoji: "π",
    name: "Hear-No-Evil Monkey",
    meaning: "βStop! I donβt want to hear that!β Shocked, surprised, bashful."
  },
  {
    id: "113",
    emoji: "π",
    name: "Speak-No-Evil Monkey",
    meaning: "βI canβt believe it!β or βOops! I shouldnβt have said that.β"
  }
];

export default emojipedia;
