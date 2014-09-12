
describe('practice-1-2', function () {

    it("product integer", function () {
        var y = 1;
        for(var x = 1;x != 6; x++)
        {
            y = 3*x*y;
        }
        console.log("true form 1 to 5, term is 3*x, true function exec, answer is " + y);
        var test_product = product(function(x){return 3*x},1,function(x){return x+1},5);
        console.log("Your function exec,answer is "+test_product);
        expect(test_product).toBe(y);
    });

});




