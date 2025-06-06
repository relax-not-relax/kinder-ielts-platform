import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ROUTE_PAGE } from "./constants";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ArticlePage from "./pages/article/ArticlePage";
import ElearningGrading from "./pages/course/ElearningGrading";
import MyCourse from "./pages/course/MyCourse";
import AboutKinderIelts from "./pages/information/AboutKinderIelts";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path={ROUTE_PAGE.MY_CLASS_PAGE} element={<MyCourse />} />
        <Route path={ROUTE_PAGE.HOMEWORK_PAGE} element={<ElearningGrading />} />
        <Route path={ROUTE_PAGE.ABOUT_PAGE} element={<AboutKinderIelts />} />
        <Route path={ROUTE_PAGE.ARTICLE_PAGE} element={<ArticlePage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
