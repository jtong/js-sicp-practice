
describe('practice-1-2', function () {

    it("accumulate int", function () {
        console.log("sum integer 2,4,6,8,10,true function exec, answer is 30");
        var sum = filtered_accumulate(function(x){return x%2 == 0},
            function(x,y){return x+y;}, 0,
            function(x){return x},1,
            function(x){return x+1},10);

        console.log("Your function exec,answer is "+sum);
        expect(sum).toBe(30);

    });

});




