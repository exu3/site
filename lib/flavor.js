const flavorTexts = [
  "Made with the entrails of a Wahoo Fish.",
  "Made with Next.js.",
  "This site is deployed!",
  "If you're seeing this, the website is up!",
  "Listening to the cows.",
  "Currently",
];

const flavorText = flavorTexts[Math.floor(Math.random() * flavorTexts.length)];

export default flavorText;
