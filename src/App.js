import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Services from './Pages/AllServices/Services/Services';
import Home from './Pages/Home/Home/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          
        },
        {
          path: '/services',
          element: <Services></Services>,
          loader: () => fetch('http://localhost:5000/services')

        }
        // {
        //   path: '/',
        //   element: <ServicesArea></ServicesArea>,
        //   loader: () => fetch('http://localhost:5000/services')
        // }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
