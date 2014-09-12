
describe('practice-1-6', function () {

    function diff_for_test (x)
    {
        return (fun(x+0.0001)-fun(x))/0.0001;
    }

    it("Newton's method for finding roots", function () {
        console.log("slove function, x^2 = 4, answer is 2");
        var answer_x = slove_iter(function(x){return x*x - 4;},diff_for_test,4,0.001);
        console.log("your function exec, answer is " + answer_x );
        expect(Math.abs(answer_x*answer_x - 4) < 0.001).toBe(true);
    });


});




