const { GildedRose, Item, updateItems } = require("./gilded-rose");

//taking inputs from command line
const iterations = process.argv[2];
const requests = process.argv[3];

console.log("Iterations:", iterations);
console.log("API Requests:", requests);

// Initializing items
const items = [
  new Item("Regular Item", 10, 20),
  new Item("Aged Brie", 5, 30),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 40),
];

const gildedRoseInstance = new GildedRose(items);
gildedRoseInstance.updateQuality();
console.log(gildedRoseInstance.items);
