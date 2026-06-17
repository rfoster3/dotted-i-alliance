(function(){
  var burger = document.getElementById('burger'),
      menu   = document.getElementById('menu');

  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Services dropdown: keyboard + mobile expand, with ARIA state
  document.querySelectorAll('.subtoggle').forEach(function (t) {
    t.addEventListener('click', function (e) {
      if (window.innerWidth <= 920) {
        e.preventDefault();
        var open = t.parentElement.classList.toggle('open');
        t.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
    });
  });

  // Close menus on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (menu) { menu.classList.remove('open'); if (burger) burger.setAttribute('aria-expanded', 'false'); }
      document.querySelectorAll('.has-sub.open').forEach(function (h) {
        h.classList.remove('open');
        var t = h.querySelector('.subtoggle'); if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close mobile menu after tapping any link
  if (menu) {
    menu.querySelectorAll(':scope > a, .sub a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        if (burger) burger.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
