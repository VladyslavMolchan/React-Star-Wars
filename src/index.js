import React from 'react';
import ReactDOM from 'react-dom/client';

import '@styles/index.css';
import ThemeProvaider from "@context/ThemeProvaider";
import App from '@containers/App/App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom";

import store from "./store/store";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <ThemeProvaider>
                  <App />
              </ThemeProvaider>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>

);

reportWebVitals();
