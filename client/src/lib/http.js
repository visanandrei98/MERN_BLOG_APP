import axios from 'axios';

const domain ='http://localhost:4000/api/posts';

const http = (
  url,
  {
    method = 'get',
    data = undefined,
  },
) => {
  return axios({
    url: domain + url,
    method: method,
    data,
  });
};
/* var deleteDatas = (
  url,
  {
    method = 'delete',
    data = undefined,
  },
) => {
  return axios({
    url: domain,
    method: method,
    data,
  });
}; */

const get = (url, opts = {}) => http(url, { ...opts });
const post = (url, opts = {}) => http(url, { method: 'POST', ...opts });
const put = (url, opts = {}) => http(url, { method: 'PUT', ...opts });
const deleteData = (url, opts = {}) => http(url, { method: 'DELETE', ...opts });

const methods = {
  get,
  post,
  put,
  delete: deleteData,
};

export default methods;
