const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "ScHool fiELd iS rEqUIrEd";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "dEgRee fiELd iS rEqUIrEd";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "FieLD oF StUdy fiELd iS rEqUIrEd";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "fRom dAtE fiELd iS rEqUIrEd";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
