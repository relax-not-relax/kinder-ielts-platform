import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import MyCourse from "./pages/course/MyCourse";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={< RootLayout />}>
        <Route index element={< Home />} />
        <Route path="my-course/:id" element={< MyCourse />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
