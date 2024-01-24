export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
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
  updateQuality(): Array<Item> {
    for (const item of this.items) {
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
      this.updateSellIn(item);
    }
    return this.items;
  }

  private isExpired(item: Item): boolean {
    return item.sellIn < 0;
  }
  
  private increaseQuality(item: Item): void {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }

  private decreaseQuality(item: Item, value: number = 1): void {
    if (item.quality > 0) {
      item.quality -= value;
    }
  }

  private updateSellIn(item: Item): void {
    if (item.name !== "Sulfuras, Hand of Ragnaros") {
      item.sellIn -= 1;
    }
  }
  
 private updateAgedBrie(item: Item): void {
    this.increaseQuality(item);

    if (this.isExpired(item)) {
      this.increaseQuality(item);
    }
  }

  private updateBackstagePass(item: Item): void {
    this.increaseQuality(item);

    if (this.isExpired(item)) {
      item.quality = 0;
    }
    
    if (item.sellIn < 11) {
      this.increaseQuality(item);
    }

    if (item.sellIn < 6) {
      this.increaseQuality(item);
    }
  }

  private updateConjured(item: Item): void {
    this.decreaseQuality(item, 2);
    this.handleExpiredItem(item);
  }

  private updateRegularItem(item: Item): void {
    this.decreaseQuality(item);
    this.handleExpiredItem(item);
  }

  private handleExpiredItem(item: Item): void {
    if (this.isExpired(item)) {
      if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        item.quality = 0;
      } else if (item.name !== "Sulfuras, Hand of Ragnaros") {
        this.decreaseQuality(item);
      }
    }
  }

}
