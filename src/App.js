import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Services from './Pages/AllServices/Services/Services';
import Blog from './Pages/Blog/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import MyReviews from './Pages/MyReviews/MyReviews';
import SingleService from './Pages/ServiceDetails/SingleService/SingleService';
import SignUp from './Pages/SignUp/SignUp/SignUp';

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
          loader: () => fetch('http://localhost:5000/allservices')

        },
        {
          path: '/allservices/:id',
          element: <SingleService></SingleService>,
          loader: ({params}) => fetch(`http://localhost:5000/allservices/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/myReview',
          element: <MyReviews></MyReviews>
        }
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
