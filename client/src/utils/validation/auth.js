const isEmpty = (item) => {
  if (!(typeof item === 'object')) {
    throw new TypeError('invalid arguement type. Provide array or object');
  }
  if (Array.isArray(item)) {
    return item.length === 0;
  }
  return Object.keys(item).length === 0;
};

const regNoRegex = /^[0-9]{4}\-[A-Za-z]{2}\-[0-9]+$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateSignUp = (state) => {
  let errors = '';
  if (!state.email.trim()) {
    errors = 'Username is required';
  } else if (state.email.charAt(0) === ' ') {
    errors = 'Username cannot begin with space characters';
  } else if (state.name.charAt(state.email.length - 1) === ' ') {
    errors = 'Username cannot end with space characters';
  }
  if (!regNoRegex.test(state.registrationNo.trim())) {
    errors = 'Invalid registration no';
  }
  if (!emailRegex.test(state.email.trim())) {
    errors = 'Invalid email';
  } else if (!state.email.trim()) {
    errors = 'Email is required';
  }
  if (!state.password.trim()) {
    errors = 'Password is required';
  }
  if (!state.confirmPassword.trim()) {
    errors = 'Password confirmation is required';
  } else if (!(state.password === state.confirmPassword)) {
    errors = 'Passwords do not match';
  }
  let isValid = true;

  if(errors) isValid = false;

  return {
    errors,
    isValid
  };
};


export const validateLogin = (state) => {
  const errors = {};
  if (!state.email.trim()) {
    errors.email = 'Username is required';
  }
  if (!state.password.trim()) {
    errors.password = 'Password is required';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
