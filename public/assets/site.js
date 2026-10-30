(() => {
      'use strict';
      if (document.body.dataset.page === 'home') {
        const oldSections = new Map([['#services', 'services.html'], ['#how-it-works', 'how-it-works.html'], ['#about', 'meet-tereeza.html']]);
        const destination = oldSections.get(location.hash);
        if (destination) { location.replace(destination); return; }
      }
      const themeToggle = document.querySelector('.theme-toggle');
      const systemTheme = matchMedia('(prefers-color-scheme: light)');
      const applyTheme = theme => {
        document.documentElement.dataset.theme = theme;
        const label = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
        themeToggle.setAttribute('aria-label', label);
        themeToggle.title = label;
        document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#f5f4ee' : '#111413';
      };
      applyTheme(document.documentElement.dataset.theme);
      themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
        applyTheme(theme);
        try { localStorage.setItem('tereeza-theme', theme); } catch (_) {}
      });
      systemTheme.addEventListener('change', event => {
        let saved;
        try { saved = localStorage.getItem('tereeza-theme'); } catch (_) {}
        if (saved !== 'light' && saved !== 'dark') applyTheme(event.matches ? 'light' : 'dark');
      });
      const menu = document.querySelector('.menu-toggle');
      const navigation = document.getElementById('navigation');
      const closeMenu = () => { navigation.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); };
      menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('is-open', open); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
      navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
      document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); if (document.activeElement && navigation.contains(document.activeElement)) menu.focus(); } });
      const form = document.getElementById('inquiry-form');
      if (form) {
      const service = document.getElementById('service');
      const serviceChoices = new Map([
        ['os', 'OS installation & recovery'],
        ['wifi', 'Wi-Fi & connectivity'],
        ['hardware', 'Hardware troubleshooting'],
        ['setup', 'Device setup & tune-ups']
      ]);
      const selectedService = serviceChoices.get(new URLSearchParams(location.search).get('service'));
      if (selectedService) service.value = selectedService;
      form.addEventListener('input', () => { document.getElementById('form-status').hidden = true; });
      form.addEventListener('submit', event => {
        const device = document.getElementById('device');
        const problem = document.getElementById('problem');
        for (const field of [device, problem]) {
          if (field.value.trim().length < (field === problem ? 5 : 1)) { event.preventDefault(); field.setCustomValidity(field === problem ? 'Please describe the problem in at least 5 characters.' : 'Please enter your device.'); field.reportValidity(); field.addEventListener('input', () => field.setCustomValidity(''), { once: true }); return; }
        }
        const name = document.getElementById('customer-name').value.trim();
        const message = ['Hi Tereeza! I’d like some tech help.', name ? 'Name: ' + name : '', 'Service: ' + service.value, 'Device: ' + device.value.trim(), 'Problem: ' + problem.value.trim(), '', 'Please let me know the next steps and the cost.'].filter((line, i) => line || i > 4).join('\n');
        document.getElementById('whatsapp-message').value = message;
        document.getElementById('whatsapp-fallback').href = 'https://wa.me/256753480959?text=' + encodeURIComponent(message);
        document.getElementById('form-status').hidden = false;
      });
      }
      document.getElementById('year').textContent = new Date().getFullYear();
    })();
