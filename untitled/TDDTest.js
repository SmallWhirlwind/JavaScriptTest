/**
 * Created by haoyuze on 2017/4/13.
 */
'use strict';
describe("test input String", function() {
    it("should console  when input string is not number ", function() {
        spyOn(console, 'log');
        const str = "isString";
        checkInputString(str);
        expect(console.log).toHaveBeenCalledWith('Data not number');
    });
    it("should console odd number when string is odd number ", function() {
        spyOn(console, 'log');
        const str = "5";
        checkInputString(str);
        expect(console.log).toHaveBeenCalledWith('Data is odd number');
    });
    it("should console even number when string is even number ", function() {
        spyOn(console, 'log');
        const str = "4";
        checkInputString(str);
        expect(console.log).toHaveBeenCalledWith('Data is even number');
    });
});
