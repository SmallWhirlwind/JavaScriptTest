/**
 * Created by haoyuze on 2017/4/12.
 */
function getUnifiedDateFormat(inputDate){
    let dateArray = inputDate.split(/-|\//g);
    return dateArray.map((item)=> parseInt(item));
}
function checkLeapYear(dateArray){
    if((dateArray[0]%4==0&&dateArray[0]%100!==0)||dateArray[0]%400===0){
        return true;
    }else{
        return false;
    }
}
// function checkvalidity(dateArray,leapYear){
//     if(dateArray[1])
// }
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

function getDateObject(dateArray) {
    return `${dateArray[0]}/${dateArray[1]}/${dateArray[2]}`;
}
function main(inputDate){
    let inputDateArray = getUnifiedDateFormat(inputDate);
    let systemDateArray = (new Date()).toLocaleDateString()
    systemDateArray = getUnifiedDateFormat(systemDateArray);
    const inputleapYear = checkLeapYear(inputDateArray);
    const systemleapYear = checkLeapYear(systemDateArray);
    const compareResult = compareOrder(systemDateArray,inputDateArray);

    let result={}
    result.input=inputleapYear;
    result.today=systemleapYear;
    result.compare=compareResult;
    console.log(result);
}