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
describe("test main function" ,function () {
    it("return input error when distance<0||time<0" ,function () {
        let distance = -1;
        let time = 10;
        let result = taximeterFare(distance,time);
        expect(result).toBe("input error");
        distance = 10;
        time = -10;
        result = taximeterFare(distance,time);
        expect(result).toBe("input error");
        distance = -10;
        time = -10;
        result = taximeterFare(distance,time);
        expect(result).toBe("input error");
    });
    it("return input error when distance||time not number" ,function () {
        let distance = "not number";
        let time = 10;
        let result = taximeterFare(distance,time);
        expect(result).toBe("input error");
        distance = 10;
        time = "not number";
        result = taximeterFare(distance,time);
        expect(result).toBe("input error");
        distance = "not number";
        time = "not number";
        result = taximeterFare(distance,time);
        expect(result).toBe("input error");
    });
    it("return result" ,function () {
        const distance = 10;
        const time = 10;
        let result = taximeterFare(distance,time);
        expect(result).toBe("16");
    });
})