/**
 * Created by haoyuze on 2017/4/13.
 */
'use strict';
describe("test calculate stop waiting time Cost" , function() {
    it("return money when input >= 0", function () {
        const stopTime = 8;
        const waitCost = calculateParkingCost(stopTime);
        expect(waitCost).toBe(8*0.25);
    });
});
describe("test calculate Fare" , function () {
    it("return money when input distance>8",function () {
        const distance = 10;
        const fare = calculateFare(distance);
        expect(fare).toBe(6*0.8+2*1.2+6);
    });
    it("return money when input distance<2",function () {
        const distance = 1;
        const fare = calculateFare(distance);
        expect(fare).toBe(6);
    });
    it("return money when input distance>2&&distance<8",function () {
        const distance = 5;
        const fare = calculateFare(distance);
        expect(fare).toBe(3*0.8+6);
    });
});