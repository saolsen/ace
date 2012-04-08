define(function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var RTokenizer = require("../remote_tokenizer").RTokenizer;

    var Mode = function()
    {
        this.$tokenizer = new RTokenizer();
    };
    oop.inherits(Mode, TextMode);

    (function() {
    }).call(Mode.prototype);

    exports.Mode = Mode;

});
