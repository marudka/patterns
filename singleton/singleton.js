var Cart = (function() {
    var instance;
    var init = function() {
        var _products = [];
        var _add = function(item) {
            _products.push(item);
        };
        var _remove = function(item) {
            var deleteIndex;
            for (var i = 0; i < _products.length; i++) {
                if (_products[i] == item) {
                    deleteIndex = i;
                }
            }
            if (typeof deleteIndex !== "undefined") {
                _products.splice(deleteIndex, 1);
            }
        };
        var _get = function() {
            return _products;
        };

        return {
            add: _add,
            remove: _remove,
            get: _get
        }
    };

    return {
        get: function() {
            if (typeof instance === "undefined") {
                instance = init();
            }

            return instance;
        }
    };
})();

var cart1 = Cart.get();
var cart2 = Cart.get();
console.log(cart1 === cart2); // true
cart1.add("Merlin");
cart1.add("Maja");
console.log(cart2.get()); // Merlin and Maja is in cart
cart2.remove("Maja");
console.log(cart1.get()); // Merlin is in cart
