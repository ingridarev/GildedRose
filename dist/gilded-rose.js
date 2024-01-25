"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GildedRose = exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
    return Item;
}());
exports.Item = Item;
var GildedRose = /** @class */ (function () {
    function GildedRose(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    // added switch statement and extracted item quality updates as separate methods
    GildedRose.prototype.updateQuality = function () {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.name.includes("Conjured")) {
                this.updateConjured(item);
            }
            switch (item.name) {
                case "Aged Brie":
                    this.updateAgedBrie(item);
                    break;
                case "Backstage passes to a TAFKAL80ETC concert":
                    this.updateBackstagePass(item);
                    break;
                case "Sulfuras, Hand of Ragnaros":
                    break;
                default:
                    this.updateRegularItem(item);
                    break;
            }
            this.updateSellIn(item);
        }
        return this.items;
    };
    GildedRose.prototype.isExpired = function (item) {
        return item.sellIn < 0;
    };
    GildedRose.prototype.increaseQuality = function (item) {
        if (item.quality < 50) {
            item.quality += 1;
        }
    };
    GildedRose.prototype.decreaseQuality = function (item, value) {
        if (value === void 0) { value = 1; }
        if (item.quality > 0) {
            item.quality -= value;
        }
    };
    GildedRose.prototype.updateSellIn = function (item) {
        if (item.name !== "Sulfuras, Hand of Ragnaros") {
            item.sellIn -= 1;
        }
    };
    GildedRose.prototype.updateAgedBrie = function (item) {
        this.increaseQuality(item);
        if (this.isExpired(item)) {
            this.increaseQuality(item);
        }
    };
    GildedRose.prototype.updateBackstagePass = function (item) {
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
    };
    GildedRose.prototype.updateConjured = function (item) {
        this.decreaseQuality(item, 2);
        this.handleExpiredItem(item);
    };
    GildedRose.prototype.updateRegularItem = function (item) {
        this.decreaseQuality(item);
        this.handleExpiredItem(item);
    };
    GildedRose.prototype.handleExpiredItem = function (item) {
        if (this.isExpired(item) && item.name !== "Sulfuras, Hand of Ragnaros") {
            this.decreaseQuality(item);
        }
    };
    return GildedRose;
}());
exports.GildedRose = GildedRose;
//# sourceMappingURL=gilded-rose.js.map