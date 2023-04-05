import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './routes/Home'
import Pedido from './routes/pedido'
import Sobre from './routes/Sobre'
import Review from './routes/review'
import Menu from './routes/menu'
import Equipe from './routes/Equipe'
import Galeria from './routes/galeria'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'; 

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Sobre",
        element: <Sobre />,
      },
      {
        path: "/Resenha",
        element: <Review />,
      },
      {
        path: "/Menu",
        element: <Menu />,
      },
      {
        path: "/Equipe",
        element: <Equipe />,
      },
      {
        path: "/Pedido",
        element: <Pedido />,
      },
      {
        path: "/Galeria",
        element: <Galeria />,
      },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
