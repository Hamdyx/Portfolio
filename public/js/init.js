jQuery(document).ready(function ($) {
    var time = 380;
    setTimeout(function () {
        $('.smoothscroll').on('click', function (e) {
            e.preventDefault();
            var target = this.hash,
                $target = $(target);

            $('html, body')
                .stop()
                .animate(
                    {
                        scrollTop: $target.offset().top,
                    },
                    800,
                    'swing',
                    function () {
                        window.location.hash = target;
                    }
                );
        });

        var sections = $('section');
        var navigation_links = $('#nav-wrap a');

        sections.waypoint({
            handler: function (event, direction) {
                var active_section;

                active_section = $(this);
                if (direction === 'up') active_section = active_section.prev();

                var active_link = $(
                    '#nav-wrap a[href="#' + active_section.attr('id') + '"]'
                );

                navigation_links.parent().removeClass('current');
                active_link.parent().addClass('current');
            },
            offset: '35%',
        });

        $('header').css({ height: $(window).height() });
        $(window).on('resize', function () {
            $('header').css({ height: $(window).height() });
            $('body').css({ width: $(window).width() });
        });

        $(window).on('scroll', function () {
            var h = $('header').height();
            var y = $(window).scrollTop();
            var nav = $('#nav-wrap');

            if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
                nav.fadeOut('fast');
            } else {
                if (y < h * 0.2) {
                    nav.removeClass('opaque').fadeIn('fast');
                } else {
                    nav.addClass('opaque').fadeIn('fast');
                }
            }
        });

        $('form#contactForm button.submit').on('click', function () {
            var contactName = $('#contactForm #contactName').val();
            var myEmail = 'a.hamdy.nig@gmail.com';
            var contactEmail = $('#contactForm #contactEmail').val();
            var contactSubject = $('#contactForm #contactSubject').val();
            var contactMessage = $('#contactForm #contactMessage').val();
            // opens user's default email application
            window.open(
                `mailto:${myEmail}?subject=${contactSubject}&body=${contactMessage}`
            );
            return false;
        });
    }, time);
});
