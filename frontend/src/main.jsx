import { StrictMode } from 'react'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element: <Home />
  },
  {
    path : "/menu",
    element : <Menu />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
