/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import logo from "../../assets/logo_vang.png";
import ava from "../../assets/ava_place.png";
import { Link, NavLink } from "react-router-dom";

Header.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

function Header({ onOpen }) {
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 capitalize text-white xl:text-lg lg:text-base font-semibold"
      >
        <NavLink href="#" className="flex items-center">
          Giới thiệu
        </NavLink>
      </Typography>
      <Menu allowHover>
        <MenuHandler>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 capitalize text-white xl:text-lg lg:text-base font-semibold cursor-pointer"
          >
            Sản phẩm
          </Typography>
        </MenuHandler>
        <MenuList className="p-0 bg-custom-green border-0 rounded-none">
          {["khoá học", "khoá học video", "tài liệu"].map((val, index) => {
            const className = `py-4 px-5 rounded-none text-white ${
              index === 2 ? "" : "border-b border-white"
            }`;
            return (
              <MenuItem key={index} className={className}>
                <Link className="capitalize xl:text-base lg:text-sm font-semibold">
                  {val}
                </Link>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 capitalize text-white xl:text-lg lg:text-base font-semibold"
      >
        <NavLink href="#" className="flex items-center">
          Bài viết
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 capitalize text-white xl:text-lg lg:text-base font-semibold"
      >
        <NavLink href="#" className="flex items-center">
          Liên hệ
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="sticky top-0 z-10 h-max max-w-full rounded-none lg:px-16 md:px-8 px-4 py-6 bg-custom-green">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link>
          <img
            className="sm:w-32 w-24 h-auto object-cover object-center"
            src={logo}
            alt="nature image"
          />
        </Link>
        <div className="flex items-center gap-6">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-4">
            <Badge content="1" className="bg-yellow text-black font-bold">
              <IconButton variant="text" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="#e8eaed"
                  className="h-6 w-6"
                >
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg>
              </IconButton>
            </Badge>
            <Button className="rounded-full px-4 py-1 bg-yellow">
              <Avatar src={ava} size="sm" />
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={onOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
