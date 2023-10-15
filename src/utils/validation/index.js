import LIVR from "livr";
import extraRules from "livr-extra-rules";

import rules from "./rules";
import REQUIRED_ERRORS from "./errors";

LIVR.Validator.registerDefaultRules(extraRules);
LIVR.Validator.defaultAutoTrim(true);

export function decodeErrorCode(code, field = "") {
  switch (code) {
    case "REQUIRED": {
      const errorMessage = field && REQUIRED_ERRORS[field];

      return errorMessage || "Value is required";
    }

    default: {
      return code;
    }
  }
}

function decodeErrorObject(errors) {
  const decodedErrors = { ...errors };

  Object.keys(decodedErrors).forEach((field) => {
    if (decodedErrors[field]) {
      const errorField = field.replace("data/", "");

      decodedErrors[errorField] = decodeErrorCode(
        decodedErrors[field],
        errorField,
      );
    }
  });

  return decodedErrors;
}

function validate({ rule, data, onSuccess, onError }) {
  const validator = new LIVR.Validator(rule);
  const validData = validator.validate(data);

  if (validData) {
    if (onSuccess) onSuccess(validData);
  } else {
    const decodedErrors = decodeErrorObject(validator.getErrors());

    if (onError) {
      onError(decodedErrors);
    }
  }
}

export function validateComment(args) {
  return validate({ rule: rules.comment, ...args });
}

export function mapErrors(error) {
  const mapedErrors = {};

  error.errors?.forEach((element) => {
    mapedErrors[element.field] = element.message;
  });

  return mapedErrors;
}
