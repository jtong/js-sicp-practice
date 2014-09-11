
describe('practice-1-6', function () {

    beforeEach(function() {

    });

    it("The greatest common divisor， no prime number, num1 > num2", function () {
        console.log("The Right max common divisor 63 and 70, the answer is 7");
        var max_div = gcd(63, 70);
        console.log("Your function max common divisor 63 and 70, the answer is "+max_div);
        expect(max_div).toBe(7);
    });


    it("The greatest common divisor， no prime number, num2 > num1", function () {
        console.log("The Right max common divisor 70 and 63, the answer is 7");
        var max_div = gcd(70, 63);
        console.log("Your function max common divisor 70 and 63, the answer is "+max_div);
        expect(max_div).toBe(7);
    });

    it("The greatest common divisor is 1", function () {
        console.log("The Right max common divisor 55 and 63, the answer is 1");
        var max_div = gcd(55, 63);
        console.log("Your function max common divisor 55 and 63, the answer is "+max_div);
        expect(max_div).toBe(1);
    });

    it("The greatest common divisor is 1， two prime number", function () {
        console.log("The Right max common divisor 3 and 7, the answer is 1");
        var max_div = gcd(3, 7);
        console.log("Your function max common divisor 3 and 7, the answer is "+max_div);
        expect(max_div).toBe(1);
    });

});




