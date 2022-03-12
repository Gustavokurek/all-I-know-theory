import isEmail from 'validator/lib/isEmail';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;
const error = 'show-error-message';
form.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  // cuidar com this somente, se a função for arrow vai ser o e this do escopo acima
  // preferir usar função normal quando for usar this
  hideErrorText(this);
  checkEmptyField(username, email, password, password2);
  checkEmail(email);
  checkPassword(password, password2);
  if (checkErrorsToSend(this)) form.submit();
});

function checkEmptyField(...campos: HTMLInputElement[]): void {
  campos.forEach((campo) => {
    if (!campo.value) showErrorMessage(campo, 'campo obrigatório');
  });
}
function checkEmail(email: HTMLInputElement) {
  if (!isEmail(email.value)) showErrorMessage(email, 'Email inválido');
}

function checkPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value)
    showErrorMessage(password, 'Senhas Diferentes');
  if (password.value !== password2.value)
    showErrorMessage(password2, 'Senhas Diferentes');
}

function hideErrorText(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + error)
    .forEach((item) => item.classList.remove(error));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formField = input.parentElement as HTMLDivElement;
  const errorMessage = formField.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formField.classList.add(error);
}

function checkErrorsToSend(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + error).forEach(() => (send = false));
  return send;
}
