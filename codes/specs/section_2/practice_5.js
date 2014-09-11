
describe('practice-1-2', function () {

    beforeEach(function() {

    });

    it("tag param 1 and 2", function () {
        console.log("true function exec, param is 1 and 2 result is 1.5");
        var tag_x = tag_cf(1,2);
        console.log("your function exec, param is 1 and 2 result is "+tag_x);
        expect(tag_x).toBe(1.5);
    });


    it("tag param 1 and 3", function () {
        console.log("true function exec, param is 1 and 3 result is "+14/9);
        var tag_x = tag_cf(1,3);
        console.log("your function exec, param is 1 and 3 result is "+tag_x);
        expect(tag_x).toBe(14/9);
    });

    it("tag param 1 and 4", function () {
        console.log("true function exec, param is 1 and 3 result is "+95/61);
        var tag_x = tag_cf(1,4);
        console.log("your function exec, param is 1 and 3 result is "+tag_x);
        expect(tag_x).toBe(95/61);
    });

});




