/**
 * Created by haoyuze on 2017/4/13.
 */
'use strict';
describe("test calculate stop waiting time Cost" , function() {
    it("return money when input > 0", function () {
        const stopTime = 8;
        const waitCost = calculateParkingCost(stopTime)
        expect(waitCost).toBe(8*0.25);
    })
});