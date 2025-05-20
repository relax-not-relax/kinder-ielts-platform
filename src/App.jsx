import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ROUTE_PAGE } from "./constants";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ElearningGrading from "./pages/course/ElearningGrading";
import MyCourse from "./pages/course/MyCourse";
import AboutKinderIelts from "./pages/information/AboutKinderIelts";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="my-class/:id" element={<MyCourse />} />
        <Route path="homework/:id" element={<ElearningGrading />} />
        <Route path={ROUTE_PAGE.ABOUT_PAGE} element={<AboutKinderIelts />} />
        <Route
          path={ROUTE_PAGE.ARTICLE_PAGE}
          element={
            <div>
              <p>Article Page</p>
            </div>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
