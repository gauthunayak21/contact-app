import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Outlet, RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import ContactList from './components/ContactList';
import { Provider } from 'react-redux';
import appStore from './store';
import api from './utils/jwtInterceptor'
import AddContact from './components/AddContact';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/contacts',
    element: <ContactList />
  },
  {
    path: '/addContact',
    element: <AddContact />
  }
]);

root.render(
  <Provider store={appStore}>
  <RouterProvider router={router}>
      <React.StrictMode>
      <Outlet />
    </React.StrictMode>
  </RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
