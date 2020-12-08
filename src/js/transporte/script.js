$('#form_login').submit(function (event) {
  event.preventDefault();

  let email = $('#email').val();
  let password = $('#password').val();

  console.log(email, password);
});
