"use strict"

describe("Tests" , function () {
    it("should succeed", function(done) {
        expect(true).toBeTruthy();
        done();
    });

    it("should fail", function(done) {
        // Fix didn't work
        expect(false).toBeTruthy();
        done();
    });
});