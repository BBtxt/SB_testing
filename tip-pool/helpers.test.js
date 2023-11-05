describe("Check sumPaymentTotal", () => {
    it("should return 0 if no payments have been added", () => {
        expect(sumPaymentTotal([])).toEqual(0);
    })
})