import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import MyCourse from "./pages/course/MyCourse";
import ElearningGrading from "./pages/course/ElearningGrading";
import AboutKinderIelts from "./pages/information/AboutKinderIelts";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="my-class/:id" element={<MyCourse />} />
        <Route path="homework/:id" element={<ElearningGrading />} />
        <Route path="about" element={<AboutKinderIelts />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
