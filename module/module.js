var Module = (function() {
   var _counter = 0;

   var _increment = function() {
       _counter++;
   };

   var _getCounter = function() {
       return _counter;
   };

   return {
       increment: function() {
           _increment();
       },
       get: function() {
           return _getCounter();
       }
   }
})();

var Module2 = (function() {
    var object = {};
    var _counter = 0;

    var _increment = function() {
        _counter++;
    };

    var _getCounter = function() {
        return _counter;
    };

    object.increment = function() {
        _increment();
    };
    object.get = function() {
        return _getCounter();
    };

    return object;
})();

console.log(Module.get()); // 0
Module.increment();
console.log(Module.get()); // 1

console.log(Module2.get()); // 0
Module2.increment();
console.log(Module2.get()); // 1