(function($) {

    $(document).ready(function() {

        $('.form-input input').each(function() {
            if ($(this).val() == '') {
                $(this).parent().find('span').css({'display': 'block'});
            }
        });

        $('.form-input input').focus(function() {
            $(this).parent().find('span').css({'display': 'none'});
        });

        $('.form-input input').blur(function() {
            if ($(this).val() == '') {
                $(this).parent().find('span').css({'display': 'block'});
            }
        });

        $('.form-checkbox input:checked').parent().addClass('checked');
        $('.form-checkbox').click(function() {
            $(this).toggleClass('checked');
            $(this).find('input').prop('checked', $(this).hasClass('checked')).trigger('change');
        });

        $('form').each(function() {
            $(this).validate({
                ignore: '',
                invalidHandler: function(form, validatorcalc) {
                    validatorcalc.showErrors();
                    var errors = validatorcalc.numberOfInvalids();

                    $('.form-checkbox').each(function() {
                        var curField = $(this);
                        if (curField.find('input.error').length > 0) {
                            curField.addClass('error');
                        } else {
                            curField.removeClass('error');
                        }
                    });
                },
                submitHandler: function(form) {
                }
            });
        });

        $('.main-item-link-new').click(function(e) {
            $('.registration').show();
            $('.overlay').show();
            e.preventDefault();
        });

        $('.overlay').click(function() {
            $('.window').hide();
            $('.overlay').hide();
        });

        $('body').keyup(function(e) {
            if (e.keyCode == 27) {
                $('.window').hide();
                $('.overlay').hide();
            }
        });

        $('.window-close').click(function(e) {
            $('.window').hide();
            $('.overlay').hide();
            e.preventDefault();
        });

        if (window.location.hash == '#fin') {
            $('.registration-fin').show();
            $('.overlay').show();
        }

        $('.reg-auth a, .forgot-auth a').click(function(e) {
            $('.window').hide();
            $('.login').show();
            e.preventDefault();
        });

        $('.auth-reg a, .forgot-reg a').click(function(e) {
            $('.window').hide();
            $('.registration').show();
            e.preventDefault();
        });

        $('.auth-forgot a').click(function(e) {
            $('.window').hide();
            $('.forgot').show();
            e.preventDefault();
        });

    });

})(jQuery);