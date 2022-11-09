import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import ServicesArea from './Pages/Home/ServicesArea/ServicesArea';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <ServicesArea></ServicesArea>,
          loader: () => fetch('http://localhost:5000/services')
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
