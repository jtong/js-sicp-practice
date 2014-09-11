
describe('practice-1-2', function () {

    beforeEach(function() {

    });

    it("should print pascal triangle", function () {

        var five_level_pascal_triangle =  "1\n"
                                        + "1 2 1\n"
                                        + "1 3 3 1\n"
                                        + "1 4 6 4 1\n"
        expect(pascal_triangle(5)).toBe(five_level_pascal_triangle);

    });


});




