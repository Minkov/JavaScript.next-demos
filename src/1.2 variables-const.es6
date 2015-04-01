//old way of defining constants (read-only variables)
var CONSTANT_VALUE = (function(){
    'use strict';
    var constantValue = 15;
    return {
        get: function(){
            return constantValue;
        }
    };
}());

//usage: 
for(var i = 0; i < CONSTANT_VALUE.get(); i++){
    // do stuff
}


//new way to declare constants
const CONST_VALUE = 15

//throws exception during compilation with babel and traceur
//CONST_VALUE = 1;

