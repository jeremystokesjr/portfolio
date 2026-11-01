export type RichTextPart =
  | { type: "text"; text: string }
  | { type: "link"; text: string; href: string };

export type ProjectDetail = {
  /** Large display title in the overlay (may differ from grid title) */
  title: string;
  /** e.g. "DUOLINGO, 2020" */
  meta: string;
  image: string;
  imageAlt: string;
  /** Plain string, or rich parts (links) rendered in the detail overlay */
  story: string | RichTextPart[];
  impact: string | RichTextPart[];
  /** Optional download / case-study URL */
  downloadHref: string | null;
};

export type Project = {
  id: string;
  title: string;
  href: string | null;
  image: string;
  imageAlt: string;
  /** WebM with alpha. Shown in the homepage cell instead of `image`. */
  video?: string | null;
  /** HEVC with alpha for Safari, which does not play WebM transparency. */
  videoSafari?: string | null;
  /** image-first (left col pattern) vs title-first (right col pattern) */
  layout: "image-first" | "title-first";
  detail: ProjectDetail;
};

export const projects: Project[] = [
  {
    id: "instagram-stories",
    title: "INSTAGRAM\nSTORIES",
    href: null,
    image: "/images/stories.png",
    imageAlt: "Instagram Stories product screens",
    video: "/videos/instagram-stories.webm",
    videoSafari: "/videos/instagram-stories.mov",
    layout: "image-first",
    detail: {
      // Figma 2:10436
      title: "INSTAGRAM STORIES",
      meta: "INSTAGRAM, 2026",
      image: "/images/figma/detail-instagram-stories.png",
      imageAlt:
        "Three phone mockups of Instagram Stories feed, sticker tray, and story composer",
      story:
        "Currently, I lead design on Stories trends, working to create new ways for folks to share about things happening in culture. On the side, I work on other zero to one bets in and across Instagram.",
      impact: "TBD! I’m still on this journey...",
      downloadHref: null,
    },
  },
  {
    id: "instagram-recap",
    title: "INSTAGRAM\nRECAP",
    href: null,
    image: "/videos/recap-2022.png",
    imageAlt: "Instagram Recap reel templates on three phones",
    video: "/videos/recap-2022.webm",
    videoSafari: "/videos/recap-2022.mov",
    layout: "title-first",
    detail: {
      // Figma 2:10348
      title: "INSTAGRAM RECAP",
      meta: "INSTAGRAM, 2022",
      image: "/images/figma/detail-instagram-recap.png",
      imageAlt:
        "Three phone mockups of Instagram’s 2022 recap feature with celebrity voiceovers",
      story:
        "In 2022, I designed Instagram’s recap feature. Inspired by journaling and photdumps, we created a way to recap your year matched to voiceovers from some of people’s favorite celebs like Bad Bunny.",
      impact: "Under wraps, but lots of things shared and memories made.",
      downloadHref: null,
    },
  },
  {
    id: "instagram-delights",
    title: "INSTAGRAM\nDELIGHTS",
    href: null,
    image: "/videos/instagram-delights.png",
    imageAlt: "Instagram seasonal delight activations on three phones",
    video: "/videos/instagram-delights.webm",
    videoSafari: "/videos/instagram-delights.mov",
    layout: "image-first",
    detail: {
      // Figma 2:10479 — underlined phrases are live links
      title: "INSTAGRAM DELIGHTS",
      meta: "INSTAGRAM, 2025",
      image: "/images/figma/detail-instagram-delights.png",
      imageAlt:
        "Three phone mockups of Halloween and seasonal Instagram activations",
      story: [
        {
          type: "text",
          text: "I led design for seasonal activations across Instagram. We built some pretty cool products to support folks in celebrating major moments like ",
        },
        {
          type: "link",
          text: "Halloween",
          href: "https://www.socialmediatoday.com/news/instagram-halloween-themed-activations/730960/",
        },
        { type: "text", text: ", " },
        {
          type: "link",
          text: "End of Year",
          href: "https://www.techradar.com/computing/instagram/instagram-finally-has-all-the-tools-to-make-your-own-year-in-review-for-stories",
        },
        { type: "text", text: ", and " },
        {
          type: "link",
          text: "Valentine's Day",
          href: "https://www.hercampus.com/culture/instagram-valentines-day-2026-easter-eggs/",
        },
        { type: "text", text: "." },
      ],
      impact:
        "Over 5+ activations and a ton of things made, shared and loved by people",
      downloadHref: null,
    },
  },
  {
    id: "duolingo-wordplay",
    title: "DUOLINGO\nWORDPLAY",
    href: null,
    image: "/videos/match-madness.png",
    imageAlt: "iPhone showing Duolingo Match Madness-style wordplay gameplay",
    video: "/videos/bookmarking_test.webm",
    videoSafari: "/videos/bookmarking_test.mov",
    layout: "title-first",
    detail: {
      // Figma 2:10565
      title: "DUOLINGO WORDPLAY",
      meta: "DUOLINGO, 2022",
      image: "/images/figma/detail-duolingo-wordplay.png",
      imageAlt:
        "Three phone mockups of Duolingo Word Play vocabulary save and practice",
      story:
        "In 2022, I led design for a way to save and practice vocabulary on Duolingo. This experience features a way to save words and way to practice words.",
      impact: "Increase in time spent learning on Duolingo.",
      downloadHref: null,
    },
  },
  {
    id: "duolingo-match-madness",
    title: "DUOLINGO\nMATCH MADNESS",
    href: null,
    image: "/videos/match-madness.png",
    imageAlt: "iPhone showing Duolingo Match Madness gameplay",
    video: "/videos/match-madness.webm",
    videoSafari: "/videos/match-madness.mov",
    layout: "image-first",
    detail: {
      // Figma 2:10389 (Figma marquee typo “MADESS” corrected)
      title: "DUOLINGO MATCH MADNESS",
      meta: "DUOLINGO, 2022",
      image: "/images/figma/detail-duolingo-match-madness.png",
      imageAlt:
        "Three phone mockups of Duolingo Match Madness intro and matching gameplay",
      story:
        "While at Duolingo, I led design of a new game on Duolingo that challenges folks to match as many words as they can before time runs out! This game mode encouraged quick recall and recognition, and helped stimulate revenue by creating a fun way to spend in game currency.",
      impact: "Insane year-over-year revenue wins",
      downloadHref: null,
    },
  },
  {
    id: "duolingo-learning",
    title: "DUOLINGO\nLEARNING",
    href: null,
    image: "/videos/listening.png",
    imageAlt: "iPhone showing a Duolingo listening exercise",
    video: "/videos/listening.webm",
    videoSafari: "/videos/listening.mov",
    layout: "title-first",
    detail: {
      // Figma 21:12341
      title: "DUOLINGO LEARNING",
      meta: "DUOLINGO, 2022",
      image: "/images/figma/detail-duolingo-learning.png",
      imageAlt:
        "Three phone mockups of Duolingo listen-for-the-missing-word exercises",
      story:
        "In 2022, I designed new types of listening exercise that prepare beginners for tackling harder exercises by challenging them to listen for a missing word.",
      impact: "+20% increase in pass rates after exposure to this activity.",
      downloadHref: null,
    },
  },
];
