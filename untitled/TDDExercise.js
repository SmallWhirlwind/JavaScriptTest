/**
 * Created by haoyuze on 2017/4/13.
 */
function checkInputString(inputString){
    if(isNaN(parseFloat(inputString))){
        console.log("Data not number");
    }else{
        const num = parseInt(inputString);
        if(num%1>0){
            console.log("Data is number");
        }else if(num%2===0){
            console.log("Data is even number");
        }else{
            console.log("Data is odd number");
        }
    }

}