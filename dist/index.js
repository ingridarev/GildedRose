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

class GildedRoseShop {
  constructor(items) {
    this.gildedRoseInstance = new GildedRose(items);
    this.items = items;
  }

  //making api requests and checking the answers
  async makeApiRequest() {
    const endpoint = "https://yesno.wtf/api";
    const positiveResponses = [];

    const fetch = (await import("node-fetch")).default;

    const response = await fetch(endpoint);

    const json = await response.json();
    const answer = json.answer;
    console.log("answer : ", answer);


    if (answer === "yes") {
      positiveResponses.push(answer);
      console.log("positiveResponses:", positiveResponses)
    }
  }
}

const gildedRoseShopInstance = new GildedRoseShop(items);
gildedRoseShopInstance.makeApiRequest();
