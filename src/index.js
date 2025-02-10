import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Map from './Pages/Map';
import Zus from './Pages/Zus';
import Pandas from './Components/Pandas';
import Eagles from './Components/Eagles';
import Crokadilas from './Components/Crokadilas';
import Garillas from './Components/Garillas';
const root = ReactDOM.createRoot(document.getElementById('root'));
const myRouter =createBrowserRouter([{
  errorElement:<Error/>,
element:<App/>,
path:'/',
children:[
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/map',
    element:<Map/>
  },
  {
    path:'/zoos',
    element:<Zus/>
  },
  {
    path:'/pandas',
    element:<Pandas/>
  },
  {
    path:'/eagles',
    element:<Eagles/>
  },
  {
    path:'/garillas',
    element:<Crokadilas/>
  },
  {
    path:'/crocadilis',
    element:<Garillas/>
  },
]
}])
root.render(
  <React.StrictMode>
  <RouterProvider router={myRouter} />
  </React.StrictMode>
);

