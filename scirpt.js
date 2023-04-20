// Given an array, print the max, min and average values for that array.
function maxMinAvg(arr){

var max = arr[0];
var min = arr[0];
var sum = 0;

    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max ){
            max = arr[i];
        }

        if (arr[i] < min){
            min = arr[i];
        }

        sum = sum + arr[i];
        var avg = sum/arr.length;
        var arrNew = [max, min, avg];
    }
    return arrNew;
}