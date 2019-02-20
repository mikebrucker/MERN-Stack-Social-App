const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 2, max: 800 })) {
    errors.text = "Post must be between 2 and 800 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "TeXt fiELd iS rEqUIrEd";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
