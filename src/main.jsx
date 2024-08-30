import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blogs from './Pages/Blogs.jsx'
import Layout from './Pages/Layout.jsx'
import Story from './Pages/Story.jsx'
import AddStory from './Pages/AddStory.jsx'
import EditStory from './Pages/EditStory.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Blogs />,
      },
      {
        path: "/:id",
        element: <Story />,
      },
      {
        path: "/add",
        element: <AddStory />,
      },
      {
        path: "/edit/:id",
        element: <EditStory />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)
