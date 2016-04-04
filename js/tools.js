(function($) {

    $(document).ready(function() {

        $('.form-input input, .form-textarea textarea').each(function() {
            if ($(this).val() == '') {
                $(this).parent().find('span').css({'display': 'block'});
            }
        });

        $('.form-input input, .form-textarea textarea').focus(function() {
            $(this).parent().find('span').css({'display': 'none'});
        });

        $('.form-input input, .form-textarea textarea').blur(function() {
            if ($(this).val() == '') {
                $(this).parent().find('span').css({'display': 'block'});
            }
        });

        $('.form-checkbox input:checked').parent().addClass('checked');
        $('.form-checkbox').click(function() {
            $(this).toggleClass('checked');
            $(this).find('input').prop('checked', $(this).hasClass('checked')).trigger('change');
        });

        $('.add-form-media-radio input:checked').parent().addClass('checked');
        var curIndex = $('.add-form-media-radio').index($('.add-form-media-radio.checked'));
        $('.add-form-media-content').eq(curIndex).addClass('active');

        $('.add-form-media-radio').click(function() {
            var curName = $(this).find('input').attr('name');
            $('.add-form-media-radio input[name="' + curName + '"]').parent().removeClass('checked');
            $(this).addClass('checked');
            $(this).find('input').prop('checked', true).trigger('change');

            var curIndex = $('.add-form-media-radio').index($(this));

            $('.add-form-media-content.active').removeClass('active');
            $('.add-form-media-content').eq(curIndex).addClass('active');
        });

        $('.form-file input').change(function() {
            var curFile = $(this).parent();
            var options = {
                success: function(data) {
                    if (data.status == 1) {
                        curFile.html('<img src="' + data.pic+ '" alt="" />')
                    } else {
                        alert(data.message, 'Ошибка');
                    }
                },
                url:        '/ajax/newAvatar.php',
                type:       'post',
                dataType:   'json',
                clearForm:  true,
                resetForm:  true
            };
            $('input[name="newAva"]').parent().ajaxSubmit(options);
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

        $('.main-item-link-new').click(function(e) {
            $('.registration').show();
            $('.overlay').show();
            e.preventDefault();
        });

        $('.add-link').click(function(e) {
            $('.add-form').show().css({'margin-top': -$('.add-form').height() / 2});
            if ($('.add-form').offset().top < 0) {
                $('.add-form').show().css({'margin-top': -$('.add-form').height() / 2 - $('.add-form').offset().top})
            }
            $('.overlay').show();
            e.preventDefault();
        });

    });

})(jQuery);