function Thermostat() {
this._temperature = 20
this._powerSavingModeon = true
this._MAXIMUM_TEMP = 25
this.MINIMUM_TEMP = 10;
}

Thermostat.prototype.tempCheck = function() {
  return this._temperature;
}

Thermostat.prototype.tempUp = function() {
  return this._temperature += 1;
}

Thermostat.prototype.tempDown = function() {
  if (this._temperature >= 11) { 
    return this._temperature -= 1;
} else { 
    return (this._temperature);
}}

Thermostat.prototype.powerSavingModeon = function() {
  return this._powerSavingModeon;
}

Thermostat.prototype.maxTempPowerSave = function() {
  if (this._temperature <= 24 && this._powerSavingModeon == true) {
    return this.tempUp();
  } else {
    return (this._temperature);
  } 
}
