/* 站点交互：主题切换、阅读进度、目录高亮、回到顶部。无依赖。 */
(function () {
  var html = document.documentElement;

  // --- 主题：默认跟随系统，点按钮后记在 localStorage ---
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved) html.setAttribute('data-theme', saved);

  var btn = document.getElementById('theme');
  function current() {
    var set = html.getAttribute('data-theme');
    if (set) return set;
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function paint() {
    if (btn) btn.textContent = current() === 'dark' ? '☀' : '☾';
  }
  if (btn) {
    paint();
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      paint();
    });
  }

  // --- 滚动相关：进度条、回到顶部、目录高亮 ---
  var bar = document.getElementById('progress');
  var top = document.getElementById('top');
  var links = [].slice.call(document.querySelectorAll('.toc a'));
  var heads = [].slice.call(document.querySelectorAll('h2[id], h3[id]'));
  var dragging = false;

  function update() {
    var el = html;
    var max = el.scrollHeight - el.clientHeight;
    var y = el.scrollTop || document.body.scrollTop;
    if (bar) bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    if (top) top.classList.toggle('show', y > 600);

    if (heads.length && links.length) {
      var cur = null;
      for (var i = 0; i < heads.length; i++) {
        if (heads[i].getBoundingClientRect().top <= 140) cur = heads[i].id;
      }
      for (var j = 0; j < links.length; j++) {
        links[j].classList.toggle('active', links[j].getAttribute('href') === '#' + cur);
      }
    }
  }

  addEventListener('scroll', function () {
    if (dragging) return;
    dragging = true;
    requestAnimationFrame(function () { dragging = false; update(); });
  }, { passive: true });
  addEventListener('resize', update);

  if (top) {
    top.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  update();
})();
