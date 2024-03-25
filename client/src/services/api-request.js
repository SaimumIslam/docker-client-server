import { hasParam, isObject } from "utils/check";

const formatErrorResponse = (error_response) => {
  if (isObject(error_response)) {
    const { value, message } = error_response || {};
    return { status_code: value, message: message };
  }
};

const apiRequest = async ({ method, url, params, data }) => {
  const query_params = new URLSearchParams(params);

  const api_route = hasParam(params) ? `${url}?${query_params}` : url;
  const base_url = `${import.meta.env.VITE_SERVER_DOMAIN}${api_route}`;

  const controller = new AbortController();
  const signal = controller.signal;

  const api_response = await fetch(base_url, {
    method: method,
    signal: signal,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // const timout_id = setTimeout(() => controller.abort(), timeout);

  const response_text = await api_response.text();
  const response_data =
    response_text === ""
      ? { status_code: api_response.status, message: api_response.statusText }
      : JSON.parse(response_text);
  // const response_data = await api_response.json();

  // clearTimeout(timout_id);

  if (api_response.ok) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.info("success", response_data);
    }
    return response_data;
  } else {
    const error_resoponse = formatErrorResponse(response_data);
    const error = new Error("An error occurred while interacting with api.");
    error.info = {
      status_code: error_resoponse.status_code || api_response.status,
      message: error_resoponse.message || api_response.statusText,
    };

    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.info("error", error.info);
    }
    return Promise.reject(error);
  }
};

export default apiRequest;
