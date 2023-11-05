describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  afterEach(function () {
    delete allServers["server" + serverId];
    serverTbody.remove();
    serverId = 0;
  });
});

describe("Submit server info", () => {
  beforeEach(() => {
    serverNameInput.value = "Brandon";
  });

  it("should increment serverId by 1", () => {
    submitServerInfo();
    expect(serverId).toEqual(1);
  });
  it("should add server's Name to all Servers", () => {
    submitServerInfo();
    expect(allServers["server" + serverId].serverName).toEqual("Brandon");
  });

  afterEach(() => {
    delete allServers["server" + serverId];
    serverTbody.remove();
    serverId = 0;
  });
});

describe("Update Server Table", () => {
  beforeEach(() => {
    serverNameInput.value = "Brandon";
    submitServerInfo();
  });

  it("should update server table", () => {
    updateServerTable();
    expect(serverTbody.rows.length).toEqual(1);
  });

  afterEach(() => {
    delete allServers["server" + serverId];
    serverTbody.remove();
    serverId = 0;
  });
});


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
    delete allPayments["payment" + paymentId];
    paymentTbody.remove();
    paymentId = 0;
    billAmtInput.value = '';
    tipAmtInput.value = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
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

  describe("sumPaymentTotal", () => {
  
    it("should sum payment total", () => {
      expect(sumPaymentTotal('tipPercent').toEqual(20));
      expect(sumPaymentTotal('billAmt').toEqual(100));
      expect(sumPaymentTotal('tipAmt').toEqual(120));
    })
  })