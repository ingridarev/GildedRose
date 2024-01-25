"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gilded_rose_1 = require("@/gilded-rose");
/**
 * This unit test uses [Jest Snapshot](https://goo.gl/fbAQLP).
 *
 * There are two test cases here with different styles:
 * <li>"foo" is more similar to the unit test from the 'Java' version
 * <li>"thirtyDays" is more similar to the TextTest from the 'Java' version
 *
 * I suggest choosing one style to develop and deleting the other.
 */
describe('Gilded Rose Approval', function () {
    var gameConsoleOutput;
    var originalConsoleLog;
    var originalProcessArgv;
    function gameConsoleLog(msg) {
        if (msg) {
            gameConsoleOutput += msg;
        }
        gameConsoleOutput += "\n";
    }
    beforeEach(function () {
        // prepare capturing console.log to our own gameConsoleLog.
        gameConsoleOutput = "";
        originalConsoleLog = console.log;
        console.log = gameConsoleLog;
        originalProcessArgv = process.argv;
    });
    afterEach(function () {
        // reset original console.log
        console.log = originalConsoleLog;
        process.argv = originalProcessArgv;
    });
    it('should foo', function () {
        var gildedRose = new gilded_rose_1.GildedRose([new gilded_rose_1.Item('foo', 0, 0)]);
        var items = gildedRose.updateQuality();
        expect(items).toMatchSnapshot();
    });
    it('should thirtyDays', function () {
        process.argv = ["<node>", "<script", "30"];
        require('../golden-master-text-test.ts');
        expect(gameConsoleOutput).toMatchSnapshot();
    });
});
//# sourceMappingURL=approvals.spec.js.map