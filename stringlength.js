exports.stringLength = (string) => {
  const length = string.length;
  if (length < 1 || length > 10) {
    return 'The string must be between 1 and 10 characters long';
  } else {
    return length; 
  }
};

