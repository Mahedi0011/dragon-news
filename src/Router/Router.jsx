
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Components/Root/Root";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import News from "../Components/Home/NewsCard/News/News";
import PrivateRoute from "../Components/Pages/PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/news.json')
      },
      {
        path: '/news/:id',
        element: <PrivateRoute><News></News></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },

]);

export default router;