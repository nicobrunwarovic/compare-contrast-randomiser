const adjectiveOrder = ["opinion", "size", "age", "shape", "color", "origin", "material", "purpose"];

const adjectiveCategories = {
  beautiful: "opinion",
  lovely: "opinion",
  ugly: "opinion",
  big: "size",
  small: "size",
  tiny: "size",
  huge: "size",
  old: "age",
  young: "age",
  new: "age",
  round: "shape",
  square: "shape",
  tall: "shape",
  short: "shape",
  red: "color",
  blue: "color",
  green: "color",
  italian: "origin",
  american: "origin",
  chinese: "origin",
  wooden: "material",
  plastic: "material",
  metal: "material",
  cooking: "purpose",
  sleeping: "purpose",
  swimming: "purpose"
};

function checkAdjectiveOrder(text) {
  const words = text.toLowerCase().split(/\s+/).filter(Boolean);
  let lastIndex = -1;
  for (const word of words) {
    const category = adjectiveCategories[word];
    if (!category) continue;
    const index = adjectiveOrder.indexOf(category);
    if (index < lastIndex) {
      return false;
    }
    lastIndex = index;
  }
  return true;
}

if (typeof module !== "undefined") {
  module.exports = { checkAdjectiveOrder };
}
