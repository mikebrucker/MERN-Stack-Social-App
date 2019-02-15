const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "NaMe fiELd iS rEqUIrEd";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "eMaiL fiELd iS rEqUIrEd";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "eMaiL iS iNvALid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "pAssWoRd fiELd iS rEqUIrEd";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "CoNfiRM pAssWoRd fiELd iS rEqUIrEd";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "pAssWoRd mUst bE At LeAst 6 chArACtErs";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "pAssWoRds muST mAtCh";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
