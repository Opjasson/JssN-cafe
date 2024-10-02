import { StrictMode } from 'react'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import Room from './pages/Room.jsx';
import Gallery from './pages/Gallery.jsx';
import Findus from './pages/Findus.jsx';
import Promo from './pages/Promo.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element: <Home />
  },
  {
    path : "/menu",
    element : <Menu />
  },
  {
    path : "/room",
    element : <Room />
  },
  {
    path : "/gallery",
    element : <Gallery />
  },
  {
    path : "/findus",
    element : <Findus />
  },
  {
    path : "/promo",
    element : <Promo />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
