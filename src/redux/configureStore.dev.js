import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import  { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import logger from 'redux-logger';

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
 const persistConfig = {
   key: 'root',
   storage,
   stateReconciler: autoMergeLevel2
 }
 const persistedReducer = persistReducer(persistConfig,rootReducer);
  return createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(logger , thunk, reduxImmutableStateInvariant()))
  );
}
