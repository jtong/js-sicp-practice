
describe('practice-1-6', function () {


    it("solve function, x^2 = 4", function () {
        console.log("solve function, x^2 = 4, answer is 2");
        var answer_x = solve(function(x){return x*x - 4;},4,0.001);
        console.log("your function exec, answer is " + answer_x );
        expect(Math.abs(answer_x*answer_x - 4) < 0.001).toBe(true);
    });


});




