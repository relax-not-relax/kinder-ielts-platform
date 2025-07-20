import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ROUTE_PAGE } from "./constants";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ArticleBlogPage from "./pages/article/ArticleBlogPage";
import ArticleDetail from "./pages/article/ArticleDetail";
import ArticleInsightsPage from "./pages/article/ArticleInsightsPage";
import ArticleMaterialPage from "./pages/article/ArticleMaterialPage";
import ArticlePage from "./pages/article/ArticlePage";
import ElearningGrading from "./pages/course/ElearningGrading";
import MyCourse from "./pages/course/MyCourse";
import AboutKinderIelts from "./pages/information/AboutKinderIelts";
import TeamStudentsPage from "./pages/information/TeamStudentsPage";

function App() {
  const articleRoute = (
    <Route path={ROUTE_PAGE.ARTICLE_PAGE}>
      <Route index element={<ArticlePage />} />
      <Route
        path={ROUTE_PAGE.ARTICLE_BLOG_PAGE}
        element={<ArticleBlogPage />}
      />
      <Route
        path={ROUTE_PAGE.ARTICLE_INSIGHTS_PAGE}
        element={<ArticleInsightsPage />}
      />
      <Route
        path={ROUTE_PAGE.ARTICLE_SELF_STUDY_MATERIAL_PAGE}
        element={<ArticleMaterialPage />}
      />
      <Route path={ROUTE_PAGE.ARTICLE_DETAIL} element={<ArticleDetail />} />
    </Route>
  );
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path={ROUTE_PAGE.MY_CLASS_PAGE} element={<MyCourse />} />
        <Route path={ROUTE_PAGE.HOMEWORK_PAGE} element={<ElearningGrading />} />
        <Route path={ROUTE_PAGE.ABOUT_PAGE} element={<AboutKinderIelts />} />
        <Route
          path={ROUTE_PAGE.TEAM_STUDENTS_PAGE}
          element={<TeamStudentsPage />}
        />
        {articleRoute}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
