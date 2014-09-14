
describe('practice-1-6', function () {


    it("slove function, x^2 = 4", function () {
        console.log("slove function, x^2 = 4, answer is 2");
        var answer_x = slove(function(x){return x*x - 4;},4,0.001);
        console.log("your function exec, answer is " + answer_x );
        expect(Math.abs(answer_x*answer_x - 4) < 0.001).toBe(true);
    });


});




