(() => {
  'use strict';

  // Keep local previews and non-production copies out of the site's count.
  if (!['1nrobotics.com', 'www.1nrobotics.com'].includes(location.hostname)) return;
  const output = document.querySelector('[data-site-views]');
  const unavailable = document.querySelector('[data-stats-unavailable]');
  if (!output) return;

  const callback = `siteViews_${Math.random().toString(36).slice(2)}`;
  const script = document.createElement('script');
  let settled = false;
  let timer;

  const finish = (value) => {
    if (settled) return;
    settled = true;
    clearTimeout(timer);
    const valid = Number.isSafeInteger(value) && value >= 0;
    output.textContent = valid ? new Intl.NumberFormat('en').format(value) : '—';
    if (unavailable) unavailable.hidden = valid;
    // A response arriving after timeout can call this harmless function.
    window[callback] = () => {};
  };

  window[callback] = (data) => finish(data?.site_pv);
  script.src = `https://busuanzi.ibruce.info/busuanzi?jsonpCallback=${callback}`;
  script.async = true;
  // The provider needs only the site origin for the site-wide PV count.
  script.referrerPolicy = 'strict-origin-when-cross-origin';
  script.onerror = () => finish(undefined);
  timer = setTimeout(() => finish(undefined), 8000);
  script.onload = () => {
    script.remove();
    delete window[callback];
  };
  document.head.appendChild(script);
})();
