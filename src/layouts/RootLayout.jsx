/* eslint-disable no-unused-vars */
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Drawer,
  IconButton,
} from "@material-tailwind/react";
import Cookies from "js-cookie";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo_vang.png";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { KEY } from "../constants";
import { setLoginState } from "../store/slices/loginStateSlice";
import { coursesRoute, informationRoute } from "../utils/routes";

function RootLayout(props) {
  const [openNav, setOpenNav] = React.useState(false);
  const [open, setOpen] = React.useState(1);
  const [openInfo, setOpenInfo] = React.useState(1);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setLoginState(Boolean(Cookies.get(KEY.ACCESS_TOKEN))));
  }, [dispatch]);

  const handleOpenProduct = (value) => setOpen(open === value ? 0 : value);
  const handleOpenInfo = (value) => setOpenInfo(openInfo === value ? 0 : value);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const handleOpen = () => setOpenNav(true);
  const handleClose = () => setOpenNav(false);

  return (
    <div className="w-screen h-screen max-w-screen overflow-y-scroll scroll-smooth overflow-x-hidden">
      <Header onOpen={handleOpen} />
      <Outlet />
      <Footer />
      <React.Fragment>
        <Drawer
          placement="right"
          open={openNav}
          onClose={handleClose}
          className="p-4 bg-custom-green"
        >
          <div className="mb-6 flex items-center justify-between">
            <a href="/">
              <img
                className="w-28 h-auto object-cover object-center"
                src={logo}
                alt="nature image"
              />
            </a>
            <IconButton variant="text" color="blue-gray" onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div className="flex flex-col gap-y-2 mt-8">
            <Accordion open={openInfo === 0}>
              <AccordionHeader
                onClick={() => handleOpenInfo(1)}
                className="py-0 text-base hover:text-white text-white border-none"
              >
                <p className="capitalize text-white text-base font-semibold">
                  Giới thiệu
                </p>
              </AccordionHeader>
              <AccordionBody>
                <ul className="ps-4 list-none list-inside">
                  {informationRoute.map((val, index) => {
                    return (
                      <li
                        key={index}
                        className="capitalize text-white text-base font-semibold underline"
                      >
                        <a href={val.path}>{val.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 0}>
              <AccordionHeader
                onClick={() => handleOpenProduct(1)}
                className="py-0 text-base hover:text-white text-white border-none"
              >
                <p className="capitalize text-white text-base font-semibold">
                  Sản phẩm
                </p>
              </AccordionHeader>
              <AccordionBody>
                <ul className="ps-4 list-none list-inside">
                  {coursesRoute.map((val, index) => {
                    return (
                      <li
                        key={index}
                        className="capitalize text-white text-base font-semibold underline"
                      >
                        <a href={val.path}>{val.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </AccordionBody>
            </Accordion>

            <p className="capitalize text-white text-base font-semibold">
              <NavLink href="#" className="flex items-center">
                Bài viết
              </NavLink>
            </p>
            <p className="capitalize text-white text-base font-semibold">
              <NavLink href="#" className="flex items-center">
                Liên hệ
              </NavLink>
            </p>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default RootLayout;
