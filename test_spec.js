"use strict"

describe("Tests" , function () {
    it("should succeed", function(done) {
        expect(true).toBeTruthy();
        done();
    });

    it("should fail", function(done) {
        // Fix didn't work 2
        expect(false).toBeTruthy();
        done();
    });
});