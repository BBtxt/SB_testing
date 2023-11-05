describe("Check sumPaymentTotal", () => {
  beforeEach(() => {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });
  it("Should return the initial value of 100", () => {
    expect(sumPaymentTotal("billAmt")).toEqual(100);
  });
  it("Should return the initial value of 20", () => {
    expect(sumPaymentTotal("tipAmt")).toEqual(20);
  });
  it("Should return a sum tip value of 80 with the second tip of 60", () => {
    billAmtInput.value = 200;
    tipAmtInput.value = 60;
    submitPaymentInfo();
    expect(sumPaymentTotal("tipAmt")).toEqual(80);
  })

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    allPayments = {};
    paymentId = 0;
  });
});

describe("Check calculateTipPercent", () => {
  it("Should return 20", () => {
    expect(calculateTipPercent(100, 20)).toEqual(20);
  })
  it("Should return 0", () => {
    expect(calculateTipPercent(100, 0)).toEqual(0);
  })
})
