import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ErrorPage from './screens/Error';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoute from './components/PrivateRoute';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminRoute from './components/AdminRoute';
import OrderListScreen from './screens/admin/OrderListScreen';
import UserListScreen from './screens/admin/UserListScreen';
import ProductListScreen from './screens/admin/ProductListScreen';
import ProductEditScreen from './screens/admin/ProductEditScreen';
import UserEditScreen from './screens/admin/UserEditScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: 'search/:keyword',
        element: <HomeScreen />,
      },
      {
        path: 'page/:pageNumber',
        element: <HomeScreen />,
      },
      {
        path: 'search/:keyword/page/:pageNumber',
        element: <HomeScreen />,
      },
      {
        path: 'product/:id',
        element: <ProductScreen />,
      },
      {
        path: 'cart',
        element: <CartScreen />,
      },
      {
        path: 'login',
        element: <LoginScreen />,
      },
      {
        path: 'register',
        element: <RegisterScreen />,
      },
      {
        path: '',
        element: <PrivateRoute />,
        children: [
          {
            path: 'shipping',
            element: <ShippingScreen />,
          },
          {
            path: 'payment',
            element: <PaymentScreen />,
          },
          {
            path: 'placeorder',
            element: <PlaceOrderScreen />,
          },
          {
            path: 'profile',
            element: <ProfileScreen />,
          },

          {
            path: 'order/:id',
            element: <OrderScreen />,
          },
        ],
      },
      {
        path: 'admin',
        element: <AdminRoute />,
        children: [
          {
            path: 'orderlist',
            element: <OrderListScreen />,
          },
          {
            path: 'userlist',
            element: <UserListScreen />,
          },

          {
            path: 'productlist',
            element: <ProductListScreen />,
          },

          {
            path: 'productlist/page/:pageNumber',
            element: <ProductListScreen />,
          },

          {
            path: 'product/:id/edit',
            element: <ProductEditScreen />,
          },
          {
            path: 'user/:id/edit',
            element: <UserEditScreen />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
