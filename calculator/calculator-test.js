describe("Calculator", () => {
  it("should calculate the monthly rate correctly", function () {
    const values = {
      amount: 10000,
      years: 8,
      rate: 5.5,
    };
    expect(calculateMonthlyPayment(values)).toEqual("128.99");
  });

  it("should return a result with 2 decimal places", function () {
    const values = {
      amount: 10000,
      years: 8,
      rate: 5.5,
    };
    expect(calculateMonthlyPayment(values)).not.toEqual("128.999");
  });

  it("Should be able to receive a special rate of 0", () => {
    const values = {
      amount: 10000,
      years: 8,
      rate: 0,
    };
    expect(calculateMonthlyPayment(values)).toEqual("104.17");
  });
});
