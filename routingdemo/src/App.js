import './App.css';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Technologies from './components/Technologies';
import Angular from './components/Angular';
import ReactChild from './components/ReactChild';
import Vue from './components/Vue';
import RootLayout from './components/RootLayout';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/signup",
          element:<Signup />
        },
        {
          path:"/signin",
          element:<Signin />
        },
        {
          path:"/technologies/:id",
          element:<Technologies />,
          children:[
            {path:"React",
            element:<ReactChild/>},
            {
              path:"angular",
              element:<Angular />
            },
            {
              path:"vue",
              element:<Vue />
            }
          ]
        }
      ]
    }
  ])

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
