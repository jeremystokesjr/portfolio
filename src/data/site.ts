export const site = {
  title: "Jeremy Stokes, Designer",
  description:
    "A multidisciplinary designer blending thoughtful design with a wee bit of delight. Explore my work in product design, branding, and creative problem-solving.",
  email: "whatsup@jeremy-stokes.com",
  emailDisplay: "WHATSUP@JEREMY-STOKES.COM",
  /** Non-breaking space keeps the name on one line in the marquee */
  nameItems: ["JEREMY\u00A0STOKES"] as const,
  intro:
    "Hey, I'm Jeremy. I'm a wonderfully, nerdy and witty designer who loves building delightful things that live in the digital world.",
  workItems: ["WORK"] as const,
  aboutItems: ["ABOUT\u00A0ME"] as const,
  footer: {
    headingItems: ["GOING\u00A0SO\u00A0SOON?"] as const,
    beforeLink: "That’s a bummer. Here’s ",
    linkText: "my email",
    afterLink: ". Keep in touch and let’s catch up soon. xoxo.",
  },
  gaId: "G-XW5WYJVENC",
} as const;
