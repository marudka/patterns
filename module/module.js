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

console.log(Module.get()); // 0
Module.increment();
console.log(Module.get()); // 1