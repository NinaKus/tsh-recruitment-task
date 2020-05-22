const validateProfile = value => {
  const pattern = /^[a-zA-Z0-9_-]*$/;

  return !(!value.length || !pattern.test(value));
};

export { validateProfile };