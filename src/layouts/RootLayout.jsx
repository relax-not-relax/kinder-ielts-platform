/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/header/Header";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import logo from "../assets/logo_vang.png";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setLoginState } from "../store/slices/loginStateSlice";

function RootLayout(props) {
  const [openNav, setOpenNav] = React.useState(false);
  const [open, setOpen] = React.useState(1);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setLoginState(Boolean(Cookies.get("accessTokenKinderWeb"))));
  }, [dispatch]);

  const handleOpenProduct = (value) => setOpen(open === value ? 0 : value);

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
            <Link>
              <img
                className="w-28 h-auto object-cover object-center"
                src={logo}
                alt="nature image"
              />
            </Link>
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
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="capitalize text-white text-base font-semibold"
            >
              <NavLink href="#" className="flex items-center">
                Giới thiệu
              </NavLink>
            </Typography>
            <Accordion open={open === 1}>
              <AccordionHeader
                onClick={() => handleOpenProduct(1)}
                className="py-0 text-base hover:text-white text-white border-none"
              >
                Sản phẩm
              </AccordionHeader>
              <AccordionBody>
                <ul className="ps-4 list-disc list-inside">
                  {["khoá học", "khoá học video", "tài liệu"].map(
                    (val, index) => {
                      return (
                        <Typography
                          key={index}
                          as="li"
                          variant="small"
                          color="blue-gray"
                          className="capitalize text-white text-base font-semibold underline"
                        >
                          <NavLink href="#" className="flex items-center">
                            {val}
                          </NavLink>
                        </Typography>
                      );
                    }
                  )}
                </ul>
              </AccordionBody>
            </Accordion>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="capitalize text-white text-base font-semibold"
            >
              <NavLink href="#" className="flex items-center">
                Bài viết
              </NavLink>
            </Typography>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="capitalize text-white text-base font-semibold"
            >
              <NavLink href="#" className="flex items-center">
                Liên hệ
              </NavLink>
            </Typography>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default RootLayout;
