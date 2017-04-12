/**
 * Created by haoyuze on 2017/4/12.
 */
'use strict';
describe("test input date is validity", function() {
    it("should console 'Date not validity' when inputDate like 2008-2-30 ", function() {
        spyOn(console, 'log');
        const date = [2008,2,30];
        checkvalidity(date,true);
        expect(console.log).toHaveBeenCalledWith('Date not validity');
    });
});
describe("test unify date format", function() {
    it("should console 'Date Format errors' when inputDate like 2008&5&15 ", function() {
        spyOn(console, 'log');
        const date = "2008&5&15"
        getUnifiedDateFormat("2008&5&15");
        expect(console.log).toHaveBeenCalledWith('Date Format errors');
    });
});
describe("test compare date order", function() {
    it("should return an String\"greatThan\" when systemDate>inputDate ", function() {
        const systemDate = [2003,5,15]
        const inputDate = [2006,5,15]
        let bar = compareOrder(systemDate,inputDate);
        expect(bar).toBe("greatThan");
    });
});
describe("test date Leap Year", function() {
    it("should return an true when input  [2000,5,15]", function() {
        const Date = [2000,5,15]
        let bar = checkLeapYear(Date);
        expect(bar).toBe(true);
    });
});
describe("test main final result", function() {
    it("should return true ", function() {
        spyOn(console, 'log');
        const result = {
            input:false,
            today:false,
            compare:"greatThan"
        }
        const inputDate = "2017-08-14";
        main(inputDate);
        expect(console.log).toHaveBeenCalledWith(result);
    });
});
