import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
// import App from "../App";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      }
      ,
      {
        path: 'signUp',
        element: <SignUp />

      },
      {
        path: 'checkOut/:id',
        element:<PrivateRoute> <CheckOut /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://car-doctor-server-five-gamma.vercel.app/services/${params.id}`)
      },
      {
        path: '/bookings',
        element: <PrivateRoute> <Bookings /></PrivateRoute>
      },

    ]
  },
]);



export default router;