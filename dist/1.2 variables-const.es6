//old way of defining constants (read-only variables)
"use strict";

var CONSTANT_VALUE = (function () {
    "use strict";
    var constantValue = 15;
    return {
        get: function get() {
            return constantValue;
        }
    };
})();

//usage:
for (var i = 0; i < CONSTANT_VALUE.get(); i++) {}

//new way to declare constants
var CONST_VALUE = 15

//throws exception during compilation with babel and traceur
//CONST_VALUE = 1;
;
// do stuff