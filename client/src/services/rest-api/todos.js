import apiRequest from "services/api-request";
import ENDPOINTS from "services/rest-endpoints";

export const getTodos = (params = {}) =>
  apiRequest({
    method: "get",
    url: ENDPOINTS.TODOS,
    params: params,
  });

export const getTodo = (userId, params = {}) =>
  apiRequest({
    method: "get",
    url: `${ENDPOINTS.TODOS}${userId}/`,
    params: params,
  });

export const postTodo = (data) =>
  apiRequest({
    method: "post",
    url: ENDPOINTS.TODOS,
    data: data,
  });

export const patchTodo = (data) =>
  apiRequest({
    method: "patch",
    url: `${ENDPOINTS.TODOS}${data?.id}/`,
    data: data,
  });
export const deleteTodo = (ID) =>
  apiRequest({
    method: "delete",
    url: `${ENDPOINTS.TODOS}${ID}/`,
  });
