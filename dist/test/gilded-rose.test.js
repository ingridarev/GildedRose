"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gilded_rose_1 = require("../app/gilded-rose");
describe('GildedRose', function () {
    describe('updateQuality', function () {
        test('should handle Aged Brie', function () {
            var agedBrie = new gilded_rose_1.Item('Aged Brie', 5, 10);
            var gildedRose = new gilded_rose_1.GildedRose([agedBrie]);
            gildedRose.updateQuality();
            // if sellin more than 1
            expect(agedBrie.sellIn).toBe(4);
            expect(agedBrie.quality).toBe(11);
            // if expired
            agedBrie.sellIn = -1;
            gildedRose.updateQuality();
            expect(agedBrie.quality).toBe(13);
        });
        test('should handle Backstage passes', function () {
            var backstagePass = new gilded_rose_1.Item('Backstage passes to a TAFKAL80ETC concert', 15, 20);
            var gildedRose = new gilded_rose_1.GildedRose([backstagePass]);
            gildedRose.updateQuality();
            // if sellIn more than 11
            expect(backstagePass.sellIn).toBe(14);
            expect(backstagePass.quality).toBe(21);
            // if sellIn less than 11
            backstagePass.sellIn = 10;
            gildedRose.updateQuality();
            expect(backstagePass.quality).toBe(23);
            // if sellIn less than 6
            backstagePass.sellIn = 5;
            gildedRose.updateQuality();
            expect(backstagePass.quality).toBe(26);
            // if expired
            backstagePass.sellIn = -1;
            gildedRose.updateQuality();
            expect(backstagePass.quality).toBe(0);
        });
        test('should handle Conjured items', function () {
            var conjuredItem = new gilded_rose_1.Item('Conjured', 5, 10);
            var gildedRose = new gilded_rose_1.GildedRose([conjuredItem]);
            gildedRose.updateQuality();
            expect(conjuredItem.sellIn).toBe(4);
            expect(conjuredItem.quality).toBe(8);
            // if expired
            conjuredItem.sellIn = -1;
            gildedRose.updateQuality();
            expect(conjuredItem.quality).toBe(4);
        });
        test('should handle regular items', function () {
            var regularItem = new gilded_rose_1.Item('Some Item', 5, 10);
            var gildedRose = new gilded_rose_1.GildedRose([regularItem]);
            gildedRose.updateQuality();
            expect(regularItem.sellIn).toBe(4);
            expect(regularItem.quality).toBe(9);
            // if expired
            regularItem.sellIn = -1;
            gildedRose.updateQuality();
            expect(regularItem.quality).toBe(7);
        });
        test('should handle Sulfuras', function () {
            var sulfuras = new gilded_rose_1.Item('Sulfuras, Hand of Ragnaros', 0, 80);
            var gildedRose = new gilded_rose_1.GildedRose([sulfuras]);
            gildedRose.updateQuality();
            expect(sulfuras.sellIn).toBe(0);
            expect(sulfuras.quality).toBe(80);
        });
    });
});
//# sourceMappingURL=gilded-rose.test.js.map