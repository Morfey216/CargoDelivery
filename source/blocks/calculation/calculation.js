export default () => {
  const form = document.querySelector('.js-ccf');
  if (!form) return;

  $('form').submit(function () { // Change
    const th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail/mail.php', // Change
      data: th.serialize(),
    }).done(() => {
      alert('Thank you!');
      setTimeout(() => {
        // Done Functions
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
};
