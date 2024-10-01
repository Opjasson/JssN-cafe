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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
