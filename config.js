'use strict';

module.exports = function (userConfig) {
    this.tagTypes = ["adj", "adv", "art", "con", "nom", "ono", "pre", "ver"];
    this.strictness = false;
    this.perfLog = false;
    this.minimumLength = 0;
    if (userConfig) {
        this.tagTypes = userConfig.tagTypes || this.tagTypes;
        this.strictness = userConfig.strictness || this.strictness;
        this.perfLog = userConfig.perfLog || this.perfLog;
        this.minimumLength = userConfig.minimumLength || this.minimumLength;
    }
};
