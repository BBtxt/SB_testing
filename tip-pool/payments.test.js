describe("submitPaymentInfo", () => {
    beforeEach(() => {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });
    it("should add a new payment to allPayments", () => {
      expect(Object.keys(allPayments).length).toEqual(1);
    })
    it("should add a new payment to paymentTbody", () => {
      expect(paymentTbody.rows.length).toEqual(1);
    })
  
    afterEach(() => {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
    })
    })
  
    describe("Create Current Payment", () => {
  
      it("should create a new payment object", () => {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        createCurPayment();
        expect(createCurPayment()).toEqual({
          billAmt: "100",
          tipAmt: "20",
          tipPercent: 20
        })
      })
  
      it("should return undefined with negative or empty inputs", () => {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(createCurPayment()).toBeUndefined();
      })
      afterEach(() => {
        delete allPayments["payment" + paymentId];
        paymentTbody.remove();
        paymentId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
      })
    });
  
    describe( "calculateTipPercent", () => {
    it("should calculate tip percent", () => {
      expect(calculateTipPercent(100, 20)).toEqual(20);
    })
  
    })