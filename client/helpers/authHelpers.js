import axios from 'axios';
import { hashHistory } from 'react-router';
import * as actions from '../actions/index.js';
import * as snackbar from './snackbarHelpers.js';

export const handleLoginOpen = (dispatch) => {
  dispatch(actions.logInDialog({ login: true }));
};

// close login popup
export const handleLoginClose = (dispatch) => {
  dispatch(actions.logInDialog({ login: false }));
};

export const reloadResources = (search, dispatch) => {
  handleSearch(search.query, dispatch); // TODO: handleSearch is not defined
};

// handle request for authentication
export const login = (e, user, search, dispatch) => {
  e.preventDefault();
  handleLoginClose(dispatch);
  axios.post('/auth/login', user)
    .then((response) => {
      const userData = response.data;
      // change the store to add the name, username, admin, _id, favorites
      return Promise.all([
        dispatch(actions.selectUser(userData)),
        snackbar.openLoggedInSnackbar(dispatch)])
          .then(() => {
            if (window.location.hash === '#/main/results') {
              return Promise.all([reloadResources(search, dispatch)])
              .then(() => {
                //
              })
              .catch((err) => {
                console.error(err);
              });
            }
          });
    })
    .catch((err) => {
      console.error(err);
    });
};

// open signup popup
export const handleSignUpOpen = (dispatch) => {
  dispatch(actions.signUpDialog({ signup: true }));
};

// close signup popup
export const handleSignUpClose = (dispatch) => {
  dispatch(actions.signUpDialog({ signup: false }));
};

// handle request to create new account
export const signup = (e, user, dispatch) => {
  e.preventDefault();
  handleSignUpClose(dispatch);
  axios.post('/auth/signup', user)
    .then((response) => {
      const newUser = response.data;
      // change the store to add the name, username, admin, _id, favorites
      dispatch(actions.selectUser(newUser));
      hashHistory.push('/main');
    })
    .catch((err) => {
      console.error(err);
    });
};

// destroy session and remove user from store
export const logout = (dispatch) => {
  axios.post('/auth/logout')
  .then(() => {
    hashHistory.push('/');
    dispatch(actions.logout());
    snackbar.openLoggedOutSnackbar(dispatch);
  })
  .catch((err) => {
    console.log(err);
  });
};

export const findUser = (user, dispatch) => {
  axios.get('/profile/user')
  .then((response) => {
    console.log(response)
    if (response.data) {
      dispatch(actions.selectUser(response.data));
    } else {
      dispatch(actions.clearUser());
    }
    dispatch(actions.checkAuth({ checkingAuth: false }));
  })
  .catch(() => {
    dispatch(actions.checkAuth({ checkingAuth: false }));
  });
};
