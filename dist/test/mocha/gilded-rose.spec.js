"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var gilded_rose_1 = require("@/gilded-rose");
describe('Gilded Rose', function () {
    it('should foo', function () {
        var gildedRose = new gilded_rose_1.GildedRose([new gilded_rose_1.Item('foo', 0, 0)]);
        var items = gildedRose.updateQuality();
        (0, chai_1.expect)(items[0].name).to.equal('fixme');
    });
});
//# sourceMappingURL=gilded-rose.spec.js.map