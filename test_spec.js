"use strict"

describe("Tests" , function () {
    it("should succeed", function(done) {
        expect(true).toBeTruthy();
        done();
    });

    it("should fail", function(done) {
        //expect(false).toBeTruthy();
        // shouldn't trigger a build
        done();
    });
});