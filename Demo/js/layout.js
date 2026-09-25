// Header, footer y modal de consulta, compartidos por todas las páginas.
(function () {
  const page = document.body.dataset.page || '';
  const bare = document.body.hasAttribute('data-bare'); // páginas de login / sign up

  const link = (href, label, key) =>
    `<a href="${href}"${page === key ? ' class="active" aria-current="page"' : ''}>${label}</a>`;

  const header = `
  <header class="site-header">
    <div class="wrap nav">
      <a class="nav-logo" href="index.html" aria-label="Bamberg Security — Home">
        <img src="assets/logo/bamberg-security-horizontal-positivo.svg" alt="Bamberg Security">
      </a>
      <button class="menu-toggle" aria-label="Menu" aria-expanded="false">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
      <nav class="nav-links">
        ${link('summits.html', 'Summits', 'summits')}
        <div class="nav-item has-sub">
          <a href="about.html"${page === 'about' || page === 'team' ? ' class="active"' : ''}>About us
            <svg class="caret" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </a>
          <div class="submenu">
            <a href="about.html">About us</a>
            <a href="team.html">Team</a>
          </div>
        </div>
        ${link('photos.html', 'Photos', 'photos')}
        <div class="nav-actions">
          <a class="btn btn-purple" href="signup.html">Sign up</a>
          <a class="btn btn-outline" href="login.html">Login</a>
          <button class="lang" type="button" title="Language" aria-label="Language">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>
          </button>
        </div>
      </nav>
    </div>
    ${bare ? '' : `
    <div class="searchbar">
      <div class="wrap">
        <form class="search" action="summits.html" role="search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <input type="search" name="q" placeholder="Search event..." aria-label="Search event">
        </form>
        <div class="search-links">
          <a href="summits.html">View upcoming events</a>
          <a href="summits.html?tab=past">View past events</a>
        </div>
      </div>
    </div>`}
  </header>`;

  const footer = `
  <footer class="site-footer">
    <div class="wrap">
      <div class="brand"><strong>Bamberg Security</strong> · <span class="data">2026</span> · All rights reserved</div>
      <nav>
        <a href="terms.html">Terms</a>
        <a href="#" aria-label="LinkedIn"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6zM8 19H5V9.5h3zM6.5 8.2a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5S12.7 13 12.7 14.3V19h-3V9.5h2.8v1.3c.4-.8 1.4-1.5 2.9-1.5 3 0 3.6 2 3.6 4.6z"/></svg></a>
      </nav>
    </div>
  </footer>`;

  const modal = `
  <div class="modal" id="inquiry" hidden>
    <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="inq-title">
      <button class="modal-close" type="button" aria-label="Close">×</button>
      <span class="label">Explore opportunities</span>
      <h3 class="heading" id="inq-title">Let's talk</h3>
      <p>Tell us about your organization and how you would like to collaborate with Bamberg Security.</p>
      <form class="form">
        <label>First name<input required></label>
        <label>Last name<input required></label>
        <label class="full">Work email<input type="email" required></label>
        <label>Organization<input></label>
        <label>Job title<input></label>
        <label class="full">Interest
          <select>
            <option>Attend a summit</option>
            <option>Speak at a summit</option>
            <option>Partnership / sponsorship</option>
            <option>Government &amp; public sector collaboration</option>
            <option>Other</option>
          </select>
        </label>
        <label class="full">Message<textarea rows="4"></textarea></label>
        <button class="btn btn-purple" type="submit">Send inquiry</button>
      </form>
      <div class="form-ok" hidden>
        <h3 class="heading">Thank you!</h3>
        <p>Our team will get in touch with you shortly.</p>
      </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer + modal);

  // Menú móvil
  const menuBtn = document.querySelector('.menu-toggle');
  menuBtn.addEventListener('click', () => {
    const open = document.querySelector('.nav-links').classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });

  // Modal "Explore opportunities"
  const dlg = document.getElementById('inquiry');
  const close = () => { dlg.hidden = true; };
  document.addEventListener('click', e => {
    const opener = e.target.closest('[data-open-inquiry]');
    if (opener) { e.preventDefault(); dlg.hidden = false; dlg.querySelector('input').focus(); }
  });
  dlg.querySelector('.modal-close').addEventListener('click', close);
  dlg.addEventListener('click', e => { if (e.target === dlg) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  // Los formularios no envían nada: solo muestran el mensaje de confirmación
  document.querySelectorAll('form.form').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    f.hidden = true;
    const ok = f.parentElement.querySelector('.form-ok');
    if (ok) ok.hidden = false;
  }));
})();
