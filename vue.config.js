module.exports = {
  pages: {
    index: {
      entry: 'src/geck-rekt/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Geck REKT | Multiplayer Party Game with Guns & Tongues'
    },
    checkEmail: {
      entry: 'src/geck-rekt/confirmation.ts',
      template: 'public/confirmation.html',
      filename: 'check-email/index.html',
      title: 'Check Your Email — Geck REKT'
    },
    confirmed: {
      entry: 'src/geck-rekt/confirmation.ts',
      template: 'public/confirmation.html',
      filename: 'confirmed/index.html',
      title: 'You’re In — Geck REKT'
    }
  }
}
