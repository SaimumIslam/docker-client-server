import { isObject } from "utils/check";

import handleFetchError from "./fetch-error";

const handleFormError = (error, setFieldError) => {
  const { status_code, message } = error?.info || {};

  if (status_code === 400 && isObject(message)) {
    for (let [key, value] of Object.entries(message)) {
      setFieldError(key, {
        type: "manual",
        message: value,
      });
    }
  } else handleFetchError(error);
};

export default handleFormError;
