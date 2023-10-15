function showPassword() {
  const passwordInput = document.querySelector('#password');
  const showPassword = document.querySelector('#show-password');

  if (showPassword) {
    showPassword.addEventListener('click', function () {
      passwordInput.type =
        passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.focus();
    });
  }
}

export default showPassword;
