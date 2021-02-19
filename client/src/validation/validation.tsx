export const passValidation = (password) => {
    if (password.trim() === '') {
       return 'Password is required';
    }
    if (password.trim().length < 6) {
      return ('Password needs to be at least six characters');
    }
    return '';
  };
  
  
  
export const emailValidation = (email) => {
    if ( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email,)) {
      return '';
    }
    if (email.trim() === '') {
      return 'Email is required';
    }
    return 'Please enter a valid email';
  };

  