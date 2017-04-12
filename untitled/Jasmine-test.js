/**
 * Created by haoyuze on 2017/4/12.
 */
'use strict';
xdescribe("test input date is legal", function() {
    it("should throw an exception when inputDate like 2008-4-30 ", function() {
        const date = "2008-4-30"
        let bar = main("2008-4-30");
        expect(bar).toThrow();
    });
});
xdescribe("test unify date format", function() {
    xit("should throw an exception when inputDate like 2008&5&15 ", function() {
        const date = "2008&5&15"
        let bar = getUnifiedDateFormat("2008&5&15");
        expect(bar).toThrow();
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
