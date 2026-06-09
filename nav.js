(function () {
    'use strict';

    function initMobileNav() {
        var btn = document.getElementById('mobile-menu-btn');
        var menu = document.getElementById('mobile-menu');
        var openIcon = document.getElementById('menu-icon-open');
        var closeIcon = document.getElementById('menu-icon-close');

        if (!btn || !menu) return;

        function setOpen(isOpen) {
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            menu.classList.toggle('hidden', !isOpen);
            if (openIcon) openIcon.classList.toggle('hidden', isOpen);
            if (closeIcon) closeIcon.classList.toggle('hidden', !isOpen);
        }

        btn.addEventListener('click', function () {
            setOpen(menu.classList.contains('hidden'));
        });

        var links = menu.querySelectorAll('a');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function () {
                setOpen(false);
            });
        }

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') setOpen(false);
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth >= 768) setOpen(false);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNav);
    } else {
        initMobileNav();
    }
})();
