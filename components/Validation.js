export const validateEmail = (email) => {
    // Check if the email has a valid format using regular expression
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  
  export const validatePhoneNumber = (number) => {
    // Check if the phone number has 10 digits
    return /^\d{10}$/.test(number);
  };
  