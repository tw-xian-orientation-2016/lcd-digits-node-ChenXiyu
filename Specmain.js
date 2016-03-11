"use strict";

var xx = require("./main")

describe("split()",function(){
    it("split a string to single character",function(){
        var input = "321";
        var expectOutput = ['3','2','1']
        var output = xx.split(input)
        expect(expectOutput).toEqual(output)
    });
    it("split a string to single character",function(){
        var input = "1";
        var expectOutput = ['1']
        var output = xx.split(input)
        expect(expectOutput).toEqual(output)
    });
});
describe("format()",function(){
    it("format numbers to lcd-format",function(){
        var input = ['3','2','1'];
        var expectOutput = '._. ._. ... \n._| ._| ..| \n._| |_. ..| \n'
        var output = xx.format(input)
        expect(expectOutput).toEqual(output)
    });
    it("format numbers to lcd-format",function(){
        var input = ['9','1','0'];
        var expectOutput = '._. ... ._. \n|_| ..| |.| \n..| ..| |_| \n'
        var output = xx.format(input)
        expect(expectOutput).toEqual(output)
    });
});
describe("main()",function(){
    it("transform a number to lcd-format",function(){
        var input = '910';
        var expectOutput = '._. ... ._. \n|_| ..| |.| \n..| ..| |_| \n'
        var output = xx.main(input)
        expect(expectOutput).toEqual(output)
    });
    it("transform a number to lcd-format",function(){
        var input = '1';
        var expectOutput ='... \n..| \n..| \n' 
        var output = xx.main(input)
        expect(expectOutput).toEqual(output)
    });
});
