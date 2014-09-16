
describe('practice-1-1', function () {


    it("sum integer", function () {
        console.log("sum integer form 1 to 10,true function exec, answer is 55");
        var test_sum = sum(function(x){return x},1,function(x){return x+1},10);
        console.log("Your function exec,answer is "+test_sum);
        expect(test_sum).toBe(55);
    });

    it("sum integer cube", function () {
        var sum_true = 0;
        for (var i = 1; i != 11; i++)
        {
            sum_true += i*i*i;
        }
        console.log("sum integer cube form 1 to 10,true function exec, answer is " + sum_true);
        var test_sum = sum(function(x){return x*x*x},1,function(x){return x+1},10);
        console.log("Your function exec,answer is "+test_sum);
        expect(test_sum).toBe(sum_true);
    });


    it("sum integer 1/n*(n+1)", function () {
        var sum_true = 0;
        for (var i = 0; i < 5; i += 2)
        {
            sum_true += 1/((2*i+1)*(2*i+3));
        }
        console.log("sum integer cube form 1 to 11,true function exec, answer is " + sum_true);
        var test_sum = sum(function(x){if (x%2 == 0)
                return 0;
            else
                return 1/((x+2)*x);
            },
            0,
            function(x){
            if (x%2 == 0) return x+1
            else return x+4 },
            11);
        console.log("Your function exec,answer is "+test_sum);
        expect(test_sum).toBe(sum_true);
    });

});




