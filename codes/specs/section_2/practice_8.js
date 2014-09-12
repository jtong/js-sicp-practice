
describe('practice-1-6', function () {

    function diff_for_test (fun,x,dx)
    {
        return (fun(x+dx)-fun(x))/dx;
    }

    function check (fun, x, dx)
    {
        if (dx > Math.abs(fun(x))) return true;
        return false;
    }

    function buzz (fun, x,dx)
    {
        return x -  fun(x)/diff_for_test(fun,x,dx);
    }

    it("Newton's method for finding roots", function () {
        console.log("slove function, x^2 = 4, answer is 2");
        var answer_x = slove_iter(check,buzz)(function(x){return x*x -4},5,0.001);
        console.log("your function exec, answer is " + answer_x );
        expect(Math.abs(answer_x*answer_x - 4) < 0.001).toBe(true);
    });


});




