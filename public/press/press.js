const copyButton = document.getElementById('copy-description');
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(document.getElementById('short-description').textContent);
      status.textContent = 'Description copied.';
    } catch (_) {
      status.textContent = 'Select the description above to copy it.';
    }
  });
}
