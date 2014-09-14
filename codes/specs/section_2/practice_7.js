
describe('practice-1-6', function () {


    it("f(g(x) is x(x)*x(x)", function () {
        console.log("True function x(x)*x(x), x = 2 right result is 4");
        console.log("True function x(x)*x(x), x = 3 right result is 9");
        console.log("True function x(x)*x(x), x = 4 right result is 16");
        var y1 = compose(function(x){return x*x}, function(x){return x})(2);
        var y2 = compose(function(x){return x*x}, function(x){return x})(3);
        var y3 = compose(function(x){return x*x}, function(x){return x})(4);
        console.log("Your function x(x)*x(x), x = 2 right result is "+y1);
        console.log("Your function x(x)*x(x), x = 3 right result is "+y2);
        console.log("Your function x(x)*x(x), x = 4 right result is "+y3);

        expect(y1).toBe(4);
        expect(y2).toBe(9);
        expect(y3).toBe(16);

    });


});




