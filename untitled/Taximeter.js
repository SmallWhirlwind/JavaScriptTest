/**
 * Created by haoyuze on 2017/4/13.
 */
function calculateParkingCost(stopTime) {
    return stopTime*0.25;
}
function calculateFare(distance) {
    if(distance<=2){
        return 6;
    }
    if(distance<=8){
        return (distance-2)*0.8+6;
    }else {
        return (distance-8)*1.2+6*0.8+6;
    }
}
function taximeterFare(distance,time) {
    if(isNaN(distance)||isNaN(time)){
        return "input error";
    }
    if(distance<0||time<0){
        return "input error";
    }
    return (calculateFare(distance)+calculateParkingCost(time)).toFixed(0);
}