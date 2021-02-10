/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import Home from './app/containers/Home';
import mockMovies from './app/mockMovies';

console.log('App.js called ----');

function addMovies(state, movies) {
  console.log('App.js addMovies  called ----', state, movies);
  return {...state, movies};
  // return movies.map((movie) => ({
  //   Title: movie.Title,
  //   Poster: movie.Poster,
  //   imdbID: movie.imdbID,
  // }));
}

//reducer -- way to change store
function movieReducer(
  // state = mockMovies.Search, //setting the initial value
  state = [], //setting the initial value
  action,
) {
  console.log('App.js  movieReducer  called ----', state, action);
  switch (action.type) {
    case 'ADD_MOVIES':
      return addMovies(state, action.payload);
    default:
      return state;
  }
}

function addPosts(state, {posts}) {
  console.log('App.js posts  called ----');
  return posts;
}

function postReducer(state = [], action) {
  console.log('App.js  postReducer  called ----');

  switch (action.type) {
    case 'ADD_POSTS':
      return addPosts(state, action.payload);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  movieReducer,
  // postReducer,
});

console.log('App.js  createStore  called ----');
//store-- single source of truth
const store = createStore(rootReducer);
console.log('store -- ', store.getState());

console.log('App.js  default  called ----');
export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

console.log('App.js  end called ----');
