describe("Delay Calculator", function() {
    describe("Checking question length to return delay in seconds", function() {
        it("should return 2", function() {
            expect(calculateDelay(20)).toBe(2);
        });
        it("should return 6", function() {
            expect(calculateDelay(97)).toBe(6);
        });
        it("should return 8", function() {
            expect(calculateDelay(198)).toBe(8);
        });
        it("default value should return 10", function() {
            expect(calculateDelay(210)).toBe(10);
        });
    });
});