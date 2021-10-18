import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './contacts/cotactsSlice';
//import contactsReducer from './contacts/contacts-reducer';

const store = configureStore({
  reducer: {
    //contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);

export default store;

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// //import logger from 'redux-logger';
// import contactsReducer from './contacts/contacts-reducer';

// const myMiddleware = store => next => action => {
//   next(action);
// };

// const middleware = [...getDefaultMiddleware(), myMiddleware];

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   middleware,
// });

// export default store;
