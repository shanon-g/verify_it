const form = document.getElementById('feedbackForm');
const titleInput = document.getElementById('issueTitle');
const descInput = document.getElementById('issueDescription');
const successMessage = document.getElementById('successMessage');
const uploadSection = document.getElementById('uploadSection');
const fileInput = document.getElementById('fileInput');
const uploadText = document.getElementById('uploadText');
const cameraIcon = document.querySelector('.camera-icon');
const errorAlert = document.getElementById('errorAlert');
const errorMessage = document.getElementById('errorMessage');
const closeError = document.getElementById('closeError');

closeError.addEventListener('click', () => {
  errorAlert.style.display = 'none';
});

function showError(message) {
  errorMessage.textContent = message;
  errorAlert.style.display = 'block';
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const description = descInput.value.trim();

  if (!title || !description) {
    showError('Please fill in both the issue title and description.');
    return;
  }

  if (description.length < 50) {
    showError('Description is too short. Minimum 50 characters required.');
    return;
  }

  if (description.length > 80) {
    showError('Description is too long. Maximum 80 characters allowed.');
    return;
  }

  // kalau valid, sembunyiin alert error
  errorAlert.style.display = 'none';

  successMessage.style.display = 'block';
  form.style.display = 'none';
  form.reset();
});

uploadSection.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    uploadText.textContent = fileInput.files[0].name;
    if (cameraIcon) {
      cameraIcon.style.display = 'none';
    }
  } else {
    uploadText.textContent = "Add photo (optional)";
    cameraIcon.style.display = 'block';
  }
});

uploadSection.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadSection.style.borderColor = '#2EC4B6';
});

uploadSection.addEventListener('dragleave', (e) => {
  e.preventDefault();
  uploadSection.style.borderColor = '#ccc';
});

uploadSection.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadSection.style.borderColor = '#ccc';

  const files = e.dataTransfer.files;
  if (files.length > 0) {
    fileInput.files = files;
    uploadText.textContent = files[0].name;
    if (cameraIcon) {
      cameraIcon.style.display = 'none';
    }
  }
});
