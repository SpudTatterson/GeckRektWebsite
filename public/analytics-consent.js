(function () {
  var key = 'geckrekt-analytics-consent'
  var choice = localStorage.getItem(key)

  function loadAnalytics () {
    if (window.__geckAnalyticsLoaded) return
    window.__geckAnalyticsLoaded = true
    window.dataLayer = window.dataLayer || []
    window.gtag = function () { window.dataLayer.push(arguments) }
    window.gtag('js', new Date())
    window.gtag('config', 'G-2M0CDTBWK4')
    var script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-2M0CDTBWK4'
    document.head.appendChild(script)
  }

  function setChoice (value) {
    localStorage.setItem(key, value)
    document.documentElement.classList.remove('consent-open')
    var banner = document.getElementById('consent-banner')
    if (banner) banner.remove()
    if (value === 'accepted') loadAnalytics()
  }

  window.geckrektAnalytics = {
    event: function () {
      if (window.gtag) window.gtag.apply(window, arguments)
    },
    reset: function () {
      localStorage.removeItem(key)
      location.reload()
    }
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a.social')
    if (!link) return
    var href = link.getAttribute('href') || ''
    var network = href === '/i' ? 'instagram' : href === '/y' ? 'youtube' : href === '/t' ? 'tiktok' : href.indexOf('x.com') >= 0 ? 'x' : href === '/' ? 'website' : ''
    if (network) window.geckrektAnalytics.event('event', network === 'website' ? 'website_click' : 'social_click', { network: network, location: 'join' })
  })
  document.addEventListener('submit', function (event) {
    var form = event.target
    if (form && form.action && form.action.indexOf('sibforms.com') >= 0) {
      window.geckrektAnalytics.event('event', 'mailing_list_signup', { location: location.pathname })
    }
  })

  if (choice === 'accepted') loadAnalytics()
  if (choice) return

  document.documentElement.classList.add('consent-open')
  var banner = document.createElement('aside')
  banner.id = 'consent-banner'
  banner.setAttribute('role', 'dialog')
  banner.setAttribute('aria-labelledby', 'consent-title')
  banner.innerHTML = '<div><strong id="consent-title">Privacy choices</strong><p>We use optional analytics to understand visits and improve GECK REKT. You can accept or reject it. <a href="/privacy">Read our privacy policy</a>.</p></div><div class="consent-actions"><button type="button" data-consent="reject">Reject</button><button type="button" class="consent-accept" data-consent="accept">Accept analytics</button></div>'
  document.body.appendChild(banner)
  banner.addEventListener('click', function (event) {
    var button = event.target.closest('[data-consent]')
    if (!button) return
    setChoice(button.getAttribute('data-consent') === 'accept' ? 'accepted' : 'rejected')
  })
}())
