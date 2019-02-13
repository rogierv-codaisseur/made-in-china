import request from 'superagent';

export const LOGIN = 'LOGIN';

const baseUrl = 'http://localhost:4000';

const loginSuccess = jwt => ({
  type: LOGIN,
  jwt
});

export const login = (emailAddress, password) => dispatch => {
  request
    .post(`${baseUrl}/logins`)
    .send({ emailAddress, password })
    .then(response => dispatch(loginSuccess(response.body.jwt)))
    .catch(console.error);
};

export const register = (emailAddress, password) => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send({ emailAddress, password })
    .then(_ => dispatch(login(emailAddress, password)))
    .catch(console.error);
};
