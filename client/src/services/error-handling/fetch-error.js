import { showApiError } from "helpers/sweet-alert";

const handleFetchError = (error) => {
  const { status_code, message } = error?.info || {};

  switch (status_code) {
    case 400:
      showApiError({ title: "Bad Request!", text: message });
      break;
    case 401:
      showApiError({ title: "Unauthorized!", text: message });
      break;
    case 402:
      showApiError({ title: "Payment required!", text: message });
      break;
    case 403:
      showApiError({ title: "Forbidden!", text: message });
      break;
    case 404:
      showApiError({ title: "Resource unavailable!", text: message });
      break;
    case 405:
      showApiError({ title: "Request method not allowed.", text: message });
      break;
    case 408:
      showApiError({ title: "Request Timeout.", text: message });
      break;
    case 409:
      showApiError({ title: "Conflict!", text: message });
      break;
    case 500:
      showApiError({ title: "Internal server error.", text: message });
      break;
    case 503:
      showApiError({ title: "Service Unavailable.", text: message });
      break;
    default:
      showApiError({
        title: "Unknown Error.",
        text: "Please contact to admin.",
      });
  }
};

export default handleFetchError;
