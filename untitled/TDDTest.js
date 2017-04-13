/**
 * Created by haoyuze on 2017/4/13.
 */
'use strict';
describe("test input String", function() {
    it("should console  when input string is not number ", function() {
        spyOn(console, 'log');
        const str = "isString";
        checkvalidity(str);
        expect(console.log).toHaveBeenCalledWith('Date not number');
    });
    it("should console odd number when string is odd number ", function() {
        spyOn(console, 'log');
        const str = "5";
        checkvalidity(str);
        expect(console.log).toHaveBeenCalledWith('Date is odd number');
    });
    it("should console even number when string is even number ", function() {
        spyOn(console, 'log');
        const str = "4";
        checkvalidity(str);
        expect(console.log).toHaveBeenCalledWith('Date is even number');
    });
});
