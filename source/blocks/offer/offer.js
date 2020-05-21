/* global Cleave */

export default () => {
  const form = document.querySelector('.js-ocf');
  if (!form) return;

  const phoneInput = form.querySelector('.js-ocf-phone input');
  const nameInput = form.querySelector('.js-ocf-name input');
  const mailInput = form.querySelector('.js-ocf-email input');

  const cleave = new Cleave(phoneInput, {
    numericOnly: true,
    prefix: '+375',
    noImmediatePrefix: true,
    delimiters: [' ( ', ' ) ', ' - ', ' - '],
    blocks: [4, 2, 3, 2, 2],
  });

  // +7 ( 337 ) 777 - 77 - 77   => length = '24';
  // +375 ( 29 ) 777 - 77 - 77   => length = '25';

  function inputKeyCheck(evt) {
    if (!evt.key) return;
    const en = new RegExp('^[a-zA-Z ]+$');
    const ru = new RegExp('^[а-яА-Я ]+$');
    if (!en.test(evt.key) && !ru.test(evt.key)) {
      evt.preventDefault();
    }
  }

  function clearInputFields() {
    phoneInput.value = '';
    nameInput.value = '';
    mailInput.value = '';
  }

  nameInput.addEventListener('keypress', inputKeyCheck);
};
