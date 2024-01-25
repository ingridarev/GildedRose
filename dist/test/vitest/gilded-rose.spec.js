"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gilded_rose_1 = require("@/gilded-rose");
describe('Gilded Rose', function () {
    it('should foo', function () {
        var gildedRose = new gilded_rose_1.GildedRose([new gilded_rose_1.Item('foo', 0, 0)]);
        var items = gildedRose.updateQuality();
        expect(items[0].name).toBe('fixme');
    });
});
//# sourceMappingURL=gilded-rose.spec.js.map