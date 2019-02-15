const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "eMaiL iS iNvALid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "eMaiL fiELd iS rEqUIrEd";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "pAssWoRd fiELd iS rEqUIrEd";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
