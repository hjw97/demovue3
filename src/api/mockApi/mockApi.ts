import http from "../http.js";
enum Api {
  GET_PROJECT_LIST = '/api/mockGetList',
}
export const findAll = ()=>{
  return http({
    url: Api.GET_PROJECT_LIST,
    method: "get",
  });
}
