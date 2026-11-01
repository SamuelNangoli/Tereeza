(() => {
  'use strict';
  if (document.body.dataset.page === 'home') {
    const oldSections = new Map([['#how-it-works', 'how-it-works.html'], ['#about', 'meet-tereeza.html']]);
    if (oldSections.has(location.hash)) { location.replace(oldSections.get(location.hash)); return; }
  }
  const themeToggle = document.querySelector('.theme-toggle');
  const systemTheme = matchMedia('(prefers-color-scheme: light)');
  const applyTheme = theme => {
    document.documentElement.dataset.theme = theme;
    const label = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
    themeToggle.setAttribute('aria-label', label);
    themeToggle.title = label;
    document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#f2faf6' : '#070d0c';
  };
  applyTheme(document.documentElement.dataset.theme);
  themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(theme);
    try { localStorage.setItem('tereeza-theme', theme); } catch (_) {}
  });
  systemTheme.addEventListener('change', e => {
    let saved;
    try { saved = localStorage.getItem('tereeza-theme'); } catch (_) {}
    if (saved !== 'light' && saved !== 'dark') applyTheme(e.matches ? 'light' : 'dark');
  });

  const menu = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('navigation');
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
  };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('is-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  navigation.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('click', e => { if (!e.target.closest('.topbar')) closeMenu(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const shouldFocus = navigation.contains(document.activeElement);
      closeMenu();
      if (shouldFocus) menu.focus();
    }
  });
  matchMedia('(min-width: 901px)').addEventListener('change', e => { if (e.matches) closeMenu(); });

  const filters = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('[data-group]')];
  filters.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach(b => {
      const active = b === button;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => { card.hidden = selected !== 'all' && selected !== card.dataset.group; });
    const count = cards.filter(card => !card.hidden).length;
    document.querySelector('.services-detailed').classList.toggle('has-single-service', count === 1);
    document.getElementById('service-count').textContent = `${count} service${count === 1 ? '' : 's'}`;
  }));

  const form = document.getElementById('inquiry-form');
  if (form) {
    const service = document.getElementById('service');
    const choices = new Map([
      ['os', 'OS installation & recovery'],
      ['networking', 'Networking & troubleshooting'],
      ['wifi', 'Networking & troubleshooting'],
      ['hardware', 'Hardware troubleshooting'],
      ['setup', 'Device setup & tune-ups'],
      ['software', 'Software development & maintenance']
    ]);
    const inquiryParams = new URLSearchParams(location.search);
    const selected = choices.get(inquiryParams.get('service'));
    if (selected) service.value = selected;
    const teamMembers = new Map([['matthew-mukasa', 'Matthew Mukasa']]);
    let selectedMember = teamMembers.get(inquiryParams.get('team'));
    const teamPreference = document.getElementById('team-preference');
    if (selectedMember) {
      document.getElementById('team-preference-text').textContent = 'Team preference: ' + selectedMember;
      teamPreference.hidden = false;
    }
    document.getElementById('clear-team-preference').addEventListener('click', () => {
      selectedMember = undefined;
      teamPreference.hidden = true;
      document.getElementById('form-status').hidden = true;
      const url = new URL(location.href);
      url.searchParams.delete('team');
      history.replaceState(null, '', url);
    });
    form.addEventListener('input', () => { document.getElementById('form-status').hidden = true; });
    form.addEventListener('submit', e => {
      const device = document.getElementById('device');
      const problem = document.getElementById('problem');
      for (const field of [device, problem]) {
        if (field.value.trim().length < (field === problem ? 5 : 1)) {
          e.preventDefault();
          field.setCustomValidity(field === problem ? 'Please describe the problem in at least 5 characters.' : 'Please enter your device or system.');
          field.reportValidity();
          field.addEventListener('input', () => field.setCustomValidity(''), { once: true });
          return;
        }
      }
      const name = document.getElementById('customer-name').value.trim();
      const message = ['Hi Tereeza! I’d like some tech help.', name ? 'Name: ' + name : null, 'Service: ' + service.value, selectedMember ? 'Preferred team member: ' + selectedMember : null, 'Device/system: ' + device.value.trim(), 'Problem: ' + problem.value.trim(), '', 'Please let me know the next steps and the cost.'].filter(line => line !== null).join('\n');
      document.getElementById('whatsapp-message').value = message;
      document.getElementById('whatsapp-fallback').href = 'https://wa.me/256753480959?text=' + encodeURIComponent(message);
      document.getElementById('form-status').hidden = false;
    });
  }
  document.getElementById('year').textContent = new Date().getFullYear();
})();
