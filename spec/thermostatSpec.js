describe("Thermostat", function() {
  var thermostat
  beforeEach(function() {
    thermostat = new Thermostat();
});

  it("should equal 20", function() {
    expect(thermostat.tempCheck()).toEqual(20);
  });

  it("temp should increase", function() { 
    thermostat.tempUp();
    expect(thermostat.tempCheck()).toEqual(21);
  });

  it("temp should decrease", function() {
    thermostat.tempDown();
    expect(thermostat.tempCheck()).toEqual(19);
  });

  it("should have a minimum temp of 10", function() {
      for (var i = 0; i < 11; i++) {
      thermostat.tempDown();
      }
      expect(thermostat.tempCheck()).toEqual(thermostat.MINIMUM_TEMP);
  });

  it("should be on power saving mode", function() {
    thermostat.powerSavingModeon();
    expect(thermostat.powerSavingModeon()).toEqual(true);
  })

  it("should have a max temp of 25 when on power saving mode", function() {
    thermostat.powerSavingModeon();
    for (var i = 0; i < 26; i++) {
    thermostat.maxTempPowerSave()
    }
    expect(thermostat.tempCheck()).toEqual(25);
  })
});