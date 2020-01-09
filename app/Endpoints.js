const BASE_URL = 'https://reqres.in';
const Endpoints = {
  login: `${BASE_URL}/api/login`,
  getTable: `${BASE_URL}/api/users?:pageNumber`,
  userDetail: `${BASE_URL}/api/users/:id`,
};
export default Endpoints;
