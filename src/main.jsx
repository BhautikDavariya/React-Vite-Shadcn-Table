import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { Toaster } from "@/components/ui/toaster"
import { Toaster } from "@/components/ui/sonner"
// store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';

// Import redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './store/reducer';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Configure redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Create the persisted store
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
