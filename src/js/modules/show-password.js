function showPassword() {
  const passwordInput = document.querySelector('#password');

  if (passwordInput) {
    const showPassword = document.querySelector('#show-password');

    showPassword.addEventListener('click', function () {
      passwordInput.type =
        passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.focus();
    });
  }
}

export default showPassword;
