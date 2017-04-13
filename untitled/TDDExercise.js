/**
 * Created by haoyuze on 2017/4/13.
 */
function checkInputString(inputString){
    if(isNaN(parseInt(inputString))){
        console.log("Data not number");
    }else{
        if(parseInt(inputString)%2==0){
            console.log("Data is even number");
        }else{
            console.log("Data is odd number");
        }
    }

}