
describe('practice-1-6', function () {


    it("Newton's method for finding roots", function () {
        console.log("slove function, x^2 = 4, answer is 2");
        var answer_x = slove(function(x){return x*x - 4;},0.001);
        console.log("your function exec, answer is " + answer_x + "diff is " + answer_x*answer_x-4);
        expect(Math.abs(answer_x*answer_x - 4) < 0.001).toBe(true);
    });


});




