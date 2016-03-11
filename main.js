"use strict";
function split(numberString){
    var splittedNumber = numberString.match(/.{1,1}/g);
    return splittedNumber;
}

function get(line , n){
    if(line == 1){
        switch (n){
            case '0':
            case '2':
            case '3':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                return '._.';
                break;
            case '1':
            case '4':
                return '...';
                break;
        }
    }
    if(line == 2){
        switch (n){
            case '0':
                return '|.|';
            case '2':
            case '3':
                return '._|'
            case '1':
            case '7':
                return '..|'
            case '4':
            case '8':
            case '9':
                return '|_|';
            case '5':
            case '6':
                return '|_.';
        }
    }
    if(line == 3){
        switch (n){
            case '0':
            case '6':
            case '8':
                return '|_|';
            case '1':
            case '4':
            case '7':
            case '9':
                return '..|'
            case '2':
                return '|_.';
            case '3':
            case '5':
                return '._|';
        }
    }
}

function format(splittedNumber){
    var result = '';
    for(var line = 1 ; line <= 3 ; line++){
        for(var i = 0 ; i < splittedNumber.length ;i++){
             result += get(line ,splittedNumber[i]) + ' ';
        }
        result += '\n';
    }
    return  result;
}

function main(input){
    return format(split(input));
}

exports.split = split
exports.format = format
exports.main = main
