import { createStore, compose, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
// 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.
import { routerMiddleware } from "react-router-redux";

import firebase from 'firebase';
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";

import rootReducer from "../reducers";


export const history = createHistory();

//FIREBASE THINGS

const firebaseConfig = {
  apiKey: "AIzaSyD4jyOvcdbM12Xjdoyh2UCoVyGk9yIXT2c",
  authDomain: "syllabi-7f3d5.firebaseapp.com",
  databaseURL: "https://syllabi-7f3d5.firebaseio.com",
  projectId: "syllabi-7f3d5",
  storageBucket: "syllabi-7f3d5.appspot.com",
  messagingSenderId: "148214861164"
}

//react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)


/*

PRODUCTION STORE

*/

function configureStoreProd(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
    reactRouterMiddleware
  ];

  return createStore(
    rootReducer,
    initialState,
    compose(
      //firebase as first argument
      reactReduxFirebase(firebase, rrfConfig),
      applyMiddleware(...middlewares)
    )
  );
}

/*

DEV STORE

*/

function configureStoreDev(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
    reactRouterMiddleware
  ];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      // firebase as first argument
      reactReduxFirebase(firebase, rrfConfig),
      applyMiddleware(...middlewares)
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextReducer = require("../reducers").default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  store.subscribe(() => {
    console.log("store changed", store.getState());
  });

  return store;
}

const configureStore =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
