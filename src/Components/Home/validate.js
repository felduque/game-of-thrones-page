export default function validate(inputs) {
  const errors = {};

  const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const regexPass = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,12}$"
  );

  if (!regexEmail.test(inputs.username)) {
    errors.username = "Name must be a valid email addres";
  }

  if (!inputs.username) {
    errors.username = 'Add your userName'
  }

  if(inputs.username.length > 35){
    errors.username = 'Max length 35'
  }

  if(regexPass.test(inputs.password)) {
    errors.password = 'add password 8-12 characters'
  }

  return errors;

}
