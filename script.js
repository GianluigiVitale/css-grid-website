



$('button[aria-expanded]').click(function () {
    var expanded = $(this).attr('aria-expanded') === 'true' || false;
    $(this).attr('aria-expanded', !expanded);
});
