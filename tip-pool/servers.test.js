describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    delete allServers['server' + serverId];
    serverTbody.remove();
  });
});

describe("Submit server info", () => {
  beforeEach(() => {
    serverNameInput.value = 'Brandon';
  });

  it("should increment serverId by 1", () => {
    submitServerInfo();
    expect(serverId).toEqual(1);
  })
  it("should add server's Name to all Servers", () => {
    submitServerInfo();
    expect(allServers['server' + serverId].serverName).toEqual('Brandon');
  })

  afterEach(() => {
    delete allServers['server' + serverId];
    serverTbody.remove();
  })
})

