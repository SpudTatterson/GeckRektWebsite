module.exports = {
  pages: {
    index: {
      entry: 'src/geck-rekt/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'GECK REKT — Coming Soon'
    },
    checkEmail: {
      entry: 'src/geck-rekt/confirmation.ts',
      template: 'public/confirmation.html',
      filename: 'check-email/index.html',
      title: 'Check Your Email — GECK REKT'
    },
    confirmed: {
      entry: 'src/geck-rekt/confirmation.ts',
      template: 'public/confirmation.html',
      filename: 'confirmed/index.html',
      title: 'You’re In — GECK REKT'
    }
  }
}
