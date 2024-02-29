import React from 'react';

import Authentication from './component/Authentication/Authentication';
import { useSelector } from 'react-redux';
import { RootState } from './util/Interface/type';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Dashboard from './component/Dashboard/Dashboard';
import Dahsboard from './pages/Dahsboard';



function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'auth',
          element: <Authentication/>,
        },
        {
          path: 'dashboard',
          element: <Dahsboard/>,
        },
      ],
    },
  ]);

  

  return (
    <>
    <h1>learn react</h1>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
