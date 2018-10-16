const fs = require("pn/fs");
const svg2png = require("svg2png");

(async () => {
  const data = await fs.readFile("icon.svg");
  for (const pow of [4, 5, 6, 7, 8, 9, 10, 11, 12]) {
    const size = 2 ** pow;
    await fs.writeFile(`${size}.png`, await svg2png(data, { width: size, height: size }));
  }
})();