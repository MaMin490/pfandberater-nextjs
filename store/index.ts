import { useMemo } from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

let store: Store;

const exampleState = {};

function initStore(initialState = exampleState): Store<unknown> {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}

export const initializeStore = (preloadedState: typeof exampleState): Store<unknown> => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    store = undefined;
  }

  if (typeof window === 'undefined') return _store;

  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: typeof exampleState): Store<unknown> {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
