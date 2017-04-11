(function ($) {
    $.fn.inputrounding = function (options) {
        var opts = $.extend({}, $.fn.inputrounding.defaults, options);

        for (var i = 0; i < opts.actions.length; i++) {
            var action = opts.actions[i];

            this.on(action, function () {
                this.value = parseFloat(this.value).toFixed(opts.decimalPlaces);
            });
        };
    }

    $.fn.inputrounding.defaults = {
        decimalPlaces: 2,
        actions: ["blur"]
    }
}(jQuery));