(function ($, ko) {

    var getItemIdClass = function (id) {
        if (id == null) {
            return '';
        }

        var value = '' + id;

        if (value.indexOf(':') === -1) {
            value += ':0'
        }

        return 'item-' + value.replace(':', '-');
    };

    var formatter = function (item) {
        return '<div class="item ' + getItemIdClass(item.id) + '"></div><span>' + item.text + '</span>';
    };

    ko.bindingHandlers.select2 = {
        init: function (element, valueAccessor) {

            var options = valueAccessor();
            var items = options.items;
            var layer = options.item;

            $(element)
                .select2({
                    data: items,
                    placeholder: options.placeholder,
                    formatResult: formatter,
                    formatSelection: formatter
                })
                .on('change', function (e) {
                    layer.item.id(e.val);
                });

        }
    };
})(jQuery, ko);