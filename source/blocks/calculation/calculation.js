export default () => {
  const form = document.querySelector('.js-ccf');
  if (!form) return;

  const inputs = form.querySelectorAll('input');
  const desc = form.querySelector('textarea');
  const fileUploadBtn = form.querySelector('.calculation__file-input');
  const upload = form.querySelector('.calculation__upload-message');

  function clearData() {
    inputs.forEach((it) => {
      it.value = '';
    });

    desc.value = '';

    $('.calculation__file-input span').html('Загрузить файл');
    fileUploadBtn.classList.remove('uploaded');

    $('.js-ccf-submit').prop('disabled', false);
  }

  function createMessage(mess) {
    upload.textContent = mess;

    setTimeout(() => {
      upload.textContent = '';
    }, 3000);
  }

  if (fileUploadBtn) {
    fileUploadBtn.addEventListener('change', () => {
      $('.calculation__file-input span').html($('#ccf-file').val() ? $('#ccf-file').val() : 'Загрузить файл');

      if ($('#ccf-file').val()) {
        fileUploadBtn.classList.add('uploaded');
      } else {
        fileUploadBtn.classList.remove('uploaded');
      }
    });
  }

  form.addEventListener('submit', (evt) => {
    const http = new XMLHttpRequest();
    evt.preventDefault();
    http.open('POST', 'mail/mail.php', true);
    http.onreadystatechange = () => {
      if (http.readyState == 4 && http.status == 200) {
        clearData();
        createMessage(http.responseText);
      }
    };

    http.onerror = () => {
      clearData();
      alert('Ошибка, попробуйте еще раз');
    };

    $('.js-ccf-submit').prop('disabled', true);
    http.send(new FormData(form));
  }, false);
};
