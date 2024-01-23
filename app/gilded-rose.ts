export class Item {
  name: string;
  sellIn: number;
  quality: number;

  // added types to avoid type "any"
  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }
  // added switch statement and extracted item quality updates as separate methods
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      switch (item.name) {
        case "Aged Brie":
          this.updateAgedBrie(item);
          break;

        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateBackstagePass(item);
          break;

        case "Sulfuras, Hand of Ragnaros":
          break;

        case "Conjured": {
          this.updateConjured(item);
          break;
        }

        default:
          this.updateRegularItem(item);
          break;
      }
    }

    return this.items;
  }

  //   }
  //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //       if (this.items[i].quality > 0) {
  //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //           this.items[i].quality = this.items[i].quality - 1
  //         }
  //       }
  //     } else {
  //       if (this.items[i].quality < 50) {
  //         this.items[i].quality = this.items[i].quality + 1
  //         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].sellIn < 11) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1
  //             }
  //           }
  //           if (this.items[i].sellIn < 6) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //       this.items[i].sellIn = this.items[i].sellIn - 1;
  //     }
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != 'Aged Brie') {
  //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //               this.items[i].quality = this.items[i].quality - 1
  //             }
  //           }
  //         } else {
  //           this.items[i].quality = this.items[i].quality - this.items[i].quality
  //         }
  //       } else {
  //         if (this.items[i].quality < 50) {
  //           this.items[i].quality = this.items[i].quality + 1
  //         }
  //       }
  //     }
  //   }

  //   return this.items;
  // }

  private updateAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
    this.handleExpiredItem(item);
  }

  private updateBackstagePass(item: Item) {
    if (item.quality < 50) {
      item.quality += 1;

      if (item.sellIn <= 10 && item.quality < 50) {
        item.quality += 1;
      }

      if (item.sellIn <= 5 && item.quality < 50) {
        item.quality += 1;
      }
    }
    this.handleExpiredItem(item);
  }

  private updateConjured(item: Item) {
    if (item.quality > 1) {
      item.quality -= 2;
    } else {
      item.quality = 0;
    }
    this.handleExpiredItem(item);
  }

  private updateRegularItem(item: Item) {
    if (item.quality > 0 && item.name !== "Sulfuras, Hand of Ragnaros") {
      item.quality -= 1;
    }
    this.handleExpiredItem(item);
  }

  private handleExpiredItem(item: Item): void {
    if (item.sellIn >= 0 || item.quality <= 0 || item.name === "Aged Brie") {
      return;
    }

    if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      item.quality = 0;
      return;
    }

    if (item.name !== "Sulfuras, Hand of Ragnaros") {
      item.quality -= 1;
    }
  }
}
