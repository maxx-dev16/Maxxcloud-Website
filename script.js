document.addEventListener('click', function(e) {
  var t = e.target.closest('a[href^="#"]');
  if (!t) return;
  var id = t.getAttribute('href').slice(1);
  var el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

var toggle = document.querySelector('.nav-toggle');
var nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', function() {
    var open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '12px';
  });
}
