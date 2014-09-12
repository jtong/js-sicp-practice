
describe('practice-1-2', function () {

    beforeEach(function() {

    });

    it("accumulate int", function () {
        console.log("sum integer form 1 to 10,true function exec, answer is 55");
        var sum = accumulate(function(x,y){return x+y;}, 0, function(x){return x},1,function(x){return x+1},10);
        console.log("Your function exec,answer is "+sum);
        expect(sum).toBe(55);

    });

    it("accumulate cube", function () {
        var sum_true = 0;
        for (var i = 1; i != 11; i++)
        {
            sum_true += i*i*i;
        }
        console.log("sum integer cube form 1 to 10,true function exec, answer is " + sum_true);
        var sum = accumulate(function(x,y){return x+y;}, 0, function(x){return x*x*x},1,function(x){return x+1},10);
        console.log("Your function exec,answer is "+sum);
        expect(sum).toBe(sum_true);

    });

    it("accumulate times integer", function () {
        var y = 1;
        for(var x = 1;x != 6; x++)
        {
            y = 3*x*y;
        }
        console.log("true form 1 to 5, term is 3*x, times and times, true function exec, answer is " + y);
        var times = accumulate(function(x,y){return x*y;}, 1, function(x){return x*3},1,function(x){return x+1},5);
        console.log("Your function exec,answer is "+times);
        expect(times).toBe(y);
    });

});




