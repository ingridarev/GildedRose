const { GildedRose, Item, updateQuality } = require("./gilded-rose");

const fs = require("fs");

// Taking inputs from command line
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
    this.positiveResponses = [];
  }

  async makeApiRequest() {
    const endpoint = "https://yesno.wtf/api";

    const fetch = (await import("node-fetch")).default;

    const response = await fetch(endpoint);

    const json = await response.json();
    const answer = json.answer;

    if (answer === "yes") {
      this.positiveResponses.push(answer);
    }
    return this.positiveResponses;
  }

  async run(iterations, apiRequests) {
    for (let i = 0; i < iterations; i++) {
      const positiveResponses = await this.makeApiRequest(apiRequests);

      // Log positive responses
      fs.appendFile(
        "log.txt",
        `Number of positive responses: ${this.positiveResponses.length} \n`,
        (err) => {
          if (err) throw err;
          console.log("Data has been appended to file.");
        }
      );

      // Updating api request number if there was positive responses
      if (this.positiveResponses.length > 0) {
        apiRequests = this.positiveResponses.length;
      } else {
        break;
      }

      this.gildedRoseInstance.updateQuality();
    }
    console.log("items: ", items);
  }
}

const gildedRoseShopInstance = new GildedRoseShop(items);
gildedRoseShopInstance.run(iterations, requests);
