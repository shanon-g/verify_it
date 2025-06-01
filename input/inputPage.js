document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  const textareas = {
    fact: document.getElementById('input-text'),
    plagiarism: document.getElementById('input-text-plagiarism'),
    historical: document.getElementById('input-text-historical'),
  };
  const charCounter = document.getElementById('char-counter');
  const fileInput = document.getElementById('file-upload');
  const scanBtn = document.getElementById('scan-btn');

  let activeTab = 'fact';

  function updateCharCount() {
    const len = textareas[activeTab].value.length;
    charCounter.textContent = `${len}/10000`;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.classList.contains('active')) return;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      tabContents.forEach(c => (c.style.display = 'none'));

      activeTab = tab.dataset.tab;
      document.getElementById(activeTab).style.display = 'block';

      updateCharCount();
      textareas[activeTab].focus();
    });
  });

  Object.values(textareas).forEach(textarea => {
    textarea.addEventListener('input', updateCharCount);
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      textareas[activeTab].value = `Uploaded file: ${file.name}`;
      updateCharCount();
    }
    e.target.value = '';
  });

  scanBtn.addEventListener('click', () => {
    const inputText = textareas[activeTab].value.trim();
    if (!inputText) {
      alert('Please enter a statement or upload a file before scanning.');
      return;
    }
    // Redirect based on active tab
    switch(activeTab) {
      case 'fact':
        window.location.href = 'factChecker.html';
        break;
      case 'plagiarism':
        window.location.href = 'plagiarismChecker.html';
        break;
      case 'historical':
        window.location.href = 'historicalChecker.html';
        break;
      default:
        alert('Unknown tab selected');
    }
  });

  textareas[activeTab].focus();
  updateCharCount();
});
