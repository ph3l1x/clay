(function ($) {
    $(document).ready(function () {

        var phones = [{ "mask": "(###) ###-####"}, { "mask": "(###) ###-##############"}];
        $('#edit-phone').inputmask({
            mask: phones,
            greedy: false,
            definitions: { '#': { validator: "[0-9]", cardinality: 1}} });

        console.log(phones);

    });
})(jQuery);
