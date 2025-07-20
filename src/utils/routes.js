import { ROUTE_PAGE } from "../constants";

export const coursesRoute = [
  {
    name: "khoá học",
    path: ROUTE_PAGE.COURSES_PAGE,
  },
  {
    name: "khoá học video",
    path: ROUTE_PAGE.COURSES_VIDEO_PAGE,
  },
  {
    name: "tài liệu",
    path: ROUTE_PAGE.COURSES_DOCUMENT_PAGE,
  },
];

export const articleRoute = [
  {
    name: "Bài viết",
    path: ROUTE_PAGE.ARTICLE_PAGE,
  },
  {
    name: "Bài viết INSIGHTS",
    path: `${ROUTE_PAGE.ARTICLE_PAGE}/${ROUTE_PAGE.ARTICLE_INSIGHTS_PAGE}`,
  },
  {
    name: "Bài viết BLOG",
    path: `${ROUTE_PAGE.ARTICLE_PAGE}/${ROUTE_PAGE.ARTICLE_BLOG_PAGE}`,
  },
  {
    name: "Bài viết tài liệu tự học",
    path: `${ROUTE_PAGE.ARTICLE_PAGE}/${ROUTE_PAGE.ARTICLE_SELF_STUDY_MATERIAL_PAGE}`,
  },
  {
    name: "Chi tiết bài viết",
    path: `${ROUTE_PAGE.ARTICLE_PAGE}/${ROUTE_PAGE.ARTICLE_DETAIL}`,
  },
];

export const informationRoute = [
  {
    name: "Về Kinder IELTS",
    path: ROUTE_PAGE.ABOUT_PAGE,
  },
  {
    name: "Đội ngũ và học viên",
    path: ROUTE_PAGE.TEAM_STUDENTS_PAGE,
  },
];
