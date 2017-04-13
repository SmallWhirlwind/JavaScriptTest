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
    it("should console 'Date not validity' when inputDate like 2008-4-31 ", function() {
        spyOn(console, 'log');
        const date = [2008,4,31];
        checkvalidity(date,true);
        expect(console.log).toHaveBeenCalledWith('Date not validity');
    });
    it("should console 'Date not validity' when inputDate like 2008-7-33 ", function() {
        spyOn(console, 'log');
        const date = [2008,7,33];
        checkvalidity(date,true);
        expect(console.log).toHaveBeenCalledWith('Date not validity');
    });
});
