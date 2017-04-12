/**
 * Created by haoyuze on 2017/4/12.
 */
function getUnifiedDateFormat(inputDate){
    let dateArray = [];
    if(inputDate.indexOf('/')>-1||inputDate.indexOf('-')>-1){
        dateArray = inputDate.split(/-|\//g);
    }else {
        console.log('Date Format errors');
    }
    return dateArray.map(function(item){return parseInt(item)});
}
function checkLeapYear(dateArray){
    if((dateArray[0]%4==0&&dateArray[0]%100!==0)||dateArray[0]%400===0){
        return true;
    }else{
        return false;
    }
}
function checkvalidity(dateArray,leapYear){
    const bigMonth = [1,3,5,7,8,10,12];
    const smallMonth = [2,4,6,9,11];
    if(dateArray[1]>12){
        console.log('Date not validity');
    }
    if(leapYear&&dateArray[1]===2){
        if(dateArray[2]>29){
            console.log('Date not validity');
        }
    }
    if(bigMonth.indexOf(dateArray[1])>-1&&dateArray[2]>31){
        console.log('Date not validity');
    }
    if(smallMonth.indexOf(dateArray[1])>-1&&dateArray[2]>30){
        console.log('Date not validity');
    }
}
function compareOrder(systemDateArray,inputDateArray) {
    for(let i in systemDateArray){
        if(systemDateArray[i]<inputDateArray[i]){
            return "greatThan";
        }else if(systemDateArray[i]>inputDateArray[i]){
            return "lessThan";
        }
    }
    return "equal";
}

// function getDateObject(dateArray) {
//     return `${dateArray[0]}/${dateArray[1]}/${dateArray[2]}`;
// }
function main(inputDate){
    let inputDateArray = getUnifiedDateFormat(inputDate);
    let systemDateArray = (new Date()).toLocaleDateString()
    systemDateArray = getUnifiedDateFormat(systemDateArray);
    const inputleapYear = checkLeapYear(inputDateArray);
    const systemleapYear = checkLeapYear(systemDateArray);
    const compareResult = compareOrder(systemDateArray,inputDateArray);
    checkvalidity(inputDateArray,inputleapYear);

    let result={}
    result.input=inputleapYear;
    result.today=systemleapYear;
    result.compare=compareResult;
    console.log(result);
}