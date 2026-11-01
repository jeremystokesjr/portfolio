export type AboutTile =
  | {
      type: "image";
      id: string;
      image: string;
      imageAlt: string;
    }
  | {
      type: "quote";
      id: string;
      quote: string;
      attribution: string;
      /** Brief context revealed under the quote cover on hover */
      context: string;
    };

/** Mosaic in visual reading order (row1 L→R, row2 L→R, row3 L→R) */
export const aboutTiles: AboutTile[] = [
  {
    type: "image",
    id: "mario",
    image: "/images/figma/about-mario.png",
    imageAlt: "Super Mario 64 screenshot",
  },
  {
    type: "quote",
    id: "bowser",
    quote: "So long, King Bowser",
    attribution: "Super Mario",
    // Figma 11:10902
    context:
      "My nickname is Bowser.\n\nI’d like to think my design sense is heavily influenced by love for video games.",
  },
  {
    type: "quote",
    id: "mom",
    quote: "You have to be twice as good, all the time",
    attribution: "Mom",
    // Figma 11:10892
    context:
      "Hate to say it’s true but...\n\nLuckily, I'm learning to give myself permission to just be me, however that comes.",
  },
  {
    type: "quote",
    id: "diaz",
    quote:
      "... to make a human into a monster, deny them any reflection of themselves”",
    attribution: "Junot Diaz",
    // Figma 11:10962
    context:
      "I’m determined to create realities where people feel like things are made for them.",
  },
  {
    type: "image",
    id: "family",
    image: "/images/figma/about-family.png",
    imageAlt: "Family photograph",
  },
  {
    type: "quote",
    id: "dad",
    quote: "How does it feel to be a big brother?",
    attribution: "Dad",
    // Figma 11:10954
    context:
      "Being the oldest of 6 boys taught me to have a heart and to always find time for silliness.",
  },
  {
    type: "quote",
    id: "fortune",
    quote: "Creativity requires freedom and focus",
    attribution: "A fortune cookie",
    // Figma 11:10970
    context:
      "My design approach is to “f***k around and find out”\n\nI'm at my best when I’m free to explore, protoype, and stumble upon the right thing.",
  },
  {
    type: "quote",
    id: "jake",
    quote: "Sucking at something is the first step to being sorta good",
    attribution: "Jake the Dog",
    // Figma 11:10978
    context:
      "If at first you don’t succeed try and try again.\n\nIdk, the dog was onto something though",
  },
  {
    type: "image",
    id: "adventure",
    image: "/images/figma/about-adventure.png",
    imageAlt: "Finn and Jake from Adventure Time",
  },
];
